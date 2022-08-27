import './App.scss';
import Header from './components/Header/Header';
import MainInfoContainer from './components/MainInfoContainer/MainInfoContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublishVideo from './components/PublishVideo/PublishVideo';
import {useState} from 'react';


function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainInfoContainer  setIsSubmitted = {setIsSubmitted} isSubmitted={isSubmitted} />}/>
        <Route path='/videos/:videoId' element={<MainInfoContainer />} />
        <Route path="/upload" element ={<PublishVideo setIsSubmitted = {setIsSubmitted} isSubmitted={isSubmitted} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
