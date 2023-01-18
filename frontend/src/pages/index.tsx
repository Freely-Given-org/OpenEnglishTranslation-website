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
                                is now proceeding and the first rough draft of
                                the New Testament is expected by the end of this
                                year (2023).
                            </p>
                            <p>
                                At the moment, the best place to read about it
                                is at{' '}
                                <Link href='https://freely-given.org/BibleTranslations/English/OET/'>
                                    Freely-Given.org
                                </Link>
                                , but this will eventually become the main site.
                            </p>
                            <p>
                                We’re currently looking for volunteers to help
                                with a logo design (and any design help on this
                                website that you’d like to offer) as well as
                                reading and checking our early draft (even just
                                to give your reactions). If you’d like to see an
                                early draft of some of the New Testament, please
                                ask us via our{' '}
                                <Link href='/about/contact'>contact page</Link>.
                            </p>
                            <p>
                                We’re also looking for software developers. If
                                you’re a Python or Dart/Flutter developer and
                                would like to help with a vital project, please
                                do <Link href='/about/contact'>contact</Link>{' '}
                                us. We’re also after Rust and Golang devs.
                            </p>
                            <p>
                                If you’re a professional Bible translator or
                                Bible translation consultant or have Biblical
                                Hebrew or Greek expertise, we would also be
                                grateful for offers of expert help via our{' '}
                                <Link href='/about/contact'>contact page</Link>.
                            </p>
                        </div>
                    </MainPageContent>
                    <div className={styles.bannerFeed}>
                        <Image
                            src={HomePagePhoto}
                            alt='idk big thingy'
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
                    <div className={styles.pageSidebar}></div>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
