import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function FreelyGiven() {
    return (
        <>
            <Header />
            <Main>
                <h1>About Freely-Given</h1>
                <p>
                    <a href='https://Freely-Given.org'>Freely-Given.org</a> was
                    initiated from New Zealand in 2010 as the initial home for
                    the Open English Translation of the Bible (OET) and as a
                    place to review and evaluate open-licensed Bible software
                    and Biblical resources.
                </p>
                <h1>About Freely-Given Software</h1>
                <p>
                    The{' '}
                    <a href='https://Freely-Given.org/Software/BibleOrganisationalSystem/'>
                        Bible Organisational System
                    </a>{' '}
                    (abbreviated as BibleOrgSys or as BOS) got started.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default FreelyGiven;
