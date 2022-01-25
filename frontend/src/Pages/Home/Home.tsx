import HomePagePhoto from '../../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg';
import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';
import './Home.scss';

function Home() {
    return (
        <>
            <Header />
            <Main>
                <div className='banner'>
                    <h1>Exciting new Bible translation!</h1>
                    {/* <br /> */}
                    <p>
                        Yes, the design of the <i>Open English Translation</i>{' '}
                        of the Bible is now proceeding and actual translation
                        work is set to resume by the middle of this year (2022).
                    </p>
                    <p>
                        Currently, the best place to read about it is at{' '}
                        <a href='https://freely-given.org/BibleTranslations/English/OET/'>
                            Freely-Given.org
                        </a>
                        , but this will soon become the main site.
                    </p>
                </div>
                <Page>
                    <div className='blog-feed'>
                        <img
                            src={HomePagePhoto}
                            alt='idk big thingy'
                            className='home-page-photo'
                            width={500}
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
                    <div className='page-sidebar'>
                        
                    </div>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Home;
