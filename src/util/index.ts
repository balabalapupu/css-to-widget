export function checkObjectUndefined(object: any) {
  return typeof object == "undefined";
}
export function checkInputTextFormat(txt: string): boolean {
  if (txt == "") return false;
  return true;
}
export function capitalizeFirstLetter(str) {
  let [firstChar, ...rest] = str;
  return `${firstChar.toUpperCase()}${rest.join("")}`;
}

export function convertValue(value, valueFormat) {
  if (valueFormat == "pixel") {
    const __value = value.replace("px", "");
    return Number(__value).toFixed(1);
  } else if (valueFormat == "string") {
    return `'${value}'`;
  }
  return value;
}
