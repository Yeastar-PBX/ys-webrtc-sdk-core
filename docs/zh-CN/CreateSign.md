# 获取服务端签名
![create singnature](/assets/images/create_singnature.png)

sdk签名通过PBX的 /openapi/v1.0/sign/create 生成，由app server下发给app 客户端。app 客户端获得签名后，设置初始化的secret选项从而初始化sdk。  
App server在创建签名请求前，首先需要先获得open api的授权，然后再创建签名。[API 授权规则文档](https://help.yeastar.com/en/p-series-appliance-edition/developer-guide/authorization-rule.html)