const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { media } = require('@tensei/media')
const { rest } = require('@tensei/rest')
const { tensei, welcome, cors } = require('@tensei/core')

tensei()
  .root(__dirname)
  .plugins([
    welcome(),
    auth().plugin(),
    rest().plugin(),
    cors()
  ])
  .start()
  .catch(console.error)
