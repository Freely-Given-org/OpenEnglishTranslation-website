//import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Downloads() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Downloads</h1>
                        <p>
                            We aim to have some initial PDF downloads of draft
                            texts here by mid-2023.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Downloads;
