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
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Editor = () => {
  const [lang, setlang] = useState("r");
  const [theme, settheme] = useState("chrome");
  const [code, setcode] = useState("");
  const [output, setoutput] = useState(" ");
  const [option, setOption] = useState("string");
  const graphSyntax = `png("public/mygraph.png")`;

  function checkOption() {
    if(option === 'Graph'){
      setOption('');
      setcode(`${graphSyntax} \n`)
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
        setoutput(response.data);
      },
      (error) => {
        let lineNumber;
        if (error && error.response && error.response.data && error.response.data.error) {
          const errorMessage = error.response.data.error;
          const match = errorMessage.match(/line (\d+)/i);
  
          if (match && match[1]) {
            lineNumber = match[1];
          }
        }
        if (lineNumber) {
          toast.error(`Error on line ${lineNumber}: ${error.message}`);
        } else {
          toast.error(`Invalid Syntax Input`);
        }
      }
    );
  }

  const showGraph = () => {
    const out = document.querySelector('.output') as HTMLElement;
      out.innerHTML = `<iframe src="/mygraph.png" alt="Graph" height="500px" width="1000px" />`;
    
  };

  return (
    <>
      <div id="example"></div>
      <div className="flex flex-row">
        <div className="flex flex-col border-4 rounded-2xl w-[50%]">
          <div className="title justify-center flex bg-gray-300 w-full rounded-2xl h-6 relative">
            <h1 className="">Input </h1>
            <select className="justify-center item-center absolute right-0 w-20 h-5 rounded-md" name="option" id="pilihan" onChange={(e)=>{setOption(e.target.value)}}>
              <option className="text-center" value="string">string</option>
              <option className="text-center" value="Graph">graph</option> 
            </select> 
          </div>
          <AceEditor 
            mode={lang}
            theme={theme}
            name="example"
            fontSize={14}
            value={checkOption()}
            onChange={(e) => { setcode(e)}}
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
        <div className="flex flex-col border-4 w-[50%] rounded-2xl">
          <div className="relative justify-center flex bg-gray-300 w-full rounded-2xl h-6">
            <h1 className="">Output</h1>
          </div>
          <div className="output">
            {output}
          </div>
        </div>
      </div>
      <div className="button-container flex flex-row justify-center gap-3">
        <button className="btn rounded-md w-[200px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={executeCode}>
          {" "}Run{" "}
        </button>
        <div className="">{output === "" ? <><button className="btn rounded-md w-[200px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={showGraph}> Show Graph </button> </>: ""}</div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Editor;
