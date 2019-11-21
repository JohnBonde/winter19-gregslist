export default class House {
  constructor(data) {
    this.city = data.city || "Unknown"
    this.state = data.state || "Unknown"
    this.valued = data.valued || "Unknown"
    this.size = data.size || "Unknown"
    this.beds = data.beds || "Unknown"
    this.baths = data.baths || "Unknown"
  }
  getTemplate(index) {
    return `
            <div class="col-3 m-3 p-2 border rounded bg-dark">
                <h2>${this.valued}</h2>
                <h5>${this.city}</h5>
                <h5>${this.state}</h5>
                <h5>${this.size}</h5>
                <h5>${this.beds}</h5>
                <h5>${this.baths}</h5>
                <button class="btn btn-danger btn-block" onclick="app.housesController.delortHouse(${index})">Delort</button>
            </div>
    `
  }
}