const UploadPhotoController = require('../controller/PhotoController')
const { Router } = require('express')

const router = Router()

router.post('/upload', UploadPhotoController.UploadPhoto)

module.exports = router
