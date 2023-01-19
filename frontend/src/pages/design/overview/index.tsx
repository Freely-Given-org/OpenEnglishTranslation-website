import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Overview() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Overview</h1>
                        <p>
                            The <em>Open English Translation</em> is a unique
                            new, open-licensed English Bible translation with
                            two parts. In the left column will be the{' '}
                            <em>Literal Version</em>, designed to help you
                            “peek” into the original languages and get an idea
                            what is actually written there. The right column
                            will have the easy to read and understand{' '}
                            <em>Readers’ Version</em> written in modern English.
                            Actually it’s intended that you’ll read the{' '}
                            <em>Readers’ Version</em>, and when you think, “Does
                            it really say that?”, then you can move your eyes
                            across and get a good idea of what words are
                            actually there in the original language.
                        </p>
                        <p>
                            For more, see the{' '}
                            <Link href='https://freely-given.org/BibleTranslations/English/OET/'>
                                old site
                            </Link>
                            .
                        </p>
                        <h2>OET Readers’ Version</h2>
                        <p>
                            This side of the page (so to speak) is designed to
                            express the meaning of each sentence (as scholars
                            can best understand it) in good, clear, readable
                            modern English. Here the measurements of Noah’s
                            barge (yes, a more modern word than <i>ark</i>)
                            would be in familiar units like metres or feet so
                            that the size can be easily visualised by the
                            reader.
                        </p>
                        <p>
                            More details{' '}
                            <Link href='/design/readers-version'>here</Link>.
                        </p>
                        <h2>OET Literal Version</h2>
                        <p>
                            This side of the page is designed to give you
                            insights into what is actually written in the Hebrew
                            and Greek manuscripts. So the measurements of Noah’s
                            box (yes, actually <i>chest</i> would also be a good
                            literal translation, except that saying{' '}
                            <i>Noah’s chest</i> could be misunderstood) would be
                            given in the original cubits, and ideal for a study
                            of numbers in the Bible. And when you get to the{' '}
                            <i>Box of the Agreement</i>, the Hebrew text starts
                            to make sense in your mind.
                        </p>
                        <p>
                            More details{' '}
                            <Link href='/design/literal-version'>here</Link>.
                        </p>
                        <h2>OET Editions</h2>
                        <p>
                            As well as the two completely different versions of
                            the actual translated text shown above, the{' '}
                            <em>Open English Translation</em> will also have
                            different <i>editions</i>. These are different ways
                            that the texts are published, such as whether the
                            Old Testament books are presented in the typical
                            Christian Bible book order, or in the traditional
                            Jewish book order, or in chronological or some other
                            order.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Overview;
