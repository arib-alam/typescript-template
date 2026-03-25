import ms, { type StringValue } from "ms";

export default function s(time: number | string) {
  if (typeof time === "number") return Math.round(time / 1000);

  return Math.round(ms(time as StringValue) / 1000);
}
