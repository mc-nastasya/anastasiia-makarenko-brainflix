import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';
import MainInfoContainer from './components/MainInfoContainer/MainInfoContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublishVideo from './pages/PublishVideo/PublishVideo';
import {useState} from 'react';
import NotFound from './pages/NotFound/NotFound';


function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainInfoContainer  setIsSubmitted = {setIsSubmitted} isSubmitted={isSubmitted} />}/>
        <Route path='/videos/:videoId' element={<MainInfoContainer setIsSubmitted = {setIsSubmitted} isSubmitted={isSubmitted}/>} />
        <Route path="/upload" element ={<PublishVideo setIsSubmitted = {setIsSubmitted} />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
