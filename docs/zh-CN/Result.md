# Result对象

sdk返回的结果对象，其结构为：
```js
{
    code: 0,
    msg: '',
}
```
Result的子类：CommonResult、PBXResult、PhoneResult。
- CommonResult  
    正确代码范围 0 至 99  
    错误代码范围 -1 至 -99
- PBXResult  
    正确代码范围 100 至 199  
    错误代码范围 -100 至 -199
- PhoneResult  
    正确代码范围 200 至 299  
    错误代码范围 -200 至 -299

## CommonResult

COMMON_ERROR  

| code | msg | describe |
| ---- | ---- | ---- |
| -1 | UNKNOWN_ERROR | 未知错误 |
| -2 | INVALID_PBX_URL | pbxURL 不合法 |
| -3 | PBX_URL_NOT_HTTPS | pbxURL 不是https |
| -4 | GET_PRODUCT_FAILED | 获取PBX PRODUCT接口失败 |

COMMON_SUCCESS

| code | msg | describe |
| ---- | ---- | ---- |
| 0 | SUCCESS | 成功 |

## PBXResult

PBX_ERROR

| code | msg | describe |
| ---- | ---- | ---- |
| -100 | UNKNOWN_ERROR | 未知错误 |
| -101 | REGISTRY_FAILED | 注册失败 |
| -102 | PBX_NETWORK_ERROR | PBX接口请求错误 |
| -103 | PBX_API_ERROR | PBX接口错误，返回的错误不等于0 |
| -104 | GET_PERSONAL_NOT_FOUND_DATA | PBX未返回分机信息 |
| -105 | PBX_ALREADY_INITIALIZED | PBX对象已初始化过，不许重复初始化 |
| -106 | LINKUS_DISABLED | linkus 客户端未开启 |
| -107 | LOGGED_IN_ELSEWHERE | 在别处登录了 |
| -108 | EXTENSION_DELETED | 分机被删除了 |
| -109 | RE_LOGIN | 重新登录 |
| -110 | SDK_PLAN_DISABLED | sdk plan未启用 |

PBX_SUCCESS

| code | msg | describe |
| ---- | ---- | ---- |
| 100 | SUCCESS | 成功 |

## PhoneResult

PHONE_ERROR

| code | msg | describe |
| ---- | ---- | ---- |
| -200 | UNKNOWN_ERROR | 未知错误 |
| -201 | REGISTRY_FAILED | 注册失败 |
| -202 | GET_AGREE_CHROME_USER_MEDIA_ROLE_ERROR | 获取媒体流失败（未获得浏览器授权） |
| -203 | GET_LOCAL_STREAM_ERROR | 获取媒体流失败 |
| -204 | RE_REGISTRY_MAX_LIMIT_TIMES | 已达最大重试次数 |
| -205 | MAX_LIMIT_CALL | 已达最大通话数 |
| -206 | GET_LOCAL_MEDIA_INFO_ERROR | 获取本地媒体设备错误 |
| -207 | ATTENDED_PARENT_NOT_FOUND | 咨询转父节点未找到 |
| -208 | CALL_TOO_MANY_TIMES | 1秒钟内呼出太多次 |
| -209 | INVALID_NUMBER | 非法号码 |
| -210 | CURRENT_CALL_HAS_NOT_CONNECTED | 当前有未接通的电话 |
| -211 | NOT_FOUND_CALL_ID | 未找到通话id |
| -290 | NOT_FOUND_AUDIO_INPUT_DEVICE | 未找到音频输入设备 |
| -291 | NOT_FOUND_VIDEO_INPUT_DEVICE | 未找到视频输入设备 |

PHONE_SUCCESS

| code | msg | describe |
| ---- | ---- | ---- |
| 200 | SUCCESS | 成功 |
