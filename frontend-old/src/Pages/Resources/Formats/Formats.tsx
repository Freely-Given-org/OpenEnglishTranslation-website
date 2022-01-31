import Main from '../../../Layouts/main/main';

function Formats() {
    return (
        <Main>
            <h1>Introduction to Formats and Standards</h1>
            <p>
                One important factor in providing a tagged Bible translation for
                free use in Bible apps and programs is that the data must be
                readily accessible in convenient forms. Hence, Freely-Given has
                invested in Bible databases and file formats that themselves are
                offered to the Bible software world as a gift to use in whatever
                ways meets your needs.
            </p>
            <h1>Bible Books Codes</h1>
            <p>
                When writing any Bible software, one of the first requirements
                is for a list of{' '}
                <a href='https://github.com/Freely-Given-org/BibleBooksCodes'>
                    Bible books codes
                </a>
                . It's common to use <b>GEN</b> or <b>Gen</b> or <b>gen</b> for{' '}
                <i>Genesis</i>, but what about Exodus? <b>EXO</b> or <b>Exo</b>{' '}
                or <b>exo</b> or <b>EXOD</b> or <b>Exod</b> or <b>exod</b>?
            </p>
            <h1>ESFM Bible Files</h1>
            <p>
                <a href='https://github.com/Freely-Given-org/ESFM'>
                    Enhanced Standard Format Marker
                </a>{' '}
                (ESFM) files are based on the{' '}
                <a href='https://ubsicap.github.io/usfm/'>USFM 3</a> format used
                by most Bible translators.
            </p>
        </Main>
    );
}

export default Formats;
