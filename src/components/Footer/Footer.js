import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './index.css';

const Footer = () => {
  return (
    <div className='main-footer-container'>
      <div className="footer-info">Designed and Developed by Aleksandra Ivanova</div>
      <div className='footer-container'>
        <InstagramIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
        <LinkedInIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
      </div>
    </div>
  )
}

export default Footer;
