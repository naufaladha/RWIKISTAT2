import { exec } from "child_process";

import { readFileSync, writeFileSync, promises as fsPromises } from "fs";
import { join } from "path";

// ✅ write to file SYNCHRONOUSLY
// function syncWriteFile(filename: string, data: any) {
//   /**
//    * flags:
//    *  - w = Open file for reading and writing. File is created if not exists
//    *  - a+ = Open file for reading and appending. The file is created if not exists
//    */
//   writeFileSync(join(__dirname, filename), data, {
//     flag: "w",
//   });

//   const contents = readFileSync(join(__dirname, filename), "utf-8");
//   console.log(contents); // 👉️ "One Two Three Four"

//   return contents;
// }

// syncWriteFile("./example.txt", "One\nTwo\nThree\nFour");

// --------------------------------------------------------------

// ✅ write to file ASYNCHRONOUSLY
async function asyncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  try {
    await fsPromises.writeFile(join("temp", filename), data, {
      flag: "w",
    });
    const filePath = join("temp", filename);
    return filePath;
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
}

export default async function handle(req: any, res: any) {
  const { language, code } = req.body;
  const command = createCommand(language);
  var programFile = await makeProgram(language, code);
  if (language === "c") {
    programFile = await createExe(command, programFile);
  }
  if (language === "cpp") {
    programFile = await createExe(command, programFile);
  }
  return new Promise((resolve, reject) => {
    exec(`${command} ${programFile}`, function (error, stdout, stderr) {
      if (error !== null) {
        console.log("exec error: " + error);
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "max-age=180000");
        res.end(JSON.stringify(error));
        reject("error cannot compile file");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(stdout));
      // console.log(stdout==="")
      resolve(stdout);
    });
  });
}

function createCommand(language: any) {
  var command: String = "";
  if (language === "php") {
    command = "C:\\xampp\\php\\php.exe";
  }
  if(language==="r"){
    command="Rscript.exe"
  }
  if (language === "python") {
    command =
      "C:\\Users\\ad21r\\AppData\\Local\\Programs\\Python\\Python39\\python.exe";
  }
  if (language === "javascript") {
    command = "node";
  }
  if (language === "c") {
    command = "gcc";
  }
  if (language === "cpp") {
    command = "g++";
  }
  return command;
}

function createExe(command: String, programFile: String) {
  const outputExe = "random.exe";
  exec(
    `${command} ${programFile} -o ${outputExe}`,
    function (error, stdout, stderr) {
      if (error !== null) {
        console.log("exec error: " + error);
      }
    }
  );
  return outputExe;
}

async function makeProgram(language: any, code: any) {
  var ext = language;
  if (language === "python") ext = "py";
  if (language === "javascript") ext = "js";
  if (language === "c_cpp") ext = "c++";
  var filename = "./code." + ext;
  const filePath = await asyncWriteFile(filename, code);
  return filePath;
}
