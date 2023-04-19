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
                        <h1>OET Bible Reader</h1>
                        <p>
                            This reader displays the{' '}
                            <em>OET Explorers’ Edition</em> which includes the{' '}
                            <em>
                                OET <b>Readers’ Version</b>
                            </em>{' '}
                            and the{' '}
                            <em>
                                OET <b>Literal Version</b>
                            </em>{' '}
                            displayed together side-by-side.
                        </p>
                        {/* <iframe src='/myStaticIndex.htm' width='100%'></iframe> */}
                        <h2>
                            <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>
                                Enter reader
                            </Link>
                        </h2>
                        <p>
                            You should note that the <em>OET</em> project is
                            still in the very early, startup phases and so you
                            are viewing very early, rough drafts. We are aiming
                            to release the <em>OET New Testament</em> by the end
                            of 2024.
                        </p>
                        <p>
                            See the{' '}
                            <Link href='/About/Contact'>contact page</Link> to
                            submit any errors or suggestions.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
