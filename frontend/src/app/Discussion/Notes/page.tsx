'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Notes() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Notes</h1>
                        <h2>Project stages</h2>
                        <p>
                            We are currently in ‘first-draft mode’. This means
                            that we’re trying to fill in all 31,102 Bible verses
                            with text, so that we have a Bible that we can at
                            least start reading and find every reference.
                            However, drafting is only stage one of a
                            multi-stage, multi-year project.
                        </p>
                        <p>Proposed stages include:</p>
                        <ol>
                            <li>
                                Have the computer output{' '}
                                <b>
                                    a very literal English version of each word
                                </b>{' '}
                                in the original texts (using both our own and
                                others’ resources that are open-licensed)
                            </li>
                            <li>
                                <b>
                                    Re-order those sentences to make them
                                    readable
                                </b>{' '}
                                in English, thus producing our{' '}
                                <em>OET Literal Version</em>
                            </li>
                            <li>
                                Manually (i.e., not using so-called ‘AI’ tools)
                                <b>
                                    produce a modern-English draft of each
                                    sentence
                                </b>{' '}
                                from that <em>Literal Version</em> (using our{' '}
                                <Link href='https://Freely-Given.org/OBD/par/MRK/C1V1.htm#Top'>
                                    parallel verse pages
                                </Link>{' '}
                                which include other resources, and our word
                                pages and other online lexicons, etc.), thus
                                producing a first draft of our{' '}
                                <em>OET Readers’ Version</em>
                            </li>
                            <li>
                                Rework the <em>Readers’ Version</em> to be{' '}
                                <b>more natural and fluent</b>, including
                                checking the metre/rhythym in Psalms and similar
                                genres
                            </li>
                            <li>
                                Now recheck the <em>Readers’ Version</em> for
                                <b>accuracy against the original texts</b>
                            </li>
                            <li>
                                Work on the{' '}
                                <b>
                                    extra fields including character mark-up,
                                    footnotes, and cross-references
                                </b>
                                .
                            </li>
                        </ol>
                        <p>So we’re currently at stage #3 above.</p>
                        <h1>Disclaimers</h1>
                        <h2>Translation distance marking</h2>
                        <p>
                            In our <em>OET Readers’ Version</em> translation, we
                            now attempt to mark up where we change it from a
                            literal translation, e.g., if we change the ‘The
                            wealthy man says’ to ‘Wealthy people say’ then we’ve
                            made a change in <em>number</em> (i.e., from
                            singular to plural) and we mark that. You can see
                            the kinds of things that we annotate on our{' '}
                            <Link href='/Resources/Formats#Add'>
                                Formats page
                            </Link>
                            .
                        </p>
                        <p>
                            Anyway, the disclaimer is that we didn’t do so much
                            of that markup when we started on translating ‘The
                            Messianic Update’ (the ‘New Testament’), but we do
                            intend to update that markup on the next pass
                            through those documents/‘books’.
                        </p>
                        <p>
                            <small>
                                Note: That additional markup will only be
                                visible in online versions—only ‘added’ words
                                will be visible in print versions (deemphasised
                                in gray—not emphasied in <i>italics</i> like in
                                older translations).
                            </small>
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Notes;
