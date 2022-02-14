import Link from 'next/link';

import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Contact() {
    return (
        <>
            <Header />
            <Main>
                <h1>Contacting the Editors</h1>
                <p>
                    The Open English Translation of the Bible is a product of{' '}
                    <Link href='https://Freely-Given.org'>
                        Freely-Given.org
                    </Link>
                    . To contact the editors with corrections or suggestions,
                    please email Freely (dot) Given (dot) org (at) gmail (dot)
                    com.
                </p>
                <p>
                    Note, of course, that you don’t need to contact us to
                    request permission to use the Open English Translation—that
                    permission is granted in advance!
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default Contact;
