import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./api.css";

function Image() {
  const [invertedImage, setInvertedImage] = useState(null);

  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://localhost:8000/invert-image', {
      method: 'POST',
      body: formData
    })
    .then(response => response.blob())
    .then(blob => {
      setInvertedImage(URL.createObjectURL(blob));
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
  };

  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="hero__title">
          Загрузите фото и получите предсказание 
        </Heading>
        <p className="hero__subtitle">Модель определит какие проблемы с кожей у Вас есть</p>
        <input type="file" onChange={(e) => handleImageUpload(e.target.files[0])} />
        {invertedImage && <img src={invertedImage} alt="Inverted" className={styles.invertedImage} />}
      </div>
    </header>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout>
      <div className="container">
        <Image />
       
      </div>
    </Layout>
  )
}




