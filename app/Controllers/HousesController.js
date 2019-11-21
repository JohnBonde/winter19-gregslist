import _houseService from '../Services/HouseService.js'
import _store from '../store.js'

function _drawHouses() {
  let template = '';
  let houses = _store.State.houses;
  houses.forEach((house, i) => template += house.getTemplate(i))
  document.querySelector("#houses").innerHTML = template
}
export default class HousesController {
  constructor() {

  }
  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let newHouse = {
      city: formData.city.value,
      state: formData.state.value,
      valued: formData.valued.value,
      size: formData.size.value,
      beds: formData.beds.value,
      baths: formData.baths.value
    }
    _houseService.addHouse(newHouse)
    _drawHouses()
    formData.reset()
  }
  delortHouse(houseIndex) {
    _houseService.delortHouse(houseIndex)
    _drawHouses()
  }
}