import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const Article_ENDPOINT = `${process.env.REACT_APP_API_URL}/vendors`
const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class ContentStore {
  // contents = []
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

  createContent = (contentName, contentDescription, contentPrice, contentType) => {
    this.isCreatingContent = true

    Axios.post(
      `${Article_ENDPOINT}/${id}/addContent`,
      {
        method: 'POST',
        data: {
          title: contentName,
          descrp: contentDescription,
          price: contentPrice,
          type: contentType
        }
      },
      { headers: { 'x-auth-token': token } }
    )
      .then(res => {
        // append `res` to contents for local updating of the content like `apollo ui optimistic Update`
        this.isCreatingContent = false
        navigate('/contents')
      })
      .catch(e => console.log(e))
  }

  updateContent = (id, newData) => {}

  deleteContent = id => {}
}

const DecoratedContentStore = decorate(ContentStore, {
  //observables
  contents: observable,
  isCreatingContent: observable,
  isLoadingContents: observable,

  //actions
  fetchContents: action,
  createContent: action,
  updateContent: action,
  deleteContent: action
})

const store = new DecoratedContentStore()

export default store
