export class FrontAppError extends Error {
    constructor(message, title, details, status) {
        super(message);
        this.name = 'FrontAppError';
        this.message = message;
        this.status = status;
        this.title = title;
        this.details = details;
    }
}
