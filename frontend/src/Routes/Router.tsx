import { Route, Routes } from 'react-router-dom';

import NotFount404 from '../Pages/404/404';
import FGorg from '../Pages/About/F-G.org/F-G.org';
import OFR from '../Pages/About/OFR/OFR';
import Blog from '../Pages/Blog/Blog';
import Contacts from '../Pages/Contacts/Contacts';
import LV from '../Pages/Design/LV/LV';
import RV from '../Pages/Design/RV/RV';
import Home from '../Pages/Home/Home';
import Info from '../Pages/Info/Info';
import Reader from '../Pages/Reader/Reader';
import Downloads from '../Pages/Resources/Downloads/Downloads';
import Formats from '../Pages/Resources/Formats/Formats';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/litereal-version" element={<LV />} />
                <Route path="/readers-version" element={<RV />} />
                <Route path="/info" element={<Info />} />
                <Route path="/reader" element={<Reader />} />
                <Route path="/formats" element={<Formats />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/OFR" element={<OFR />} />
                <Route path="/F-G.org" element={<FGorg />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFount404 />} />
            </Routes>
        </>
    );
}

export default Router;
