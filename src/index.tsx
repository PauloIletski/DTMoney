import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs';

import {App} from './App';
import { threadId } from 'node:worker_threads';

createServer({
  routes(){
    this.namespace='api';

    // this.get('/transactions',() =>{

     
    // })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

