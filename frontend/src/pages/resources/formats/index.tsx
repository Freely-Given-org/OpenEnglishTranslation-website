import Link from 'next/link';

import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Formats() {
    return (
        <>
            <Header />
            <Main>
                <h1>Introduction to Formats and Standards</h1>
                <p>
                    One important factor in providing a tagged Bible translation
                    for free use in Bible apps and programs is that the data
                    must be readily accessible in convenient forms. Hence,
                    Freely-Given has invested in Bible databases and file
                    formats that themselves are offered to the Bible software
                    world as a gift to use in whatever ways meets your needs.
                </p>
                <h1>Bible Books Codes</h1>
                <p>
                    When writing any Bible software, one of the first
                    requirements is for a list of{' '}
                    <Link href='https://github.com/Freely-Given-org/BibleBooksCodes'>
                        Bible books codes
                    </Link>
                    . It's common to use <b>GEN</b> or <b>Gen</b> or <b>gen</b>{' '}
                    for <i>Genesis</i>, but what about Exodus? <b>EXO</b> or{' '}
                    <b>Exo</b> or <b>exo</b> or <b>EXOD</b> or <b>Exod</b> or{' '}
                    <b>exod</b>?
                </p>
                <h1>ESFM Bible Files</h1>
                <p>
                    <Link href='https://github.com/Freely-Given-org/ESFM'>
                        Enhanced Standard Format Marker
                    </Link>{' '}
                    (ESFM) files are based on the{' '}
                    <Link href='https://ubsicap.github.io/usfm/'>USFM 3</Link>{' '}
                    format used by most Bible translators.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default Formats;
