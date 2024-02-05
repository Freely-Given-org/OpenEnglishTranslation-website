'use client';

// import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Name() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>
                            Why is it called the{' '}
                            <em>Open English Translation</em> of the Bible
                            (OET)?
                        </h1>
                        <ul>
                            <li>
                                <b>Open</b> (unashamedly inspired by Free and
                                Open-source software) expresses our desire to
                                make it freely available for others to use or
                                adapt in any way. It’s also open in the sense of
                                open for others to join in and help with (but
                                that doesn’t mean that it would be open to
                                everyone—just those who show a genuine interest
                                and ability).
                            </li>
                            <li>
                                <b>English</b> because it’s an English
                                translation. Modern English. Our English. (It
                                seems a little ethnocentric to leave the
                                language qualifier out of the title of a Bible
                                translation, although it’s true that in most
                                cases that language of the title itself
                                indicates the language of the translation.)
                            </li>
                            <li>
                                <b>Translation</b> just to remind readers/users
                                that it is indeed just a translation of the
                                original language scriptures. (Again it seems a
                                little deficient if a book called something like
                                <em>The Holy Bible</em> doesn’t clearly remind
                                its readers that it’s not the original but
                                merely one of hundreds of different English
                                translations.)
                            </li>
                        </ul>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Name;
