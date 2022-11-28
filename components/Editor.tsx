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
import axios from "axios";

const Editor = () => {
  const [lang, setlang] = useState("javascript");
  const [theme, settheme] = useState("monokai");
  const [code, setcode] = useState("");
  const [output, setoutput] = useState("");
  function executeCode() {
    // send a POST request
    axios({
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
      <div className="control-panel">
        Select Language: &nbsp; &nbsp;
        <select
          id="languages"
          className="languages"
          onChange={(e) => setlang(e.target.value)}
        >
          <option value="javascript"> Javascript </option>
          <option value="c"> C </option>
          <option value="c_cpp"> C++ </option>
          <option value="php"> PHP </option>
          <option value="python"> Python </option>
        </select>
        Select Theme: &nbsp; &nbsp;
        <select
          id="theme"
          className="theme"
          onChange={(e) => settheme(e.target.value)}
        >
          <option value="monokai"> monokai </option>
          <option value="twilight"> twilight </option>
          <option value="dracula"> dracula </option>
          <option value="terminal"> terminal </option>
          <option value="chrome"> chrome </option>
        </select>
      </div>
      <div id="example"></div>
      <AceEditor
        mode={lang}
        theme={theme}
        name="example"
        onChange={(e) => setcode(e)}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        height="440px"
        width="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <div className="button-container">
        <button className="btn" onClick={executeCode}>
          {" "}
          Run{" "}
        </button>
      </div>
      <div className="output">{output}</div>
    </>
  );
};

export default Editor;
