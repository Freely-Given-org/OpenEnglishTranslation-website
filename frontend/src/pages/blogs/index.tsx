import type { NextPage } from 'next';
import Image from 'next/image';

import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';
import HomePagePhoto from '../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg';
import styles from './Home.module.scss';


const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Main>
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
                            <a href='https://unsplash.com/@sixteenmilesout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                Sixteen Miles Out
                            </a>{' '}
                            on{' '}
                            <a href='https://unsplash.com/collections/4858217/bible?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                Unsplash
                            </a>
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
