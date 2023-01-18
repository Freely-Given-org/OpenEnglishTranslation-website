import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function OET() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>About the OET</h1>
                        <p>
                            The <em>Open English Translation</em> of the Bible
                            has been planned since before 2010 and an early
                            draft of the account about Jonah was made around
                            then, but other commitments prevented much progress
                            until it was restarted again in mid-2022.
                        </p>
                        <p>
                            The initial vision came after Robert Hunt switched
                            from Windows to Linux on his laptop used for Bible
                            translation in the Philippines. (This was mostly
                            done to avoid the spread of computer viruses.) After
                            some time, he came to realise that the components
                            and programs used on the free Linux operating system
                            had all been donated by clever programmers, but this
                            was in contrast to the Bible resources on the same
                            laptop that were all encrypted and their use was
                            tightly controlled. This didn’t seem to match either
                            the origin of the Scriptures nor did it match the
                            theme of Jesus’ gift to mankind. (Even today, it’s
                            much easier to find a pornography download on the
                            internet than to find a free, modern Bible text
                            download that you could use in your own app or on
                            your own website.)
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default OET;
