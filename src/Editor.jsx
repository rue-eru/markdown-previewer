const Editor = ({markdownOutput, handleOutput}) => {
  return (
    <div id='first-window'>
      <h1 className='header'>Markdown Input Editor</h1>
      <textarea 
        id="editor"
        value={markdownOutput}
        onChange={(e) => handleOutput(e.target.value)}>
      </textarea>
    </div>
  )
}

export default Editor