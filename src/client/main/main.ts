import BicycleList from "./components/BicycleList";
import { testCoords } from "../../tests/testVar";
import { ListItem } from "../../types/client/types";

function main() {
  const list = new BicycleList();

  // ---- FETCH PARAMS ---- //
  const coords = testCoords.Clementi;
  const predicates = (i: ListItem) =>
    i.RackType == "Yellow Box" && i.ShelterIndicator == "Y";
  const limit = 10;

  // ---- FETCH ---- //
  list.fetchBicycleParking(coords, predicates, limit).then((data) => {
    console.log(JSON.stringify({ length: data.length, data }, null, 2));
  });
}

main();
