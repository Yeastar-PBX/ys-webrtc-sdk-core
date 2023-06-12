# ys-webrtc-sdk-core
Yeastar WebRTC SDK,为Yeastar P系列PBX提供的二次开发Web工具包，集成PBX支持的通话功能，屏蔽复杂的WebRTC细节，为方便第三方快速部署应用，实现音视频通话功能。

## SDK选择
SDK提供 umd、cjs、esm、iife模块化格式，如果你注重sdk体积以及有现成的支持ESM的工程，建议使用ESM导入使用。

## Install
使用npm
```bash
npm install webrtc-sdk-core
```
使用script标签方式
```html
<script src="./ys-webrtc.umd.js"></script>
<script>
    // 加载成功后通过YSWebRTC对象进行初始化
    YSWebRTC.init({
        username: '1000',
        secret: 'sdkshajgllliiaggskjhf',
        pbxURL: 'https://192.168.1.1:8088'
    })
        .then(operator => {
            // 获得 PhoneOperator和PBXOperator 实例
            const { phone, pbx } = operator;
        })
        .catch(error => {
            console.log(error);
        });
</script>
```
## Getting started

下面用简化后的代码展现一个呼出和接听的大体流程。

```js
import { init } from 'ys-webrtc-sdk-core';

init({
    username: '1000',
    secret: 'sdkshajgllliiaggskjhf',
    pbxURL: 'https://192.168.1.1:8088'
})
    .then(operator => {
        // 获得 PhoneOperator和PBXOperator 实例
        const { phone, pbx } = operator;

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

## License
Copyright (c) 2023 Xiamen Yeastar Digital Technology Co., Ltd.
