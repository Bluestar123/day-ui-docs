---
map:
  path: /components/button
---

# Button

这是一个按钮组件

## 代码演示

### 基本用法

<demo src="./demo/base-button.vue"
  language="vue"
  title="基本用法"
  desc="使用 type、plain、round 和 circle 属性来定义 Button 的样式">
</demo>

### 禁用状态

<demo src="./demo/disabled-button.vue"
  language="vue"
  title="按钮不可用状态"
  desc="使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值">
</demo>

### 文字按钮

<demo src="./demo/text-button.vue"
  language="vue"
  title="没有边框和背景色的按钮">
</demo>

### 按钮图标

<demo src="./demo/icon-button.vue"
  language="vue"
  title="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）"
  desc="设置 icon 属性即可，icon 的列表可以参考 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标">
</demo>

## Props

| 参数  | 说明 |   类型 |         值 |
| ----- | ---: | -----: | ---------: |
| size  | 大小 | string | 例如'16px' |
| color | 颜色 | string |  例如'red' |
