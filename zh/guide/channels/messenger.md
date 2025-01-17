Messenger
==================

BotSharp 的 Facebook 集成允许您轻松创建一个基于 BotSharp 技术的 Facebook Messenger 机器人，具备自然语言理解能力。

**设置 Facebook**

为了为您的代理设置 Facebook 集成，您需要以下内容：

* 一个 Facebook 账户

* 一个要添加代理的 Facebook 页面

当用户访问您的页面并向您发送消息时，他们将与您的代理对话。

**创建一个 Facebook 应用**

1. 登录 `Facebook Developer Console`_。
2. 点击右上角的 **My Apps**。
3. 点击 **Add a New App** 并输入显示名称和联系电子邮件。
4. 点击 **Create App ID**。
5. 在下一页，点击 **Messenger** 选项的 **Set up** 按钮。
6. 在 **Token Generation** 部分，选择您的一个 Facebook 页面（如果不存在，请创建一个新页面）。

这将生成一个 **Page Access Token**。请妥善保管此令牌，因为您需要在 BotSharp 中输入它。

**设置 BotSharp**

1. 点击左侧菜单中的 Integrations 选项并打开 Facebook Messenger。在打开的对话框中，输入以下信息：
    * **Verify Token** - 这可以是任何字符串，仅供您使用
    * **Page Access Token** - 输入在 Facebook Developer Console 中生成的令牌
2. 或者编辑 App_Data\DbInitializer\Agents 下的 agents.json，更新 **Page Access Token** 和 **Verify Token**。
3. 点击 **Start** 按钮。

**Webhook 配置**

要配置您的代理的 webhook，请返回 Facebook Developer Console：

1. 点击 Webhooks 部分下的 Setup Webhooks 按钮并输入以下信息：
    * **Callback URL** - 这是 Facebook Messenger 集成页面上提供的 URL
    * **Verify Token** - 这是您创建的令牌
    * 在 Subscription Fields 下勾选 **messages** 和 **messaging_postbacks** 选项
2. 点击 **Verify and Save** 按钮。

**测试**

为了使您的代理可供测试，您需要将您的应用公开：

1. 点击 Facebook Developer Console 左侧菜单中的 **App Review**。
2. 点击 **Make APP_NAME public** 下的开关？系统会提示您选择应用的类别。
3. 从列表中选择 **Apps for Messenger**
4. 点击 **Confirm** 按钮。

您还需要为您的页面设置用户名。这是用户在使用您的代理时聊天的用户名。要设置用户名，请点击页面头像和标题下的 **Create Page @Username** 链接。

.. _Facebook Developer Console: https://developers.facebook.com