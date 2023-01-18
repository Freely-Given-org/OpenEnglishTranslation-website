import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function RV() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <p>
                            For now, see{' '}
                            <Link href='https://freely-given.org/BibleTranslations/English/OET/FAQs.html'>
                                here
                            </Link>
                            .
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default RV;
