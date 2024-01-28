"use client";

import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Contact() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Contacting the Editors</h1>
                        <p>
                            The <em>Open English Translation</em> of the Bible
                            is a product of{' '}
                            <Link href='https://Freely-Given.org'>
                                Freely-Given.org
                            </Link>
                            . It is offered to the world as a free gift in the
                            same way that the original scriptures were created
                            without thought of profit. To contact the editors
                            with corrections or suggestions, please email{' '}
                            <b>OET</b> (dot) <b>Bible</b> (at) <b>gmail</b>{' '}
                            (dot) <b>com</b>.{' '}
                            <small>
                                (All <em>OET</em> submissions become the
                                property of{' '}
                                <Link href='https://Freely-Given.org'>
                                    Freely-Given.org
                                </Link>
                                —see below.)
                            </small>
                        </p>
                        <p>
                            Note: Of course you don’t need to contact us to
                            request permission to use the Open English
                            Translation—that permission is granted in advance!
                            (See the{' '}
                            <Link href='/About/Licence'>Licence page</Link>.)
                        </p>
                        <h1>Volunteering</h1>
                        <p>
                            We’re currently looking for volunteers to help with
                            this work. This includes both Bible people
                            (translators and consultants and readers and
                            checkers) as well as software people (developers and
                            designers). There’s more details on the{' '}
                            <Link href='/About/Partners'>Partners page</Link>.
                        </p>
                        <p>
                            Any volunteers must agree in writing in advance that
                            their work will become the property of
                            Freely-Given.org, and thus made publicly available
                            under an open licence. Of course we’re happy to
                            credit any contributors (unless they wish to remain
                            anonymous).
                        </p>
                        <p>
                            <small>
                                We are very interested in having those join us
                                who are retired or otherwise financially
                                self-supported but we are also aware that there
                                might be younger volunteers who are interested
                                to help with a great project but still need to
                                feed their families. If that’s you, contact us
                                anyway and we may be able to find a way to help
                                with a small honorarium.
                            </small>
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Contact;
