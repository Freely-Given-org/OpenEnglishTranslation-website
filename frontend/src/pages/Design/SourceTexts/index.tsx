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
                            <h1>Hebrew Scriptures</h1>
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
                            <h1>Greek Translation of Hebrew Scriptures</h1>
                            <p>
                                We are still in the process of finding a
                                suitable open-licensed copy of the{' '}
                                <Link href='https://en.wikipedia.org/wiki/Septuagint'>
                                    Septuagint
                                </Link>{' '}
                                (LXX) Greek translation of the Hebrew
                                Scriptures. This translation was done around
                                250BC.
                            </p>
                            <h1>Greek Scriptures</h1>
                            <p>
                                We are thrilled to be among the very early users
                                of the ground-breaking{' '}
                                <em>Statistical Restoration</em> Greek New
                                Testament from the{' '}
                                <Link href='https://GreekCNTR.org'>
                                    Center for New Testament Restoration
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
