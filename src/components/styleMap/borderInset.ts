import { ColorInset } from "./colorInset";

export function BorderInset(config) {
  const __config = config.trim();
  const noSpaceArr = __config.split(" ");
  const [size, type, color] = noSpaceArr;
  const __size = size.replace("px", "");
  const __color = ColorInset(color);
  return `Border.all(
    color: ${__color},
    width: ${Number(__size).toFixed(1)},
    style: BorderStyle.${type},
  )`;
}
