import { Route, Routes } from 'react-router-dom';

import NotFount404 from '../Pages/404/404';
import Contact from '../Pages/About/Contact/Contact';
import CoreValues from '../Pages/About/CoreValues/CoreValues';
import FreelyGiven from '../Pages/About/Freely-Given/Freely-Given';
import OET from '../Pages/About/OET/OET';
import Partners from '../Pages/About/Partners/Partners';
import StatementOfFaith from '../Pages/About/StatementOfFaith/StatementOfFaith';
import Blog from '../Pages/Blog/Blog';
import FAQ from '../Pages/Design/FAQ/FAQ';
import LV from '../Pages/Design/LV/LV';
import Overview from '../Pages/Design/Overview/Overview';
import RV from '../Pages/Design/RV/RV';
import Home from '../Pages/Home/Home';
import Reader from '../Pages/Reader/Reader';
import Downloads from '../Pages/Resources/Downloads/Downloads';
import Formats from '../Pages/Resources/Formats/Formats';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Overview" element={<Overview />} />
                <Route path="/LiteralVersion" element={<LV />} />
                <Route path="/ReadersVersion" element={<RV />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/reader" element={<Reader />} />
                <Route path="/formats" element={<Formats />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/OET" element={<OET />} />
                <Route path="/Freely-Given" element={<FreelyGiven />} />
                <Route path="/CoreValues" element={<CoreValues />} />
                <Route
                    path="/StatementOfFaith"
                    element={<StatementOfFaith />}
                />
                <Route path="/Partners" element={<Partners />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFount404 />} />
            </Routes>
        </>
    );
}

export default Router;
