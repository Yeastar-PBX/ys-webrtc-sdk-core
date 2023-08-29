# Result

The structure of the result object returned by the Yeastar WebRTC SDK is as shown below:
```js
{
    code: 0,
    msg: '',
}
```
Subclass of Result: CommonResult, PBXResult, and PhoneResult.
- CommonResult  
    Success code range: 0 to 99  
    Error code range:  -1 to -99
- PBXResult  
    Success code range: 100 to 199  
    Error code range:  -100 to -199
- PhoneResult  
    Success code range: 200 to 299  
    Error code range:  -200 to -299

## CommonResult

COMMON_ERROR  

| Code | Message | Description |
| ---- | ---- | ---- |
| -1 | UNKNOWN_ERROR | Unknown error. |
| -2 | INVALID_PBX_URL | Invalid PBX URL. |
| -3 | PBX_URL_NOT_HTTPS | The transfer protocol of the PBX URL is not HTTPS. |
| -4 | GET_PRODUCT_FAILED | Failed to retrieve the PRODUCT interface of  PBX . |

COMMON_SUCCESS

| Code | Message | Description |
| ---- | ---- | ---- |
| 0 | SUCCESS | Success. |

## PBXResult

PBX_ERROR

| Code | Message | Description |
| ---- | ---- | ---- |
| -100 | UNKNOWN_ERROR | Unknown error. |
| -101 | REGISTRY_FAILED | Registration failed. |
| -102 | PBX_NETWORK_ERROR | API request failed due to the network error on the client-side. |
| -103 | PBX_API_ERROR | API request failed due to the server-side error. |
| -104 | GET_PERSONAL_NOT_FOUND_DATA | PBX did NOT return extension information. |
| -105 | PBX_ALREADY_INITIALIZED | The PBX object is already initialized and should not be initialized again. |
| -106 | LINKUS_DISABLED | Linkus UC clients are disabled. |
| -107 | LOGGED_IN_ELSEWHERE | This account has been logged in elsewhere. |
| -108 | EXTENSION_DELETED | The extension has been deleted. |
| -109 | RE_LOGIN | You need to log in again. |
| -110 | SDK_PLAN_DISABLED | The SDK plan is disabled. |

PBX_SUCCESS

| Code | Message | Description |
| ---- | ---- | ---- |
| 100 | SUCCESS | Success. |

## PhoneResult

PHONE_ERROR

| Code | Message | Description |
| ---- | ---- | ---- |
| -200 | UNKNOWN_ERROR | Unknown error. |
| -201 | REGISTRY_FAILED | Registration failed. |
| -202 | GET_AGREE_CHROME_USER_MEDIA_ROLE_ERROR | Failed to retrieve media stream (Browser authorization are not granted). |
| -203 | GET_LOCAL_STREAM_ERROR | Failed to retrieve media stream. |
| -204 | RE_REGISTRY_MAX_LIMIT_TIMES | The maximum number of allowed re-registration attempts are reached. |
| -205 | MAX_LIMIT_CALL | The maximum number of concurrent calls are reached. |
| -206 | GET_LOCAL_MEDIA_INFO_ERROR | Failed to retrieve access to local media. |
| -207 | ATTENDED_PARENT_NOT_FOUND | Failed to find the parent call of the attended transfer call. |
| -208 | CALL_TOO_MANY_TIMES | Too many outgoing calls within one second. |
| -209 | INVALID_NUMBER | Invalid number. |
| -210 | CURRENT_CALL_HAS_NOT_CONNECTED | There is currently an unconnected call. |
| -211 | NOT_FOUND_CALL_ID | Failed to find the call ID. |
| -290 | NOT_FOUND_AUDIO_INPUT_DEVICE | Failed to find the audio input device. |
| -291 | NOT_FOUND_VIDEO_INPUT_DEVICE | Failed to find the video input device. |

PHONE_SUCCESS

| Code | Message | Description |
| ---- | ---- | ---- |
| 200 | SUCCESS | Success. |
