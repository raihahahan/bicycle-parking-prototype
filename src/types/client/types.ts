export interface MyLocation {
  latitude: number;
  longitude: number;
}

export interface ListItem {
  Description: string;
  Latitude: number;
  Longitude: number;
  RackType: string;
  RackCount: number;
  ShelterIndicator: "Y" | "N";
}
