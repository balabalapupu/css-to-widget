function mergeTypes<T extends any[]>(...types: T): Union<T> {
  return types.reduce((result, type) => {
    return { ...result, ...type };
  }, {}) as Union<T>;
}

type BaseStyleList = {
  styleKey: string;
  styleValue: string;
};
type ValueFormatType = "normal" | "pixel" | "string";

type StyleMapType = {
  [propName: string]: StyleComponentsType;
};
type WidgetListType = {
  type: string;
  str: string;
};
type OutPutType = {
  key: string;
  value: string | number;
};

interface StyleComponentsClassInterface {
  getValue(): OutPutType | OutPutType[];
  setValue(value: any): void;
}

type BaseStyleComponentsType = {
  components: typeof StyleComponentsClassInterface;
  key: string | string[];
  originKey: string;
};
type StyleComponentsWithFormatType = {
  valueFormat: ValueFormatType;
};
type StyleComponentsWithDecoratorType = {
  decorator: string;
};
type StyleComponentsWithDirectionType = {
  direction: string;
};

type StyleComponentsType = BaseStyleComponentsType &
  Partial<StyleComponentsWithFormatType> &
  Partial<StyleComponentsWithDecoratorType> &
  Partial<StyleComponentsWithDirectionType>;
