import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const Article_ENDPOINT = `${process.env.REACT_APP_API_URL}/vendors`

class ContentStore {
  contents = []
  isCreatingContent = false

  fetchContents = () => {}

  createContent = (contentName, contentDescription, contentPrice, contentType) => {
    this.isCreatingContent = true

    const id = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

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

  //actions
  fetchContents: action,
  createContent: action,
  updateContent: action,
  deleteContent: action
})

const store = new DecoratedContentStore()

export default store
