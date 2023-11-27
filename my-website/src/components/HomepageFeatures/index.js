import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Персонализация',
    Svg: require('@site/static/img/undraw_smiley_face_re_9uid.svg').default,
    description: (
      <>
        Индивидуальный подход к каждому.
      </>
    ),
    SecondParagraph: (
      <>
        The First.
      </>
    ),
  },
  {
    title: 'Удобство использования',
    Svg: require('@site/static/img/undraw_mobile_app_re_catg.svg').default,
    description: (
      <>
      Подбор ухода за кожей прямо у Вас в телефоне.

      </>
    ),
    SecondParagraph: (
      <>
        The Second.
      </>
    ),
  },
  {
    title: 'Экономия',
    Svg: require('@site/static/img/undraw_savings_re_eq4w.svg').default,
    description: (
      <>
        Выбор уходовых средств без лишних затрат.
      </>
    ),
    SecondParagraph: (
      <>
        The Third.
      </>
    ),
  },
];

function Feature({Svg, title, description, SecondParagraph}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {/* <p>{SecondParagraph}</p> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
