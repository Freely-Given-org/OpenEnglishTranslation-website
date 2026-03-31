'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Status() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Current status of the OET</h1>
                        <h2>Overview</h2>
                        <p>
                            The OET is given a version number (similar to
                            software packages) and it’s currently at{' '}
                            <b>v0.47</b>. (The full version number can always be
                            found in the first paragraph on{' '}
                            <Link href='https://Freely-Given.org/OBD/OET/details.htm'>
                                this page
                            </Link>
                            .)
                        </p>
                        <ul>
                            <li>
                                <b>
                                    Recommended for reading, Bible study, and
                                    for preaching from
                                </b>{' '}
                                (but please submit corrections/suggestions)
                            </li>
                            <li>USA-spelling version is not yet available</li>
                            <li>PDFs not yet available for sample printouts</li>
                            <li>
                                An early alpha version of the <em>Bibleside</em>{' '}
                                app is{' '}
                                <Link href='https://www.bibleside.com/'>
                                    available
                                </Link>{' '}
                                for enthusiastic users to test
                            </li>
                            <li>
                                Not yet recommended for inclusion on Bible sites
                                (due to the three books which haven’t been
                                drafted yet)
                            </li>
                            <li>
                                <b>Not yet recommended for memorisation</b>
                            </li>
                            <li>Not yet recommended for mass printing</li>
                            <li>
                                Not yet recommended for use as a resource for
                                translating into other modern languages
                                (although many of the{' '}
                                <Link href='/Design/ReadersVersion'>
                                    design features
                                </Link>{' '}
                                mentioned on this website should probably be
                                considered)
                            </li>
                        </ul>
                        <p>
                            We have a list of terms which have to be made more
                            consistent across all the books and chapters, and
                            plan to do that before we reach v0.5. We also need
                            many more people to start reading it{' '}
                            <Link href='https://Freely-Given.org/OBD/OET/bySec/'>
                                here
                            </Link>{' '}
                            and to report errors and suggestions to us (or
                            submit a PR on{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                GitHub
                            </Link>
                            ).
                        </p>
                        <h2 id='OT'>
                            Hebrew Scriptures <small>(Old Testament)</small>
                        </h2>
                        <h3>Literal Version</h3>
                        <p>
                            The <em>OET-LV</em> OT is still missing a few word
                            and morpheme glosses, and we aren’t totally
                            satisfied with a few others, but in general it’s
                            reliable to use.
                        </p>
                        <h3>Readers’ Version</h3>
                        <p>
                            The <em>OET-RV</em> OT is not complete yet (missing
                            Leviticus, Isaiah, and Jeremiah), and the spelling
                            of names are not yet fully consistent. However,
                            although you might find the occasional typo, the
                            text is quite reliable to use. Some of the earlier
                            OT books to be translated (esp. Jonah and Genesis)
                            also need some formatting updates.
                        </p>
                        <h2 id='NT'>
                            Messianic Update <small>(New Testament)</small>
                        </h2>
                        <h3>Literal Version</h3>
                        <p>
                            The <em>OET-LV</em> NT is gratefully adapted from an
                            early version of the forthcoming Verifiable Literal
                            Translation created by the{' '}
                            <Link href='https://GreekCNTR.org'>
                                Center for NT Restoration
                            </Link>{' '}
                            (which we also volunteered for, for a time). A few
                            books haven’t been properly reordered yet (we try to
                            make the sentences closer to English{' '}
                            <span title='Subject/Verb/Object'>SVO</span> order),
                            and the SR-GNT/VLT still breaks the Greek text into
                            an excessive number of (shortish) sentences, but the{' '}
                            <em>OET-LV</em> NT is perfectly reliable to use.
                        </p>
                        <h3>Readers’ Version</h3>
                        <p>
                            The <em>OET-RV</em> NT is complete and reliable to
                            use, although it might still contain a few typos,
                            several inconsistencies, and it doesn’t yet have all
                            the formatting markup that has been applied to OT
                            books. (We plan to apply that formatting before we
                            reach v0.5.)
                        </p>
                        <h2 id='plans'>Future plans</h2>
                        <p>
                            Once the OET reaches v0.5 (expected around August,
                            2026), we plan to start actively promoting it in
                            order to get more eyes onto the text.
                        </p>
                        <p>
                            Also at that time, we plan to start work on making
                            PDFs and other exports available for download (or
                            for printing a few test copies).
                        </p>
                        <h2 id='app'>Mobile app</h2>
                        <p>
                            The{' '}
                            <Link href='https://www.Bibleside.com/'>
                                Bibleside app
                            </Link>{' '}
                            (for viewing the Readers’ Version and the Literal
                            Version side-by-side) is currently in development
                            and not yet available for general use, but it’s
                            coming!
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Status;
