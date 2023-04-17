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
                        <p>
                            <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>Reader</Link>
                            {/* This is where you’ll be able to read both the OET{' '}
                            <em>Conventional Edition</em> and{' '}
                            <em>Explorers’ Edition</em> online. The{' '}
                            <em>Readers’ Version</em> and{' '}
                            <em>Literal Version</em> and of each will be
                            displayed side-by-side. */}
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
