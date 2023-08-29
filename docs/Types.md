# Other Types, Objects, and Interfaces

This topic introduces the types, objects, and interfaces within the Yeastar WebRTC SDK. 

## Report

Call quality report objects.

```ts
interface Report {
    lksTimestamp: string; // The timestamp of the time when the call was made or received.
    lksDate: string; // The time the call was made or received. Time format: YYYY-MM-DD hh:mm:ss.
    callId: string; // The unique ID of the call.
    extension: string; // Extension number.
    iceResult: string; // The ICE candidate type. local: host, public: srflx or prflx, turn: relay.
    lksNetworkType: string; // Network type.
    lksDeviceType: string; // The client type. Currently only web client is available.
    lksDuration: string; //  Correspond to the attribute of 'totalSamplesDuration'.
    lksAudioCodec: string; // Audio codec.
    lksAudioRx: string; // The received audio packets that correspond to the 'packetsReceived' attribute.
    lksAudioRxLost: string; // The audio packet loss rate that corresponds to the 'packetsLost' attribute. Formula: lksAudioRxLost=(packetsLost / (packetsLost + packetsReceived)).toFixed(6)
    lksAudioRxMaxjitter: string; // The maximum audio jitter.
    lksAudioRxAvgjitter: string; // The average audio jitter that corresponds to the attribute of "Jitter*1000".
    lksAudioTx: string; // The sent audio packet.
    lksAudioTxLost: string; // Packet loss on the sender.
    lksAudioTxMaxjitter: string; // The maximum jitter on the sender.
    lksAudioTxAvgjitter: string; // The average jitter on the sender.
    lksVideoCodec: string; // Video codec.
    lksVideoRx: string; // The received video packet.
    lksVideoRxLost: string; // The video packet loss rate that corresponds to the 'packetsLost' attribute. Formula: lksVideoRxLost=(packetsLost / (packetsLost + packetsReceived)).toFixed(6).
    lksVideoRxMaxjitter: string;
    lksVideoRxAvgjitter: string;
    lksVideoTx: string; // The sent video packet.
    lksVideoTxLost: string;
    lksVideoTxMaxjitter: string;
    lksVideoTxAvgjitter: string;
}
```
## StaticCallStatus

```ts
interface StaticCallStatus {
    name: string; // Contact name.
    avatar: string; // Image file.
    company: string; // Company name.
}
```

## CallStatus

```ts
interface CallStatus extends StaticCallStatus{
    number: string; // Phone number or extension number 
    callId: string; // The unique ID of each call.
    communicationType: 'outbound' | 'inbound'; // The call type
    isVideo: boolean; //Whether it is a video call. 
    isRing: boolean;
    isHold: boolean;
    isMute: boolean;
    callStatus: 'ringing' | 'calling' | 'talking' | 'connecting';
    callStartTime: number; // The start time of the call being answered.
    recordStatus: 'stop' | 'recording' | 'pause'; // Recording status. stop: Not in recording, recording: Recording, pause: Recording is paused.
    isTransfer: boolean; // Whether it is an attended call transfer.
    transferParent?: TransferParentType;
    isConference: boolean; // Whether it is a conference call.
}

type TransferParentType = {
    // Parent call in the attended transfer call.
    callId: string;
    avatar: string;
    name: string;
    number: string;
    callDuration: number; // The time between the call answered and the call ended. 
    holdDuration: number; // The duration of the call being held.
}
```

## TimerType

```ts
type TimerType = {
    ringDuration: number; // The time between the call started and the call answered.
    callingDuration: number; // The time between the caller dialing the call and the callee answering the call.
    callDuration: number; // The time between the call answered and the call ended. 
    holdDuration: number; // The duration of the call being held.
}
```

## Result

For more information, see [Result](./Result.md).