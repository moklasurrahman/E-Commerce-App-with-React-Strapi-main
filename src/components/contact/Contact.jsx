import "./contact.scss"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <div className="contacts-t">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
       
        <input type="text" placeholder="Enter your e-mail.."/>
          <button>JOIN US</button>
        
        
        </div>
        <div className="icon">
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <PinterestIcon/>
          <LinkedInIcon/>
        </div>
      </div>
    </div>
  )
}

export default Contact