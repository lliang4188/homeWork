import('./index.scss');
import('../assets/font/Sauce Code Powerline Light.otf');
import createImg from "./common/createImg";
import Logo from  "../assets/image/logo.png";
import Happy from  "../assets/image/happy.jpg";
console.log('hello webpack!!');
if (process.env.NODE_ENV === 'development') {
  console.log('baseurl is localhost');
} else {
  console.log('baseurl is imooc.com');
}
let imgBox = document.createElement('div');
imgBox.appendChild(createImg(Happy));
imgBox.appendChild(createImg(Logo));
document.body.appendChild(imgBox);
