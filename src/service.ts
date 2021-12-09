import * as fs from "fs";
import * as shell from "shelljs";
import { PathProps, SchemeProps, ParamsProps } from "./api";

const getTypeJudgeStr = (prop: ParamsProps["schema"] | ParamsProps) => {
  if (prop.type === "integer") {
    return "number";
  }
  if (prop.type === "file") {
    return "API.File";
  }
  if (prop.type === "string") {
    if (prop.enum) {
      return `'${prop.enum?.join("'|'")}'`;
    }
    return "string";
  }
  if (prop.type === "array") {
    if (prop.items.type === "integer") {
      return `number[]`;
    } else if (prop.items.type === "number") {
      return "number[]";
    } else if (prop.items.type === "string") {
      if (prop.items.enum) {
        return `('${prop.enum?.join("'|'")}')[]`;
      }
      return "string[]";
    } else if (prop.items.type === "file") {
      return "API.File[]";
    } else if (prop.items.originalRef) {
      let initStr = `${prop.items.originalRef?.replace(/(«|»|,)/g, "")}[]`;
      return initStr;
    }
  } else if (prop?.originalRef) {
    return prop?.originalRef;
  }
  return prop.type;
};

const writeService = (paths: PathProps, schemas?: SchemeProps) => {
  const pathsKeys = Object.keys(paths);
  const serviceStream = fs.createWriteStream("./interface/service.ts");
  let initStr = `import {request} from 'umi'\n\n\n\n`;

  pathsKeys.forEach((_pathkey) => {
    const methodObj = paths[_pathkey];
    const methodKeys = Object.keys(methodObj);
    methodKeys.forEach((_methodKey) => {
      let serStr = `export const ${methodObj[_methodKey].operationId} : (`;
      const params: string[] = [];
      methodObj[_methodKey]?.parameters?.forEach((_param, index) => {
        const paramsName =
          _methodKey === "get"
            ? `params${index ? index : ""}`
            : `data${index ? index : ""}`;
        if (_param.type) {
          serStr += `${paramsName}: ${getTypeJudgeStr(_param)}`;
        }
        if (_param.schema) {
          if (_param.schema?.originalRef) {
            serStr += `${paramsName}: API.${getTypeJudgeStr(_param.schema)}`;
          } else {
            serStr += `${paramsName}: ${getTypeJudgeStr(_param.schema)}`;
          }
        }
        if (index + 1 < methodObj[_methodKey].parameters.length) {
          serStr += ",";
        }
        params.push(paramsName);
      });
      if (methodObj[_methodKey]?.responses[200]?.schema) {
        serStr += `) => Promise<API.${methodObj[
          _methodKey
        ]?.responses[200]?.schema.originalRef?.replace(/(«|»|,)/g, "")}>`;
      } else {
        serStr += `) => Promise<any>`;
      }
      serStr += `=(${params.join(",")})=>\n`;
      serStr += `\trequest('${_pathkey}', {\n`;
      serStr += `\tmethod: '${_methodKey.toUpperCase()}',\n`;
      serStr += `\t${
        _methodKey === "get" ? "params" : "data"
      }: {\n\t${params.join(",")}}})\n`;
      initStr += serStr;
    });
  });

  serviceStream.write(initStr, "utf-8");

  serviceStream.on("finish", () => {
    console.log("写完了");
  });
  serviceStream.on("error", (err) => {
    console.log(err);
  });
};

export default writeService;
