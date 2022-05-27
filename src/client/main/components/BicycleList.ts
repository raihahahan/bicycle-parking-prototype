import _axios = require("axios");
import API_KEY, { uri, path } from "../../../server/config";
import { ListItem, MyLocation } from "../../../types/client/types";
const axios = _axios.default;

class BicycleList {
  private list: ListItem[];
  constructor() {
    this.list = [];
  }

  getList(): ListItem[] {
    return this.list;
  }

  async fetchBicycleParking(
    coords: MyLocation,
    filterPredicate: (item: ListItem) => boolean = (i: ListItem) => i == i,
    limit: number = 500
  ): Promise<ListItem[]> {
    try {
      const res = await axios.get(uri + path, {
        params: {
          Lat: coords.latitude,
          Long: coords.longitude,
        },
        headers: {
          AccountKey: API_KEY,
        },
      });
      const value: ListItem[] = res.data.value
        .filter(filterPredicate)
        .slice(0, limit);
      this.list = value;
      return value;
    } catch (error) {
      console.log(error);
    }
  }
}

export default BicycleList;
