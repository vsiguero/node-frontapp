export interface FrontErrorInterface {
  message: string;
  title: string;
  details: ReadonlyArray<string>;
  status: number;
}

export class FrontAppError extends Error {
  constructor(
    message: string,
    title: string,
    details: ReadonlyArray<string>,
    status: number,
  ) {
    super(message);
    this.name = 'FrontAppError';
    this.message = message;
    this.status = status;
    this.title = title;
    this.details = details as ReadonlyArray<string>;
  }

  public message: string;
  public status: number;
  public details: ReadonlyArray<string>;
  public title: string;
}
