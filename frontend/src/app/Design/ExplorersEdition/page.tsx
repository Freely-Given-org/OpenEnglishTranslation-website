'use client';

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function EE() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>OET Explorers’ Edition</h1>
                        <p>
                            The <em>Explorers’ Edition</em> is the default
                            edition of the <em>OET</em> and the one displayed in
                            the <Link href='/Reader'>Reader</Link>. This edition
                            might be ‘over-the-top’ for conservative readers,
                            with the traditional book orders changed (
                            <i>John</i> and <i>Mark</i> before <i>Matthew</i>)
                            and the (wrongly-named) book of <i>James</i> changed
                            to <i>Jacob</i>.
                        </p>
                        <p>
                            The <em>Readers’ Version</em> in this edition uses{' '}
                            <i>Yeshua</i> (from the Hebrew) instead of Jesus (or
                            something like <i>Yaysous</i> from the Greek), and
                            also makes changes to names that are still familar
                            or recognisable to English readers, e.g.,{' '}
                            <i>Mary</i> becomes <i>Maria</i> (from her Greek
                            name, but not <i>Miriam</i> which was likely her
                            Hebrew name). Many Hebrew names starting with ‘J’
                            are improved to be more accurate and start with ‘Y’,
                            e.g., Yonah, yet they’re still easily recognisable
                            for English readers. (This is definitely only a
                            compromise solution.)
                        </p>
                        <p>
                            The <em>OET Literal Version</em> remains the same in
                            all current editions (and uses transliterated names
                            as all good literal versions should).
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default EE;
