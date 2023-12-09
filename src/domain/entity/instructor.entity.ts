export interface InstructorParams {
  id: string;
  fullName: string;
  joinedAt: Date;
  recordIds: string[];
}

export class Instructor {
  private _id: string;
  private _fullName: string;
  private _joinedAt: Date;
  private _recordIds: string[];

  constructor(params: InstructorParams) {
    this._id = params.id;
    this._fullName = params.fullName;
    this._joinedAt = params.joinedAt;
    this._recordIds = params.recordIds;
  }

  addRecordId(recordId: string) {
    if (this._recordIds.includes(recordId)) {
      return;
    }
    this._recordIds.push(recordId);
  }

  removeRecordId(recordId: string) {
    this._recordIds = this._recordIds.filter((id) => id !== recordId);
  }

  get id() {
    return this._id;
  }

  get recordIds(): string[] {
    return this._recordIds;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(fullName: string) {
    this._fullName = fullName;
  }

  get joinedAt(): Date {
    return this._joinedAt;
  }
}
