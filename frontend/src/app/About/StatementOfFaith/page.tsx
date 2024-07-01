'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function StatementOfFaith() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Statement of Faith</h1>
                        <p>
                            The developers of the{' '}
                            <em>Open English Translation</em> of the Bible all
                            agree to the following:
                        </p>
                        <h2>The scriptures</h2>
                        <p>
                            Commonly known in English as the Bible, the
                            Christian texts consist of the two major components:
                        </p>
                        <ul>
                            <li>
                                the Hebrew scriptures (commonly known as the
                                ‘Old Testament’) are a collection of documents
                                written by a number of authors over a period of
                                over 3,000 years. Some portions (around 1%) are
                                written in Aramaic (an ancient language from the
                                Syrian region) which is in the same language
                                family as Hebrew.
                            </li>
                            <li>
                                the Greek scriptures (commonly known as the ‘New
                                Testament’) which feature four narrative
                                accounts of Yeshua’s life on earth around 2,000
                                years ago plus one about the establishment of
                                Christian assemblies, followed by a collection
                                of letters and a couple of other documents.
                            </li>
                        </ul>
                        <p>
                            We believe that the Christian scriptures (the Hebrew
                            and Greek originals), although penned by human
                            authors, were inspired by God, and from the
                            beginning to the end point to Jesus the messiah as
                            the only way for us to be saved. Thus we also
                            believe that they are worthwhile for us to
                            diligently translate into our own languages,
                            especially as they appear to be written in the
                            languages of the ordinary people at those times.
                        </p>
                        <h2>One God, three persons</h2>
                        <ul>
                            <li>God the father</li>
                            <li>
                                God the son—commonly known in English as Jesus,
                                although you might find him called by his Hebrew
                                name Yeshua in some of the <em>OET</em>
                                 editions. We believe that he was and is the
                                creator son of God. Everything was formed
                                through him and by him.
                            </li>
                            <li>God the (holy) spirit</li>
                        </ul>
                        <p>
                            Note: The <em>OET</em> doesn’t always continue old
                            English traditions of using capital letters for
                            pronouns and other words referring to members of the
                            trinity. Of course, that’s because the original
                            Hebrew and Greek scriptures didn’t ever distinguish
                            or use such things either. (They only had one set of
                            letter types, so had no distinction between capital
                            or small letters. Modern Hebrew still doesn’t.)
                        </p>
                        <h2>More to come</h2>
                        <p>Yes, what else do we need in here?</p>
                        <h1>Theological bias</h1>
                        <p>
                            Everyone has a bias and in the interest of complete
                            transparency, we openly declare ours here. All of
                            those involved in the <em>OET</em> translation up
                            until this point have come from a ‘Western’
                            protestant background. More particularly, the
                            founder comes from a conservative Pentecostal
                            background, also believing that if Genesis isn’t
                            accurate, then the rest of the Bible isn’t worth
                            believing either, i.e., from a six-day creation
                            background.
                        </p>
                        <p>
                            However, please don’t wrongly take this statement to
                            imply that we have deliberately gone out of our way
                            to insert or even reinforce our own theology in the{' '}
                            <em>OET</em> translation. We believe that every
                            person should have access to a Bible that they can
                            easily understand, and would be very happy if both
                            believers and non-believers found this translation
                            interesting to read and worthy of study, no matter
                            their background and how similar or different it is
                            from ours.
                        </p>
                        <h1>Agenda</h1>
                        <p>
                            It’s sort of covered in other places like the{' '}
                            <Link href={'/Design/Overview'}>Overview</Link>, but
                            hey, let’s say it again in point form here (so no
                            one can accuse us of having a hidden agenda):
                        </p>
                        <ul>
                            <li>
                                to make the Bible available in the English that
                                many of us actually speak (so we don’t have to
                                speak with backwards grammar and sound like
                                ‘religious nutters’)
                            </li>
                            <li>
                                to make a high-quality English Bible translation
                                (well, two translations) that’s free and
                                open-licensed so that the source files can
                                actually be downloaded and the text used on your
                                own church or Bible-study website, etc.
                            </li>
                            <li>
                                to have a channel to educate Bible-readers more
                                about how our Bibles get to us (with the totally
                                transparent and traceable chain from the{' '}
                                <em>Readers’ Version</em> to the{' '}
                                <em>Literal Version</em> to the Greek text to
                                the manuscript photographs)
                            </li>
                            <li>
                                to have an opportunity to correct some
                                long-continued mistakes in English translations
                                (like the name ‘James’) and to update some other
                                traditions simply by doing things better (like
                                Bible book orders and Biblical names in general)
                            </li>
                            <li>
                                by doing such things, to make the <em>OET</em> a
                                new and fresh read for those who may have
                                already read their other English translations
                                many times over
                            </li>
                        </ul>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default StatementOfFaith;
