# Agent Hook
Agent Hook 允许您在业务代码中动态修改 Agent，例如添加回调函数和修改系统提示词。
Agent Hook 通过 `IAgentHook` 定义：
```csharp
bool OnAgentLoading(ref string id);
bool OnInstructionLoaded(string template, Dictionary<string, object> dict);
bool OnFunctionsLoaded(List<FunctionDef> functions);
bool OnSamplesLoaded(ref string samples);
void OnAgentLoaded(Agent agent);
```

## 在插件中注册自定义 Hook
```csharp
public class MyPlugin : IBotSharpPlugin
{
    public void RegisterDI(IServiceCollection services, IConfiguration config)
    {
        // 注册 Hooks
        services.AddScoped<IAgentHook, MyAgentHook>();
    }
}
```

添加一个继承自 `AgentHookBase` 抽象类的新类，该类具有 `IAgentHook` 接口。
```csharp
public class MyAgentHook : AgentHookBase
{
    public MyAgentHook(IServiceProvider services, AgentSettings settings) 
        : base(services, settings)
    {
    }
}
```

## 注入函数
您可以通过 Agent Hook 动态将 LLM 回调函数注入到当前加载的 Agent 中。
```csharp
public class MyAgentHook : AgentHookBase
{
    public MyAgentHook(IServiceProvider services, AgentSettings settings) 
        : base(services, settings)
    {
    }

    public override bool OnFunctionsLoaded(List<FunctionDef> functions)
    {
        // 注入 LLM 回调函数
        functions.Add(new FunctionDef
        {
            Name = "function_name",
            Description = "description of how LLM will utilize this function."
        });
        return base.OnFunctionsLoaded(functions);
    }
}
```

实现 `IFunctionCallback` 的具体函数。
```csharp
public class MyFunctionFn : IFunctionCallback
{
    public string Name => "function_name";

    public async Task<bool> Execute(RoleDialogModel message)
    {
        // 访问外部 API
        message.ExecutionResult = new object();
        return true;
    }
}
```