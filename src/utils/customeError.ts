export class customeError extends Error {
  public statuCode: number;
  public errorCode?: string;
  public timestamp: Date;

  constructor(message: string, statuscode: number, errorcode?: string) {
    super(message);
    this.statuCode = statuscode;
    this.errorCode = errorcode;
    this.timestamp = new Date();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  public getDetails() {
    return {
      message: this.message,
      statusCode: this.statuCode,
      errorCode: this.errorCode,
      timestamp: this.timestamp,
      stack: this.stack,
    };
  }
}
