import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Scalable and Future-Ready',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          BedWars2023 is a scalable spigot plugin that revolutionizes Bedwars gameplay. It easily accommodates future expansions, allowing seamless addition of new features.
      </>
    ),
  },
  {
    title: 'Enhanced Customization with Addons',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          The plugin boasts rich addon support, enhancing customization possibilities. Developers can create custom addons that seamlessly integrate with BedWars2023, taking gameplay to new heights.
      </>
    ),
  },
  {
    title: 'Flexible Configurations for All',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          With both advanced and simple options, BedWars2023 caters to a wide range of server owners. It provides accessibility for newcomers while offering fine-tuning capabilities for experienced users and advanced use-cases, by using different server types.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
