import Footer from '../components/Footer';
import Header from '../components/Header';
import content from '../data/content';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className={ styles.container }>
          <section className={ styles.row }>
            <div className={ styles.col }>
              <h2>{content.about.title}</h2>
              {content.about.texts.map((text, index) =>
                <p key={`about-text-${index}`} >{text}</p>
              )}
            </div>
          </section>
          <section className={ styles.row }>
            <div className={ styles.col }>
              <h2>{content.experience.title}</h2>
              {content.experience.texts.map((text, index) =>
                <p key={`experience-text-${index}`} >{text}</p>
              )}
            </div>
            <div className={styles.col}>
              <h2>{content.skills.title}</h2>
              {content.skills.texts.map((text, index) =>
                <p key={`skill-text-${index}`}>{text}</p>
              )}
              <ul>
                {content.skills.list.map((item, index) =>
                  <li key={`skill-list-item-${index}`}>{item}</li>
                )}
              </ul>
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
