import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import HomePagePhoto from '../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg';
import MainPageContent from '../Components/page/MainPageContent/MainPageContent';
import Page from '../Components/page/page';
import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/main/main';
import styles from './Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <div className={styles.banner}>
                            <h1>Exciting new Bible translation!</h1>
                            <p>
                                Yes, work on the{' '}
                                <em>Open English Translation</em> of the Bible
                                is proceeding and{' '}
                                <b>
                                    the first rough draft of the New Testament
                                    is expected by the end of 2023{' '}
                                </b>
                                (and then hopefully released by the end of
                                2024).
                            </p>
                            <p>
                                Currently as of May 2023 we have a first draft
                                of almost 40% of the New Testament. This is
                                enough that you can get an idea of the style
                                that we’re aiming for, although some decisions
                                (even some major ones) are still in flux. But
                                we’re also excited about the way that every word
                                in the <em>OET Literal Version</em> is linked to
                                the Greek word that it’s translated from, and as
                                part of the <em>OET</em>{' '}
                                <b>commitment to transparency</b>, with a few
                                clicks (and with the help of a companion
                                website) you can go all the way from our text to
                                a photograph of the original Greek manuscript
                                that it’s translated from. Try clicking on a
                                word in our <Link href='/Reader'>Reader</Link>.
                            </p>
                        </div>
                        <div className={styles.bannerFeed}>
                            <Image
                                src={HomePagePhoto}
                                alt='Picture of an open Bible'
                                width={500}
                                height={333.333}
                                className={styles.homePagePhoto}
                            />
                            <p>
                                Photo by{' '}
                                <Link href='https://unsplash.com/@sixteenmilesout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                    Sixteen Miles Out
                                </Link>{' '}
                                on{' '}
                                <Link href='https://unsplash.com/collections/4858217/bible?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                    Unsplash
                                </Link>
                            </p>
                        </div>
                        <div className={styles.banner}>
                            <p>
                                We’re currently <b>looking for volunteers</b> to
                                help with many aspects of this work including{' '}
                                <b>logo and website design</b>, as well as help
                                with the translation itself, i.e.,{' '}
                                <b>
                                    consultants, translators, checkers, authors,
                                    note-writers
                                </b>
                                , etc. If you’d like to help with a
                                revolutionary new Bible project, please look for
                                more information on our{' '}
                                <Link href='/About/Partners'>
                                    Partners page
                                </Link>
                                .
                            </p>
                            <p>
                                We’re also looking for software developers. If
                                you’re a{' '}
                                <b>Python or Flutter/Dart or other Android</b>{' '}
                                developer and would like to help with this vital
                                side of the project, please please look for more
                                information on our{' '}
                                <Link href='/About/Partners'>
                                    Partners page
                                </Link>
                                . We’re also after <b>Rust</b> and Golang devs.
                            </p>
                            <h1>Verse of the day</h1>
                            <p>
                                And the message became a human and lived here
                                among us and we saw his greatness—the greatness
                                of an only child of the father—full of grace and
                                truth. (Jn 1:14, OET-RV)
                            </p>
                        </div>
                    </MainPageContent>
                    <div className={styles.pageSidebar}></div>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
