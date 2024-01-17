import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Licence() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Licence</h1>
                        <p>
                            The spirit and the bride say, “Come.”
                            <br />
                            Whoever hears this should also say, “Come.”
                            <br />
                            Anyone who’s thirsty to live forever should come.
                            Anyone who wants it can take the water that gives
                            life free of charge.{' '}
                            <small>(Rev 22:17 OET-RV)</small>
                        </p>
                        <p>
                            The Bible translation and this website are each
                            separately licensed under a Creative Commons
                            Attribution-ShareAlike 4.0 International{' '}
                            <Link href='https://CreativeCommons.org/licenses/by-sa/4.0/'>
                                (CC BY-SA 4.0)
                            </Link>{' '}
                            licence.
                        </p>
                        <h2>Future plans</h2>
                        <p>
                            For now we are retaining a licence that requires
                            attribution, etc. until the project design and the
                            text is somewhat finalised, stablised, and
                            recognised. However, having to keep track of author
                            credits, etc., adds a burden (albeit small) to
                            users, and so in the future,{' '}
                            <b>
                                we plan to place this work in the public domain
                            </b>
                            . So we hereby announce that as soon as any
                            translated Bible book has been published at or above
                            v1.0 for two years, that book is to be placed into
                            the public domain. Or alternatively, upon the death
                            of the principle translator or two years of inaction
                            on the{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                project repository
                            </Link>{' '}
                            (whichever is soonest), the entire work is to be
                            placed into the public domain.
                        </p>
                        <h1>Volunteering</h1>
                        <p>
                            Any volunteers must agree in writing in advance that
                            their work will become the property of
                            Freely-Given.org, and thus also made publicly
                            available under an open licence and put into the
                            public domain in the future. Of course we’re happy
                            to credit any contributors (unless they request
                            otherwise).
                        </p>
                        <h1>Copyright</h1>
                        <p>
                            The <em>Open English Translation</em> of the Bible
                            is copyright © 2010-2024{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
                            </Link>
                            .
                        </p>
                        <p>
                            This website is copyright © 2022-2024{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
                            </Link>
                            .
                        </p>
                        <h1>Publication Guidelines</h1>
                        <p>
                            The <em>OET</em> is offered under an open license
                            that means that you can copy, use, and even print it
                            without even requesting permission. However, that
                            doesn’t mean that it’s not copyrighted—it is and our
                            copyright and attribution should be displayed in
                            your publication or on your website, e.g., “This{' '}
                            <em>Open English Translation</em> of the Bible is
                            copyright © 2010-2024 by{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
                            </Link>{' '}
                            and used under the terms of the Creative Commons
                            Attribution-ShareAlike 4.0 International{' '}
                            <Link href='https://CreativeCommons.org/licenses/by-sa/4.0/'>
                                (CC BY-SA 4.0)
                            </Link>{' '}
                            licence. The source files are available at{' '}
                            <Link href='https://OpenEnglishTranslation.Bible'>
                                https://OpenEnglishTranslation.Bible
                            </Link>{' '}
                            and at{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET
                            </Link>{' '}
                            and were downloaded on such-and-such-a-date.”
                        </p>
                        <p>
                            If you wish to change or adapt the <em>OET</em>, you
                            can also do that except that now you must change its
                            name, e.g., “This work was adapted from the{' '}
                            <em>Open English Translation</em> of the Bible,
                            copyright © 2010-2024 by{' '}
                            <Link href='https://Freely-Given-org'>
                                Freely-Given.org
                            </Link>{' '}
                            and used under the terms of the Creative Commons
                            Attribution-ShareAlike 4.0 International{' '}
                            <Link href='https://CreativeCommons.org/licenses/by-sa/4.0/'>
                                (CC BY-SA 4.0)
                            </Link>{' '}
                            licence. Those original source files are available
                            at{' '}
                            <Link href='https://OpenEnglishTranslation.Bible'>
                                https://OpenEnglishTranslation.Bible
                            </Link>{' '}
                            and at{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET
                            </Link>{' '}
                            and were last downloaded on such-and-such-a-date.”
                            <br />
                            Because the <em>OET</em> licence is a ‘share-alike’
                            licence, you must also make your derived work
                            available on the same terms.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Licence;
