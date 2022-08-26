class Place {
  constructor(title, imageUri, address, location) {
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.location = {lat: location.latitude, lng: location.longitude}
    this.id = new Date().toISOString() + Math.random().toString()
  }
}

export default Place;