import Secrets from '../constants/secrets'

export const getMapPreview = (latitude, longitude) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${Secrets.GOOGLE_MAPS_API_KEY}`
  return imagePreviewUrl
}