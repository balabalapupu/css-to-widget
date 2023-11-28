export function BorderRadius(config) {
  const __config = config.trim();
  const noSpaceArr = __config.split(" ");
  const noPixelArr = noSpaceArr.map((item) => item.replace("px", ""));
  if (noPixelArr.length == 1) {
    return `BorderRadius.circular(${noPixelArr[0]})`;
  } else if (noPixelArr.length == 2) {
    const [left, right] = [noPixelArr[0], noPixelArr[1]];
    return `BorderRadius.only(
        topLeft: Radius.circular(${left}),
        topRight: Radius.circular(${right}),
        bottomLeft: Radius.circular(${left}),
        bottomRight: Radius.circular(${right}),
      )`;
  } else if (noPixelArr.length == 3) {
    const [topLeft, topRight, bottomLeft] = [
      noPixelArr[0],
      noPixelArr[1],
      noPixelArr[2],
    ];
    return `BorderRadius.only(
        topLeft: Radius.circular(${topLeft}),
        topRight: Radius.circular(${topRight}),
        bottomLeft: Radius.circular(${bottomLeft}),
        bottomRight: Radius.circular(${topRight}),
      )`;
  } else {
    const [topLeft, topRight, bottomLeft, bottomRight] = [
      noPixelArr[0],
      noPixelArr[1],
      noPixelArr[2],
      noPixelArr[3],
    ];
    return `BorderRadius.only(
        topLeft: Radius.circular(${topLeft}),
        topRight: Radius.circular(${topRight}),
        bottomLeft: Radius.circular(${bottomLeft}),
        bottomRight: Radius.circular(${bottomRight}),
      )`;
  }
}
