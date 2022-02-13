import Link from 'next/link';

import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function EE() {
    return (
        <>
            <Header />
            <Main>
                <p>
                    For now, see{' '}
                    <Link href='https://freely-given.org/BibleTranslations/English/OET/FAQs.html'>
                        here
                    </Link>
                    .
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default EE;
