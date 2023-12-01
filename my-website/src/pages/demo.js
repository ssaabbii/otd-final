import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./api.css";


function DEMO() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className="container">
            <p>Demo</p>
        </div>
    );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <DEMO/>
        </Layout>
    )

}
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [classes, setClasses] = useState([]);
  
  
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
   
//     axios
//     .post('http://0.0.0.0:8000/detection', formData ,
//       {headers: {
//         'Access-Control-Allow-Credentials': true
//       }
//     })
    
//       .then((response) => {
//         console.log(response.data)
//         setClasses(response.data.classes);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Detect Objects</button>
//       </form>
    
      
//         {classes.map((classa,index) =>(
        
//           <div key={index}>
//             <p>class: {classa}</p>
      
      
// </div>
//     ) ) } 

    
   
  
//   </div>);
// }

// export default App;

