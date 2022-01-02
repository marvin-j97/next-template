/**
 * Returns the current environment
 */
export function environment(): string {
  return (process.env.NODE_ENV || "undefined_env").trim();
}

export const isDevelopment = (): boolean => environment() === "development";
export const isTest = (): boolean => environment() === "test";
