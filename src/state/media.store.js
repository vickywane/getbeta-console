import { action, observable, decorate } from "mobx"

class MediaStore {
  Empty = true

  UploadModal = false

  openUploadModal = () => {
    this.UploadModal = true
  }

  closeUploadModal = () => {
    this.UploadModal = false
  }

  items = [
    {
      id: 1,
      name: "",
      url: "",
    },
  ]

  itemsNo = null

  AddItem = () => {
    this.empty = false
  }

  DeleteItem = () => {}
}

const DecoratedMediaStore = decorate(MediaStore, {
  //observables
  Empty: observable,
  itemsNo: observable,
  items: observable,
  UploadModal: observable,

  //actions
  AddItems: action,
  DeleteItems: action,

  openUploadModal: action,
  closeUploadModal: action,
})

const store = new DecoratedMediaStore()

export default store
