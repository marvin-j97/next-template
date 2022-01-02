/**
 * Simple timer
 */
export class Timer {
  start = +new Date();

  /**
   * Resets internal state
   */
  reset(): void {
    this.start = +new Date();
  }

  /**
   * Returns the elapsed time in milliseconds
   */
  asMilli(): number {
    return Date.now() - this.start;
  }

  /**
   * Returns the elapsed time in seconds
   */
  asSeconds(): number {
    return this.asMilli() / 1000;
  }
}
