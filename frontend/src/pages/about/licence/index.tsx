import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Licence() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Licence</h1>
                        <p>
                            This Bible translation and website are licensed
                            under a Creative Commons Attribution-ShareAlike 4.0
                            International{' '}
                            <Link href='https://CreativeCommons.org/licenses/by-sa/4.0/'>
                                (CC BY-SA 4.0)
                            </Link>{' '}
                            licence.
                        </p>
                        <p>
                            We are retaining a licence that requires
                            attribution, etc. until the project design and the
                            text is somewhat finalised, stablised, and
                            recognised. However, having to keep track of author
                            credits, etc., adds a burden (albeit small) to
                            users, and so in the future, we plan to place this
                            work in the public domain. So we hereby announce
                            that as soon as any translated Bible book has been
                            published at or above v1.0 for three years, that
                            book is to be placed into the public domain. Or
                            alternatively, upon the death of the principle
                            translator or three years of inaction on the project
                            repository (whichever is soonest), the entire work
                            is to be placed into the public domain.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Licence;
