'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import MainPageContent from '../Components/page/MainPageContent/MainPageContent';
import Page from '../Components/page/page';
import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/main/main';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <div>
                            <h1>Exciting, radical, new Bible translation!</h1>
                            <p>
                                Imagine if, instead of all those complicated
                                rules about how many verses you can use and how
                                much of each book your work is allowed to
                                contain, imagine if the copyright page on your
                                Bible said something like, “This is a careful,
                                modern-English translation of God’s messages to
                                mankind that have been preserved through the
                                centuries despite much opposition and
                                blood-shed, <b>and it’s free for you to use</b>
                                ”!
                            </p>
                            <h1>The English translation for the 2030’s</h1>
                            <h2>
                                Trying to nudge English Bible translation into
                                the 21st century
                            </h2>
                            <p>
                                Yes, work on the radical new{' '}
                                <em>Open English Translation</em> of the Bible
                                is proceeding and{' '}
                                <b>
                                    the first rough draft of the New Testament
                                    was completed back
                                </b>{' '}
                                in March 2024 and over half of the Old Testament
                                is now drafted as New Testament checking also
                                continues.
                            </p>
                            <p>
                                You can read more details in the{' '}
                                <Link href='/Design/Overview'>Overview</Link>,
                                but some of the <b>distinctives</b> of the{' '}
                                <em>OET</em> include:
                            </p>
                            <ul>
                                <li>
                                    a{' '}
                                    <b>
                                        <em>Readers’ Version</em>
                                    </b>{' '}
                                    and a very{' '}
                                    <b>
                                        <em>Literal Version</em>
                                    </b>{' '}
                                    side-by-side
                                </li>
                                <li>
                                    not bound by church jargon, unnecessary
                                    tradition, and following the crowd, in an
                                    attempt to{' '}
                                    <b>
                                        communicate well to non-churched readers
                                    </b>
                                    , yet to{' '}
                                    <b>
                                        provoke and stimulate seasoned Bible
                                        readers
                                    </b>
                                </li>
                                <li>
                                    a commitment to{' '}
                                    <b>accuracy and high-quality</b>, and to
                                    wrestle with the text to try to determine
                                    the likely intent of the various biblical
                                    writers
                                </li>
                                <li>
                                    prepared to <b>fix long-time mistakes</b>,
                                    including some that have been propagated for
                                    hundreds of years since the New Testament
                                    was translated from the Latin translation
                                    into{' '}
                                    <Link href='https://Freely-Given.org/OBD/Wycl/byC/MRK_C1.htm#Top'>
                                        middle-English
                                    </Link>
                                    , i.e., we’re aiming to correct old mistakes
                                    (at the risk of making some new ones)
                                </li>
                                <li>
                                    trying to{' '}
                                    <b>avoid using untranslated Greek words</b>{' '}
                                    as much as possible in the English
                                    translation (words like ‘angel’, ‘apostle’,
                                    ‘baptise’, and ‘Christ’), although we do use
                                    ‘Messiah’ (from Hebrew) heavily
                                </li>
                                <li>
                                    following{' '}
                                    <Link href='https://www.nzherald.co.nz/nz/te-wiki-o-te-reo-maori-new-zealands-most-mispronounced-places-and-what-to-do-about-it/JCCWGOZ5OAQQN7C5A5PDV7UBMI/'>
                                        modern trends
                                    </Link>{' '}
                                    in our societies of{' '}
                                    <b>
                                        showing more respect to other language
                                        groups
                                    </b>{' '}
                                    by trying to do the same with the{' '}
                                    <Link href='/Discussion/BiblicalNames'>
                                        names
                                    </Link>{' '}
                                    of the Biblical characters and with{' '}
                                    <Link href='/Discussion/KTEssays#Yahweh'>
                                        God’s name
                                    </Link>
                                </li>
                                <li>
                                    preparing for the next major movement of
                                    lost young people searching for truth and
                                    meaning and purpose, but who mightn’t want
                                    to be forced to learn old-fashioned English
                                    to do so
                                </li>
                                <li>
                                    designed from the beginning to{' '}
                                    <b>connect with other resources</b>{' '}
                                    including links to the original manuscripts
                                </li>
                                <li>
                                    not a commercial product like most English
                                    Bibles—
                                    <b>
                                        freely available to use, copy, print,
                                        adapt, or retranslate
                                    </b>
                                    —no need to ask for{' '}
                                    <Link href='/About/Licence'>
                                        permission
                                    </Link>
                                </li>
                                <li>
                                    an <b>opportunity for experts</b> to donate
                                    their linguistic, archaeological, cultural,
                                    or theological expertise as a gift to the
                                    world by submitting it as an{' '}
                                    <i>add-on pack</i> to the translation (see
                                    our{' '}
                                    <Link href='/About/Partners'>
                                        Partners page
                                    </Link>
                                    )
                                </li>
                                <li>
                                    <b>
                                        able to keep improving over time with
                                        community input
                                    </b>{' '}
                                    (especially because of the two points
                                    immediately above this one).
                                </li>
                            </ul>
                            <p id='progress'>
                                Currently as of mid-August 2025, we have the
                                first draft of ‘The Messianic Update’ (New
                                Testament) available, plus most of the Old
                                Testament books (Genesis, Exodus, Joshua,
                                Judges, Ruth, 1&2 Samuel, 1&2 Kings, Ezra,
                                Nehemiah, Esther, Job, Songs/Psalms,
                                Ecclesiastes, Song of Songs, Lamentations,
                                Daniel, Hosea, Joel, Amos, Obadiah, Jonah,
                                Micah, Nahum, Habakkuk, Zephaniah, Haggai,
                                Zechariah, and Malachi, nearly half of Ezekiel
                                and some of Proverbs, combining to 61% of the
                                Hebrew scriptures), so a total of{' '}
                                <b>71% of the Bible now drafted</b>. That’s
                                plenty for you to get an idea of the style that
                                we’re aiming for, although some decisions (even
                                some major ones) are still in flux (and will be
                                for quite some time yet).
                            </p>
                            <p>
                                But we’re also{' '}
                                <b>
                                    excited about the way that every word in the{' '}
                                    <em>OET Literal Version</em> is linked to
                                    the Hebrew or Greek word that it’s
                                    translated from
                                </b>
                                . Also, as part of the <em>OET</em> 
                                <b>commitment to transparency</b>, for ‘The
                                Messianic Update’ (New Testament) with a few
                                clicks (and with the help of a companion
                                website), you can go all the way from our text
                                to a photograph of the original Greek manuscript
                                that it’s translated from. Try clicking on a
                                word in our <Link href='/Reader'>Reader</Link>.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={
                                    '/assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg'
                                }
                                alt='Picture of an open Bible'
                                width={500}
                                height={333.333}
                            />
                            <p>
                                  
                                <small>
                                    Photo by{' '}
                                    <Link href='https://unsplash.com/@sixteenmilesout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        Sixteen Miles Out
                                    </Link>{' '}
                                    on{' '}
                                    <Link href='https://unsplash.com/collections/4858217/bible?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        Unsplash
                                    </Link>
                                </small>
                            </p>
                        </div>
                        <div>
                            <p>
                                We’re <b>needing more volunteers</b> to help
                                with many aspects of this work including{' '}
                                <b>logo and website design</b>, as well as help
                                with the translation itself, i.e.,{' '}
                                <b>
                                    consultants, translators, checkers, authors,
                                    note-writers
                                </b>
                                , etc. If you’d like to help with a
                                revolutionary, new Bible project, please look
                                for more information on our{' '}
                                <Link href='/About/Partners'>
                                    Partners page
                                </Link>
                                .
                            </p>
                            <p>
                                We’re also looking for software developers. If
                                you’re a{' '}
                                <b>Python or Flutter/Dart or other Android</b>{' '}
                                developer and would like to help with this vital
                                side of the project, please look for more
                                information on our{' '}
                                <Link href='/About/Partners'>
                                    Partners page
                                </Link>
                                . We’re also after <b>Rust</b> and Golang devs.
                            </p>
                            <h1>Verse of the day</h1>
                            <p>
                                And the message became a human and lived here
                                among us and we saw his greatness—the greatness
                                of an only child of the father—full of grace and
                                truth.{' '}
                                <small>
                                    (
                                    <Link href='https://Freely-Given.org/OBD/par/JHN/C1V14.htm#Top'>
                                        Jn 1:14
                                    </Link>
                                    , OET-RV, early draft version)
                                </small>
                            </p>
                            <p>
                                And the message became flesh and sheltered among
                                us, and we_saw the glory of_him, a_glory as
                                of_an_only_begotten with a_father, full of_grace
                                and truth.{' '}
                                <small>
                                    (Jn 1:14, OET-LV, joined_words come from
                                    single Greek words)
                                </small>
                            </p>
                            <p>
                                <small>
                                    <b>Note:</b> You’re probably more used to
                                    Jesus/Yeshua being called ‘the Word’ (than
                                    ‘the message’), but in modern English,
                                    ‘words’ are the things on this page.
                                    Hundreds of years ago, someone decided that
                                    the Greek word ‘λόγος’ (logos) meant ‘word’
                                    in English (and beginner Greek students are
                                    still taught that) and many translations
                                    have naively followed that, but we’ve{' '}
                                    <Link href='https://BibleHub.com/greek/3056.htm'>
                                        known
                                    </Link>{' '}
                                    for a long time now that ‘message’ or
                                    ‘speech’ (or similar), would be a more
                                    accurate translation in most contexts. While
                                    most older English translations still use
                                    ‘word’, the new <em>OET</em> uses a better
                                    translation that makes the{' '}
                                    <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>
                                        concept
                                    </Link>{' '}
                                    much easier for the modern reader to
                                    understand. (Oh, and by the way, there are
                                    no capitalised words in the Hebrew and Greek
                                    originals, so with a focus on accuracy over
                                    tradition, the <em>OET</em> has much less
                                    artificial capitalisation than your older
                                    Bible.)
                                </small>
                            </p>
                            <p>
                                <Link href='/Design/Overview'>
                                    Read Overview
                                </Link>
                            </p>
                        </div>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
