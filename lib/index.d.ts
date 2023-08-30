import { EventEmitter } from 'events';
import { RTCSession } from 'jssip/lib/RTCSession';

declare const COMMON_ERROR: {
    UNKNOWN_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    INVALID_PBX_URL: {
        code: number;
        msg: string;
        describe: string;
    };
    PBX_URL_NOT_HTTPS: {
        code: number;
        msg: string;
        describe: string;
    };
    GET_PRODUCT_FAILED: {
        code: number;
        msg: string;
        describe: string;
    };
};
declare const COMMON_SUCCESS: {
    SUCCESS: {
        code: number;
        msg: string;
        describe: string;
    };
};
declare const PBX_ERROR: {
    UNKNOWN_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    REGISTRY_FAILED: {
        code: number;
        msg: string;
        describe: string;
    };
    PBX_NETWORK_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    PBX_API_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    GET_PERSONAL_NOT_FOUND_DATA: {
        code: number;
        msg: string;
        describe: string;
    };
    PBX_ALREADY_INITIALIZED: {
        code: number;
        msg: string;
        describe: string;
    };
    LINKUS_DISABLED: {
        code: number;
        msg: string;
        describe: string;
    };
    LOGGED_IN_ELSEWHERE: {
        code: number;
        msg: string;
        describe: string;
    };
    EXTENSION_DELETED: {
        code: number;
        msg: string;
        describe: string;
    };
    RE_LOGIN: {
        code: number;
        msg: string;
        describe: string;
    };
    SDK_PLAN_DISABLED: {
        code: number;
        msg: string;
        describe: string;
    };
};
declare const PHONE_ERROR: {
    UNKNOWN_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    REGISTRY_FAILED: {
        code: number;
        msg: string;
        describe: string;
    };
    GET_AGREE_CHROME_USER_MEDIA_ROLE_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    GET_LOCAL_STREAM_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    RE_REGISTRY_MAX_LIMIT_TIMES: {
        code: number;
        msg: string;
        describe: string;
    };
    MAX_LIMIT_CALL: {
        code: number;
        msg: string;
        describe: string;
    };
    GET_LOCAL_MEDIA_INFO_ERROR: {
        code: number;
        msg: string;
        describe: string;
    };
    ATTENDED_PARENT_NOT_FOUND: {
        code: number;
        msg: string;
        describe: string;
    };
    CALL_TOO_MANY_TIMES: {
        code: number;
        msg: string;
        describe: string;
    };
    INVALID_NUMBER: {
        code: number;
        msg: string;
        describe: string;
    };
    CURRENT_CALL_HAS_NOT_CONNECTED: {
        code: number;
        msg: string;
        describe: string;
    };
    NOT_FOUND_CALL_ID: {
        code: number;
        msg: string;
        describe: string;
    };
    NOT_FOUND_AUDIO_INPUT_DEVICE: {
        code: number;
        msg: string;
        describe: string;
    };
    NOT_FOUND_VIDEO_INPUT_DEVICE: {
        code: number;
        msg: string;
        describe: string;
    };
};
declare const PHONE_SUCCESS: {
    SUCCESS: {
        code: number;
        msg: string;
        describe: string;
    };
};

declare type ResultBaseType = {
    [rest: string]: {
        code: number;
        msg: string;
        describe?: string;
    };
};
declare type KeysToUnion<T extends object> = {
    [K in keyof T]: K;
}[keyof T];
declare type CommonErrorKeys = KeysToUnion<typeof COMMON_ERROR>;
declare type CommonSuccessKeys = KeysToUnion<typeof COMMON_SUCCESS>;
declare type PBXErrorKeys = KeysToUnion<typeof PBX_ERROR>;
declare type PhoneSuccessKeys = KeysToUnion<typeof PHONE_SUCCESS>;
declare class Result {
    code: number;
    message: string;
    constructor(type: ResultBaseType, key: string);
}
declare class CommonResult {
    static error(type: CommonErrorKeys): Result;
    static success(type: CommonSuccessKeys): Result;
}
declare class PBXResult {
    static error(type: PBXErrorKeys): Result;
    static success(type: PhoneSuccessKeys): Result;
}

declare type TransferParentType = {
    callId: string;
    avatar: string;
    name: string;
    number: string;
    callDuration: number;
    holdDuration: number;
};
/**
 * 通话状态静态数据属性
 */
interface StaticCallStatus {
    name: string;
    avatar: string;
    company: string;
}
/**
 * 通话状态
 */
interface CallStatus extends StaticCallStatus {
    number: string;
    callId: string;
    communicationType: 'outbound' | 'inbound';
    isVideo: boolean;
    isRing: boolean;
    isHold: boolean;
    isMute: boolean;
    callStatus: 'ringing' | 'calling' | 'talking' | 'connecting';
    callStartTime: number;
    recordStatus: 'stop' | 'recording' | 'pause';
    isTransfer: boolean;
    transferParent?: TransferParentType;
    isConference: boolean;
}
/**
 * 通话质量统计对象
 */
interface Report {
    lksTimestamp: string;
    lksDate: string;
    callId: string;
    extension: string;
    iceResult: string;
    lksNetworkType: string;
    lksDeviceType: string;
    lksDuration: string;
    lksAudioCodec: string;
    lksAudioRx: string;
    lksAudioRxLost: string;
    lksAudioRxMaxjitter: string;
    lksAudioRxAvgjitter: string;
    lksAudioTx: string;
    lksAudioTxLost: string;
    lksAudioTxMaxjitter: string;
    lksAudioTxAvgjitter: string;
    lksVideoCodec: string;
    lksVideoRx: string;
    lksVideoRxLost: string;
    lksVideoRxMaxjitter: string;
    lksVideoRxAvgjitter: string;
    lksVideoTx: string;
    lksVideoTxLost: string;
    lksVideoTxMaxjitter: string;
    lksVideoTxAvgjitter: string;
}
declare type TimerType = {
    ringDuration: number;
    callingDuration: number;
    callDuration: number;
    holdDuration: number;
};
declare type SessionEventType = 'peerconnection' | 'streamAdded' | 'confirmed' | 'accepted' | 'reinvite' | 'warningMessage' | 'sdp' | 'progress' | 'ended' | 'failed' | 'icecandidate' | 'newInfo' | 'statusChange' | 'staticStatusChange' | 'updateTimer' | 'updateLocalStream' | 'updateRemoteStream' | 'callReport' | 'clientError';
declare type AgreeChangeVideoParamsType = {
    callId: string;
    name: string;
};

declare class Session extends EventEmitter {
    #private;
    RTCSession: RTCSession;
    callReport: Report;
    agreeChangeVideo?: (params: AgreeChangeVideoParamsType) => Promise<boolean>;
    constructor(RTCSession: RTCSession, status: CallStatus, phone: PhoneOperator);
    get status(): CallStatus;
    /**
     * 获取来电列表数组
     */
    get incomingList(): Session[];
    /**
     * 更新status
     */
    private set status(value);
    /**
     * 通话时长(s)
     */
    get timer(): TimerType;
    get localStream(): MediaStream;
    private set localStream(value);
    get remoteStream(): MediaStream;
    private set remoteStream(value);
    /**
     * 设置通话时间长，会触发updateTimer事件
     * ```js
     * // 监听updateTimer
     * session.on('updateTimer', (timer) => {
     *   const { ringDuration, callingDuration, callDuration, holdDuration }=timer;
     * })
     * // 设置当前的通话时长为10秒
     * session.timer={
     *   ringDuration: 0,
     *   callingDuration: 0,
     *   callDuration: 0,
     *   holdDuration: 0
     * };
     * ```
     */
    private set timer(value);
    /**
     * 发布SessionEventType类型中定义的事件
     * @param eventName
     * @param args
     * @returns
     */
    emitEvent: (eventName: SessionEventType, ...args: any[]) => boolean;
    /**
     * 停止通话计时
     */
    stopTimer: () => this;
    on: (eventName: SessionEventType, listener: (...args: any[]) => void) => this;
    /**
     * 拒接
     */
    reject: () => void;
    /**
     * 接听
     * @param option
     */
    answer: (option?: CallOptions | undefined) => Promise<Result>;
    /**
     * 挂断
     */
    hangup: () => void;
    /**
     * 盲转
     * @param number 盲转的号码
     */
    blindTransfer: (number: string) => void;
    /**
     * 咨询转
     * @param number 咨询转的号码
     */
    attendedTransfer: (number: string) => void;
    /**
     * 保持
     * @returns
     */
    hold: () => boolean;
    /**
     * 解除保持
     * @returns
     */
    unhold: () => boolean;
    /**
     * 发送dtmf
     * @param dtmf
     */
    dtmf: (dtmf: string) => void;
    /**
     * 静音
     */
    mute: () => void;
    /**
     * 取消静音
     */
    unmute: () => void;
    /**
     * 开始录音
     * @returns
     */
    startRecord: () => void;
    /**
     * 暂停录音
     * @returns
     */
    pauseRecord: () => void;
    /**
     * 终止通话
     * @param type 终止类型
     */
    terminate: (type?: 'hangup' | 'reject' | 'terminate') => void;
    /**
     * 重新协商通话
     * @param callId 通话id
     * @param offerToReceiveVideo 是否接收视频
     * @returns 是否操作成功
     */
    renegotiate: (offerToReceiveVideo?: boolean | undefined) => boolean;
    audioToVideo: (mediaStream?: MediaStream | undefined) => void;
    videoToAudio: () => void;
    /**
     * 更新call status
     * @param status
     */
    setStatus: (status: Partial<CallStatus>) => this;
    /**
     * 更新status静态数据
     * @param staticStatus StaticCallStatus
     * @param startManualModel 开启手动模式，为true后该通话的StaticCallStatus数据将不会自动更新，只能手动更新
     * @returns
     */
    setStaticStatus: (staticStatus: Partial<StaticCallStatus>, startManualModel?: boolean | undefined) => this;
    /**
     * 销毁session
     */
    destroy: () => void;
}

declare type userAgentType = 'WebPC' | 'WebClient';
interface PhoneConfig {
    id: string;
    host: URL;
    number: string;
    ha1: string;
    realm: string;
    registername: string;
    userAgent?: userAgentType;
    jsSIPDebug?: 'JsSIP:*' | string;
}
declare type UAEventType = 'connected' | 'disconnected' | 'registered' | 'registrationFailed' | 'newRTCSession' | 'incoming' | 'startSession' | 'recordPermissionsChange' | 'videoPlanChange' | 'deleteSession' | 'isRegisteredChange';
declare type CallOptions = {
    video?: boolean;
    offerToReceiveVideo?: boolean;
    extraHeaders?: string[];
};
declare type deviceIdsType = {
    cameraId?: string;
    microphoneId?: string;
};
/**
 * phone 钩子
 */
declare type HooksType = {
    afterInited: (phone: PhoneOperator) => void;
};
declare class PhoneOperator extends EventEmitter {
    #private;
    config: PhoneConfig;
    currentSessionID: string | null;
    reRegistryPhoneTimes?: number;
    deviceIds?: deviceIdsType;
    constructor(config: PhoneConfig, hooks?: HooksType);
    get sessions(): Map<string, Session>;
    get currentSession(): Session | null;
    get isRegistered(): boolean;
    get videoPlan(): string;
    private set isRegistered(value);
    get recordPermissions(): number;
    set recordPermissions(permissions: number);
    /**
     * 获取来电列表数组
     */
    get incomingList(): Session[];
    /**
     * 无摄像头标识
     */
    get isNoneCamera(): boolean;
    /**
     * 是否已达最大通话数
     */
    get isMaxCall(): boolean;
    /**
     * 发布订阅的事件
     * @param eventName 事件名
     * @param args 返回给注册事件回调函数的数据
     * @returns
     */
    emitEvent: (eventName: UAEventType, ...args: any[]) => boolean;
    /**
     * 订阅事件
     * @param eventName 事件名
     * @param listener 回调函数
     * @returns
     */
    on: (eventName: UAEventType, listener: (...args: any[]) => void) => this;
    /**
     * 开启
     */
    start: () => this;
    /**
     * 重新注册
     * @returns this
     */
    reRegister: (authorizationUser: string, ha1: string) => this | Result;
    /**
     * 呼出
     * ```js
     * // CallOptions 示例
     * const option = {
     *   video: true,
     *   offerToReceiveVideo: true,
     *   extraHeaders: ['Min-Se: 90']
     * }
     * phone.call('1000', option);
     * ```
     * @param number 号码
     * @param option CallOptions
     * @param transferId 咨询转callId
     * @returns Promise 是否操作成功
     */
    call: (number: string, option?: CallOptions | undefined, transferId?: string | undefined) => Promise<Result>;
    /**
     * 拒接
     * @param callId 每通电话的唯一标识
     * @returns 是否操作成功
     */
    reject: (callId: string) => boolean;
    /**
     * 接听
     * @param callId 通话id
     * @param option CallOptions
     * @returns 是否操作成功
     */
    answer: (callId: string, option?: CallOptions | undefined) => Promise<Result>;
    /**
     * 挂断
     * @param callId 通话id
     * @returns 是否操作成功
     */
    hangup: (callId: string) => boolean;
    /**
     * 盲转
     * @param callId 当前通话id
     * @param number 转接号码
     */
    blindTransfer: (callId: string, number: string) => boolean;
    /**
     * 咨询转
     * @param callId 通话id
     * @param number 转接号码
     * @returns 是否操作成功
     */
    attendedTransfer: (callId: string, number: string) => boolean;
    /**
     * 通话保持
     * @param callId 通话id
     * @returns 是否操作成功
     */
    hold: (callId: string) => boolean;
    /**
     * 接触通话保持
     * @param callId 通话id
     * @returns 是否操作成功
     */
    unhold: (callId: string) => boolean;
    /**
     * 发送DTMF
     * @param callId 通话id
     * @param dtmf DTMF
     * @returns 是否操作成功
     */
    dtmf: (callId: string, dtmf: string) => boolean;
    /**
     * 静音
     * @param callId 通话id
     * @returns 是否操作成功
     */
    mute: (callId: string) => boolean;
    /**
     * 取消静音
     * @param callId 通话id
     * @returns 是否操作成功
     */
    unmute: (callId: string) => boolean;
    /**
     * 开始录音
     * @param callId 通话id
     * @returns 是否操作成功
     */
    startRecord: (callId: string) => boolean;
    /**
     * 暂停录音
     * @param callId 通话id
     * @returns 是否操作成功
     */
    pauseRecord: (callId: string) => boolean;
    /**
     * 结束电话
     * @param callId 通话id
     * @param type 结束类型，不同类型将会影响日志输出
     * @returns 是否执行结束通话动作。返回false，原因为找不到该通话id的session。
     */
    terminate: (callId: string, type?: 'hangup' | 'reject' | 'terminate') => boolean;
    /**
     * 重新协商通话
     * @param callId 通话id
     * @param offerToReceiveVideo
     * @returns 是否操作成功
     */
    renegotiate: (callId: string, offerToReceiveVideo?: boolean | undefined) => boolean;
    /**
     * 音频电话切到视频
     * @param callId 通话id
     * @returns 是否操作成功
     */
    audioToVideo: (callId: string) => boolean;
    /**
     * 视频电话切到音频
     * @param callId 通话id
     * @returns 是否操作成功
     */
    videoToAudio: (callId: string) => boolean;
    /**
     * 断开连接
     * @returns 是否操作成功
     */
    disconnect: () => boolean;
    /**
     * 根据callId获取session
     * @returns
     */
    getSession: (callId: string) => Session | null;
    /**
     * 获取所有session
     * @returns session数组
     */
    getSessions: () => Session[];
    /**
     * 设置CurrentSession
     * @param callId 通话id
     * @returns 设置是否成功
     */
    setCurrentSession: (callId: string) => boolean;
    /**
     * 获取CurrentSession
     * @returns 返回CurrentSession，没有则返回null。
     */
    getCurrentSession: () => Session | null;
    /**
     * 更新session的status静态属性部分
     * @param callId 通话id
     * @param staticStatus 静态属性
     * @param startManualModel 开启手动模式，设置true后将不会自动更新静态属性
     * @returns
     */
    setSessionStaticStatus: (callId: string, staticStatus: Partial<StaticCallStatus>, startManualModel?: boolean | undefined) => boolean;
    /**
     * 销毁Phone，解除所有已定阅的事件，停止ua实例
     */
    destroy: () => void;
}

declare type Listener = (...arg: any[]) => void;
interface OnListenProps {
    subscribeCodes: string[];
    listener: Listener;
}
interface OnRemoveListenProps {
    subscribeCodes: string[];
    listener?: Listener;
}
interface OnSubscribeProps {
    addList?: OnListenProps;
    removeList?: OnRemoveListenProps;
}
declare class Socket extends EventEmitter {
    connection: any;
    connected: boolean;
    subscribeKeys: any;
    listenKeys: any;
    connectKeys: any;
    subscribes: Array<any>;
    isSubScribe: boolean;
    wsConnectTimeDiff: number;
    sendHeart: any;
    private connectedChangeCallBack;
    constructor(url: string);
    init: () => void;
    stop: () => void;
    send: (msg: any) => void;
    onConnectListen: (listener: Listener) => void;
    onRemoveConnectListen: (listener?: Listener | undefined) => void;
    onCLose: (listener: Listener) => void;
    onRemoveClose: (listener?: Listener | undefined) => void;
    /**
     * 订阅事件号以及注册事件
     * @param params OnSubscribeProps
     */
    onSubscribe: (params: OnSubscribeProps) => void;
    /**
     * 向服务端发起订阅
     * @param list 订阅号列表
     * @returns
     */
    resubscribe: (list?: any[] | undefined) => void;
    /**
     * 当连接状态变化时调用
     */
    onConnectedChange: (callback: Function) => void;
}

declare type PBXConfig = {
    url: URL;
    secret: string;
    username: string;
};
declare type PhoneConfigInfo = {
    extensionNumber: string;
    extensionId: string;
    extensionName: string;
    realm: string;
    ha1: string;
    registername: string;
    recordPermissions: number;
};
declare type PbxEventType = 'runtimeError' | 'cdrChange';
declare class PBXOperator extends EventEmitter {
    #private;
    secret: string;
    username: string;
    token: string | null;
    url: URL;
    socket: Socket | null;
    extensionNumber?: string;
    extensionId?: string;
    extensionName?: string;
    constructor(config: PBXConfig);
    get info(): {
        token: string | null;
        extensionId: string | undefined;
        url: URL;
    };
    get isInited(): boolean;
    /**
     * 初始化
     * @returns
     */
    init: () => Promise<PhoneConfigInfo>;
    /**
     * 销毁pbx对象上挂载的socket和token以及secret
     */
    destroy: () => void;
    /**
     * 查询通话记录
     */
    cdrQuery: (params: {
        page: number;
        size: number;
        status?: number;
        sortBy?: 'time' | 'id';
        orderBy?: 'desc' | 'asc';
        filter?: string | null;
    }) => Promise<{
        [rest: string]: any;
        errcode: number;
        errmsg: string;
    }>;
    /**
     * 登出
     */
    logout: () => Promise<{
        errcode: number;
        errmsg: string;
    }>;
    /**
     * pbx 事件监听
     * @param eventName
     * @param listener
     * @returns
     */
    on: (eventName: PbxEventType, listener: (error: PBXResult) => void) => this;
}

interface InitParams {
    username: string;
    secret: string;
    pbxURL: URL | string;
    enableLog?: boolean;
    reRegistryPhoneTimes?: number;
    userAgent?: userAgentType;
    deviceIds?: deviceIdsType;
    disableCallWaiting?: boolean;
}
/**
 * 初始化函数
 * @param params InitParams
 * @returns
 */
declare function init(params: InitParams): Promise<{
    phone: PhoneOperator;
    pbx: PBXOperator;
    destroy: () => void;
}>;

export { CallStatus, InitParams, PBXOperator, PHONE_ERROR, PhoneOperator, CommonResult as Result, Session, init };
