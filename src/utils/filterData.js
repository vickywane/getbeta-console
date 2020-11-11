export const filterData = (type, data) => {
  return new Promise((resolve, reject) => {
    let filtered = null

    switch (type) {
      case 'MY_CONTENT':
        filtered = data.filter(data => data.vendorId === localStorage.getItem('userId'))

        resolve([filtered, 'My Contents'])
      case 'LATEST':
        filtered = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

        resolve([filtered, 'Recently Added'])
      case 'OLDEST':
        filtered = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

        resolve([filtered, 'Old Contents'])
      default:
        resolve([data, 'Recently Added'])
    }
  })
}
