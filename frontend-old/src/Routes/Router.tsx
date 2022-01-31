import { Route, Routes } from 'react-router-dom';

import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
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
import SourceTexts from '../Pages/Design/SourceTexts/SourceTexts';
import Home from '../Pages/Home/Home';
import Reader from '../Pages/Reader/Reader';
import Downloads from '../Pages/Resources/Downloads/Downloads';
import Formats from '../Pages/Resources/Formats/Formats';

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/overview' element={<Overview />} />
                <Route path='/literal-version' element={<LV />} />
                <Route path='/readers-version' element={<RV />} />
                <Route path='/source-texts' element={<SourceTexts />} />
                <Route path='/FAQ' element={<FAQ />} />
                <Route path='/reader' element={<Reader />} />
                <Route path='/formats' element={<Formats />} />
                <Route path='/downloads' element={<Downloads />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/OET' element={<OET />} />
                <Route path='/freely-given' element={<FreelyGiven />} />
                <Route path='/core-values' element={<CoreValues />} />
                <Route
                    path='/statement-of-faith'
                    element={<StatementOfFaith />}
                />
                <Route path='/partners' element={<Partners />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFount404 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Router;
