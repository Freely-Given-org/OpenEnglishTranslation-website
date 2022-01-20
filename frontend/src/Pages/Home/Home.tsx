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
            <p>
                Currently, the best place to read about it is at{' '}
                <a href="https://freely-given.org/BibleTranslations/English/OET/">
                    Freely-Given.org
                </a>
                , but this will soon become the main site.
            </p>
            <img
                alt="Photo of Bible"
                src="../../../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg"
            />
            <Footer />
        </>
    );
}

export default Home;
