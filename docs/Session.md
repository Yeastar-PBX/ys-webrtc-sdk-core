# Session 

**Session** is a call instance, which contains the call status,  methods to manage the call instance, and the related events.

## Parameters

| Parameter    | Type        | Description                                                  |
| ------------ | ----------- | ------------------------------------------------------------ |
| RTCSession   | RTCSession  | Call instance                                                |
| callReport   | Report      | Call quality report objects.                                 |
| agreeChangeVideo   | (params: AgreeChangeVideoParamsType) => Promise&lt;boolean&gt; | Is agree to change video call, [Usage](./Types.md#agreeChangeVideo-usage). If not provided, it will default to reject. |
| status       | CallStatus  | Call status, including name, number, image file, mute status, and other attributes. |
| incomingList | Session[]   | Incoming call array.                                         |
| timer        | TimerType   | Call timer.                                                  |
| localStream  | MediaStream | Local stream with video track only, no audio.                |
| remoteStream | MediaStream | Remote stream with both audio and video tracks.              |

## Methods and Events
<details open>
<summary><strong>Methods</strong></summary>

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
- [renegotiate](#session-renegotiate)
- [audioToVideo](#session-audioToVideo)
- [videoToAudio](#session-videoToAudio)
- [setStatus](#session-setStatus)
- [setStaticStatus](#session-setStaticStatus)
- [destroy](#session-destroy)
****
<a name="session-stopTimer"></a>
stopTimer()
> Stop the call timer.

Params: Null.

Returns: `this`. 
****

<a name="session-on"></a>
on(eventName:string,listener: (...args: any[]) => void)
> Listen for specific events.

Params: `eventName` (The event name), `listener` (Callback function).

Returns: `void`.
****
<a name="session-reject"></a>
reject() 
> Reject the call, which is equivalent to the `reject` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-answer"></a>
answer(option?: CallOptions, allowNoneCamera: boolean = true) 
> Answer the call, which is equivalent to the `answer` method of the **phone** object.

Params: `option` ([Call Options](./Types.md#calloptions)), `allowNoneCamera` (Whether to allow answering without a camera).

Returns: `Promise&lt;Result&gt;`.
****
<a name="session-hangup"></a>
hangup() 
> Hang up the call, which is equivalent to the `hangup` method of the **phone** object.

Params: `callId` (The unique ID of each call).

Returns: `void`.
****
<a name="session-blindTransfer"></a>
blindTransfer(number: string) 
> Perform a blind transfer, which is equivalent to the `blindtransfer` method of the **phone** object.

Params: `number` (The phone/extension number of the transfer target).

Returns: `void`.
****
<a name="session-attendedTransfer"></a>
attendedTransfer(number: string) 
> Perform an attended transfer, which is equivalent to the `attendedTransfer` method of the **phone** object.

Params: `number` (The phone/extension number of the transfer target).

Returns: `void`.
****
<a name="session-hold"></a>
hold() 
> Hold the call, which is equivalent to the `hold` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-unhold"></a>
unhold() 
> Unhold the call, which is equivalent to the `unhold` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-dtmf"></a>
dtmf(dtmf: string) 
> Send DTMF.

Params: `callId` (The unique ID of each call), `DTMF string (0123456789*#)` (Equivalent to the `dtmf` method of the **phone** object).

Returns: `void`.
****
<a name="session-mute"></a>
mute() 
> Mute the call, which is equivalent to the `mute` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-unmute"></a>
unmute() 
> Unmute the call, which is equivalent to the `unmute` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-startRecord"></a>
startRecord() 
> Start recording, which is equivalent to the `startRecord` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-pauseRecord"></a>
pauseRecord() 
> Pause the recording, which is equivalent to the `pauseRecord` method of the **phone** object.

Params: Null.

Returns: `void`.
****
<a name="session-terminate"></a>
terminate(type: 'hangup' | 'reject' | 'terminate' = 'terminate') 
> Terminate the call, which is equivalent to the `terminate` method of the **phone** object.

Params: `type` (Types of call termination).

Returns: `void`.
****
<a name="session-renegotiate"></a>
renegotiate(offerToReceiveVideo?: boolean) 
> Renegotiate the call.  

Params: `offerToReceiveVideo` (Whether to receive video).

Returns: `boolean`. 
****
<a name="session-audioToVideo"></a>
audioToVideo(allowNoneCamera: boolean = true) 
> Audio renegotiate to video.

Params: `allowNoneCamera` (Whether to allow without a camera).

Returns: `Promise&lt;Result&gt;`.  
****
<a name="session-videoToAudio"></a>
videoToAudio() 
> Video renegotiate to audio.

Params: Null.

Returns: `boolean`.  
****
<a name="session-setStatus"></a>
setStatus(status: Partial&lt;CallStatus&gt;) 
> Update the call status.

Params: `status` (The call status).

Returns: `this`.
****
<a name="session-setStaticStatus"></a>
setStaticStatus(staticStatus: Partial&lt;StaticCallStatus&gt;, startManualModel?: boolean) 
> Update the static data for call status.

Params: `staticStatus` (Static attributes), `startManualModel` (Enable manual mode. When this value is set as `true`, static attributes will not be automatically updated ).

Returns: `this`.
****
<a name="session-destroy"></a>
destroy() 
> Destroy the session, cancel all the event subscriptions, and stop the  RTCSession.

Params: Null.

Returns: Null.
****
</details>

<details open>
<summary><strong>Events</strong></summary>

callReport 
> The call quality report is updated, with a frequency of once every 3 seconds.

Params: `{ callId: string; callReport: Report }`
****

streamAdded 
> A media stream is added to the call.

Params: `{ callId: string; communicationType: "outbound" | "inbound", stream: MediaStream }`.
****

ended 
> The call is ended.

Params: `{callId: string, cause: string}`.
****
failed 
> Failed to initiate a call.

Params: `{callId: string, cause: string, code: number}`.
****
clientError 
> Errors occurred on the client,  resulting in the failure to initiate a call.

Params: `{callId: string, cause: string}`.
****
reinvite 
> One party performed an attended transfer call.

Params: `{callId: string, session: Session}`.

****
accepted 
> Received the success status response code **200 OK**.

Params: `{callId: string, session: Session}`.
****
confirmed 
> Received the response of **ACK packet**, indicating the session is confirmed.

Params: `{callId: string, session: Session}`.
****
statusChange
> The call status is changed.

Params: `newStatus`, `oldStatus`.
****
staticStatusChange
> The staticStatus is changed.

Params: `newStatus`, `oldStatus`.
****

</details>