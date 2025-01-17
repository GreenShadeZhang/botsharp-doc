# 日志记录

## 设置
要初始化日志记录功能，请在 `Conversation` 中设置以下标志。每个标志可以在对话期间显示或记录特定内容。

* `ShowVerboseLog`: 在控制台打印对话详细信息或提示。
* `EnableLlmCompletionLog`: 记录 LLM 完成结果，例如，发送到 LLM 的实时提示和从 LLM 生成的响应。
* `EnableExecutionLog`: 记录事件后的详细信息，例如，接收消息、执行功能、生成响应等。

```json
"Conversation": {
    "ShowVerboseLog": false,
    "EnableLlmCompletionLog": false,
    "EnableExecutionLog": true
}
```

### 用法
要启用日志记录功能，请在 `Program.cs` 中添加以下代码行。

```csharp
builder.Services.AddBotSharpLogger(builder.Configuration);
```
