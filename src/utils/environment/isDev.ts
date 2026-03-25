import ENV from "@/configs/env.js";

export const isDevRuntime = () => {
  return ENV.NODE_ENV === "development";
};

const isDev = isDevRuntime();
export default isDev;
