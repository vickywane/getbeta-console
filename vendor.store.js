import { observer, decorate, action } from 'mobx-react'
import Axios from 'axios'

class VendorStore {
  createVendor = () => {}
}

const DecoratedVendorStore = decorate(VendoStor, {
  createVendor: action
})

const store = new DecoratedVendorStore()

export default store
