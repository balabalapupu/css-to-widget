import { capitalizeFirstLetter } from "../../util";

export function RangeValue(value: string, key: string) {
  return [
    {
      key: `min${capitalizeFirstLetter(key)}`,
      value: value,
    },
    {
      key: `max${capitalizeFirstLetter(key)}`,
      value: value,
    },
  ];
}
