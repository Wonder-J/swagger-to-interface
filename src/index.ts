#!/usr/bin/env node
import * as inquirer from "inquirer";
import * as fs from "fs";
import { getInterfaceDocs } from "./interface-create";

let prompt = inquirer.createPromptModule();

fs.access("interface", fs.constants.W_OK, (err) => {
  if (err) {
    fs.mkdir("interface", () => {});
  }
  prompt([
    {
      type: "input",
      name: "swaggerUrl",
      message: "输入你的swagger路径",
    },
  ])
    .then((res) => {
      const { swaggerUrl } = res;
      getInterfaceDocs(swaggerUrl.trim());
    })
    .catch((err) => {
      console.log(err);
    });
});
