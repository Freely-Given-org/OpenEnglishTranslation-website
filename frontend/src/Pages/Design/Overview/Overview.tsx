import Header from '../../../Layouts/Header/Header';
import Main from '../../../Layouts/main/main';

function Overview() {
    return (
        <>
            <Header />
            <Main />
            <h1>Overview</h1>
            <p>The <i>Open English Translation</i> is a unique new Bible translation.</p>
            <h2>Literal Version</h2>
            <p>This side of the page (so to speak) is designed to give you insights into what is actually written in the Hebrew and Greek manuscripts.</p>
            <h2>Reader's Version</h2>
            <p>This side of the page is designed to express the meaning of each sentence (as scholars can best understand it) in good, clear, readable modern English.</p>
        </>
    );
}

export default Overview;
