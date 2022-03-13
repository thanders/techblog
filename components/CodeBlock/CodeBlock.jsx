import React from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
    >
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
};

export default CodeBlock;