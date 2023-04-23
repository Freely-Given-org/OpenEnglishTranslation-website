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
                            This Bible translation and website are each
                            separately licensed under a Creative Commons
                            Attribution-ShareAlike 4.0 International{' '}
                            <Link href='https://CreativeCommons.org/licenses/by-sa/4.0/'>
                                (CC BY-SA 4.0)
                            </Link>{' '}
                            licence.
                        </p>
                        <h2>Future plans</h2>
                        <p>
                            For now we are retaining a licence that requires
                            attribution, etc. until the project design and the
                            text is somewhat finalised, stablised, and
                            recognised. However, having to keep track of author
                            credits, etc., adds a burden (albeit small) to
                            users, and so in the future,{' '}
                            <b>
                                we plan to place this work in the public domain
                            </b>
                            . So we hereby announce that as soon as any
                            translated Bible book has been published at or above
                            v1.0 for two years, that book is to be placed into
                            the public domain. Or alternatively, upon the death
                            of the principle translator or two years of inaction
                            on the{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                project repository
                            </Link>{' '}
                            (whichever is soonest), the entire work is to be
                            placed into the public domain.
                        </p>
                        <h1>Volunteering</h1>
                        <p>
                            Any volunteers must agree in writing in advance that
                            their work will become the property of
                            Freely-Given.org, and thus also made publicly
                            available under an open licence and put into the
                            public domain in the future. Of course we’re happy
                            to credit any contributors (if they desire).
                        </p>
                        <h1>Copyright</h1>
                        <p>
                            This <em>OET</em> Bible translation is copyright ©
                            2010-2023{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
                            </Link>
                            .
                        </p>
                        <p>
                            This website is copyright © 2022-2023{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
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

export default Licence;
