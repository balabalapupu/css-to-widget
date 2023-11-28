1. 填充：
   padding => padding: EdgeInsets.fromLTRB(double left, double top, double right, double bottom),

```dart
padding: EdgeInsets.fromLTRB(0,0,0,0),
```

2. 线性布局
3. 容器布局

```dart
Container({
  this.alignment,
  this.padding, //容器内补白，属于decoration的装饰范围
  Color color, // 背景色
  Decoration decoration, // 背景装饰
  Decoration foregroundDecoration, //前景装饰
  double width,//容器的宽度
  double height, //容器的高度
  BoxConstraints constraints, //容器大小的限制条件
  this.margin,//容器外补白，不属于decoration的装饰范围
  this.transform, //变换
  this.child,
  ...
})
```
