import _store from '../store.js'
import House from '../Models/House.js'


class HouseService {
  delortHouse(houseIndex) {
    _store.State.houses.splice(houseIndex, 1)
  }
  addHouse(houseData) {
    let house = new House(houseData)
    _store.State.houses.push(house)
  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE