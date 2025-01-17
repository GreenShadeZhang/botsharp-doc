# 消息组件

在构建 AI 聊天机器人时，对话不仅仅是简单的文本消息。除了文本，`BotSharp` 还允许您发送丰富的媒体，如音频、视频和图像，并提供一组结构化的消息选项，如消息模板、快速回复、按钮等。UI 渲染程序可以根据返回的数据格式渲染组件。

## 文本消息
```json
{
    "recipient":{
        "id":"{{conversation_id}}"
    },
    "messaging_type": "RESPONSE",
    "message":{
        "text":"Hello, world!"
    }
}
```
## 快速回复

`content_type`: 文本、电话号码和电子邮件
```json
{
    "recipient":{
        "id":"{{conversation_id}}"
    },
    "messaging_type": "RESPONSE",
    "message":{
        "text": "选择一个颜色:",
        "quick_replies":[
        {
            "content_type":"text",
            "title":"红色",
            "payload":"<POSTBACK_PAYLOAD>",
            "image_url":"http://example.com/img/red.png"
        },{
            "content_type":"text",
            "title":"绿色",
            "payload":"<POSTBACK_PAYLOAD>",
            "image_url":"http://example.com/img/green.png"
        }
      ]
    }
}
```
## 发送者动作

在创建聊天机器人时，设定用户期望是至关重要的。发送者动作是一个关键工具，允许您控制打字和已读回执指示。例如，您可以使用它们来显示消息已被查看或正在输入响应，让用户在互动过程中保持知情。

`sender_action`: mark_seen, typing_on 和 typing_off
```json
{
    "recipient":{
        "id":"{{conversation_id}}"
    },
    "sender_action":"typing_on"
}  
```
## 消息模板

消息模板是用于在对话中以整洁的方式呈现复杂信息的结构化消息格式，防止文本混乱。这些模板还包括按钮以增强互动性。它提供了一种比标准文本消息更丰富的对话体验，通过在单条消息中集成按钮、图像、列表等。模板可以用于多种目的，例如显示产品信息、要求消息接收者从预定选项中选择以及显示搜索结果。

```json
{
    "recipient":{
        "id":"{{conversation_id}}"
    },
    "message":{
        "attachment":{
        "type":"template",
        "payload":{
            "template_type":"TEMPLATE-TYPE",
            "elements":[
                {
                    "title":"TEMPLATE-TITLE",
                    ...
                }
            ]
          }
        }
    }
}
```
### 按钮模板

按钮模板发送带有最多三个附加按钮的文本消息。此模板适用于为消息接收者提供选择，例如对问题的预定响应或采取的行动。

`type`: web_url, postback, phone_number, account_link（登录）, account_unlink（登出）

```json
{
    "template_type":"button",
    "text":"接下来你想做什么？",
    "buttons":[
        {
            "type":"web_url",
            "url":"https://www.github.com",
            "title":"访问 Github"
        },
        {
            "type":"postback",
            "title":"访问 Github",
            "payload": "<STRING_SENT_TO_WEBHOOK>"
        },
        {
            "type":"phone_number",
            "title":"<BUTTON_TEXT>",
            "payload":"<PHONE_NUMBER>"
        },
        {
            "type": "account_link",
            "url": "<YOUR_LOGIN_URL>"
        },
        {
            "type": "account_unlink"
        }
    ]
}
```

### 通用模板

通用模板是一种简单的结构化消息，包括标题、副标题、图像和最多三个按钮。您还可以指定一个 `default_action` 对象，当点击模板时，该对象会设置一个将在聊天网页视图中打开的 URL。

```json
{
    "template_type":"generic",
    "elements":[
        {
            "title":"欢迎！",
            "image_url":"https://raw.githubusercontent.com/fbsamples/original-coast-clothing/main/public/styles/male-work.jpg",
            "subtitle":"我们有适合每个人的帽子。",
            "default_action": {
                "type": "web_url",
                "url": "https://www.originalcoastclothing.com/",
                "webview_height_ratio": "tall"
        },
        "buttons":[
            {
                "type":"web_url",
                "url":"https://www.originalcoastclothing.com/",
                "title":"查看网站"
            }             
          ]      
        }
    ]
}
```

### 表单模板

表单模板用于从用户端收集信息，UI 允许用户填写结构化表单。

### 客户反馈模板
