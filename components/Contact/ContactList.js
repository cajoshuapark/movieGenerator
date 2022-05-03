import classes from './ContactList.module.css';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import mail from '../../images/mail.png';
import linkedin from '../../images/linkedin.png';

const githubUrl = "https://github.com/cajoshuapark";
const facebookUrl = "https://www.facebook.com/profile.php?id=100008672464027";
const mailUrl = "mailto:cajoshuap1018@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/cajoshuapark/";

function ContactList() {
  return (
  <header className ={classes.contactList}>
    <nav>
      <ul>
        <li>
          <a href={facebookUrl}>
          <img src={facebook} alt='logo' width="100%" height="100%"/>
          </a>
        </li>
        <li>
          <a href={githubUrl}>
          <img src={github} alt='logo' width="100%" height="100%"/>
          </a>
        </li>
        <li>
          <a href={mailUrl}>
          <img src={mail} alt='logo' width="100%" height="100%"/>
          </a>
        </li>
        <li>
          <a href={linkedinUrl}>
          <img src={linkedin} alt='logo' width="100%" height="100%"/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default ContactList