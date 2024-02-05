'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function CE() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>OET Conventional Edition</h1>
                        <p>
                            The <em>Conventional Edition</em> is an alternative
                            edition of the <em>OET</em> and is derived from the{' '}
                            <em>Explorers’ Edition</em> (the one that is
                            displayed in the <Link href='/Reader'>Reader</Link>
                            ). This edition is aimed at more conservative
                            readers who don’t want their Bible reading to be
                            distracted by different book orders or by finding
                            non-conventional names or key phrases in the text.
                        </p>
                        <p>
                            The <em>OET Literal Version</em> remains the same in
                            all current editions (and uses transliterated names
                            as all good highly-literal versions should).
                        </p>
                        <p>
                            <small>
                                Technical readers might be interested to know
                                that we developed the{' '}
                                <Link href='https://GitHub.com/Freely-Given-org/ScriptedBibleEditor'>
                                    Scripted Bible Editor
                                </Link>{' '}
                                specifically for being able to derive one Bible
                                version from another by a series of scripted
                                changes stored in TSV tables. So it’s only one
                                computer command for us to create the{' '}
                                <em>Conventional Edition</em> from the{' '}
                                <em>Explorers’ Edition</em>. (The{' '}
                                <em>Scripted Bible Editor</em> is also used to
                                help create the <em>OET Literal Version</em>{' '}
                                from the Greek.)
                            </small>
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default CE;
