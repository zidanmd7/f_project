import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Landing from './Landing.jsx';
import WhyChooseUs from './Component/WhyChooseUs.jsx';
import Reviews_Board from "./Reviews_Board.jsx";
import EmailFeature from "./Component/EmailFeature.jsx";
import Home from "./Home.jsx";
import {Route, Routes} from "react-router-dom";
import SecurityPrivacy from "./Component/security-privacy.jsx";

function App() {
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/feature" element={<EmailFeature />} />
                <Route path={"/data-protection"} element={<SecurityPrivacy />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;