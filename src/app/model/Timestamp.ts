export enum Datasource {
  Online,
  Offline,
}

export class Timestamp {
  constructor(private _time: Date, private _datasource: Datasource) {
  }

  get time(): Date {
    return this._time;
  }

  get datasource() {
    return this._datasource;
  }
}
