const Photo = require('../Modals/PhotoModal')

const UploadPhoto = async (req, res) => {
  const { title, description, url } = req.body

  const photo = new Photo({
    title,
    description,
    url
  })

  try {
    await photo.save()
    res.status(200).json({ message: 'Photo uploaded successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload photo', error })
  }
}

const GetPhotos = async (req, res) => {
  try {
    const photos = await Photo.find()
    res.status(200).json(photos)
  } catch (error) {
    res.status(500).json({ message: 'Failed to get photos', error })
  }
}

module.exports = { UploadPhoto, GetPhotos }
