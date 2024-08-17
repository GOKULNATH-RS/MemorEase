const UploadPhotoController = require('../controller/PhotoController')
const { Router } = require('express')

const router = Router()

router.post('/photos', UploadPhotoController.UploadPhoto)
router.get('/photos', UploadPhotoController.GetPhotos)

module.exports = router
