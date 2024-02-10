// 400 error
export class BadRequestException extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

// 401 error
export class UnauthorizedException extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

// 403 error
export class ForbbidenException extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 403;
  }
}

// 404 error
export class NotFoundException extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

// 500 error
export class InternerServerException extends Error {
  status: number;
  constructor() {
    super('interner server error!');
    this.status = 500;
  }
}
