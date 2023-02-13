import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-r";
import axios from "axios";

const Editor = () => {
  const [lang, setlang] = useState("r");
  const [theme, settheme] = useState("chrome");
  const [code, setcode] = useState(`png("./public/myplot1.png") 
  x <- c(171, 173, 160, 173, 162, 173, 173, 173, 162, 173, 161, 171, 175, 167, 175, 167, 155, 160, 165, 169, 151, 153, 150, 163, 161, 159, 159, 150, 151, 160, 153, 153, 152, 155)
  y <- c(65, 53, 50, 49, 50, 63, 68, 54, 52, 55, 49, 60, 65, 52, 65, 49, 40, 57, 55, 63, 32, 45, 45, 45, 67, 42, 59, 38, 43, 50, 54, 49, 42, 46)
  plot(x, y)`);
  const [output, setoutput] = useState("");
  async function executeCode() {
    // send a POST request
    // console.log(code)
    await axios({
      method: "post",
      url: "/api/execute",
      data: {
        language: lang,
        code: code,
      },
    }).then(
      (response) => {
        console.log(response);
        setoutput(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
 const showPlot= ()=>{
  const out = document.querySelector('.output') as HTMLElement
  out.innerHTML = `<iframe  width=500px src="myplot1.png"></iframe>` 
 } 
  //   async function execute() {
  //     var program = {
  //       script: { code },
  //       language: { lang },
  //       versionIndex: "0",
  //       clientId: "dce979491070889b3134d13cadf1a929",
  //       clientSecret:
  //         "b22557af2dc33e378243dc84ea57364135261d79ed70dba953e69d8038c4278b",
  //     };
  //     const response = await fetch("https://api.jdoodle.com/v1/execute", {
  //       method: "POST",
  //       headers: {
  //         // "Content-Type": "application/json",
  //         "Content-Type": "multipart/form-data",
  //       },
  //       body: JSON.stringify(program),
  //     });
  //     const result = await response.json();
  //     setoutput(result);
  //     console.log(result);
  //   }
  return (
    <>
      <div id="example"></div>
      <div className="flex flex-row">
      <div className="flex flex-col border-4 rounded-2xl w-[50%]">
      <h1 className=" justify-center flex bg-gray-300 w-full rounded-2xl h-6">Input</h1>
      <AceEditor 
        mode={lang}
        theme={theme}
        name="example"
        value= {code}
        fontSize={14}
        onChange={(e)=>setcode(e)}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        height="500px"
        width="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
    
        }}
      />
      </div>
      <div className="flex border-4 w-[50%] output rounded-2xl">
        <h1 className=" justify-center flex bg-gray-300 w-full rounded-2xl h-6">Output</h1>
        <br />
        {output}
        </div>
    </div>
    <div className="button-container flex flex-row justify-center gap-3">
        <button className="btn rounded-md w-[200px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={executeCode}>
          {" "}
          Run{" "}
        </button>
        <div className="">{output === "" ? <><button className="btn  hover:text-black hover:bg-white hover:border-2 hover:border-black rounded-md w-[200px] " onClick={showPlot}> tampilkan plot </button> </>: ""}</div>
      </div>
      
    </>
  );
};

export default Editor;
