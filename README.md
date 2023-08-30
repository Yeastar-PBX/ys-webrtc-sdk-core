# ys-webrtc-sdk-core

[中文](./README_zh-CN.md) | [English](./README.md)  

Yeastar WebRTC SDK Core is a web development toolkit designed for Yeastar P-Series PBX,  which is pre-integrated with PBX calling functionality. It simplifies the complexity of WebRTC implementation and facilitates the deployment of third-party applications for audio and video communication.

- [ys-webrtc-sdk-core](#ys-webrtc-sdk-core)
    - [react demo](https://codesandbox.io/s/ys-webrtc-sdk-core-use-react-example-z7fq8w?file=/src/App.js)
    - [Obtain the signature](./docs/CreateSign.md)
    - [PBXOperator](./docs/PBX.md)
    - [PhoneOperator](./docs/Phone.md)
    - [Session](./docs/Session.md)
    - [Result](./docs/Result.md)
    - [Types](./docs/Types.md)

## SDK selection

Yeastar WebRTC SDK Core supports several module formats: **UMD**, **CJS**, **ESM**, and **IIFE**. You can choose the module format according to your needs.

**Note**: If you prefer a smaller SDK bundle size or have existing projects that support ESM, it is recommended to import the **ESM** module.

## Installation

Use either of the following methods to install Yeastar WebRTC SDK Core to your project. 

+ Use **npm** to install Yeastar WebRTC SDK Core.

	```bash
	npm install ys-webrtc-sdk-core
	```

+ Use **script** to init Yeastar WebRTC SDK Core.

	```html
	<script src="./ys-webrtc.umd.js"></script>
	<script>
	  // Upon successful loading, initialize the Yeastar WebRTC SDK Core using the 'YSWebRTC' object. 
	  YSWebRTC.init({
	    username: '1000',
	    secret: 'sdkshajgllliiaggskjhf',
	    pbxURL: 'https://192.168.1.1:8088',
	  })
	    .then((operator) => {
	      // Obtain the 'PhoneOperator' instance, 'PBXOperator' instance, and 'destroy' method.
	      const { phone, pbx, destroy } = operator;
	    })
	    .catch((error) => {
	      console.log(error);
	    });
	</script>
	```

## Getting started

The brief code example below demonstrates the basic workflow for making and receiving calls via **Yeastar WebRTC SDK Core**.

```js
import { init } from 'ys-webrtc-sdk-core';

init({
    username: '1000',
    secret: 'sdkshajgllliiaggskjhf',
    pbxURL: 'https://192.168.1.1:8088'
})
    .then(operator => {
        // Obtain the 'PhoneOperator' instance, 'PBXOperator' instance, and 'destroy' method.
        const { phone, pbx, destroy } = operator;

        // Create an RTC instance.
        phone.on('newRTCSession', ({callId,session})=>{
            const {status} = session

            // Listen for events in the session.
            session.on('confirmed', {callId,session})=>{
                // A call is successfully connected, the 'session.status.callStatus' changes to 'talking'.
                // Update the user interface to start the call timer.
            })

        })
        // Listen for the 'startSession' events.
        phone.on('startSession',({callId,session})=>{
            const {status} = session
            if(status.communicationType === 'outbound') {
                // Outbound call.
                // Update the user interface to display 'Calling', indicating the callee side is ringing.
            }else{
                // Inbound call.
                // Update the user interface to display 'Connecting'.
            }

        });

        // Listen for Incoming call events.
        phone.on('incoming', (callId,session)=>{
            const {status} = session
            // Pop up an incoming call dialog displaying the caller's phone number and contact name on the User interface.
            // ...
            // Click the 'Answer' button to trigger the 'answer' method and the 'startSession' event.
            phone.answer(status.number); 
        });

        // After events subscription, start connecting to the SIP UA.
        phone.start();

        // ...
        // Click the 'Call' button to call 1001.
        phone.call('1001')

    })
    .catch(error => {
        console.log(error);
    });
```
Yeastar WebRTC SDK Core export `init` methods to initialize the SDK.

+  `init`: Initialize Yeastar WebRTC SDK Core. <br/>Upon successful initialization, two instantiated Operator objects 'PhoneOperator' and 'PBXOperator', and a method 'destroy' are returned: 
	+ [PhoneOperator](./docs/Phone.md): The object contains methods and attributes related to the call handling, such as 'call', 'hangup', and others.
	+ [PBXOperator](./docs/PBX.md): The object contains methods and attributes related to the PBX operations, such as querying  CDR.
	+ destroy: This method is used to destroy Yeastar WebRTC SDK Core. 
	

## Initialization (init) parameters

| Parameter | Type | Required | Description |
| ---- | ---- | ---- | ---- |
| username | string | Yes | Extension number. |
| secret | string | Yes | Login signature，which can be obtained using the OPEN API. For more information, see [Obtain a Server-side Signature](./docs/CreateSign.md). |
| pbxURL | URL \| string | Yes | The URL for accessing your PBX system, including the transfer protocol and the port number.<br />For example, https://192.168.1.1:8088 or https://xx.xxx.com. |
| enableLog | boolean | No | Whether to enable log output and report error logs to PBX. This feature is enabled by default. |
| reRegistryPhoneTimes | number | No | Define the number of attempts to reconnect to the SIP service. By default, it is unlimited. |
| userAgent | "WebPC" \| "WebClient" | No       | The UA (user agent ) in Asterisk, which indicates the client type. The default value is **WebClient**. |
| deviceIds | { cameraId?: string; microphoneId?: string;} | No | Specify the IDs of the audio and video input devices, including the camera ID and microphone ID. |
| disableCallWaiting | boolean | No | Whether to disable call waiting. When setting this value to `true`, the PBX call waiting value does NOT take effect and PBX only handles single calls. |

## Ringtone  resources

The **[assets](./assets/)** directory contains the available ringtone resources for Yeastar WebRTC SDK Core, as shown in the following table.

| Name | Description |
| ---- | ---- |
| Ring | Incoming call ringtone |
| Callend | Call end tone |
| Callwaiting | Call waiting tone |
| ringback | Outgoing call tone |
| DTMF00 | Keypad 0 tone |
| DTMF01 | Keypad 1 tone |
| DTMF02 | Keypad 2 tone |
| DTMF03 | Keypad 3 tone |
| DTMF04 | Keypad 4 tone |
| DTMF05 | Keypad 5 tone |
| DTMF06 | Keypad 6 tone |
| DTMF07 | Keypad 7 tone |
| DTMF08 | Keypad 8 tone |
| DTMF09 | Keypad 9 tone |
| DTMFStar | Keypad * tone |
| DTMFPound | Keypad # tone |

 Ringtone resources can be provided in either of the following ways:

+ Provide the original audio files of the ringtone resources.
+ Use the base64-encoded strings of the ringtone resources, as shown in the example code below.

	```js
	import sounds from '/assets/sounds';
	const { Ring, Callend } = sounds;
	const audio = new Audio(Ring);
	audio.play();
	
	// Change the value of "audio.src" to play different ringtones.
	audio.src = Callend;
	audio.play();
	```

## License

Copyright (c) 2023 Xiamen Yeastar Digital Technology Co., Ltd.
