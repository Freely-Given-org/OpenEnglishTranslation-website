'use client';

import styled from '@emotion/styled';
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
                            displayed together side-by-side (as well as parallel
                            and interlinear verse views). More prettification
                            and better navigation still to come, but we wanted
                            to give you an early glimpse into our direction with
                            the text.
                        </p>
                        <p>
                            <small>
                                You should note that the <em>OET</em> project is
                                still in the very early, startup phases and so
                                you are viewing very early, rough drafts of the
                                New Testament and some Old Testament books made
                                available to demonstrate some of the concepts
                                and for early users to start testing. The{' '}
                                <em>OET Old Testament</em> drafting is ongoing.
                            </small>
                        </p>
                        <p>
                            (
                            <Link
                                href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'
                                target='_blank'
                            >
                                Open reader site in separate tab (recommended
                                for best performance)
                            </Link>
                            )
                        </p>
                        <ReaderIframe src='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top' />
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

const ReaderIframe = styled.iframe`
    width: 96vw;
    height: 95vh;
`;
