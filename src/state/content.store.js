import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const Article_ENDPOINT = `${process.env.REACT_APP_API_URL}/vendors`
const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class ContentStore {
  contents = [] // all contents
  content = [] // single content
  isCreatingContent = false
  isLoadingContents = false

  fetchContents = () => {
    this.isLoadingContents = true
    let resData = []

    Axios.get(`${Article_ENDPOINT}/contents/find/all`, { headers: { 'x-auth-token': token } })
      .then(res => {
        this.isLoadingContents = false

        resData.push(res.data.contents)
      })
      .catch(e => console.log(`error : ${e}`))

    return resData
  }

  createContent = (contentName, contentDescription, contentPrice, contentType, contentImage) => {
    this.isCreatingContent = true
    Axios.post(
      `${Article_ENDPOINT}/${id}/addContent`,
      //  contentImage,
      {
        title: contentName,
        descrp: contentDescription,
        price: contentPrice,
        type: contentType
      },
      {
        headers: {
          'x-auth-token': token
          // 'Content-type': 'multipart/form-data'
        }
      }
    )
      .then(res => {
        this.isCreatingContent = false
        navigate('/contents')
      })
      .catch(e => console.log(e))
  }

  updateContent = (id, newData) => {}

  getUserContents = () => {
    Axios.get(`${Article_ENDPOINT}/${id}/contents/find`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.contents = res.data.contents
      })
      .catch(e => console.log(e))
  }

  getContent = contentId => {
    Axios.get(`${Article_ENDPOINT}/${id}/${contentId}/find`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.content = res.data.content
        // console.log(res.data.content , "conetn")
      })
      .catch(e => {
        console.log(e)
      })
  }

  deleteContent = id => {}
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
