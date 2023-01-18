import Link from 'next/link';

import MainPageContent from '../../../Components/page/MainPageContent/MainPageContent';
import Page from '../../../Components/page/page';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Partners() {
    return (
        <>
            <Header />
            <Main>
                <Page>
                    <MainPageContent>
                        <h1>Helpers wanted</h1>
                        <p>
                            We are looking for techo geeks in the Bible world to
                            help us achieve this vision. If you’re proficient in
                            Python, Flutter/Dart, Rust, or Golang, please do{' '}
                            <Link href="/contact'">contact</Link> us.
                        </p>
                        <h1>Sponsors wanted</h1>
                        <p>
                            We also need financial help for this project to
                            advance at full speed. Although most of the work is
                            done by volunteers, we do need to cover our
                            computing costs (domain names, servers and services,
                            internet, electricity) as well as travel and
                            conferences. We would also like to be able to pay
                            for services from contract programmers and web
                            developers. Then if there’s any extra, it will also
                            be appreciated for helping to pay the grocery bill.
                            Again, please use the{' '}
                            <Link href='/contact'>contact page</Link> to get in
                            touch directly.
                        </p>
                        <h1>Users wanted</h1>
                        <p>
                            As some OET books start being finished in the first
                            half of this year, we’ll be wanting users to try
                            them out in their own Bible software. Incorporating
                            the OET will definitely take more effort than for
                            conventional translations, because the design has
                            both a <em>Literal Version</em> and a{' '}
                            <em>Readers’ Version</em> that complement each other
                            and are intended to be displayed together (or
                            printed side-by-side).
                        </p>
                        <h1>Bible consultants wanted</h1>
                        <p>
                            If you’re a Bible translation consultant and/or a
                            Hebrew or Greek expert, we would value your help in
                            checking drafts for errors and also for making
                            suggestions for improvement.
                        </p>
                    </MainPageContent>
                </Page>
            </Main>
            <Footer />
        </>
    );
}

export default Partners;
