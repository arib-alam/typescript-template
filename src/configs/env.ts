function env(name: string): string;
function env(name: string, optional: true): string | undefined;
function env(name: string, optional = false) {
  if (optional) return process.env[name];
  if (process.env[name]) return process.env[name];

  throw new Error(`${name} undefined`);
}

const ENV = {
  // environment
  NODE_ENV: env("NODE_ENV"),
  BUILD_COMPILED: env("BUILD_COMPILED", true),
} as const;

export default ENV;
