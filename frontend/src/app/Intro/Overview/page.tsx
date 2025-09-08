'use client';

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
                            The <em>OET</em> handles this by choosing{' '}
                            <b>two points</b> on that line instead of just one!
                            These two versions (one <b>very literal</b> and one{' '}
                            <b>quite dynamic</b>) are intended to be used
                            together (and never alone).
                        </p>
                        <p>
                            (You can see this for yourself if you scroll down
                            the parallel pages in our{' '}
                            <Link href='/Reader'>Reader</Link>.)
                        </p>
                        <p>
                            Another major distinction is that the <em>OET</em>
                             is being made <b>freely available</b> for others to
                            use and publish in Bible studies and similar
                            materials, to print, to display on any device, and
                            even to change/customise (with some{' '}
                            <Link href='/About/Licence'>limitations</Link>) for
                            a specific group.
                        </p>
                        <h2 id='RV'>OET Readers’ Version</h2>
                        <p>
                            This side of the page (so to speak) is designed to{' '}
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
                                Design/Readers’ Version
                            </Link>
                            .
                        </p>
                        <h2 id='LV'>OET Literal Version</h2>
                        <p>
                            This side of the page is designed to give you{' '}
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
                            to make sense in your mind (compared to the{' '}
                            <i>Ark of the Covenant</i>).
                        </p>
                        <p>
                            More details at{' '}
                            <Link href='/Design/LiteralVersion'>
                                Design/Literal Version
                            </Link>
                            .
                        </p>
                        <h2 id='editions'>OET Editions</h2>
                        <p>
                            As well as the two completely different versions of
                            the actual translated text shown above, the{' '}
                            <em>Open English Translation</em> will also have
                            different <i>editions</i>. These are different ways
                            that the texts are published, such as whether the
                            Old Testament books are presented in the typical
                            Christian Bible book order, or in the traditional
                            Jewish book order, or in chronological or some other
                            order or combination of books.
                        </p>
                        <p>
                            We also plan to offer specialist editions with
                            footnotes and/or study-notes on things like
                            theological and doctrinal topics, as well as
                            archaeological discoveries, plus specialist edtions
                            for Muslims or Hindus, etc., wanting to learn more
                            about the Christian scriptures.
                        </p>
                        <h1 id='not'>
                            What the OET is <i>not</i>
                        </h1>
                        <p>
                            This section was added because we’ve noticed some
                            people wrongly assuming that our ‘easy-to-read’ and
                            ‘free-of-church-jargon’ goals for the{' '}
                            <em>Readers’ Version</em> means that we’re using
                            simplified English. So here’s a list of what the{' '}
                            <em>OET</em> is NOT:
                        </p>
                        <ul>
                            <li>
                                it’s not written in simplified English or using
                                a restricted vocabulary
                            </li>
                            <li>
                                it’s not specifically targeted at children or
                                people who’ve learnt English as their second
                                language
                            </li>
                            <li>it’s not trying to use street slang</li>
                            <li>
                                it’s not aiming to make sentences artificially
                                short or simple
                            </li>
                            <li>
                                it’s not theologically liberal or intentionally
                                pushing any particular bias
                            </li>
                            <li>
                                it’s not backwards looking or ‘anti’ other Bible
                                translations
                            </li>
                            <li>
                                it’s not developed using so-called ‘AI’ or any
                                other automated ‘speed-up-the-task’ tools
                            </li>
                        </ul>
                        <h2 id='is'>In contrast</h2>
                        <p>
                            So in contrast to those misconceptions, a few more
                            points about what the <em>OET Readers’ Version</em>{' '}
                            IS:
                        </p>
                        <ul>
                            <li>
                                it is aimed at <b>native English speakers</b>
                            </li>
                            <li>it is aimed at educated readers</li>
                            <li>
                                it tries to use words, phrases, and idioms that
                                the average person might use at home and work
                            </li>
                            <li>
                                it does <b>try to avoid church jargon</b> where
                                there’s a more contemporary way of expressing
                                the same concepts
                            </li>
                            <li>
                                it’s translated with non-churched people always
                                in mind
                            </li>
                            <li>
                                its complexities will be most appreciated by
                                well-educated, long-term Bible readers who
                                aren’t tied to tradition for tradition’s sake
                            </li>
                            <li>
                                it’s aiming to <b>carve a new path forward</b>{' '}
                                in increasing Biblical understanding that we
                                hope will also rub off onto major, commercial
                                English Bible translations
                            </li>
                            <li>
                                it’s aiming to <b>carve a new path forward</b>{' '}
                                in improving Bible layouts and typesetting
                                (wanting to reduce the quoting of ‘verses’ and
                                reading of ‘chapters’ out of context)
                            </li>
                        </ul>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Overview;
