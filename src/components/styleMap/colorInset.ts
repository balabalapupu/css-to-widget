export function ColorInset(config: string) {
  const trimConfig = config.trim();
  if (trimConfig.includes("rgba")) {
    const regExp = /rgba\((.*?)\)/;
    const match = trimConfig.match(regExp);
    return `Color.fromRGBO(${match[1]})`;
  } else if (trimConfig.includes("#")) {
    const [, curColor] = trimConfig.split("#");
    return `Color(#0xFF${curColor.toUpperCase()})`;
  } else {
    return `Colors.${config}`;
  }
}
