'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function NewDiscussion() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Starting a new discussion</h1>
                        <p>
                            We use the GitHub{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET/discussions'>
                                discussion pages
                            </Link>{' '}
                            for open, online discussions, so feel free to join
                            in with an existing discussion or start a new one.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default NewDiscussion;
