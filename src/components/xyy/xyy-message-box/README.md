# xyy-message-box

| 参数          | 说明                                       | 类型    | 可选值 | 默认值 |
| ------------- | ------------------------------------------ | ------- | ------ | ------ |
| closeBtn      | 取消按钮的显示                             | Boolean | ---    | true   |
| footer        | 底部按钮区域的显示,为 true 时 自动关闭无效 | Boolean | ---    | true   |
| title         | 提示的头部文字                             | String  | ---    | '提示' |
| content       | 提示的内容 可为 html                       | String  | ---    | '提示' |
| duration      | 弹窗的显示时间 <=0 时默认 2s 关闭          | Number  | ---    | 2000   |
| onSuccess     | 点击确认按钮执行的函数                     | func    | ---    | ''     |
| closeBtnClass | 取消按钮类名                               | String  | ---    | ''     |
| button        | 非确认/取消按钮组                          | Array   | ---    | []     |
| okValue       | 确认按钮显示文本                           | String  | ---    | 确定   |

#### 使用

```
this.$XyyMsg({
  title: '提示',
  content: '确定删除吗', // html代码串
  onSuccess: function() {
    axios()...
  }
});
this.$XyyMsg({
  title: '提示',
  content: '2s后自动关闭的弹框', // html代码串
  footer: false
});
this.$XyyMsg({
  title: '提示',
  content: html, // html代码串
  onSuccess: function() {
  }
});
this.$XyyMsg({
  title: '提示',
  content: html, // html代码串
  okValue: '确定' // 确定按钮显示文本
  onSuccess: function() {
  },
  button: [
            {
              value: '不保存',// 按钮文本
              callback: function() {
                // 回调方法
                alert('不保存了');
              }
            }
          ]
});
```
