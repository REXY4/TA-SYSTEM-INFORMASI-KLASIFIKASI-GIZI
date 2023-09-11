export interface ResponseEntity<T> {
    statusCode: number,
    status: number | string,
    message: string,
    data: T
}