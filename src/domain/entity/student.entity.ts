export interface StudentParams {
  id: string;
  fullName: string;
  memberSince: Date;
  recordId?: string;
}

export class Student {
  private _id: string;
  private _fullName: string;
  private _memberSince: Date;
  private _recordId: string | undefined;

  constructor(params: StudentParams) {
    this._id = params.id;
    this._fullName = params.fullName;
    this._memberSince = params.memberSince;
    this._recordId = params.recordId;
  }

  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return this._fullName;
  }

  get joinedAt(): Date {
    return this._memberSince;
  }

  get recordId(): string | undefined {
    return this._recordId;
  }
}
