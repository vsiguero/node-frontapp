export interface FrontErrorInterface {
    message: string;
    title?: string;
    details?: ReadonlyArray<string>;
    status: number;
}
export declare class FrontAppError extends Error {
    constructor(message: string, title: string, details: ReadonlyArray<string>, status: number);
    message: string;
    status: number;
    details: ReadonlyArray<string>;
    title: string;
}
