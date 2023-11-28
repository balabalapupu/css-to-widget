export function checkObjectUndefined(object: any) {
  return typeof object == "undefined";
}
export function checkInputTextFormat(txt: string): boolean {
  if (txt == "") return false;
  return true;
}
