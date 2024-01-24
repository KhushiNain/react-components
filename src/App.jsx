import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import ImageData from './components/ImageData';
import Body from './components/Body';



function App() {
  return (
    <div>
      {/* adding header component */}
      <Header/>
      {/* adding body component and image prop */}
      <Body data={ImageData}></Body>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
