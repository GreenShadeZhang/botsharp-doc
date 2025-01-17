# 钩子

`Hook` 是 `BotSharp` 中的一个位置，允许你插入一个模块以提供不同的行为或做出反应。

## 代理钩子
`IAgentHook`
```csharp
// 当代理加载时触发。
bool OnAgentLoading(ref string id);
bool OnInstructionLoaded(string template, Dictionary<string, object> dict);
bool OnFunctionsLoaded(List<FunctionDef> functions);
bool OnSamplesLoaded(ref string samples);

// 当代理完全加载时触发。
void OnAgentLoaded(Agent agent);
```
有关代理钩子的更多信息，请访问 [代理钩子](../agent/hook.md)。

## 对话钩子
`IConversationHook`
```csharp
// 每次新对话时触发。
Task OnConversationInitialized(Conversation conversation);
Task OnDialogsLoaded(List<RoleDialogModel> dialogs);
Task OnMessageReceived(RoleDialogModel message);

// 在 LLM 调用函数之前触发。
Task OnFunctionExecuting(RoleDialogModel message);

// 当函数调用完成时触发。
Task OnFunctionExecuted(RoleDialogModel message);
Task OnResponseGenerated(RoleDialogModel message);

// LLM 检测到当前任务已完成。
Task OnCurrentTaskEnding(RoleDialogModel message);

// LLM 检测到用户有结束对话的意图。
Task OnConversationEnding(RoleDialogModel message);

// LLM 无法处理用户请求或用户请求人工介入。
Task OnHumanInterventionNeeded(RoleDialogModel message);
```
有关对话钩子的更多信息，请访问 [对话钩子](../conversation/hook.md)。

`IConversationHook`
```csharp
Task OnStateLoaded(ConversationState state);
Task OnStateChanged(string name, string preValue, string currentValue);
```

## 内容生成钩子
`IContentGeneratingHook`

模型内容生成钩子，可用于日志记录、指标和跟踪。
```csharp
// 在内容生成之前。
Task BeforeGenerating(Agent agent, List<RoleDialogModel> conversations);

// 在内容生成之后。
Task AfterGenerated(RoleDialogModel message, TokenStatsModel tokenStats);
```

`IInstructHook`
```csharp
Task BeforeCompletion(Agent agent, RoleDialogModel message);
Task AfterCompletion(Agent agent, InstructResult result);
```