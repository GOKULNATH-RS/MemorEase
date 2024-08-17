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

module.exports = { UploadPhoto }
