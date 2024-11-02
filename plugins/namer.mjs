import { Namer } from '@parcel/plugin'
import path from 'path'

export default new Namer({
  name({ bundle }) {
    if (bundle.type === 'png' || bundle.type === 'svg' || bundle.type === 'jpg') {
      let filePath = bundle.getMainEntry().filePath
      return `${bundle.type}/${path.basename(filePath)}`
    }

    // Allow the next namer to handle this bundle.
    return null
  }
})
