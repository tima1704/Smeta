import { Link } from 'react-router-dom';
import styles from '../../Styles/authStyles/index.module.css';
import { SignUp } from './SignUp';
export const Auth = () => {
  return (
    <div className={styles['auth']}>
      <div className={styles['auth-container']} style={{background: "white", height: "70vh"}}>
        <Link to="/auth/signUp">
        signUp
        </Link>
      </div>
    </div>
  );
};