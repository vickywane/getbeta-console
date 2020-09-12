import { action, observable, decorate } from 'mobx'
import Axios from 'axios'

const VendorEndpoint = process.emv.REACT_APP_ENDPOINT
const token = localStorage.getItem('token')

class VendorStore {
  upgradeToVendor = (Email, Bio, MobileNo, FullName) => {
    Axios.post(
      `${VendorEndpoint}/vendors`,
      { data: {} },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
  }
}

const DecoratedVendorStore = decorate(VendorStore, {
  upgradeToVendor: action
})

const store = new DecoratedVendorStore()

export default store
