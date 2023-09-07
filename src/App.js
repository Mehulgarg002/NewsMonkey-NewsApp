import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0)
  const Progress = (progress) => {
    setProgress(progress);
  }
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News Progress={Progress} apiKey={apiKey} key={'General'} category={'General'} country={'in'}  />} />
          <Route exact path="/business" element={<News Progress={Progress} apiKey={apiKey} key={'Business'} category={'Business'} country={'in'}  />} />
          <Route exact path="/entertainment" element={<News Progress={Progress} apiKey={apiKey} key={'Entertainment'} category={'Entertainment'} country={'in'}  />} />
          <Route exact path="/health" element={<News Progress={Progress} apiKey={apiKey} key={'Health'} category={'Health'} country={'in'}  />} />
          <Route exact path="/science" element={<News Progress={Progress} apiKey={apiKey} key={'Science'} category={'Science'} country={'in'}  />} />
          <Route exact path="/sports" element={<News Progress={Progress} apiKey={apiKey} key={'Sports'} category={'Sports'} country={'in'}  />} />
          <Route exact path="/technology" element={<News Progress={Progress} apiKey={apiKey} key={'Technology'} category={'Technology'} country={'in'}  />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;

// <Route exact path={"/about"} element={<About mode={mode} />} />