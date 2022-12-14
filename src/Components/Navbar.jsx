import React ,{useState} from 'react';
import logo from '../images/neophyte.jpg';

function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll' , changeBackground);

  return (
    <nav className={nav ? 'nav active': 'nav'}>
        <a href = '#' className='neophyte'>
            <img src = {logo} alt=''/>
        </a>
        <input type= 'checkbox' className ='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li> <a href='#' className='active'>Home</a></li>
            <li> <a href='#'>Store Auditing </a></li>
            <li> <a href='#'>Self Monitoring</a></li>
            <li> <a href='#'>Detect</a></li>
            <li> <a href='#'>Working</a></li>

        </ul>
    </nav>
  )
}

export default Navbar;