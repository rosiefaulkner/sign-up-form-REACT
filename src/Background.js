import React from "react";

const backgroundImage = '/images/bg-intro-desktop.png';

const divStyle = {
    backgroundImage: `${backgroundImage}`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  };
  
export class Background extends React.Component {
  render() {
    return (
        <img src={divStyle.backgroundImage} width={divStyle.width} height={divStyle.height} alt="background"/>
    );
  }
}
