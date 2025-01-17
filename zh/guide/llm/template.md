# 模板

我们可以将提示定义为模板，并且模板可以根据变量进行更改，这样一个指令文件就可以用来生成动态提示。
`BotSharp` 使用 [liquid](https://shopify.github.io/liquid/) 模板来支持各种复杂的动态提示工程。

`ITemplateRender`
```csharp
bool Render(Agent agent, Dictionary<string, object> dict)
```