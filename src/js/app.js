export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[400, 'Bad request'], [404, 'Not found'], [403, 'Forbidden'], [500, 'Internal error']]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
