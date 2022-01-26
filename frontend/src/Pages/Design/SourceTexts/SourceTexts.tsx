import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function SourceTexts() {
    return (
        <>
            <Header />
            <Main>
                <div>
                    <h1>Hebrew Scriptures</h1>
                    <p>
                        We are very grateful for the work of the Open Scripture
                        Hebrew Bible team, and will be using their OSHB as our
                        source text for the Hebrew Scriptures. This text is
                        based on the Westminster Lenigrad Codex (WLC).
                    </p>
                    <h1>Greek Translation of Hebrew Scriptures</h1>
                    <p>
                        We are still in the process of finding a suitable
                        open-licensed copy of the{' '}
                        <a href='https://en.wikipedia.org/wiki/Septuagint'>
                            Septuagint
                        </a>{' '}
                        (LXX) Greek translation of the Hebrew Scriptures. This
                        translation was done around 250BC.
                    </p>
                    <h1>Greek Scriptures</h1>
                    <p>
                        We are thrilled to be among the very early users of the
                        Greek New Testament from the{' '}
                        <a href='https://GreekCNTR.org'>
                            Center for New Testament Restoration
                        </a>
                        .
                    </p>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export default SourceTexts;
