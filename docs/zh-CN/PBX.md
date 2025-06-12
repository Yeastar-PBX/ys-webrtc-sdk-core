# PBXOperator 类

包含PBX相关属性以及查询方法。
## 属性
| 属性名 | 类型 | 说明 |
| ---- | ---- | ---- |
| secret | string | 登录签名，通过OPEN API获取。 |
| username | string | 用户名（同分机号） |
| token | string    | 登录后的访问令牌 |
| url | URL | PBX地址的URL对象 |
| socket | WebSocket | 用于接收消息通知socket实例，实时监听pbx部分状态变更 |
| extensionNumber | string | 分机号 |
| extensionId | string | 分机id |
| extensionName | string | 分机名 |

## 方法和事件
<details open>
<summary><strong>方法</strong></summary>

init() 
> 初始化方法，sdk内部会调用，初始化成功后再次调用会返回Promise.reject。

参数列表: 空。

返回值：Promise&lt;Result&gt;。

****

on(eventName, listener)
> 监听事件方法。

参数列表：eventName 事件名，listener回调函数 。

返回值：void。

****
cdrQuery(params) 
> 查询cdr方法。

参数列表:
``` ts
params: {
    page: number;
    size: number;
    status?: number; // 0:所有 1呼入 2未接来电 3呼出
    sortBy: 'time' | 'id';
    orderBy?: 'desc' | 'asc';
    filter?: string | null;
}
```
返回值：Promise。

返回字段说明：
```ts
{
    errcode: 0,
    errmsg: "SUCCESS",
    personal_cdr_list: [ // cdr列表
        {
            id: 2546, // 通话记录的序号。
            date: "Today", // 通话日期
            time: "17:21:39", // 接听或拨打该通通话的时间。
            timestamp: 1686561699, // 通话记录时间的时间戳。
            number: "1011", // 通话号码
            number_type: "extension",
            extension: { // 分机信息
                ext_id: 25, // 分机id
                ext_num: "1011", // 分机号
                caller_id_name: "cwt1011", // 分机名
                photo: "", // 头像id
                status: 0, // 分机的终端在线状态 0离线 1在线
                presence_status: "available", // 在线状态
                presence_information: "",
                first_name: "wt1011", // 名
                last_name: "c", // 姓
                email_addr: "", // 邮箱地址
                mobile_number: "", // 手机号
                enb_vm: 0, // 是否启用了语音信箱
                vm_total_count: 0, // 语音信箱总数
                vm_unread_count: 0, // 语音信箱未读数
                visable: 0,
                im_id: "xxxxx",
                org_list_info: "",
                is_favorite: 0,
                title: "" // 职位
            },
            status: 3, // 0:所有 1呼入 2未接来电 3呼出
            talk_duration: 3, // 通话被应答到通话结束的时间。
            call_type: "Internal", // 呼叫类型：Internal内线，External外线
            uniqueid: "1686561699.137", // 通话记录唯一id
            disposition: "ANSWERED", // 通话状态。ANSWERED：已接，NO ANSWER：未接，BUSY：忙，FAILED：失败，VOICEMAIL：语音留言
            dcontext: "DLPN_DialPlan1010",
            caller_id: "1011", // 呼叫方分机号
            clid: "\"cwt1010\" <1010>"
        }
    ],
    total_number: 63, // 总数
}
```
****
logout() 
> 登出方法

参数列表: 空。

返回值：Promise。
****
destroy()
> 销毁方法，销毁PBXOperator实例。

参数列表: 空。

返回值：void。
****
</details>

<details open>
<summary><strong>事件</strong></summary>

| 事件名 | Data | 描述 |
| ---- | ---- | ---- |
| cdrChange | [cdrNotifyData](#user-content-cdrnotifydata) | CDR 更新通知。该事件触发时需要手动调用cdr查询方法。 |
| runtimeError | PBXResult | 运行时错误. 有可能发生的错误见下方 Runtime Error。 |

示例:
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
        timestamp: 1693201380, // 通话建立的时间戳，精确到秒 
        number: "1001",
        talk_duration:0 // 通话时长。
    }
}
```

### Runtime Error
PBXOperator内部会抛出运行时错误，通过on方法监听，事件名 "runtimeError"，错误码如下：

| code | msg | describe |
| ---- | ---- | ---- |
| -106 | LINKUS_DISABLED | linkus 客户端未开启 |
| -107 | LOGGED_IN_ELSEWHERE | 在别处登录了 |
| -108 | EXTENSION_DELETED | 分机被删除了 |
| -109 | RE_LOGIN | 重新登录 |
| -110 | SDK_PLAN_DISABLED | sdk plan未启用 |

</details>