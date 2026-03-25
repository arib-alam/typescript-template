import ENV from "@/configs/env.js";

export const isProdRuntime = () => {
  return ENV.NODE_ENV === "production";
};

const isProd = isProdRuntime();
export default isProd;
