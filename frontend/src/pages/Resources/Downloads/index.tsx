import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Downloads() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Downloads</h1>
                        <p>
                            We aim to have some initial PDF downloads of draft
                            New Testament texts here by mid-2024.
                        </p>
                        <p>
                            The in-progress source files of the <em>OET</em> are{' '}
                            <Link href='https://github.com/Freely-Given-org/ESFM'>
                                ESFM
                            </Link>{' '}
                            (enhanced{' '}
                            <Link href='https://UbsIcap.github.io/usfm/'>
                                USFM
                            </Link>
                            ) and associated ESFM data tables are{' '}
                            <Link href='https://en.Wikipedia.org/wiki/Tab-separated_values'>
                                TSV
                            </Link>
                            . These can be downloaded from the{' '}
                            <Link href='https://GitHub.com/Freely-Given-org/OpenEnglishTranslation--OET'>
                                project repository
                            </Link>
                            .
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Downloads;
