import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const CONTENT_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors`
const SUBSCRIPTIONS_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors/subscriptions`

const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class ContentStore {
  contents = [] // all contents
  content = [] // single content
  isCreatingContent = false
  isLoadingContents = false

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
    this.isCreatingContent = true

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
      .then(() => {
        this.isCreatingContent = false

        if (contentImage) {
          const formData = new FormData()
          formData.append('file', contentImage)

          Axios.post(`${CONTENT_ENDPOINT}/addfile`, formData, {
            headers: { 'x-auth-token': token, 'Content-Type': 'mulipart/formdata' }
          }).catch(e => console.log(e))
        }

        navigate('/contents')
      })
      .catch(e => console.log(e))
  }

  updateContent = (id, newData) => {}

  @observable contentSubscribers = []
  @observable isLoading = false

  @action subscribeToContent = userId => {}

  @action userSubscribedContent = userId => {
    this.isLoading = true
    Axios.get(`${SUBSCRIPTIONS_ENDPOINT}/${userId}/subscribed-courses`)
      .then(res => {
        this.isLoading = false
        console.log(res)
      })
      .catch(e => {
        this.isLoading = false
        console.log(e, 'error from ')
      })
  }

  @action
  addContentFile = (id, contentFile) => {
    this.isLoading = true
    const contentfile = new FormData()
    contentfile.append('file', contentFile)

    Axios.post(`${CONTENT_ENDPOINT}/content/${id}/addfile`, contentfile, {
      headers: { 'x-auth-token': token, 'Content-Type': 'multipart/formdata' }
    })
      .then(res => {
        this.isLoading = false
      })
      .catch(e => {
        this.isLoading = false

        console.log(e, 'error from content files')
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
        console.log(`get files error : ${e}`)
        this.isLoadingContents = false
      })
  }

  getUserContents = id => {
    this.isLoadingContents = true
    Axios.get(`${CONTENT_ENDPOINT}/${id}/contents/find`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.isLoadingContents = false

        this.contents = res.data.contents
      })
      .catch(e => {
        this.isLoadingContents = false

        console.log(e)
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

        console.log(e)
      })
  }

  deleteContent = id => {
    Axios.delete(`${CONTENT_ENDPOINT}/${localStorage.getItem('userId')}/${id}/delete`, {
      headers: { 'x-auth-token': token }
    })
      .then(res => console.log(res))
      .catch(e => console.log(e))
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
