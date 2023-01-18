import Image from 'next/image';
import Link from 'next/link';

import HomePagePhoto from '../../../Assets/sixteen-miles-out-MLOZazGGCb8-unsplash.jpg';
import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';
import styles from './source-text.module.scss';

function SourceTexts() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <div>
                            <h1>Hebrew Scriptures</h1>
                            <div className={styles.bannerFeed}>
                                <Image
                                    src={HomePagePhoto}
                                    alt='idk big thingy'
                                    width={500}
                                    height={333.333}
                                    className={styles.homePagePhoto}
                                />
                                <p>
                                    Photo by{' '}
                                    <Link href='https://unsplash.com/@sixteenmilesout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        Sixteen Miles Out
                                    </Link>{' '}
                                    on{' '}
                                    <Link href='https://unsplash.com/collections/4858217/bible?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                                        Unsplash
                                    </Link>
                                </p>
                            </div>
                            <p>
                                We are very grateful for the work of the Open
                                Scripture Hebrew Bible team, and will be using
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
                                of the <em>Statistical Restoration</em> Greek
                                New Testament from the{' '}
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
