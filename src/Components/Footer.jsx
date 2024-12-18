import { useContext } from 'react';
import { AppContext } from '../AppContext';

const Footer = () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <footer className={`footer ${theme}`}>
     
      <img src="/images/DH.ico" alt="DH-logo" />


    </footer>
  );
};

export default Footer;