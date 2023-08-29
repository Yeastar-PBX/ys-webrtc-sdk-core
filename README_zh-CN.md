# ys-webrtc-sdk-core

[中文](./README_zh-CN.md) | [English](./README.md)  

Yeastar WebRTC SDK Core，为 Yeastar P 系列 PBX 提供的二次开发 Web 工具包，集成 PBX 支持的通话功能，屏蔽复杂的 WebRTC 细节，为方便第三方快速部署应用，实现音视频通话功能。

- [ys-webrtc-sdk-core](#ys-webrtc-sdk-core)
    - [react demo](https://codesandbox.io/s/ys-webrtc-sdk-core-use-react-example-z7fq8w?file=/src/App.js)
    - [获取签名流程](./docs/zh-CN/CreateSign.md)
    - [PBXOperator](./docs/zh-CN/PBX.md)
    - [PhoneOperator](./docs/zh-CN/Phone.md)
    - [Session](./docs/zh-CN/Session.md)
    - [Result](./docs/zh-CN/Result.md)
    - [Types](./docs/zh-CN/Types.md)

## SDK 选择

SDK 提供 umd、cjs、esm、iife 模块化格式，如果你注重 sdk 体积以及有现成的支持 ESM 的工程，建议使用 ESM 导入使用。

## Install

使用 npm

```bash
npm install ys-webrtc-sdk-core
```

使用 script 标签方式

```html
<script src="./ys-webrtc.umd.js"></script>
<script>
  // 加载成功后通过YSWebRTC对象进行初始化
  YSWebRTC.init({
    username: '1000',
    secret: 'sdkshajgllliiaggskjhf',
    pbxURL: 'https://192.168.1.1:8088',
  })
    .then((operator) => {
      // 获得 PhoneOperator和PBXOperator实例和destroy方法
      const { phone, pbx, destroy } = operator;
    })
    .catch((error) => {
      console.log(error);
    });
</script>
```

## Getting started

下面用简化后的代码展现一个呼出和接听的大体流程。

```js
import { init, on } from 'ys-webrtc-sdk-core';

init({
    username: '1000',
    secret: 'sdkshajgllliiaggskjhf',
    pbxURL: 'https://192.168.1.1:8088'
})
    .then(operator => {
        // 获得 PhoneOperator和PBXOperator实例和destroy方法
      	const { phone, pbx, destroy } = operator;

        // 创建RTC实例
        phone.on('newRTCSession', ({callId,session})=>{
            const {status} = session

            // 开始监听session中的事件
            session.on('confirmed', {callId,session})=>{
                // 通话成功接通，session.status.callStatus进入talking状态
                // 界面更新，开始通话计时
            })

        })
        // 订阅startSession事件
        phone.on('startSession',({callId,session})=>{
            const {status} = session
            if(status.communicationType === 'outbound') {
                // 去电
                // 界面更新，对方响铃中
            }else{
                // 来电
                // 界面更新，连接中
            }

        });

        // 来电事件
        phone.on('incoming', (callId,session)=>{
            const {status} = session
            // 界面弹出来电框，呈现来电号码，联系人名字
            // ...
            // 点击接听按钮，调用answer方法，随后触发startSession事件
            phone.answer(status.number);
        });

        // 事件订阅后，开始创建SIP UA连接（想象成手机开机了~）
        phone.start();

        // ...
        // 点击呼出按钮，呼叫1001
        phone.call('1001')

    })
    .catch(error => {
        console.log(error);
    });
```
sdk对外暴露init方法，init方法用于初始化sdk。  
sdk通过init方法进行初始化，初始化成功后会的到两个实例化后的Operator对象：[PhoneOperator](./docs/zh-CN/Phone.md)和[PBXOperator](./docs/zh-CN/PBX.md)。  
PhoneOperator 对象包含通话相关的方法和属性，如：call、hangup等方法。  
PBXOperator 对象包含PBX的相关方法和属性，如：查询cdr。  

## init参数  

| 属性名 | 类型 | 是否必填 | 说明 |
| ---- | ---- | ---- | ---- |
| username | string | 必填 | 分机号。 |
| secret | string | 必填 | 登录签名，通过OPEN API获取。[获取签名流程](./docs/zh-CN/CreateSign.md) |
| pbxURL | URL \| string | 必填 | PBX的访问地址可以为URL对象，地址要求包含协议以及端口如：https://192.168.1.1:8088或 https://xx.xxx.com。 |
| enableLog | boolean | 可选 | 是否开启日志输出以及错误日志上报至PBX，默认开启。 |
| reRegistryPhoneTimes | number | 可选 | 尝试重新连接sip服务次数，默认无限制。 |
| userAgent | "WebPC" \| "WebClient" | 可选 | asterisk的ua，用于代表哪个客户端， 默认WebClient。 |
| deviceIds | { cameraId?: string; microphoneId?: string;} | 可选 | 指定音视频输入设备id，包含摄像头id和麦克风id。 |
| disableCallWaiting | boolean | 可选 | 是否禁用callWaiting，为true时不使用pbx callWaiting值且只处理单通电话。 |

## 铃声资源

文件见 **[assets](./assets/)** 目录。
铃声资源以两种形式提供：一是音频原文件，二是base64编码后的字符串。
| name | describe |
| ---- | ---- |
| Ring | 来电铃声 |
| Callend | 通话结束提示音 |
| Callwaiting | 呼叫等待提示音 |
| ringback | 去电中的提示音 |
| DTMF00 | 按键 0 提示音 |
| DTMF01 | 按键 1 提示音 |
| DTMF02 | 按键 2 提示音 |
| DTMF03 | 按键 3 提示音 |
| DTMF04 | 按键 4 提示音 |
| DTMF05 | 按键 5 提示音 |
| DTMF06 | 按键 6 提示音 |
| DTMF07 | 按键 7 提示音 |
| DTMF08 | 按键 8 提示音 |
| DTMF09 | 按键 9 提示音 |
| DTMFStar | 按键 * 提示音 |
| DTMFPound | 按键 # 提示音 |

使用base64方式如下：
```js
import sounds from '/assets/sounds';
const { Ring, Callend } = sounds;
const audio = new Audio(Ring);
audio.play();

// 改变audio的src，播放不同的铃声
audio.src = Callend;
audio.play();
```

## License

Copyright (c) 2023 Xiamen Yeastar Digital Technology Co., Ltd.
