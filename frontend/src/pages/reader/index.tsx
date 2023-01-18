import MainPageContent from '../../Components/page/MainPageContent/MainPageContent';
import Page from '../../Components/page/page';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import Main from '../../Layouts/main/main';

function Reader() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <p>
                            This is where you’ll be able to read both the OET{' '}
                            <i>Conventional Edition</i> and{' '}
                            <i>Explorers’ Edition</i> online. The{' '}
                            <em>Literal Version</em> and{' '}
                            <em>Readers’ Version</em> of each will be displayed
                            side-by-side.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Reader;
