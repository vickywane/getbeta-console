import { action, observable, decorate } from 'mobx'

class VendorStore {
  createVendor = () => {}
}

const DecoratedVendorStore = decorate(VendorStore, {
  createVendor: action
})

const store = new DecoratedVendorStore()

export default store
