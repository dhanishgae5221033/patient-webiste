import './homestyles.css';
import appone from '../photos/appone.jpg';
import apptwo from '../photos/apptwo.jpg';
import appthree from '../photos/appthree.jpg';

function AppoinmentImage(){
    return (
        <div className='appimg'>
        <img id="ghst" src={apptwo} alt='summa' />
        <img id="ghst" src={appone} alt='summa' />
        <img id="ghst" src={appthree} alt='summa' />
        </div>
    );
}

export default AppoinmentImage;