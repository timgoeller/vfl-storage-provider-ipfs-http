const IpfsHttpClient = require('ipfs-http-client')
const { globSource } = IpfsHttpClient
const ipfs = IpfsHttpClient()

class IPFSStorageProviderHTTP {
  constructor () {
    this.type = 'ipfs'
  }

  store (localFolder) {
    return ipfs.add(globSource(localFolder, { recursive: true, pin: true })).then((data) => {
      return data.cid.toString()
    })
  }
}

module.exports = IPFSStorageProviderHTTP
