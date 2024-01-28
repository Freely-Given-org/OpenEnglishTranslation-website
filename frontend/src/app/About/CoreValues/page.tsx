"use client";

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function CoreValues() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Core Values</h1>
                        <h2> of the</h2>
                        <h1>
                            <em>Open English Translation</em>
                        </h1>

                        <h3>Natural</h3>
                        <p>
                            Without resorting to a translation that uses modern
                            slang and risks becoming outdated even faster than
                            usual, as much as possible we have attempted to use
                            words and phrases that you’d likely hear in modern
                            conversation or read in a contemporary novel. So
                            you’ll find Paul and Silas “set free from prison”
                            rather than being “delivered from prison” and Jesus
                            “coming back to life” rather than being
                            “lifted-up/raised from the dead”.
                        </p>
                        <h3>Understandable</h3>
                        <p>
                            You don’t need to have studied Greek and Roman
                            history etc. in order to understand the <em>OET</em>
                            —it’s designed to be able to be understood by a
                            diligent high-schooler. Yes, some concepts and even
                            some terms are complex, but the{' '}
                            <em>Readers’ Version</em> tries to add a small
                            amount of helpful information to assist the reader.
                            (Remember, you can always glance across to the{' '}
                            <em>Literal Version</em> if you want a window into
                            what words were actually written.)
                        </p>
                        <h3>Fresh and non-traditional</h3>
                        <p>
                            Many traditions are good and valuable and help us to
                            have stability in our lives. However, some
                            traditions are plain wrong, and the pros and cons of
                            others can and should be debated. The translators of
                            the <em>Readers’ Version</em> have wrestled with
                            each segment of the text as it was being translated
                            to try to express the thoughts in the language that
                            we speak at school and at work, and to have less of
                            the words that you’ll only hear at church and
                            nowhere else. We don’t have to speak ancient English
                            or Greekified English to be more devout or
                            religious—in fact we aim for less religiosity and
                            more matter-of-fact communications.
                        </p>
                        <p>
                            The freshness of this approach comes for those
                            individuals who may have read the Bible for decades
                            in various other translations. By deliberately
                            trying to choose other words (where we can do so
                            without compromising the intent of the text), we aim
                            to encourage our readers to look at concepts that
                            they’ve imagined for years and to see them from a
                            different, fresh perspective.
                        </p>
                        <h3>Transparent</h3>
                        <p>
                            The <em>OET</em> is designed in such a way as to
                            make the modern, idiomatic, English translation
                            found in the <em>Readers’ Version</em> to be able to
                            be traced across to the <em>Literal Version</em> and
                            then all the way back to the words from the{' '}
                            <em>SR Greek New Testament</em> that it was
                            translated from, and from there right back to
                            photographs of the original manuscripts.
                        </p>
                        <p>
                            Anytime that we’ve needed to guess at the intent of
                            the authors, we’ve endeavoured to mark those
                            decisions by clearly marking any words that we added
                            that weren’t completely obvious from the text, as
                            well as footnoting where we’ve chosen one or two or
                            more ambiguous possibilities for what was meant.
                            (And of course we’re aware that there might have
                            been times when the writer was deliberately
                            ambiguous, and certainly multiple times when
                            sections of text have innuendos, word plays, and/or
                            multiple meanings.)
                        </p>
                        <h3>Modern</h3>
                        <p>
                            We live in the 21<sup>st</sup> century and the
                            digital age. A modern Bible should have interlinked
                            resources and make full use of the internet. Every
                            word in the <em>OET-LV</em> is already connected to
                            the Greek word that it’s translated from and it’s in
                            progress for the <em>OET-RV</em>. We already have a
                            good start linking at pronouns to their referents,
                            i.e., to click on a pronoun like ‘him’ and find out
                            who it’s talking about. Click on the person’s name
                            and go to an entry where you can click throught
                            their family tree.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default CoreValues;
