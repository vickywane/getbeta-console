import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const Article_ENDPOINT = `${process.env.REACT_APP_API_URL}/vendors`

class ContentStore {
  contents = []

  fetchContents = id => {}

  createContent = (courseName, courseDescription, coursePrice, courseDuration, userId) => {
    Axios.post(`${Article_ENDPOINT}/${localStorage.userId}/addContent`, {
      method: 'POST',
      data: {
        title: courseName,
        descrp: courseDescription,
        price: coursePrice,
        type: 'Article'
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
  }
}

const DecoratedContentStore = decorate(ContentStore, {
  //observables
  contents: observable,

  //actions
  fetchContents: action,
  createContent: action
})

const store = new DecoratedContentStore()

export default store
