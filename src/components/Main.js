require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关信息
var imageDatas = require('../data/imageDatas.json');


//利用自执行函数，将图片名转化为图片路径
function generateInmageURL(imageDatasArr) {
  for(var i=0, j=imageDatasArr.length; i<j; i++){

    var signalImageData = imageDatasArr[i];
    signalImageData.imageURL = require('../images/' + signalImageData.fileName);

    imageDatasArr[i]= signalImageData;

  }
  return imageDatasArr;
}

imageDatas = generateInmageURL(imageDatas);


var ImgFigure = React.createClass({
  render:function () {
      return (
        <figure className="img-figure">
          <img src={this.props.data.imageURL}
                alt={this.props.data.description} />
          <figcaption>
            <h2 className="image-title">{this.props.data.title}</h2>
          </figcaption>
        </figure>
      );
  }
});

class AppComponent extends React.Component {
  render() {

    var controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach((value,index) =>
      imgFigures.push(<ImgFigure data={value} key={index}/>)
    );

    return (
      <section className="stage">
          <section className="image-sec">
              {imgFigures}
          </section>
          <nav className="controller-nav">
              {controllerUnits}
          </nav>
      </section>


    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
