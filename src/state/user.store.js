import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { create, persist } from 'mobx-persist'
import { navigate } from '@reach/router'
import localforage from 'localforage'
import * as Sentry from '@sentry/react'

const AUTH_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors`
const EMAIL_ENDPOINT = process.env.REACT_APP_EMAIL_ENDPOINT

const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class UserStore {
  // USER DETAILS =============>
  hasLoginError = false
  isLoading = false
  users = []
  @observable isUpdated = false

  userDetail = []
  // =============>

  // AUTH & ACCOUNT ACTIONS
  @action setAuthState = state => {
    if (state === null) console.log('missing auth state')

    localforage.setItem('newUser', false)

    if (state) {
      localforage.setItem('isAuthenticated', state)
    } else {
      localforage
        .setItem('isAuthenticated', state)
        .then(_ => {
          localStorage.clear()

          navigate('/login')
        })
        .catch(e => {
          Sentry.captureException(e, 'error from setting auth state')
        })
    }
  }

  @action
  saveUserSurvey = data => {
    this.isLoading = true
    Axios.post(
      `${AUTH_ENDPOINT}/${id}/interview`,
      { data },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
      .then(res => {
        this.isLoading = true

        setTimeout(() => (this.isLoading = false), 3000)

        console.log(res)
      })
      .catch(e => Sentry.captureException(e, 'error setting user survey'))
  }

  @action
  handlePasswordReset = Email => {
    Axios.post('', Email)
      .then(() => {})
      .catch(e => Sentry.captureException(e))
  }

  setLoginError = val => {
    this.hasLoginError = val
  }

  updateUser = (userName, userEmail, Bio, Number, Occupation, Education, userImage) => {
    this.isLoading = true
    Axios.put(
      `${AUTH_ENDPOINT}/${id}`,
      {
        fullname: userName,
        bio: Bio,
        cell_no: Number,
        email: userEmail,
        hle: Education,
        occupation: Occupation
      },
      {
        headers: { 'x-auth-token': token }
      }
    )
      .then(res => {
        this.userDetail = res.data

        if (userImage) {
          const formData = new FormData()
          formData.append('file', userImage)
          Axios.put(`${AUTH_ENDPOINT}/${id}/img`, formData, {
            headers: { 'x-auth-token': token, 'Content-Type': 'multipart/formdata' }
          })
            .then(() => {
              setTimeout(() => {
                this.isLoading = false

                navigate('/console')
              }, 1000)
            })
            .catch(e => Sentry.captureException(e, 'error uploading user image'))
        } else {
          setTimeout(() => {
            this.isLoading = false

            navigate('/console')
          }, 1000)
        }
      })
      .catch(e => {
        this.isLoading = false
        Sentry.captureException(e, "error from updating a user's details")
      })
  }

  //TO GET LOGGED IN USER DETAIL
  getUserDetail = () => {
    this.isLoading = true
    Axios.get(`${AUTH_ENDPOINT}/${localStorage.getItem('userId')}`, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    })
      .then(res => {
        this.userDetail = res.data.vendor
        this.isLoading = false
      })
      .catch(e => {
        console.log('error gtting user detail', e)
        this.isLoading = false
        Sentry.captureException(e, "error from getting user's details")
      })
  }
  // akuf
  // TO GET ANOTHER SPECIFIC USER DETAILS
  @observable user = []
  @action
  getUser = id => {
    this.isLoading = true
    Axios.get(`${AUTH_ENDPOINT}/${id}`, {
      headers: { 'x-auth-token': token }
    })
      .then(res => {
        this.isLoading = false

        this.user = res.data.vendor
      })
      .catch(e => {
        this.isLoading = false

        Sentry.captureException(e, 'error from getting single user')
      })
  }

  @observable
  sentResetLink = false
  @observable
  isSendingResetLink = false

  @action
  forgotPassword = email => {
    this.isSendingResetLink = true

    Axios(`${process.env.REACT_APP_EMAIL_ENDPOINT}`, {
      method: 'POST',
      data: {
        reciever: email,
        type: 'forgot-email'
      }
    })
      .then(() => {
        this.isSendingResetLink = false

        fetch(`${EMAIL_ENDPOINT}?email=${email}&type=forgot-password`)
          .then(res => {})
          .catch(e => {
            Sentry.captureException(e, `error sending welcome-email to ${email} `)
          })

        this.sentResetLink = true
      })
      .catch(e => {
        this.isSendingResetLink = false
        Sentry.captureException(e, 'error sending password reset link')
      })
  }

  authUser = (email, password) => {
    this.isLoading = true

    Axios.post(`${AUTH_ENDPOINT}/login`, {
      email: email,
      password: password
    })
      .then(res => {
        const { vendor, token } = res.data
        // i am only storing in localStorage for test purpose
        // would switch later
        localStorage.setItem('token', token)
        localStorage.setItem('userId', vendor.id)
        this.userId = vendor.id

        this.userDetail = {
          name: vendor.fullname,
          email: vendor.email
        }

        this.isLoading = false
        this.setAuthState(true)
        navigate('console/*')
      })
      .catch(e => {
        this.hasLoginError = !this.hasLoginError
        this.isLoading = false
        Sentry.captureException(e, `error logging in user ${email} `)
      })
  }

  createAccount = (fullname, email, password, confirmPassword, mobileNumber) => {
    this.isLoading = true

    Axios.post(`${AUTH_ENDPOINT}/register`, {
      fullname: fullname,
      email: email,
      password: password,
      passwordCheck: confirmPassword,
      cell_no: mobileNumber
    })
      .then(res => {
        const { _id, email, fullname } = res.data.savedUser

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', _id)
        this.userDetail = {
          name: fullname,
          email: email
        }

        this.isLoading = false
        localforage.setItem('isAuthenticated', true)

        navigate('console/*')

        // TODO: This should be made a POST request
        fetch(`${EMAIL_ENDPOINT}?email=${email}&name=${fullname}&type=welcome`)
          .then(res => {
            console.log(res)
          })
          .catch(e => {
            Sentry.captureException(e, `error sending welcome-email to ${email} `)
          })
      })
      .catch(e => {
        this.isLoading = false
        console.log(e)
        Sentry.captureException(e, `error creating user ${email} `)
      })
  }

  deleteAccount = () => {
    Axios.delete(`${AUTH_ENDPOINT}/${id}`, {
      data: {
        id: localStorage.getItem('userId')
      },
      headers: { 'x-auth-token': localStorage.getItem('token') }
    })
      .then(res => {
        localStorage.clear()
        this.setAuthState(false)

        navigate('/create-account')
      })
      .catch(e => Sentry.captureException(e, `error deleting user ${id} account`))
  }

  // Would contain a filter to filter selected users
  getUsers = () => {
    this.isLoading = true
    Axios.get(`${AUTH_ENDPOINT}`)
      .then(res => {
        this.users = res.data.vendors
        this.isLoading = false
      })
      .catch(e => {
        this.isLoading = false
        Sentry.captureException(e, 'error getting users for booking')
      })
  }

  // USER ACCOUNT SUBSCRIPTIONS =====>
  @observable
  accountIsUpgraded = false

  @action
  subscribeToPlan = (business_name, settlement_bank, account_number, plan_type) => {
    this.isLoading = true
    Axios.post(
      `${AUTH_ENDPOINT}/${id}/sub_account/create`,
      { business_name, settlement_bank, account_number },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
      .then(res => {
        // TODO: B.E doesnt allow me to pass in the subscription plan
        Axios.put(
          plan_type === 'Professional'
            ? `${AUTH_ENDPOINT}/${id}/vendor-role`
            : `${AUTH_ENDPOINT}/${id}/enterprise-role`,
          {},
          { headers: { 'x-auth-token': token } }
        )
          .then(res => {
            this.accountIsUpgraded = true
            this.isLoading = false

            setTimeout(() => {
              this.accountIsUpgraded = false
              navigate('/console/*')
            }, 2000)
          })
          .catch(e => console.log(e))
      })
      .catch(e => {
        this.isLoading = false
      })
  }

  @observable
  showBillingAccountModal = false
  errorCreatingBillingAccount = false

  @action
  closeBillingAccountModal = () => {
    this.showBillingAccountModal = !this.showBillingAccountModal
  }

  @action
  createBillingAccount = (business_name, settlement_bank, account_number) => {
    this.isLoading = true

    Axios.post(
      `${AUTH_ENDPOINT}/${id}/sub_account/create`,
      { business_name, settlement_bank, account_number },
      { headers: { 'x-auth-token': token } }
    )
      .then(response => {
        this.isLoading = false
        this.accountIsUpgraded = true

        setTimeout(() => {
          this.accountIsUpgraded = false

          this.showBillingAccountModal = false
        }, 2000)
      })
      .catch(e => {
        this.errorCreatingBillingAccount = true
        this.isLoading = false

        Sentry.captureException(e, 'error creating billing account')
      })
  }
}

const DecoratedUserStore = decorate(UserStore, {
  //observables
  isLoading: observable,
  errorMessage: observable,
  hasLoginError: observable,
  userDetail: observable,
  users: observable,
  userStats: observable,

  //actions
  setLoginError: action,
  getUserDetail: action,
  authUser: action,
  deleteAccount: action,
  createAccount: action,
  logOut: action,
  updateUser: action,
  getUsers: action
})

export const store = new DecoratedUserStore()
