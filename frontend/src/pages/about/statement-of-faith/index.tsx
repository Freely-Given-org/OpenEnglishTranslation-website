import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function StatementOfFaith() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Statement of Faith</h1>
                        <p>
                            The developers of the Open English Translation of
                            the Bible all agree to the following:
                        </p>
                        <h2>One God, three persons</h2>
                        <ul>
                            <li>God the father</li>
                            <li>The Holy Spirit</li>
                            <li>
                                Jesus the son—although you might find him called
                                by his Hebrew name Yeshua in some of the OET
                                versions. We believe that he was and is the
                                creator son of God. Everything was formed
                                through him and by him.
                            </li>
                        </ul>
                        <p>
                            PS: The OET doesn’t always continue English
                            traditions of using capital letters for pronouns and
                            other words referring to members of the trinity. Of
                            course, the original Hebrew and Greek scriptures
                            didn’t ever distinguish or use such things.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default StatementOfFaith;
