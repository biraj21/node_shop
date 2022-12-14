class CustomError extends Error {
    constructor(message) {
        super(message);
        this.isCustom = true;
    }
}

export class ExpiredError extends CustomError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.httpStatusCode = 410;
    }
}

export class ValidationError extends CustomError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.httpStatusCode = 422;
    }
}
