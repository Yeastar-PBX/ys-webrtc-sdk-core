# PhoneOperator

The PhoneOperator is an object used for call management, which contains the attributes and methods related to calls. Each call is cached through the sessions attribute, which is a `Map<string, Session>`, and represents a call instance.

## Attributes

| Attributes | Type | Description |
| ---- | ---- | ---- |
| currentSessionID | string | ID of the current session. |
| reRegistryPhoneTimes | number | The number of attempts to reconnect to the SIP service. |
| deviceIds | { cameraId?: string; microphoneId?: string;} | IDs of the audio and video input devices.                    |
| sessions | Map<string, Session> | Caching `Map` object for call sessions, with the `callId` as the key. |
| currentSession | Session | Current call session. |
| isRegistered | boolean | Whether the registration was successful. |
| recordPermissions | number | Permission for call recording:<br /> `0`: No permission, `1`: Pause/Resume recording, `2`: Start/Pause/Resume recording. |
| incomingList | session[] | The list of the incoming calls. |
| isMaxCall | boolean | Whether it reaches the maximum number of concurrent calls (2 concurrent calls). |

## Methods

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
Listen for specific events.

Request parameters: `eventName` (The event name), `listener` (Callback function).

Response parameters: Null.
****
<a name="phone-start"></a>
start() 

Start registering SIP UA. After the registration succeeds, UA can make and receive calls. 

**Note**: Listen for desired events before registering SIP UA, otherwise, some events may be missed.

Request parameters: Null.

Response parameters: Null.
****
<a name="phone-reRegister"></a>
reRegister(authorizationUser: string, ha1: string) 

Re-register SIP UA.

**Note**: Use this method within the 'phone' instance only to avoid unexpected situations. 

Request parameters: `authorizationUser` (User name), `ha1` (Login password).

Response parameters: `this`.
****
<a name="phone-call"></a>
call(number: string, option?: CallOptions, transferId?: string) 

Make an outgoing call.

When there is a `transferId` provided, then PBX performs an attented transfer.

**Note**: This method is an asynchronous function.

Request parameters: `number ` (Phone number or extension number), `option` (`userMedia` constraints), `transferId ` (ID of the attended transfer call).

Response parameters: `Promise<Result>`.
****
<a name="phone-reject"></a>
reject(callId: string) 

Reject the call.

Request parameters: `callID` (The unique ID of each call).

Response parameter type: `boolean`. 
****
<a name="phone-answer"></a>
answer(callId: string, option?: CallOptions) 

Answer the call.

Request parameters: `callID` (The unique ID of each call), `option` (`userMedia` constraints).

 Response parameters: `Promise<Result>`.
****
<a name="phone-hangup"></a>
hangup(callId: string) 

Hang up the call. 

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-blindTransfer"></a>
blindTransfer(callId: string, number: string) 

Perform a blind transfer.

Request parameters: `callId` (The unique ID of each call), `number` (The phone/extension number of the transfer target).

Response parameter type: `boolean`.
****
<a name="phone-attendedTransfer"></a>
attendedTransfer(callId: string, number: string) 

Perform an attended transfer. 

Request parameters: `callId` (The unique ID of each call), `number` (The phone/extension number of the transfer target).

Response parameter type: `boolean`.
****
<a name="phone-hold"></a>
hold(callId: string) 

Hold the call.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-unhold"></a>
unhold(callId: string) 

Unhold the call.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-dtmf"></a>
dtmf(callId: string, dtmf: string) 

Send DTMF.

Request parameters: `callId` (The unique ID of each call), `DTMF string (0123456789*#)`.

Response parameter type: `boolean`.
****
<a name="phone-mute"></a>
mute(callId: string) 

Mute the call.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-unmute"></a>
unmute(callId: string) 

Unmute the call.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-startRecord"></a>
startRecord(callId: string) 

Start recording.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-pauseRecord"></a>
pauseRecord(callId: string) 

Pause the recording.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-terminate"></a>
terminate(callId: string, type: 'hangup' | 'reject' | 'terminate' = 'terminate') 

Terminate the call.

Request parameters: `callId` (The unique ID of each call), `type` (Types of call termination).

Response parameter type: `boolean`.
****
<a name="phone-disconnect"></a>
disconnect() 

Disconnect the SIP UA.

Request parameters: Null.

Response parameter type: `boolean`.
****
<a name="phone-getSession"></a>
getSession() 

Retrieve the sessions and return them as an array.

Request parameters: Null.

Response parameter type: `boolean`.
****
<a name="phone-setCurrentSession"></a>
setCurrentSession(callId: string) 

Set the `currentSession`.

Request parameters: `callId` (The unique ID of each call).

Response parameter type: `boolean`.
****
<a name="phone-getCurrentSession"></a>
getCurrentSession() 

Retrieve the current session.

Request parameters: Null.

Response parameters: `Session`.
****
<a name="phone-setSessionStaticStatus"></a>
setSessionStaticStatus(callId: string, staticStatus: Partial&lt;StaticCallStatus&gt;, startManualModel?: boolean) 

Update the static data for call status, which includes 'name', 'avatar', and 'company'. For more information, see the interface **StaticCallStatus** in [Types](Types.md).

Request parameters: `callId` (The unique ID of each call), `staticStatus` (Static attributes), and `startManualModel` (Enable manual mode. When this value is set as `true`, static attributes will not be automatically updated ).

Response parameter type: `boolean`.
****
<a name="phone-destroy"></a>
destroy() 

Destroy the phone object, cancel all the event subscriptions, stop the  SIP UA instance, and delete all the sessions.

Request parameters: Null.

Response parameters: Null.
****
## Events

connected 

Connected to the SIP service.

Report parameters: Null.
****

disconnected 

Disconnected the SIP service.

Report parameters: Null.
****
registered 

SIP UA registration succeeded.

Report parameters: Null.
****

registrationFailed 

SIP UA registration failed.

Report parameters: Error messages.
****
newRTCSession 

A new session instance is created.

Report parameters: `{callId: string, session: Session}`.
****
incoming 

There is an incoming call.

Report parameters: `{callId: string, session: Session}`.
****
startSession 

A session is added to the 'sessions' property of PhoneOperator.

Report parameters: `{callId: string, session: Session}`.
****
recordPermissionsChange 

The recording permission is changed. 

Report parameters: Recording permission value.
****
deleteSession
A session is deleted.

Report parameters: `{callId: string; cause: string }`.
****
isRegisteredChange 

The SIP UA registration status is changed.

Report parameters: `boolean` (Registration status).
****

For more information about the Session object, see [Session](./Session.md).
