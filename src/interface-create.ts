import axios from "axios";
import * as fs from "fs";
import { SchemeProps, OnePropProps } from "./api";
import writeService from "./service";
import * as shell from "shelljs";

export const getTypeJudgeStr = (prop: OnePropProps, schemas: SchemeProps) => {
  if (prop.type === "integer") {
    return "number";
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
    } else if (prop.items.originalRef) {
      let initStr = `${prop.items.originalRef?.replace(/(«|»|,)/g, "")}[]`;
      return initStr;
    }
  } else if (prop?.originalRef) {
    return prop?.originalRef?.replace(/(«|»|,)/g, "");
  }
  return prop.type;
};

export const getInterfaceDocs = (swaggerUrl: string) => {
  axios.get(swaggerUrl).then((res) => {
    // schema
    const schemas: SchemeProps = res.data.definitions;
    // path
    const paths = res.data.paths;
    writeService(paths, schemas);
    // all paths
    const schemaStream = fs.createWriteStream("./interface/api.d.ts");

    const schemasKeys = Object.keys(schemas);

    let initSchemaStr = "declare namespace API {\n";
    schemasKeys.forEach((_schemaKey) => {
      const schemaProps = schemas[_schemaKey]?.properties;
      const requiredArr = schemas[_schemaKey]?.required;
      if (schemaProps) {
        initSchemaStr += `interface ${_schemaKey?.replace(/(«|»|,)/g, "")} {\n`;
        const props = Object.keys(schemaProps);
        props.forEach((_prop) => {
          initSchemaStr += `\t${_prop}${
            requiredArr?.includes(_prop) ? "" : "?"
          }: ${getTypeJudgeStr(schemaProps[_prop], schemas)};\n`;
        });
        initSchemaStr += `}\n`;
      } else {
        initSchemaStr += `type ${_schemaKey?.replace(/(«|»|,)/g, "")} = ${
          schemas[_schemaKey].type
        } \n`;
      }
    });
    initSchemaStr += `}\n`;

    schemaStream.write(initSchemaStr, "utf-8");

    schemaStream.on("finish", () => {
      console.log("写完了");
    });

    schemaStream.on("error", (err) => {
      console.log(err);
    });
  });
};
