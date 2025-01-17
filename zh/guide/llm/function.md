# 函数

**调用函数**是作为参数传递给另一个函数并在特定事件或操作发生后执行的函数。在**大型语言模型（LLM）**的上下文中，调用函数可以用于挂钩到LLM应用程序的各个阶段。它们对于日志记录、监控、流式传输等任务非常有用。例如，在**BotSharp**框架中，调用函数可以用于记录信息、监控LLM应用程序的进度或执行其他任务。BotSharp提供了一个`callbacks`参数，允许开发人员与外部系统交互。

在LLM应用程序中使用调用函数提供了灵活性和可扩展性。开发人员可以通过定义实现特定方法的回调处理程序来自定义其应用程序的行为。这些处理程序可以用于日志记录、错误处理或与外部系统交互等任务。函数将根据对话上下文由LLM触发。

## 隐藏函数

为了更灵活地控制Agent是否允许使用某个函数，在函数定义中有一个Visibility Expression属性，可以用来控制显示或隐藏。当我们向LLM输入提示时，尽管我们可以在系统指令文件中使用状态变量来控制渲染内容，但LLM仍会考虑函数的定义。如果相关函数没有同时隐藏，LLM仍然可能调用相关函数，带来意想不到的结果。因为我们需要同时控制系统指令和函数定义，使它们保持一致。

```json
{
    "name": "make_payment",
    "description": "call this function to make payment",
    "visibility_expression": "{% if states.order_number != empty %}visible{% endif %}",
    "parameters": {
        "type": "object",
        "properties": {
            "order_number": {
                "type": "string",
                "description": "order number."
            },
            "total_amount": {
                "type": "string",
                "description": "total amount."
            }
        },
        "required": ["order_number", "total_amount"]
    }
}
```

以上是一个示例。系统将解析Visibility Expression的liquid模板`{% if states.order_number != empty %}visible{% endif %}`。当返回“visible”时，系统将允许Agent使用此函数。在liquid表达式中，我们可以使用`states.name`来引用对话中的状态值。