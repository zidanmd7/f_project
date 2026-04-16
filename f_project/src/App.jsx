import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import EmailFeature from "./Component/EmailFeature.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Logo from "./logo.jsx"

function App() {
  return(
    <>



      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/feature" element={<EmailFeature />} />
      </Routes>
        <Footer></Footer>
    </>
  );
}

export default App
