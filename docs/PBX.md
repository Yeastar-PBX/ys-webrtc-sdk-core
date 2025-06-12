# PBXOperator

This topic introduces the parameters and query methods of the PBXOperator object.

## Attributes 

| Attribute | Type | Description |
| ---- | ---- | ---- |
| secret | string | Login signature which can be obtained using the OPEN API. |
| username | string | Username (extension number). |
| token | string    | Access token after login. |
| url | URL | The URL for accessing your PBX system. |
| socket | WebSocket | Socket instance for receiving notifications, and monitoring PBX status changes in real-time. |
| extensionNumber | string | Extension number. |
| extensionId | string | Extension ID. |
| extensionName | string | Extension name. |

## Methods and Events
<details open>
<summary><strong>Methods</strong></summary>

init() 
> The initialization method is used within the Yeastar WebRTC SDK. After the initialization succeeds, subsequent calls to `init()` will return a `Promise.reject()`.  

Params: Null.

Returns: `Promise<Result>`.
****
on(eventName, callback)
> Listen for specific events.

Params: `eventName` (The event name), `listener` (Callback function).

Returns: Null.

****
cdrQuery(params) 
> Query the CDR.

Params:
``` ts
params: {
    page: number;
    size: number;
    status?: number; // 0: All, 1: Incoming call, 2: Missed call, 3: Outgoing call. 
    sortBy: 'time' | 'id';
    orderBy?: 'desc' | 'asc';
    filter?: string | null;
}
```
Returns: `Promise`.

Returns descriptions:
```ts
{
    errcode: 0,
    errmsg: "SUCCESS",
    personal_cdr_list: [ //CDR list.
        {
            id: 2546, //The sequence number of the record.
            date: "Today", //The date the call was made or received.
            time: "17:21:39", //The time the call was made or received.
            timestamp: 1686561699, //The timestamp of the time when the call was made or received.
            number: "1011", // Caller number. 
            number_type: "extension",
            extension: { //Extension information.
                ext_id: 25, //Extension ID.
                ext_num: "1011", //Extension number.
                caller_id_name: "cwt1011", //Extension name.
                photo: "", // Profile image ID. 
                status: 0, // Online status of the extension endpoints. 0: Offline, 1: Online.
                presence_status: "available", //Extension presence status.
                presence_information: "",
                first_name: "wt1011", //First name.
                last_name: "c", //Last name.
                email_addr: "", //Email address.
                mobile_number: "", //Mobile number.
                enb_vm: 0, //Whether the voicemail is enabled.
                vm_total_count: 0, //The total number of voicemail messages.
                vm_unread_count: 0, //The total number of unread voicemail messages.
                visable: 0,
                im_id: "xxxxx",
                org_list_info: "",
                is_favorite: 0,
                title: "" //Job title.
            },
            status: 3, // 0: All, 1: Incoming call, 2: Missed call, 3: Outgoing call.
            talk_duration: 3, //The time between the call answered and the call ended.
            call_type: "Internal", // Call type.
            uniqueid: "1686561699.137", // The unique ID of the CDR.
            disposition: "ANSWERED", // Call status: 'ANSWERED', 'NO ANSWER', 'BUSY', 'FAILED', and 'VOICEMAIL'.
            dcontext: "DLPN_DialPlan1010",
            caller_id: "1011", // Caller ID.
            clid: "\"cwt1010\" <1010>"
        }
    ],
    total_number: 63, //The total number of the queried CDR.
}
```
****
logout() 
> Log out.

Params: Null.

Returns: `Promise`.
****
destroy()
> Destroy the 'PBXOperator' object.

Params: Null.

Returns: `void`.
****
</details>

<details open>
<summary><strong>Events</strong></summary>

| Event name | Data | Description |
| ---- | ---- | ---- |
| cdrChange | [cdrNotifyData](#user-content-cdrnotifydata) | CDR update notification. When triggered, you should query CDR again. |
| runtimeError | PBXResult | Triggered when a runtime error occurs. See below. |

Example:
```ts
pbx.on('eventName', (data) => {})
```
### cdrNotifyData

```ts
{
    ext_num: '1001',
    personal_cdr: {
        date:"",
        time:"",
        timestamp: 1693201380, // Timestamp of the call. Accurate to the second. 
        number: "1001",
        talk_duration:0 // The time between the call answered and the call ended.
    }
}
```

### Runtime error

There might be runtime errors generated within the PBXOperator, triggering a 'runtimeError' event. You can utilize the `on` method to listen for the "runtimeError" event. 

The error details are provided below:

| Code | Message | Description |
| ---- | ---- | ---- |
| -106 | LINKUS_DISABLED | Linkus UC clients are disabled.           |
| -107 | LOGGED_IN_ELSEWHERE | The account has been logged in elsewhere. |
| -108 | EXTENSION_DELETED | The extension has been deleted. |
| -109 | RE_LOGIN | You need to log in again.                                    |
| -110 | SDK_PLAN_DISABLED | The SDK plan is disabled.                 |

</details>