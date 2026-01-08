import { ActionItem } from './ActionItem/ActionItem';
import styles from './ActionSection.module.scss';


export function ActionSection() {
    return (
        <div className={styles['actionsection']}>
            <div className={styles['inner']}>
                <ActionItem 
                    link="/Intro/Overview" 
                    title="Learn"
                    iconType="info" 
                    text="What is the OET? Who is it for? Why was it created? A new, exciting, radical, freely-licensed Bible translation."
                    />
                <ActionItem 
                    link="/Discussion/Blog" 
                    title="News"
                    iconType="news" 
                    text="As of early-January 2026, we have a first draft of most of the sixty-six Bible ‘books’ excluding Leviticus, Numbers, Proverbs, Isaiah, and Jeremiah. Now over 83% of the Bible is drafted."
                    />
                <ActionItem 
                    link="/About/Partners" 
                    title="Volunteer"
                    iconType="volunteer" 
                    text="Wanting to gift your God-given skills to the Bible world? Excited that your work could be freely reused by Bible translators across all the continents and for decades to come? Yes, we need you!"
                    />
            </div>
        </div>
    );
}
