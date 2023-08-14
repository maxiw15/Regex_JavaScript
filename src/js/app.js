// eslint-disable-next-line import/prefer-default-export
export class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(string) {
    return (/^[a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z]$/.exec(string) !== null)
    && (!/[0-9]{4}/.test(string));
  }
}
