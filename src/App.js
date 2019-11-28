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
          久等了各位，app的测试目前已接近尾声，新改版的APP不久后会在APP Store 与安卓市场上架。
        </div>
        <a href={require('./android/xys19_v0.3.7.apk')}  download="xys19_v0.3.7.apk" className='appButton appAndroid'>Android版本下载</a>
        <a href='itms-services://?action=download-manifest&amp;url=https://xys19.bsoou.com/xys19.plist' className='appButton appIos'>iOS版本下载</a>
        {/* <span className='appTip'>
          温馨提示：ios安装后需要企业信任才可以使用，请打开 设置/通用/(设备管理或描述文件)，然后选择道地易通进行信任
        </span> */}
      </div>
    </div>
  );
}

export default App;
