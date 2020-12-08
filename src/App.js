import React, {useState} from 'react';
import marked from 'marked'
import './App.css';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup')
  return (
    <div className="app">
      <textarea onChange={e => setMarkdown(e.target.value)} value={markdown}/>

      {//vanilla version
      /* <div className="preview"  dangerouslySetInnerHTML={{__html: marked(markdown)}}/> */}
      <ReactMarkdown className='preview' source={markdown} />
    </div>
  );
}
