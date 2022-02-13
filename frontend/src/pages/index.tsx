import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import HomePagePhoto from '../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg';
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
                <div className={styles.banner}>
                    <h1>Exciting new Bible translation!</h1>
                    <p>
                        Yes, the design of the <i>Open English Translation</i>{' '}
                        of the Bible is now proceeding and actual translation
                        work is set to resume by the middle of this year (2022).
                    </p>
                    <p>
                        Currently, the best place to read about it is at{' '}
                        <Link href='https://freely-given.org/BibleTranslations/English/OET/'>
                            Freely-Given.org
                        </Link>
                        , but this will soon become the main site.
                    </p>
                </div>
                <Page>
                    <div className={styles['banner-feed']}>
                        <Image
                            src={HomePagePhoto}
                            alt='idk big thingy'
                            width={500}
                            height={333.333}
                            className={styles['home-page-photo']}
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
                    <div className='page-sidebar'></div>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
