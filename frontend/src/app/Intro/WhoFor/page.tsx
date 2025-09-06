'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function WhoFor() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>
                            Who’s the <em>Open English Translation</em> for?
                        </h1>
                        <h2>
                            Who might like the <em>OET</em>?
                        </h2>
                        <p>Coming ...</p>
                        <h1>
                            Who’s the <em>Open English Translation</em> not for?
                        </h1>
                        <h2>
                            Who probably won’t enjoy the <em>OET</em>?
                        </h2>
                        <p>Coming ...</p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default WhoFor;
