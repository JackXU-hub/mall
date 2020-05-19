###小药药布局组件 xyy-panel
使用示例

```
<xyy-panel title="查询条件" fold bottom="10">
  <slot name="tools"></slot>
  <slot default></slot>
</xyy-panel>

```

---

Props

```
 title: {
      type: String, // 标题
      default: ''
    },
    fold: {  // 是否可折叠
      type: Boolean,
      default: false
    },
    bottom: { // margin-bottom
      type: Number,
      default: 10
    }
```
