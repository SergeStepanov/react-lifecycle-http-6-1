import { nanoid } from 'nanoid';

export default class ClockModel {
  constructor(cityName, timeZone) {
    this.id = nanoid();
    this.cityName = cityName;
    this.timeZone = Number(timeZone);
  }
}
