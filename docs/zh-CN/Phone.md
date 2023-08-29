# PhoneOperator 类

该对象包含通话相关的方法和属性，主要用于管理通话。每通电话通过sessions属性缓存，sessions为一个Map<string, Session>, Session则是一个通话实例。

## 属性

| 属性名 | 类型 | 说明 |
| ---- | ---- | ---- |
| currentSessionID | string | 标识当前session的通话id |
| reRegistryPhoneTimes | number | 重新注册次数 |
| deviceIds | { cameraId?: string; microphoneId?: string;} | 音视频输入设备id |
| sessions | Map<string, Session> | 通话Session的缓存Map对象， key为callId。 |
| currentSession | Session | 当前通话Session |
| isRegistered | boolean | 是否注册成功 |
| recordPermissions | number | 录音权限 0 无权限 1暂停/恢复 2开始/暂停/恢复 |
| incomingList | session[] | 来电列表 |
| isMaxCall | boolean | 是否已达最大通话数量，最大同时进行两路通话 |

## 方法
- [on](#phone-on)
- [start](#phone-start)
- [reRegister](#phone-reRegister)
- [call](#phone-call)
- [reject](#phone-reject)
- [answer](#phone-answer)
- [hangup](#phone-hangup)
- [blindTransfer](#phone-blindTransfer)
- [attendedTransfer](#phone-attendedTransfer)
- [hold](#phone-hold)
- [unhold](#phone-unhold)
- [dtmf](#phone-dtmf)
- [mute](#phone-mute)
- [unmute](#phone-unmute)
- [startRecord](#phone-startRecord)
- [pauseRecord](#phone-pauseRecord)
- [terminate](#phone-terminate)
- [disconnect](#phone-disconnect)
- [getSession](#phone-getSession)
- [setCurrentSession](#phone-setCurrentSession)
- [getCurrentSession](#phone-getCurrentSession)
- [setSessionStaticStatus](#phone-setSessionStaticStatus)
- [destroy](#phone-destroy)
****
<a name="phone-on"></a>
on(eventName:string,listener: (...args: any[]) => void)
监听事件方法。

参数列表：eventName 事件名，listener回调函数 。

返回值：空。
****
<a name="phone-start"></a>
start() 开始注册SIP UA。注册成功后即可呼出和接听电话。注意需要监听的事件需要在此方法调用之前，否则会错失某些事件。

参数列表：空 。

返回值：空。
****
<a name="phone-reRegister"></a>
reRegister(authorizationUser: string, ha1: string) 重新注册SIP UA。该方法会在phone实例内部调用，外部程序无需调用，避免发生意外情况。

参数列表：authorizationUser 用户名，ha1 登录密文。

返回值：this。
****
<a name="phone-call"></a>
call(number: string, option?: CallOptions, transferId?: string) 呼出方法，当有transferId时则为咨询转通话，异步函数。

参数列表：number 号码，option 指定userMedia约束，transferId 咨询转通话id。

返回值：Promise&lt;Result&gt;。
****
<a name="phone-reject"></a>
reject(callId: string) 拒接。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-answer"></a>
answer(callId: string, option?: CallOptions) 接听。

参数列表：callId 通话唯一标识, option 指定userMedia约束。

返回值：Promise&lt;Result&gt;。
****
<a name="phone-hangup"></a>
hangup(callId: string) 挂断。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-blindTransfer"></a>
blindTransfer(callId: string, number: string) 盲转。

参数列表：callId 通话唯一标识，number 转出的号码。

返回值：boolean。
****
<a name="phone-attendedTransfer"></a>
attendedTransfer(callId: string, number: string) 咨询转出，用于当前通话正在咨询转接时。

参数列表：callId 通话唯一标识，number 转出的号码。

返回值：boolean。
****
<a name="phone-hold"></a>
hold(callId: string) 保持通话。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-unhold"></a>
unhold(callId: string) 取消保持。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-dtmf"></a>
dtmf(callId: string, dtmf: string) 发生dtmf。

参数列表：callId 通话唯一标识，dtmf字符串（0123456789*#）。

返回值：boolean。
****
<a name="phone-mute"></a>
mute(callId: string) 静音。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-unmute"></a>
unmute(callId: string) 取消静音。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-startRecord"></a>
startRecord(callId: string) 开始录音。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-pauseRecord"></a>
pauseRecord(callId: string) 暂停录音。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-terminate"></a>
terminate(callId: string, type: 'hangup' | 'reject' | 'terminate' = 'terminate') 结束通话。

参数列表：callId 通话唯一标识，type 结束类型。

返回值：boolean。
****
<a name="phone-disconnect"></a>
disconnect() 断开SIP UA的连接。

参数列表：空。

返回值：boolean。
****
<a name="phone-getSession"></a>
getSession() 获取sessions，以数组的形式返回。

参数列表：空。

返回值：boolean。
****
<a name="phone-setCurrentSession"></a>
setCurrentSession(callId: string) 设置currentSession。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="phone-getCurrentSession"></a>
getCurrentSession() 获取当前session。

参数列表：空。

返回值：Session。
****
<a name="phone-setSessionStaticStatus"></a>
setSessionStaticStatus(callId: string, staticStatus: Partial&lt;StaticCallStatus&gt;, startManualModel?: boolean) 更新session的status静态属性部分，静态属性有：name、avatar、company，详情可见 StaticCallStatus接口说明。

参数列表：callId 通话唯一标识，staticStatus静态属性，startManualModel 开启手动模式(设置true后将不会自动更新静态属性)。

返回值：boolean。
****
<a name="phone-destroy"></a>
destroy() 销毁phone，解除所有订阅事件，停止SIP UA实例，删除所有session。

参数列表：空。

返回值：空。
****
## 事件

connected 连接成功事件

参数列表：空。
****

disconnected 断开连接事件

参数列表：空。
****
registered 注册成功事件

参数列表：空。
****

registrationFailed 注册失败事件

参数列表：错误原因。
****
newRTCSession 创建新的session实例事件

参数列表：{callId: string, session: Session}。
****
incoming 来电事件

参数列表：{callId: string, session: Session}。
****
startSession 添加session至sessions事件

参数列表：{callId: string, session: Session}。
****
recordPermissionsChange 录音状态发生改变事件

参数列表：录音权限值。
****
deleteSession
删除session事件

参数列表：{ callId: string; cause: string }。
****
isRegisteredChange 注册状态发生改变事件

参数列表：注册状态boolean。
****

Session 对象请查看[详细说明文档](./Session.md)。
