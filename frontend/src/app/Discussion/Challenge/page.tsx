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
                            an{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET/issues'>
                                issue
                            </Link>{' '}
                            and type in a description of the problem so we can
                            investigate it. If it’s a typo or a simple
                            inconsistency, no need to make any justification for
                            a fix. (Or if you’re familiar with Git, go ahead and
                            submit a merge request / PR.)
                        </p>
                        <p>
                            However, if it’s a theological or interpretation
                            issue, the more documentation or support for your
                            suggestion that you can give us in writing up the
                            issue, the better.
                        </p>
                        <p>
                            Alternatively, you can submit a typo or other error
                            from{' '}
                            <Link href='/About/Contact'>our contact page</Link>,
                            and then we’ll either create a new issue ourselves
                            on GitHub, or fix it immediately in the source
                            files.
                        </p>
                        <p>
                            We aim to keep improving the <em>OET</em> to ensure
                            that it’s a reliable, quality translation that’ll be
                            useful for the next decade. Thanks in advance for
                            your help in doing this.
                        </p>
                        <p>
                            Please note that all submissions require that you
                            agree that your work becomes our property and a gift
                            to the world (in order to keep licensing simplified
                            and open). Our commitment is to keep the text free
                            and open—see our{' '}
                            <Link href='/About/Licence'>Licence page</Link>.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Challenge;
