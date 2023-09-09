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

const MAX_LINES_DISPLAY = 19;

const Editor = () => {
  const [lang, setlang] = useState("r");
  const [theme, settheme] = useState("chrome");
  const [code, setcode] = useState(`data = c(10,27,24,13,22,17,19,23,20,49)
data
rnorm(1000)`);
  const [option, setOption] = useState("string");
  const [output, setoutput] = useState("");
  const [showAllOutput, setShowAllOutput] = useState(false);
  const stringSyntax = `data = c(10,27,24,13,22,17,19,23,20,49)
  data
  rnorm(1000)`
  const graphSyntax = `png("public/mygraph.png")
  
  data=rnorm(1000)
  hist(data)
  `;
  
  function checkOption() {
    if(option === 'Graph'){
      setOption('');
      setcode(`${graphSyntax} \n`)
    }
    if(option === 'string') {
      setOption('');
      setcode(`${stringSyntax} \n`);
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
      out.innerHTML = `<iframe src="/mygraph.png" alt="Graph" height="500px" width="500px" />`;  
  };

 const outputLines = output.split('\n');
 const shouldTruncate = outputLines.length > MAX_LINES_DISPLAY;
 const displayedOutput = shouldTruncate && !showAllOutput ? outputLines.slice(0, MAX_LINES_DISPLAY).join('\n') : output;

  return (
    <>
      <div id="example"></div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col border-4 rounded-2xl w-[700px] mx-auto">
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
            value={checkOption()}
            fontSize={16}
            onChange={(e)=>setcode(e.trimStart())}
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
            <div className="flex flex-col border-4 w-[50%] rounded-2xl">
              <div className="relative justify-center flex bg-gray-300 w-full rounded-2xl h-6">
                <h1 className="">Output</h1>
              </div>
              <div className="output text-[16px] max-h-[500px] overflow-y-auto">
                {shouldTruncate && !showAllOutput
                  ? outputLines.slice(0, MAX_LINES_DISPLAY).map((line, index) => (
                      <pre key={index}>{line}</pre>
                    ))
                  : outputLines.map((line, index) => (
                      <pre key={index}>{line}</pre>
                    ))}
                {shouldTruncate && (
                  <div className="text-[#2e6eed] underline pl-3 pb-1">
                    <button className="" onClick={() => setShowAllOutput(!showAllOutput)}>
                      {showAllOutput ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="button-container flex flex-row justify-center gap-3">
            <button className="btn rounded-md w-[150px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={executeCode}>
              Run
            </button>
            <div>
              {output === "" ? (
                <button className="btn rounded-md w-[200px] hover:text-black hover:bg-white hover:border-2 hover:border-black" onClick={showGraph}>
                  Show Graph
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <ToastContainer />
        </>
      );
    };

export default Editor;
