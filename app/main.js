import ValuesController from "./Controllers/ValuesController.js";
import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/housesController.js";

class App {
  valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new HousesController();
}

window["app"] = new App();
