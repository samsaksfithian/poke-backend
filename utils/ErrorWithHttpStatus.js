/**
 * Error object containing user friendly message and an HTTP status code
 */
class ErrorWithHttpStatus extends Error {
  /**
   * Error object containing user friendly message and an HTTP status code
   * @param {string} message error message
   * @param {number} [status=5--] HTTP status code
   */
  constructor(message, status_code = 500) {
    super(message);
    this.status = status_code;
  }
}

module.exports = ErrorWithHttpStatus;
