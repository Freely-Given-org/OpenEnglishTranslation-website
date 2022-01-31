import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';

function Reader() {
    return (
        <>
            <Header />
            <Main>
                <p>
                    This is where you'll be able to read the OET{' '}
                    <i>Literal Version</i> and <i>Reader's Version</i> online.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
