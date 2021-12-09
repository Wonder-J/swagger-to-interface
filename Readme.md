> 本文档用于将 knife4j swagger 文档转化为前端需要的 Ts 声明文件，声明文件是每个接口返回的数据。

## 在本地子项目中生成对应的声明：

```shell
npx swagger-to-interface
```

## 生成：

在根目录下生成 interface，里面有两个文件:

- api.d.ts 是 swagger 所有 scheme（数据类型）的声明
- service.ts 是所有接口的声明
