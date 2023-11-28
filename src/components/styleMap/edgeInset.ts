export function EdgeInset(config: string, direction: string) {
  const __config = config.trim();
  const noSpaceArr = __config.split(" ");
  const noPixelArr = noSpaceArr.map((item) => item.replace("px", ""));

  if (direction !== "") {
    return `EdgeInsets.only(${direction}: ${noPixelArr[0]})`;
  } else {
    switch (noPixelArr.length) {
      case 1:
        return `EdgeInsets.all(${noPixelArr[0]})`;
      case 2:
        const [vertical, horizontal] = noPixelArr;
        return `EdgeInsets.symmetric(vertical: ${vertical}, horizontal: ${horizontal})`;
      case 4:
        const [top, right, bottom, left] = noPixelArr;
        return `EdgeInsets.fromLTRB(${top}, ${right}, ${bottom}, ${left})`;
      default:
        throw new Error("Invalid configuration");
    }
  }
}
