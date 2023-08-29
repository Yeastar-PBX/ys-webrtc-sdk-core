# Session 类

该对象为通话实例，拥有通话状态以及操作通话实例的方法和事件。

## 属性

| 属性名       | 类型        | 说明                                           |
| ------------ | ----------- | ---------------------------------------------- |
| RTCSession   | RTCSession  | 通话实例                                       |
| callReport   | Report      | 通话质量统计对象                               |
| status       | CallStatus  | 通话状态，包含名字、号码、头像、是否静音等属性 |
| incomingList | Session[]   | 来电数组                                       |
| timer        | TimerType   | 通话计时器                                     |
| localStream  | MediaStream | 本地流，仅含视频轨，不含音频。                 |
| remoteStream | MediaStream | 远端流，包含音视频轨                           |

## 方法
- [stopTimer](#session-stopTimer)
- [on](#session-on)
- [reject](#session-reject)
- [answer](#session-answer)
- [hangup](#session-hangup)
- [blindTransfer](#session-blindTransfer)
- [attendedTransfer](#session-attendedTransfer)
- [hold](#session-hold)
- [unhold](#session-unhold)
- [dtmf](#session-dtmf)
- [mute](#session-mute)
- [unmute](#session-unmute)
- [startRecord](#session-startRecord)
- [pauseRecord](#session-pauseRecord)
- [terminate](#session-terminate)
- [setStatus](#session-setStatus)
- [setStaticStatus](#session-setStaticStatus)
- [destroy](#session-destroy)
****

<a name="session-stopTimer"></a>
stopTimer()
停止通话计时。

参数列表：空。

返回值：this。
****

<a name="session-on"></a>
on(eventName:string,listener: (...args: any[]) => void)
监听事件方法。

参数列表：eventName 事件名，listener回调函数 。

返回值：空。
****
<a name="session-reject"></a>
reject() 拒接， 等价phone对象的reject。

参数列表：空。

返回值：boolean。
****
<a name="session-answer"></a>
answer(option?: CallOptions) 接听， 等价phone对象的answer。

参数列表: option 指定userMedia约束。

返回值：Promise&lt;Result&gt;。
****
<a name="session-hangup"></a>
hangup() 挂断， 等价phone对象的hangup。

参数列表：callId 通话唯一标识。

返回值：boolean。
****
<a name="session-blindTransfer"></a>
blindTransfer(number: string) 盲转， 等价phone对象的blindTransfer。

参数列表：number 转出的号码。

返回值：boolean。
****
<a name="session-attendedTransfer"></a>
attendedTransfer(number: string) 咨询转出，用于当前通话正在咨询转接时， 等价phone对象的attendedTransfer。

参数列表：number 转出的号码。

返回值：boolean。
****
<a name="session-hold"></a>
hold() 保持通话， 等价phone对象的hold。

参数列表：空。

返回值：boolean。
****
<a name="session-unhold"></a>
unhold() 取消保持， 等价phone对象的unhold。

参数列表：空。

返回值：boolean。
****
<a name="session-dtmf"></a>
dtmf(dtmf: string) 发生dtmf。

参数列表：callId 通话唯一标识，dtmf字符串（0123456789*#）， 等价phone对象的dtmf。

返回值：boolean。
****
<a name="session-mute"></a>
mute() 静音， 等价phone对象的mute， 等价phone对象的mute。

参数列表：空。

返回值：boolean。
****
<a name="session-unmute"></a>
unmute() 取消静音， 等价phone对象的unmute。

参数列表：空。

返回值：boolean。
****
<a name="session-startRecord"></a>
startRecord() 开始录音， 等价phone对象的startRecord。

参数列表：空。

返回值：boolean。
****
<a name="session-pauseRecord"></a>
pauseRecord() 暂停录音， 等价phone对象的pauseRecord。

参数列表：空。

返回值：boolean。
****
<a name="session-terminate"></a>
terminate(type: 'hangup' | 'reject' | 'terminate' = 'terminate') 结束通话， 等价phone对象的terminate。

参数列表：type 结束类型。

返回值：boolean。
****
<a name="session-setStatus"></a>
setStatus(status: Partial&lt;CallStatus&gt;) 更新通话状态。

参数列表：status 通话状态对象。

返回值：this。
****
<a name="session-setStaticStatus"></a>
setStaticStatus(staticStatus: Partial&lt;StaticCallStatus&gt;, startManualModel?: boolean) 更新status静态数据。

参数列表：staticStatus静态属性，startManualModel 开启手动模式(设置true后将不会自动更新静态属性)。

返回值：this。
****
<a name="session-destroy"></a>
destroy() 销毁Session，解除所有订阅事件，停止RTCSession。

参数列表：空。

返回值：空。
****
## 事件

callReport 通话质量报告更新事件，每3秒更新一次。

参数列表：{ callId: string; callReport: Report }。
****

streamAdded 添加流事件

参数列表：{ callId: string; communicationType: "outbound" | "inbound", stream: MediaStream }。
****

ended 通话结束

参数列表：{callId: string, cause: string}。
****
failed 通话失败

参数列表：{callId: string, cause: string, code: number}。
****
clientError 客户端错误事件，导致无法发起通话。

参数列表：{callId: string, cause: string}。
****
reinvite 重新邀请事件，对端咨询转接时会触发该事件

参数列表：{callId: string, session: Session}。

****
accepted 收到200 ok。

参数列表：{callId: string, session: Session}。
****
confirmed 收到ack包，通话正式确定。

参数列表：{callId: string, session: Session}。
****
statusChange status发生变化时会触发该事件。

参数列表：newStatus, oldStatus
****
staticStatusChange staticStatus发生变化时会触发该事件。

参数列表：newStatus, oldStatus
****
