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
                            two parts or ‘versions’. In the left column we
                            display the easy to read and understand{' '}
                            <em>Readers’ Version</em> written in modern English.
                            The right column displays the{' '}
                            <em>Literal Version</em>, designed to help you
                            “peek” into the original languages and get an idea
                            what is actually written there. It’s intended that
                            in normal use, you’ll read the{' '}
                            <em>Readers’ Version</em>, and when you think, “Does
                            it really say that?”, then you can move your eyes
                            across and get a good idea of what words are
                            actually there in the original language even if you
                            haven’t learnt Hebrew or Koine Greek.
                        </p>
                        <p>
                            Most other Bible translations must choose to place
                            themselves somewhere on the line that moves from
                            being very literal (some people might perhaps
                            naively think this is being accurate to the
                            original), to being more helpful to the reader by
                            being more free/dynamic (in making a translation
                            that fills in some of the implied information that
                            might have been obvious to the original readers).
                            The <em>OET</em> handles this by choosing{' '}
                            <b>two points</b> on that line instead of just one!
                            These two versions (one very literal and one quite
                            dynamic) are intended to be used together (and never
                            alone).
                        </p>
                        <p>
                            (You can see this for yourself if you scroll down
                            the parallel pages in our{' '}
                            <Link href='/Reader'>Reader</Link>.)
                        </p>
                        <p>
                            Another major distinction is that the <em>OET</em>{' '}
                            is being made <b>freely available</b> for others to
                            use and publish in Bible studies and similar
                            materials, to print, to display on any device, and
                            even to change/customise (with some limitations) for
                            a specific group.
                        </p>
                        <h2>OET Readers’ Version</h2>
                        <p>
                            This side of the page (so to speak) is designed to
                            <b>express the meaning of each sentence</b> (as
                            scholars can best understand it) in{' '}
                            <b>good, clear, readable, modern English</b>. Here
                            the measurements of Noah’s barge (yes, a more modern
                            word than <i>ark</i>) would be in familiar units
                            like metres or feet so that the size can be more
                            easily visualised by the reader.
                        </p>
                        <p>
                            More details at{' '}
                            <Link href='/Design/ReadersVersion'>
                                Design / Readers’ Version
                            </Link>
                            .
                        </p>
                        <h2>OET Literal Version</h2>
                        <p>
                            This side of the page is designed to give you
                            <b>
                                insights into what is actually written in the
                                Hebrew and Greek
                            </b>{' '}
                            manuscripts. So the measurements of Noah’s box (yes,
                            actually <i>chest</i> would also be a good literal
                            translation, except that saying <i>Noah’s chest</i>{' '}
                            could be misunderstood) would be given in the
                            original cubit measures, and ideal for a study of
                            numbers in the Bible. And when you get to the{' '}
                            <i>Box of the Agreement</i>, the Hebrew text starts
                            to make sense in your mind.
                        </p>
                        <p>
                            More details at{' '}
                            <Link href='/Design/LiteralVersion'>
                                Design / Literal Version
                            </Link>
                            .
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
