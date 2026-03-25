import ENV from "@/configs/env.js";

export const isCompiledRuntime = () => {
  return ENV.BUILD_COMPILED === "true";
};

const isCompiled = isCompiledRuntime();
export default isCompiled;
