class Place {
  constructor(id, title, imageUri, address, location) {
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.location = {lat: location.latitude, lng: location.longitude}
    this.id = id
  }
}

export default Place;