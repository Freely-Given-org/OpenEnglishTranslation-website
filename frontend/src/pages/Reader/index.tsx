import Link from 'next/link';

import MainPageContent from '../../Components/page/MainPageContent/MainPageContent';
import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';

function Reader() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        {/* <iframe src='/myStaticIndex.htm' width='100%'></iframe> */}
                        <p>
                            <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>
                                Enter reader
                            </Link>
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
