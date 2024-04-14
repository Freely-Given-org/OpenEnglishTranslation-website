'use client';

// import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function KTEssays() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Essays on Bible words</h1>
                        <h2>with important theological meanings</h2>
                        <h3>(Sometimes called ‘Key Terms’)</h3>
                        <p>Coming...</p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default KTEssays;
