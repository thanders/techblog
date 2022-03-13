import HorizontalNav from '../HorizontalNav/HorizontalNav';
import Link from 'next/link'
import { sideBarContainer } from "./sidebar.module.css";
const SideBar = ({ children, style }) => {

      const container = (
          <div className={sideBarContainer} style={style}>
            { children }
          </div>
      );

    return container;
  }
  
  export default SideBar