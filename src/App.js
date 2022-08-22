import './App.scss';
import Header from './components/Header/Header';
import MainInfoContainer from './components/MainInfoContainer/MainInfoContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublishVideo from './components/PublishVideo/PublishVideo';


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainInfoContainer />}/>
        <Route path="/upload" element ={<PublishVideo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
