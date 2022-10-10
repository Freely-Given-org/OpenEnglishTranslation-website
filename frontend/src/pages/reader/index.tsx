import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';

function Reader() {
    return (
        <>
            <Header />
            <Main>
                <p>
                    This is where you'll be able to read both the OET{' '}
                    <i>Conventional Edition</i> and <i>Explorers’ Edition</i>{' '}
                    online. The <i>Literal Version</i> and{' '}
                    <i>Readers’ Version</i> of each will be displayed
                    side-by-side.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
