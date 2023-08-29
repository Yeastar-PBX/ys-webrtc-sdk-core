# Obtain a Server-side Signature
![create singnature](/assets/images/create_singnature.png)

Yeastar WebRTC SDK signature is generated using PBX API interface `/openapi/v1.0/sign/create` and delivered to the App client by the App server. Upon receiving the signature, the App client will set the initialization secret option to initialize the Yeastar WebRTC SDK.

Before creating a signature request, the App server needs to obtain authorization for the open API. For more information, see [Authorization Rule](https://help.yeastar.com/en/p-series-appliance-edition/developer-guide/authorization-rule.html).