import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function StatementOfFaith() {
    return (
        <>
            <Header />
            <Main>
                <h1>Statement of Faith</h1>
                <p>
                    The developers of the Open English Translation of the Bible
                    all agree to the following:
                </p>
                <ul>
                    <li>God the father</li>
                    <li>The Holy Spirit</li>
                    <li>
                        Jesus the son -- although you might find him called by
                        his Hebrew name Yeshua in some of the OET versions, we
                        believe that he was and is the creator son of God.
                        Everything was formed through him and by him.
                    </li>
                </ul>
                <p>
                    PS: The OET doesn't always continue English traditions of
                    using capital letters for pronouns and other words referring
                    to members of the trinity. Of course, the original Hebrew
                    and Greek scriptures didn't even distinguish or use such
                    things.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default StatementOfFaith;
