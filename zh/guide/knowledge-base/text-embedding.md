# 文本嵌入

文本嵌入将人类语言表示为计算机可理解的形式，从而实现语义搜索等任务。`BotSharp` 支持多种嵌入方法，并通过工程抽象支持更多嵌入方法的扩展。

## fastText 嵌入
[FastText](https://fasttext.cc/) 是一个开源、免费、轻量级的库，允许用户学习文本表示和文本分类。它可以在标准的通用硬件上运行。模型可以在后期缩小尺寸，甚至可以适应移动设备。为了使用 fastText 嵌入方法，请确保安装 [BotSharp.Plugin.MetaAI](https://www.nuget.org/packages/BotSharp.Plugin.MetaAI)，并在本地设置中启用此插件。还需要[下载](https://fasttext.cc/docs/en/english-vectors.html) fastText 的预训练模型，并在设置中指定模型的位置。

```json
"PluginLoader": {
  "Assemblies": [
    "BotSharp.Plugin.MetaAI"
  ],
  "Plugins": [
    "KnowledgeBasePlugin",
    "MemVecDbPlugin",
    "MetaAiPlugin"
  ]
},

"KnowledgeBase": {
  "TextEmbedding": "fastTextEmbeddingProvider"
},

"MetaAi": {
  "fastText": {
  "ModelPath": "crawl-300d-2M-subword.bin"
  }
}
```

## LLamaSharp.TextEmbeddingProvider
`LLamaSharp` 也提供 LLM 嵌入。有关 LLamaSharp 的更多操作方法，请参考其[仓库地址](https://github.com/SciSharp/LLamaSharp)。
你需要下载相应的 LLM 开源模型，如 `llama2` 到本地。

```json
"PluginLoader": {
  "Assemblies": [
    "BotSharp.Core"
  ],
  "Plugins": [
    "KnowledgeBasePlugin",
    "MemVecDbPlugin",
    "LLamaSharpPlugin"
  ]
},

"KnowledgeBase": {
  "TextEmbedding": "LLamaSharp.TextEmbeddingProvider"
},

"LlamaSharp": {
  "ModelPath": "llama-2-7b-chat.ggmlv3.q3_K_S.bin"
}
```

## TensorFlow BERT

## 训练你自己的嵌入
你也可以使用 [TensorFlow.NET](https://github.com/SciSharp/TensorFlow.NET) 从头开始训练自己的嵌入模型。