import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function SourceTexts() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <div>
                            <h1>Hebrew and Greek Source Texts</h1>
                            <h2>Hebrew Scriptures</h2>
                            <p>
                                We are very grateful for the work of the Open
                                Scriptures Hebrew Bible team, and will be using
                                their{' '}
                                <Link href='https://github.com/Freely-Given-org/morphhb'>
                                    OSHB
                                </Link>{' '}
                                as our source text for the Hebrew Scriptures.
                                This text is based on the Westminster Lenigrad
                                Codex (WLC).
                            </p>
                            <h2>Greek Translation of Hebrew Scriptures</h2>
                            <p>
                                We are still in the process of finding a
                                suitable open-licensed copy of the{' '}
                                <Link href='https://en.wikipedia.org/wiki/Septuagint'>
                                    Septuagint
                                </Link>{' '}
                                (LXX) Greek translation of the Hebrew
                                Scriptures. This translation was done around
                                250BC and is important because it appears to
                                have had a major influence on the Greek
                                Scriptures.
                            </p>
                            <h2>Greek Scriptures</h2>
                            <p>
                                We are thrilled to be among the very early users
                                of the ground-breaking{' '}
                                <em>Statistical Restoration</em> Greek New
                                Testament from the{' '}
                                <Link href='https://GreekCNTR.org'>
                                    Center for New Testament Restoration
                                </Link>{' '}
                                and would like to express our thanks to Dr. Alan
                                Bunning for the many years of (volunteer and
                                later, sponsored) work that he put into this
                                modern, high-quality, open-licensed Greek New
                                Testament.
                            </p>
                            <h1>Other translations and source texts</h1>
                            <p>
                                The other open-licensed translations and
                                original language texts that can be found in the
                                parallel and interlinear pages in our{' '}
                                <Link href='/Reader'>Bible Reader</Link> each
                                have their own copyright details pages, but we
                                especially note here the contribution of{' '}
                                <Link href='https://eBible.org'>
                                    eBible.org
                                </Link>{' '}
                                which is a huge help, including the
                                open-licensed{' '}
                                <Link href='https://WorldEnglish.Bible/'>
                                    World English Bible
                                </Link>{' '}
                                which is part of the inspiration of this work.
                            </p>
                            <h2>Translation Notes</h2>
                            <p>
                                The Translation Notes that can be found in the
                                parallel and interlinear pages in our{' '}
                                <Link href='/Reader'>Bible Reader</Link> come
                                from{' '}
                                <Link href='https://unfoldingWord.org'>
                                    unfoldingWord.org
                                </Link>
                                .
                            </p>
                        </div>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default SourceTexts;
