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

/**
 * e.g. margin: 12px -> margin: EdgeInsets.all(12) 以这个转换逻辑当例子
 * components: 具体的转换逻辑，输出是一个 key 和一个 value ,具体的自己写就好了
 * originKey: 原始key，就是 margin
 * decorator: 装饰器，在 createOutPut 自定义，比如如果是 border 就需要装在 BoxDecoration 里面
 * direction: 这个是给margin-left/right/top/bottom 用的方向
 * valueFormat: 用来格式化值，比如12px -> 12.0
 */
type StyleComponentsType = BaseStyleComponentsType &
  Partial<StyleComponentsWithFormatType> &
  Partial<StyleComponentsWithDecoratorType> &
  Partial<StyleComponentsWithDirectionType>;
