import { useState } from 'react'
import './App.css'
import Editor from './Editor'
import Previewer from './Previewer'

function App() {
  const defaultInput = `
  # You can use a big header like this!
  or
  ## a sub-header like this!
  the more number sign the smaller the header will be (but no more than 6)
  >In block quotes as this you can highlight important information

  by using hyphen you can
  - add list items like this! it's useful to list info like
  - make a text **bold** or _italic_
  - or admire a ![cat image](https://svgsilh.com/svg/1801287.svg)

  you surely can work with code as well!
  create a different types of code blokes like:
  \`<div>an inline one</div>\`
  or even a chunk of a code block:
  \`\`\`
    const handleCode(lineOne, lineTwo) {
      if (lineOne === lineTwo) {
      return "true";
    }
  }
  \`\`\`
  if you wanna see more ways of changing your text in Markdown mind checking this site by using a [link](https://www.markdownguide.org/basic-syntax/)
  `

const [ markdownOutput, handleOutput] = useState(defaultInput);

  return (
    <>
      <h1 id="main-header">Markdown Previewer
      </h1>
      <h5 id="sub-header">
      @ 2025 Practice Project by{' '}
        <a
          href="https://github.com/rue-eru" 
          target='_blank' 
          title="Visit my GitHub profile"
        >L
        </a>
      </h5>
      <div id='container'>
        <Editor markdownOutput={markdownOutput} handleOutput={handleOutput}/>
        <Previewer markdownOutput={markdownOutput}/>
      </div>
    </>
  )
}

export default App
