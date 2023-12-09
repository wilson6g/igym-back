export interface RecordExerciseParams {
  id: string;
  recordId: string;
  exerciseId: string;
  reps: number;
  sets: number;
  weight: number;
  createdAt: Date;
}

export class RecordExercise {
  private _id: string;
  private _recordId: string;
  private _exerciseId: string;
  private _reps: number;
  private _sets: number;
  private _weight: number;
  private _createdAt: Date;

  constructor(params: RecordExerciseParams) {
    this._id = params.id;
    this._recordId = params.recordId;
    this._exerciseId = params.exerciseId;
    this._reps = params.reps;
    this._sets = params.sets;
    this._weight = params.weight;
    this._createdAt = params.createdAt;
  }

  get id(): string {
    return this._id;
  }

  get recordId(): string {
    return this._recordId;
  }

  get exerciseId(): string {
    return this._exerciseId;
  }

  get reps(): number {
    return this._reps;
  }

  set reps(reps: number) {
    this._reps = reps;
  }

  get sets(): number {
    return this._sets;
  }

  set sets(sets: number) {
    this._sets = sets;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
