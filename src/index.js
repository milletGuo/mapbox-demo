import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/public.scss';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
import reportWebVitals from './reportWebVitals';
import EventManage from "./untils/Evented";
React.$eventManage = new EventManage();
moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
