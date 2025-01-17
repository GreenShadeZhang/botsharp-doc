# 本地 Whisper

### 介绍

Whisper 是由 OpenAI 开发的先进自动语音识别 (ASR) 系统，代表了语音技术的重大进步。该系统在包含 680,000 小时监督数据的庞大数据集上进行了训练，这些数据包括从网络上获取的各种语言和任务。数据集的多样性和规模在提高 Whisper 准确识别和转录语音的能力方面起着关键作用。因此，它在处理各种口音、背景噪音和复杂技术语言方面表现出更强的鲁棒性，使其成为广泛应用的多功能可靠工具。

### 开始使用本地 Whisper
要开始使用本地 Whisper 模型，必须将 Whisper.net 库添加为依赖项。这可以通过以下方式实现：
- NuGet 管理器
    <br/>
    <!-- ![NuGet 管理器](assets/NuGet-Local-Whisper.png) -->
- 包管理器控制台
```powershell
Install-Package Whisper.net
Install-Package Whisper.net.Runtime
```
- 在你的 csproj 文件中添加包引用
```
    <PackageReference Include="Whisper.net" Version="1.5.0" />
    <PackageReference Include="Whisper.net.Runtime" Version="1.5.0" />
```

通过使用插件，可以使用以下 Whisper 模型类型：

- Tiny
- TinyEn
- Base
- BaseEn
- Small
- SmallEn
- Medium
- MediumEn
- LargeV1
- LargeV2
- LargeV3

`NativeWhisperProvider` 旨在使用本地 Whisper 模型处理所有输入音频文件。用户可以设置音频文件的路径，目前仅支持 mp3 和 wav 格式。默认情况下，TinyEn 模型类型用于将音频转录为文本，但可以根据用户需求进行自定义。这种灵活性使 BotSharp 能够高效处理各种转录需求，确保从音频输入到文本输出的准确性和可靠性。

程序启动后，您可以在 ChatUI 中上传音频文件。

<!-- ![在 ChatUI 中上传音频](assets/Steps-Local-Whisper.png) -->

转录结果将显示在响应中。

<!-- ![Whisper 模型的响应结果](assets/Result-Local-Whisper.png) -->

### 响应时间
在本地使用 CPU 时，响应时间非常快。例如，它可以在大约 30 秒内将 10 分钟的音频剪辑转录为文本。对于 3 到 5 分钟的较短音频文件，转录响应时间大约为几秒钟甚至更快。