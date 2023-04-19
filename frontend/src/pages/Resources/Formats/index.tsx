import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Formats() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Introduction to Formats and Standards</h1>
                        <p>
                            One important factor in providing a tagged Bible
                            translation for free use in Bible apps and programs
                            is that the data must be readily accessible in
                            convenient forms. Hence, Freely-Given has invested
                            in designing Bible databases and file formats that
                            themselves are offered to the Bible software world
                            as a gift to use in whatever ways meets your needs.
                        </p>
                        <p>
                            Putting that a different way, the <em>OET</em>{' '}
                            attempts to lead and set new directions not just in
                            the way the Bible text is translated and how it’s
                            presented to the user, but also how it’s saved on
                            computers and linked to helpful databases.
                        </p>
                        <h1>Bible Books Codes</h1>
                        <p>
                            When writing any Bible software, one of the first
                            requirements is for a list of Bible books codes .
                            It’s common to use <b>GEN</b> or <b>Gen</b> or{' '}
                            <b>Gn</b> or <b>gen</b> for <i>Genesis</i>, but what
                            about Exodus? <b>EXO</b> or <b>Exo</b> or <b>exo</b>{' '}
                            or <b>EX</b> or <b>Ex</b> or <b>ex</b> or{' '}
                            <b>EXOD</b> or <b>Exod</b> or <b>exod</b>? The{' '}
                            <em>BibleOrgSys</em>{' '}
                            <Link href='https://github.com/Freely-Given-org/BibleBooksCodes'>
                                Bible books codes
                            </Link>
                            :
                            <ul>
                                <li>
                                    are always exactly three characters and
                                    always UPPERCASE, e.g., <b>GEN</b>,{' '}
                                    <b>EXO</b>
                                </li>
                                <li>
                                    always start with a letter, e.g., <b>KI1</b>
                                    , <b>PE2</b>
                                </li>
                                <li>
                                    include codes for ‘books’ beyond the 66 in
                                    the Western protestant tradition, e.g.,{' '}
                                    <b>TOB</b>, <b>LAO</b>
                                </li>
                                <li>
                                    include codes for unusual cases like{' '}
                                    <b>SAM</b> (which would be <b>SA1</b> and{' '}
                                    <b>SA2</b> (since we're no longer restricted
                                    by how big or heavy a single scroll can
                                    be—the revolutionary, new <em>OET</em>{' '}
                                    always considers traditions and whether or
                                    not they still need to apply)
                                </li>
                            </ul>
                        </p>
                        <h1>ESFM Bible Files</h1>
                        <p>
                            <Link href='https://github.com/Freely-Given-org/ESFM'>
                                Enhanced Standard Format Marker
                            </Link>{' '}
                            (ESFM) files are based on the{' '}
                            <Link href='https://ubsicap.github.io/usfm/'>
                                USFM 3
                            </Link>{' '}
                            format used by most Bible translators but add the
                            ability to include metadata (such as names of
                            translators for that particular file) and plentiful
                            datasets linked to each Bible word by means of
                            associated tables.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Formats;
