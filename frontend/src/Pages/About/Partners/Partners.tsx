import { Link } from 'react-router-dom';

import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Partners() {
    return (
        <>
            <Header />
            <Main>
                <h1>Helpers Wanted</h1>
                <p>
                    We are looking for techo geeks in the Bible world to help us
                    achieve this vision. If you're proficient in Python, Rust,
                    or Flutter/Dart, please do{' '}
                    <Link to={'/Contact'}>contact</Link> us.
                </p>
                <h1>Sponsors Wanted</h1>
                <p>
                    We also need financial help for this project to advance at
                    full speed. Although most of the work is done by volunteers,
                    we do need to cover our computing costs (domain names,
                    servers and services, internet, electricity) as well as
                    travel and conferences; then if there's any extra, it will
                    also be appreciated for helping to pay the grocery bill.
                    Again, please use the{' '}
                    <Link to={'/Contact'}>contact page</Link> to get in touch
                    directly.
                </p>
            </Main>
            <Footer />
        </>
    );
}

export default Partners;
