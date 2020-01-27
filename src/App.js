import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown/';
import breaks from 'remark-breaks';
import Proptypes, { string } from 'prop-types';
import PLACEHOLDER from './placeholder';

const Editor = ({ markdownText, handleChange, handleReset, handleParse }) => {
  return (
    <div className="editor">
      <button type="button" className="clear-button" onClick={handleReset}>
        Clear
      </button>
      <form className="radio-form" onChange={handleParse}>
        <div>
          <label htmlFor="raw">
            Raw
            <input type="radio" name="parse" id="raw" defaultChecked />
          </label>
        </div>
        <div>
          <label htmlFor="escape">
            Escape
            <input type="radio" name="parse" id="escape" />
          </label>
        </div>
        <div>
          <label htmlFor="skip">
            skip
            <input type="radio" name="parse" id="skip" />
          </label>
        </div>
      </form>
      <textarea
        id="editor"
        value={markdownText}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
};
const Previewer = ({ outputText, htmlParse }) => {
  const { isEscape, isSkip } = htmlParse;
  return (
    <div className="previewer" id="preview">
      <ReactMarkdown
        source={outputText}
        escapeHtml={isEscape}
        skipHtml={isSkip}
        linkTarget="_blank"
        plugins={breaks}
      />
    </div>
  );
};

function App() {
  const [text, setText] = useState(PLACEHOLDER);
  const [htmlParse, setHtmlParse] = useState({
    isEscape: true,
    isSkip: false,
  });
  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };
  const handleParse = e => {
    const { id } = e.target;
    if (id === 'escape') setHtmlParse({ isEscape: false });
    if (id === 'skip') setHtmlParse({ isSkip: true });
    if (id === 'raw')
      setHtmlParse({
        isEscape: true,
        isSkip: false,
      });
  };
  const handleReset = () => setText('');

  return (
    <div className="app-container">
      <Editor
        markdownText={text}
        handleChange={handleChange}
        handleReset={handleReset}
        handleParse={handleParse}
      />
      <Previewer outputText={text} htmlParse={htmlParse} />
    </div>
  );
}

export default App;

Previewer.propTypes = {
  outputText: Proptypes.string.isRequired,
  htmlParse: Proptypes.objectOf.isRequired,
};

Editor.propTypes = {
  markdownText: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  handleReset: Proptypes.func.isRequired,
  handleParse: Proptypes.func.isRequired,
};
