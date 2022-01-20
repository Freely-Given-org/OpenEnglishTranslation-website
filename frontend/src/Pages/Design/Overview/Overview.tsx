import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Overview() {
    return (
        <>
            <Header />
            <Main />
            <h1>Overview</h1>
            <p>
                The <i>Open English Translation</i> is a unique new English
                Bible translation with two parts.
            </p>
            <h2>Literal Version</h2>
            <p>
                This side of the page (so to speak) is designed to give you
                insights into what is actually written in the Hebrew and Greek
                manuscripts. So the measurements of Noah’s box (yes, actual{' '}
                <i>chest</i>, except that’s too ambiguous) would be given in
                cubits, and ideal for a study of numbers in the Bible.
            </p>
            <h2>Reader’s Version</h2>
            <p>
                This side of the page is designed to express the meaning of each
                sentence (as scholars can best understand it) in good, clear,
                readable modern English. Here the measurements of Noah’s barge
                (yes, a more modern word) would be in familiar units like metres
                or feet so that the size can be more easily visualised by the
                reader.
            </p>
            <p>
                For now, see{' '}
                <a href="https://freely-given.org/BibleTranslations/English/OET/">
                    here
                </a>
                .
            </p>
        </>
    );
}

export default Overview;
