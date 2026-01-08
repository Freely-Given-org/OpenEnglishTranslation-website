'use client';

import { LicenseSection } from 'Components/page/MainPageContent/LicenseSection/LicenseSection';
import { VerseOfTheDaySection } from 'Components/page/MainPageContent/VerseOfTheDaySection/VerseOfTheDaySection';
import { WhatIsSection } from 'Components/page/MainPageContent/WhatIsSection/WhatIsSection';
import type { NextPage } from 'next';

import { ActionSection } from '../Components/page/MainPageContent/ActionSection/ActionSection';
import { Hero } from '../Components/page/MainPageContent/Hero/Hero';
import Page from '../Components/page/page';
import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/main/main';


const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <Hero/>
                    <ActionSection />
                    <LicenseSection />
                    <WhatIsSection />
                    <VerseOfTheDaySection />
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
