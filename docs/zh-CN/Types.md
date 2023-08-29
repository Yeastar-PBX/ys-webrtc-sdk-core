# 其他类型、对象、接口

介绍sdk中使用到的类型、对象、接口。

## Report

通话质量报告对象

```ts
interface Report {
    lksTimestamp: string; // 接听或拨打时的时间戳字符串
    lksDate: string; // 接听或拨打时的日期 格式 YYYY-MM-DD hh:mm:ss
    callId: string; // 通话唯一id
    extension: string; // 分机号
    iceResult: string; // ice 类型：local（对应host）、 public（对应srflx或prflx）、 turn（对应relay）
    lksNetworkType: string; // 网络类型
    lksDeviceType: string; // 客户端类型：目前只有web
    lksDuration: string; // 对应 totalSamplesDuration属性
    lksAudioCodec: string; // 音频编码
    lksAudioRx: string; // 收到的音频包，对应packetsReceived属性
    lksAudioRxLost: string; // 音频丢包率，对应packetsLost属性，计算公式lksAudioRxLost=(packetsLost / (packetsLost + packetsReceived)).toFixed(6)
    lksAudioRxMaxjitter: string; // 音频接收最大抖动
    lksAudioRxAvgjitter: string; // 音频平均抖动，对应jitter*1000
    lksAudioTx: string; // 发送的音频包
    lksAudioTxLost: string; // 发送端的丢包
    lksAudioTxMaxjitter: string; // 发送端的最大抖动
    lksAudioTxAvgjitter: string; // 发送端的平均抖动
    lksVideoCodec: string; // 视频编码
    lksVideoRx: string; // 收到的视频包
    lksVideoRxLost: string; // 视频丢包率， 对应packetsLost属性，计算公式lksVideoRxLost=(packetsLost / (packetsLost + packetsReceived)).toFixed(6)
    lksVideoRxMaxjitter: string;
    lksVideoRxAvgjitter: string;
    lksVideoTx: string; // 发送的视频包
    lksVideoTxLost: string;
    lksVideoTxMaxjitter: string;
    lksVideoTxAvgjitter: string;
}
```
## StaticCallStatus

```ts
interface StaticCallStatus {
    name: string; // 联系人名
    avatar: string; // 头像
    company: string; // 公司名
}
```

## CallStatus

```ts
interface CallStatus extends StaticCallStatus{
    number: string; // 电话号码
    callId: string; // 通话id，唯一标识
    communicationType: 'outbound' | 'inbound'; // 去电outbound;来电inbound
    isVideo: boolean; //是否为视频电话
    isRing: boolean;
    isHold: boolean;
    isMute: boolean;
    callStatus: 'ringing' | 'calling' | 'talking' | 'connecting';
    callStartTime: number; // 通话开始时间
    recordStatus: 'stop' | 'recording' | 'pause'; // stop:未在录音 recording:正在录音 pause:暂停录音
    isTransfer: boolean; // 是否为咨询转
    transferParent?: TransferParentType;
    isConference: boolean; // 是否为会议室，于20048通知中更新
}

type TransferParentType = {
    // 咨询转的父通话
    callId: string;
    avatar: string;
    name: string;
    number: string;
    callDuration: number; // 通话时常
    holdDuration: number; // 通话时常
}
```

## TimerType

```ts
type TimerType = {
    ringDuration: number; // 响铃时长
    callingDuration: number; // 呼叫中时长：外呼到对方接起的时长
    callDuration: number; // 通话中时长
    holdDuration: number; // 保持时长
}
```

## Result

详细见[Result](./Result.md)