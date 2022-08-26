import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import PlacesList from '../components/Places/PlacesList'

const AllPlaces = ({route}) => {
  const [places, setPlaces] = useState([])
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if (isFocused && route.params) {
      const newPlace = route.params?.place;
      setPlaces(prevPlaces => [newPlace, ...prevPlaces])
    }
  }, [route, setPlaces])

  console.log(places)

  return <PlacesList places={places}/>
}

export default AllPlaces;
