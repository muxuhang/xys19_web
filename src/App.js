import React from 'react';
import './App.css';
import back from './img/back.png'
import icon from './img/icon.png'
function App() {
  return (
    <div className="App">
      <img className='appBack' alt='' src={back} ></img>
      <div className='appContainer'>
        <img className='appIcon' alt='' src={icon}></img>
        <div className='appTitle'>道 地 易 通</div>
        <div className='appText'>
          <span>说明</span>
          久等了各位，app的测试目前已接近尾声，新改版的APP不久后会在APP Store 与安卓市场上架。 点击下方链接，查看下载链接以及新版app 变动。
        </div>
        <div className='appButton appAndroid'>Android版本下载</div>
        <div className='appButton appIos'>iOS版本下载</div>
      </div>
    </div>
  );
}

export default App;
