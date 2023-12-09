export interface RecordParams {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  studentId: string;
  instructorId: string;
  recordExerciseIds: string[];
}

export class Record {
  private _id: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _studentId: string;
  private _instructorId: string;
  private _recordExerciseIds: string[];

  constructor(params: RecordParams) {
    this._id = params.id;
    this._createdAt = params.createdAt;
    this._studentId = params.studentId;
    this._instructorId = params.instructorId;
    this._updatedAt = params.updatedAt;
    this._recordExerciseIds = params.recordExerciseIds;
  }

  addRecordExerciseId(recordExerciseId: string) {
    this._recordExerciseIds.push(recordExerciseId);
  }

  removeRecordExerciseId(recordExerciseId: string) {
    this._recordExerciseIds = this._recordExerciseIds.filter(
      (recordExercise) => recordExercise !== recordExerciseId
    );
  }

  clearRecordExerciseIds() {
    this._recordExerciseIds = [];
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get studentId(): string {
    return this._studentId;
  }

  get instructorId(): string {
    return this._instructorId;
  }

  get recordExerciseIds(): string[] {
    return this._recordExerciseIds;
  }

  set recordExerciseIds(recordExerciseIds: string[]) {
    this._recordExerciseIds = recordExerciseIds;
  }

  set instructorId(instructorId: string) {
    this._instructorId = instructorId;
  }
}
