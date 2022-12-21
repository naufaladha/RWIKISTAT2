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
  const [code, setcode] = useState("");
  const [output, setoutput] = useState(" ");
  const [option, setOption] = useState("string");
  const plotSyntax = `png("./public/myplot.png")`;

  function checkOption() {
    if(option === 'plot'){
      setOption('');
      setcode(`${plotSyntax} \n`)
    }
    if(option === 'string') {
      setOption('');
      setcode('');
    }
    return code;
  }
  async function executeCode() {
    console.log(code);
    await axios({
      method: "post",
      url: "/api/execute",
      data: {
        language: lang,
        code: code,
      },
    }).then(
      (response) => {
        // console.log(response);
        setoutput(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
 const showPlot= ()=>{
  const out = document.querySelector('.output') as HTMLElement
  out.innerHTML = `<iframe src="./myplot.png" height='600px'></iframe>` 
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
      <div className="title justify-center flex bg-gray-300 w-full rounded-2xl h-6 relative">
        <h1 className="">Input </h1>
        <select className="absolute right-0 w-28" name="option" id="pilihan" onChange={(e)=>{setOption(e.target.value)}}>
          <option value="string">string</option>
          <option value="plot">plot</option> 
        </select> 
      </div>
      <AceEditor 
        mode={lang}
        theme={theme}
        name="example"
        fontSize={14}
        value={checkOption()}
        onChange={(e) => {
          setcode(e)}
        }
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
          tabSize:2,
        }}
      />
      </div>
      <div className="flex flex-col border-4 w-[50%] rounded-2xl output">
        <h1 className=" justify-center flex bg-gray-300 w-full rounded-2xl h-6">Output</h1>
        {output}
      </div>
    </div>
      <div className="button-container flex flex-row justify-center gap-3">
        <button className="btn rounded-md w-[200px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={executeCode}>
          {" "}
          Run{" "}
        </button>
        <div className="">{output === "" ? <><button className="btn rounded-md w-[200px]  hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={showPlot}> tampilkan plot </button> </>: ""}</div>
      </div>
      
    </>
  );
};

export default Editor;
