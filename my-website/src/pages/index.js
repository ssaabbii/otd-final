import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/sabinaerikovna">
            Связаться с нами
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <header className={clsx('hero--primary', styles.heroBanner)}>
        <div className="container">
        <Heading as="h2" className="hero__title">
          Преимущества
        </Heading>
        <p className="hero__subtitle">использования сервиса для пользователей</p>
     
      </div>
    </header>
      <main>
        <HomepageFeatures />

        <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Попробуй прямо сейчас!
        </Heading>
      
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/MyDearSkin_bot">
            Telegram-bot
          </Link>
        </div>
      </div>
    </header>
      </main>
    </Layout>
  );
}
