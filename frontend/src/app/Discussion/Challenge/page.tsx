'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Challenge() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Our challenge</h1>
                        <p>
                            The <em>OET</em> is currently being drafted and a
                            lot of content, consistency, and format checking is
                            still to come. However, if you find a typo or an
                            inaccuracy, <b>please don’t just ignore it</b>. Open
                            an
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET/issues'>
                                issue
                            </Link>{' '}
                            and type in a description of the problem so we can
                            investigate it. If it’s a typo or a simple
                            inconsistency, no need to make any justification for
                            a fix. However, if it’s a theological or
                            interpretation issue, the more documentation or
                            support for your suggestion that you can give us,
                            the better.
                        </p>
                        <p>
                            Alternatively, you can submit a typo or other error
                            from{' '}
                            <Link href='/About/Contact'>our contact page</Link>,
                            and then we’ll either create an issue ourselves, or
                            fix it immediately in the source files.
                        </p>
                        <p>
                            We aim to keep improving the <em>OET</em> to ensure
                            that it’s a reliable, quality translation that’ll be
                            useful for the next decade. Thanks in advance for
                            your help in doing this.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Challenge;
