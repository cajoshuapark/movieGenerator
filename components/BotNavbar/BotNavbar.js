import { Link } from 'react-router-dom';
import classes from './BotNavbar.module.css';

const BotNavbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header}>Movie Recommendator</div>
      <nav>
        <ul>
          <li>
            <Link exact to='/'>Home</Link>
          </li>
          <li>
            <Link exact to='/genre'>Genre</Link>
          </li>
          <li>
            <Link exact to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default BotNavbar;