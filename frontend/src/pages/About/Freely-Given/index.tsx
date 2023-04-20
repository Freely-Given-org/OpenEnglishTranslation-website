import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function FreelyGiven() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>About Freely-Given.org</h1>
                        <p>
                            The{' '}
                            <Link href='https://Freely-Given.org'>
                                Freely-Given.org website
                            </Link>{' '}
                            was started in 2009 by Robert Hunt, a Bible
                            translator, as a place to collect and curate free
                            and open-licensed Bible-related resources.
                            Unfortunately, it didn’t get a lot of attention in
                            the 2010’s due to higher priorities, particularly
                            supporting a team in the southern Philippines as
                            they completed a translation of the Bible into their
                            own language.
                        </p>
                        <p>
                            Now Freely-Given.org has become a producer of
                            resources and not just a curator—starting production
                            of the <em>Open English Translation</em> of the
                            Bible.
                        </p>
                        <p>
                            Of course, Freely-Given.org was already known for
                            the <em>Bible Drop Box</em> conversion system for
                            Bible formats based on our Bible Organisational
                            System library (Python).
                        </p>
                        <p>
                            So now in the 2020’s, we are still actively
                            searching for programmers and website developers who
                            would like to join us in sharing God’s gifts with
                            the wider world. Please see our{' '}
                            <Link href='/About/Partners'>Partners page</Link> to
                            see our list of needs, and then let us know your
                            skills.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default FreelyGiven;
