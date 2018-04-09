require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关信息
var imageDatas = require('../data/imageDatas.json');


//利用自执行函数，将图片名转化为图片路径
imageDatas = (function generateInmageURL(imageDatasArr){
  for(let i=0, j=imageDatasArr.length; i<j.length; i++){

    let signalImageData = imageDatasArr[i];
    signalImageData.imageURL = require('../images'+signalImageData.fileName);

    imageDatasArr[i] = signalImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="image-sec">
            1
          </section>
          <nav className="controller-nav">
            2
          </nav>
      </section>


    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
