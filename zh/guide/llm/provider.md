# LLM 提供者

`BotSharp` 可以通过插件支持多个 LLM 提供者，一个 `provider` 可以包含多个 `model` 设置。
```json
[{
  "Provider": "azure-openai",
  "Models": [
    {
      "Id": "",
      "Name": "gpt-35-turbo",
      "Group": "",
      "ApiKey": "",
      "Endpoint": "https://gpt-35-turbo.openai.azure.com/",
      "Type": "chat",
      "PromptCost": 0.0015,
      "CompletionCost": 0.002
    },
    {
      "Name": "gpt-35-turbo-instruct",
      "ApiKey": "",
      "Endpoint": "https://gpt-35-turbo-instruct.openai.azure.com/",
      "Type": "text",
      "PromptCost": 0.0015,
      "CompletionCost": 0.002
    }
  ]
}]
```

你可以在每轮对话中设置 `Provider` 和 `Model` 的名称，以控制当前对话中应使用的 LLM，或者你也可以在对话初始化时一次性指定后续对话中使用的 LLM。

```json
{
  "text": "Good morning!",
  "provider": "google-ai",
  "model": "palm2"
}
```

## 负载均衡

如果你在多个区域部署了具有相同功能的模型，并希望在这些区域之间建立负载均衡，以减少大型模型提供者的资源限制，你需要在模型配置中设置一致的 Group 值。