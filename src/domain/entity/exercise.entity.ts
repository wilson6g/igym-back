export interface ExerciseParams {
  id: string;
  name: string;
}

export class Exercise {
  private _id: string;
  private _name: string;

  constructor(params: ExerciseParams) {
    this._id = params.id;
    this._name = params.name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
