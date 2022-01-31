import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';
import styles from './overview.module.scss';

function Overview() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Overview</h1>
                        <p>
                            The <i>Open English Translation</i> is a unique new
                            English Bible translation with two parts. In the
                            left column will be the <i>Literal Version</i>,
                            designed to help you "peek" into the original
                            languages and get an idea what is actually written
                            there. The right column will have the easy to read
                            and understand <i>Reader’s Version</i> written in
                            modern English. Actually it’s intended that you’ll
                            read the <i>Reader’s Version</i>, and when you
                            think, "Does it really say that?", then you can move
                            your eyes across and get a good idea of what words
                            are actually there in the original language.
                        </p>
                        <p>
                            For more, see the{' '}
                            <a href='https://freely-given.org/BibleTranslations/English/OET/'>
                                old site
                            </a>
                            .
                        </p>
                        <h2>Literal Version</h2>
                        <p>
                            This side of the page (so to speak) is designed to
                            give you insights into what is actually written in
                            the Hebrew and Greek manuscripts. So the
                            measurements of Noah’s box (yes, actually{' '}
                            <i>chest</i> would also be a good literal
                            translation, except that saying <i>Noah’s chest</i>{' '}
                            could be misunderstood) would be given in cubits,
                            and ideal for a study of numbers in the Bible. And
                            when you get to the <i>Box of the Agreement</i>, the
                            Hebrew text starts to make sense in your mind.
                        </p>
                        {/* <p>
        More details <Link to={'/literal-version'}>here</Link>.
    </p>
    <h2>Reader’s Version</h2>
    <p>
        This side of the page is designed to express the meaning
        of each sentence (as scholars can best understand it) in
        good, clear, readable modern English. Here the
        measurements of Noah’s barge (yes, a more modern word)
        would be in familiar units like metres or feet so that
        the size can be more easily visualised by the reader.
    </p>
    <p>
        More details <Link to={'/readers-version'}>here</Link>.
    </p> */}
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Overview;
