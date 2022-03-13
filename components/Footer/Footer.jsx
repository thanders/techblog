import HorizontalNav from '../HorizontalNav/HorizontalNav';
import Link from 'next/link'
import { footerContainer, linkContainer } from "./footer.module.css";

const Footer = () => {

      const container = (
          <div className={footerContainer}>
            <div className={linkContainer}>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
              <div>© 2021 Technology Bear</div>
              <div>Contact</div>
            </div>
          </div>
      );

    return container;
  }
  
  export default Footer