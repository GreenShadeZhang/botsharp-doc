# 插件

**BotSharp** 采用了 `插件` 架构设计，各个模块相互独立。以 `Conversation` 为核心，每个插件通过 Hook 机制完成各种功能（例如添加 LLM 提供者和文本嵌入提供者）。关于系统提供的 Hooks，可以参考专门的 [Hook 部分](hooks.md)。

这里我们将介绍如何添加一个新插件来扩展你的 LLM 应用。我们仍然使用 PizzaBot 的例子来说明如何完成此任务。

1. 添加类库
    添加一个名为 BotSharp.Plugin.PizzaBot 的新类库，并添加对 web 启动应用程序的引用。

2. 实现接口
    添加一个名为 `PizzaBotPlugin` 的新类，并实现接口 `IBotSharpPlugin`。
     ```csharp
     namespace BotSharp.Plugin.PizzaBot;

     public class PizzaBotPlugin : IBotSharpPlugin
     {
          public void RegisterDI(IServiceCollection services, IConfiguration config)
          {
                // 注册回调函数
                services.AddScoped<IFunctionCallback, MakePaymentFn>();

                // 注册 hooks
                services.AddScoped<IAgentHook, PizzaBotAgentHook>();
          }
     }    
     ```

3. 添加到设置
    将插件添加到 appsettings.json。
     ```json
     "PluginLoader": {
          "Assemblies": [
                "BotSharp.Plugin.PizzaBot"
          ]
     }
     ```

启动 web 项目后，你应该会在控制台中看到成功加载的消息。
```shell
Loaded plugin PizzaBotPlugin from BotSharp.Plugin.PizzaBot.
```