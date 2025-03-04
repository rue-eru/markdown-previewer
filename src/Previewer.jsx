import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks';

const Previewer = ({markdownOutput}) => {
    return (
      <div id='second-window'>
        <h1 className='header'>Output</h1>
        <div id='preview'>
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
          >
            {markdownOutput}
            </ReactMarkdown>
        </div>
      </div>
    )
  }

  export default Previewer