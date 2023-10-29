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
                                You can read more details in the{' '}
                                <Link href='/Design/Overview'>Overview</Link>,
                                but some of the distinctives of the <em>OET</em>
                                 include:
                            </p>
                            <ul>
                                <li>
                                    a <em>Readers’ Version</em> and a very{' '}
                                    <em>Literal Version</em> side-by-side
                                </li>
                                <li>
                                    freely available to use, copy, print, adapt,
                                    or retranslate—no need to ask for{' '}
                                    <Link href='/About/Licence'>
                                        permission
                                    </Link>
                                </li>
                                <li>
                                    a commitment to accuracy and high-quality,
                                    and to wrestle with the text to try to
                                    determine the likely intent of the various
                                    biblical writers
                                </li>
                                <li>
                                    designed from the beginning to connect with
                                    other resources including links to the
                                    original manuscripts
                                </li>
                                <li>
                                    not bound by church jargon, unnecessary
                                    tradition, and following the crowd, in an
                                    attempt to communicate well to non-churched
                                    readers, yet to provoke and stimulate
                                    seasoned Bible readers
                                </li>
                            </ul>
                            <p>
                                Currently as of November 2023 we have a first
                                draft of around 83% of the New Testament
                                available. This is enough that you can get an
                                idea of the style that we’re aiming for,
                                although some decisions (even some major ones)
                                are still in flux. But we’re also excited about
                                the way that every word in the{' '}
                                <em>OET Literal Version</em> is linked to the
                                Greek word that it’s translated from, and as
                                part of the <em>OET</em> 
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
                                revolutionary, new Bible project, please look
                                for more information on our{' '}
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
                                truth.{' '}
                                <small>
                                    (
                                    <Link href='https://Freely-Given.org/OBD/pa/JHN/C1V14.htm#Top'>
                                        Jn 1:14
                                    </Link>
                                    , OET-RV, early draft version)
                                </small>
                            </p>
                            <p>
                                And the message became flesh and sheltered among
                                us, and we_saw the glory of_him, a_glory as
                                of_an_only_begotten with a_father, full of_grace
                                and truth. <small>(Jn 1:14, OET-LV)</small>
                            </p>
                            <p>
                                <small>
                                    <b>Note:</b> You’re probably more used to
                                    Jesus/Yeshua being called ‘the Word’ (than
                                    ‘the message’), but in modern English,
                                    ‘words’ are the things on this page.
                                    Hundreds of years ago, someone decided that
                                    the Greek word ‘λόγος’ (logos) meant ‘word’
                                    in English and many translations have
                                    naively followed that, but we’ve{' '}
                                    <Link href='https://BibleHub.com/greek/3056.htm'>
                                        known
                                    </Link>{' '}
                                    for a long time now that ‘message’ or
                                    ‘speech’ (or similar), would be a more
                                    accurate translation in most contexts. While
                                    most older Bibles still use ‘word’, the new{' '}
                                    <em>OET</em> uses a better translation that
                                    makes the{' '}
                                    <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>
                                        concept
                                    </Link>{' '}
                                    much easier for the modern reader to
                                    understand.
                                </small>
                            </p>
                            <p className={styles.right}>
                                <Link href='/Design/Overview'>
                                    Read Overview
                                </Link>
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
