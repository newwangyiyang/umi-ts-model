import React, { useEffect } from 'react';
const styles = require('./index.less')

import _ from 'lodash'

const showLodash = () => {
  const arr = _.range(0, 10, 2)
  return arr
}

export default function() {
  useEffect(() => {
    
  })
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
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
