import { Link } from 'react-router-dom';
import classes from './Navbar2.module.css';
import logo from '../../images/logo.png';

const Navbar2 = () => {
  return (
    <header className={classes.header}>
       <logo>
        <Link exact to='/'>
          <div className={classes.header}><img src={logo} alt='logo' width="100%" height="80%"/></div>
        </Link>
      </logo>  
      <nav>
        <ul>
          <li>
            <Link exact to='/'>Home</Link>
          </li>
          <li>
            <Link to='/random'>            
            Random</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;