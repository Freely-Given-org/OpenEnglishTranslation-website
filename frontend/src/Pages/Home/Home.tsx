import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';

function Home() {
    return (
        <>
            <Header />
            <Main />
            <h1>Exciting new Bible translation!</h1>
            <p>
                Yes, the design of the <i>Open English Translation</i> of the
                Bible is now proceeding and actual translation work is set to
                resume by the middle of this year (2022).
            </p>
            <img
                alt='Photo of Bible'
                src='../../../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg'
            />
            <p>
                Currently, the best place to read about it is at{' '}
                <a href='https://freely-given.org/BibleTranslations/English/OET/'>
                    Freely-Given.org
                </a>
                , but this will soon become the main site.
            </p>
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
            <Footer />
        </>
    );
}

export default Home;
