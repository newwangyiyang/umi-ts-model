import React from 'react';
const styles = require('./index.less')


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/home.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <div className={styles.my_index}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut omnis optio laudantium, iure dolorum ea iste vel voluptatibus consequuntur sint temporibus doloribus natus odit atque! Unde distinctio laboriosam delectus?
      </div>
    </div>
  );
}
