import Main from '../../../Layouts/main/main';

function Partners() {
    return (
        <Main>
            <h1>Helpers Wanted</h1>
            <p>
                We are looking for techo geeks in the Bible world to help us
                achieve this vision. If you're proficient in Python, Rust, or
                Flutter/Dart, please do <Link to={'/Contact'}>contact</Link> us.
            </p>
            <h1>Sponsors Wanted</h1>
            <p>
                We also need financial help for this project to advance at full
                speed. Although most of the work is done by volunteers, we do
                need to cover our computing costs (domain names, servers and
                services, internet, electricity) as well as travel and
                conferences. Then if there's any extra, it will also be
                appreciated for helping to pay the grocery bill. Again, please
                use the <Link to={'/Contact'}>contact page</Link> to get in
                touch directly.
            </p>
            <h1>Users Wanted</h1>
            <p>
                As small OET books start being finished in the second half of
                2022, we'll be wanting users to try them out in their own Bible
                software. Incorporating the OET will definitely take more effort
                than for conventional translations, because the design has both
                a <i>Literal Version</i> and a <i>Reader's Version</i> that
                complement each other and are intended to be displayed together
                (or printed side-by-side).
            </p>
        </Main>
    );
}

export default Partners;
