import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'
import * as Sentry from '@sentry/react'

const CONTENT_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors`
const SUBSCRIPTIONS_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors/subscriptions`

const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class ContentStore {
  contents = [] // all contents
  content = [] // single content
  isCreatingContent = false
  isLoadingContents = false

  @observable contentSubscribers = []
  @observable isLoading = false

  fetchContents = () => {
    this.isLoadingContents = true
    Axios.get(`${CONTENT_ENDPOINT}/contents/find/all`, { headers: { 'x-auth-token': token } })
      .then(res => {
        this.isLoadingContents = false
        this.contents = res.data.contents
      })
      .catch(e => console.log(`error : ${e}`))
  }

  createContent = (contentName, contentDescription, contentPrice, contentType, contentImage) => {
    this.isLoading = true

    Axios.post(
      `${CONTENT_ENDPOINT}/${id}/addContent`,
      {
        title: contentName,
        descrp: contentDescription,
        price: contentPrice,
        type: contentType,
        file: contentImage
      },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
      .then(result => {
        if (contentImage) {
          const { _id } = result.data.content

          const formData = new FormData()
          formData.append('file', contentImage)

          Axios.put(`${CONTENT_ENDPOINT}/${id}/${_id}/img`, formData, {
            headers: { 'x-auth-token': token, 'Content-Type': 'mulipart/formdata' }
          })
            .then(() => {
              this.isLoading = false

              navigate('/contents')
            })
            .catch(e => Sentry.captureException(e))
        }

        this.isLoading = false
        navigate('/contents')
      })
      .catch(e => {
        this.isLoading = false
        Sentry.captureException(e)
      })
  }

  updateContent = (contentId, title, description) => {
    this.isLoading = true
    Axios.post(
      `${CONTENT_ENDPOINT}/${id}/${contentId}/update`,
      { title, description },
      { headers: { 'x-auth-token': token } }
    )
      .then(response => {
        this.isLoading = false

        this.content = response.data.content
      })
      .catch(e => {
        this.isLoading = false

        Sentry.captureException(e)
      })
  }

  @action subscribeToContent = userId => {}

  @observable
  isCreatingContentFile = false

  @action userSubscribedContent = userId => {
    this.isLoading = true
    Axios.get(`${SUBSCRIPTIONS_ENDPOINT}/${userId}/subscribed-courses`)
      .then(res => {
        this.isLoading = false
      })
      .catch(e => {
        this.isLoading = false
        Sentry.captureException(e)
      })
  }

  @action
  addContentFile = (id, contentFile) => {
    this.isLoading = true
    this.isCreatingContentFile = true
    const contentfile = new FormData()
    contentfile.append('file', contentFile)

    Axios.post(`${CONTENT_ENDPOINT}/content/${id}/addfile`, contentfile, {
      headers: { 'x-auth-token': token, 'Content-Type': 'multipart/formdata' }
    })
      .then(res => {
        this.isCreatingContentFile = false
        this.isLoading = false
      })
      .catch(e => {
        this.isLoading = false
        Sentry.captureException(e)
      })
  }

  @observable contentFiles = []
  @action getContentFiles = id => {
    this.isLoadingContents = true
    Axios.get(`${CONTENT_ENDPOINT}/contents/${id}/find-files`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.isLoadingContents = false
        this.contentFiles = res.data.contentfiles
      })
      .catch(e => {
        Sentry.captureException(e)
        this.isLoadingContents = false
      })
  }

  getUserContents = id => {
    this.isLoadingContents = true
    Axios.get(`${CONTENT_ENDPOINT}/${localStorage.getItem('userId')}/contents/find`, {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    })
      .then(res => {
        this.isLoadingContents = false

        this.contents = res.data.contents
      })
      .catch(e => {
        this.isLoadingContents = false

        Sentry.captureException(e)
      })
  }

  getContent = contentId => {
    this.isLoadingContents = true
    Axios.get(`${CONTENT_ENDPOINT}/${id}/${contentId}/find`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.isLoadingContents = false

        this.content = res.data.content
      })
      .catch(e => {
        this.isLoadingContents = false

        Sentry.captureException(e)
      })
  }

  deleteContent = id => {
    Axios.delete(`${CONTENT_ENDPOINT}/${localStorage.getItem('userId')}/${id}/delete`, {
      headers: { 'x-auth-token': token }
    })
      .then(res => console.log(res))
      .catch(e => Sentry.captureException(e))
  }

  @observable
  contentDeleted = false

  @action
  deleteContentFile = contentId => {
    console.log(contentId, 'id')
    this.isLoading = true

    Axios.delete(`${CONTENT_ENDPOINT}/${contentId}/delete-file`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(() => {
        this.contentDeleted = true

        setTimeout(() => (this.contentDeleted = false), 3000)
      })
      .catch(e => {
        Sentry.captureException(e)
        this.isLoading = false
      })
  }
}

const DecoratedContentStore = decorate(ContentStore, {
  //observables
  contents: observable,
  content: observable,
  isCreatingContent: observable,
  isLoadingContents: observable,

  //actions
  getContent: action,
  fetchContents: action,
  getUserContents: action,
  createContent: action,
  updateContent: action,
  deleteContent: action
})

const store = new DecoratedContentStore()

export default store
