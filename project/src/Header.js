import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    const trigger = useStoreState((state) => state.trigger);
    const setTrigger = useStoreActions((actions) => actions.setTrigger);
    
    const handlePopUp = () => {
        if (!trigger) {
            setTrigger(true);
        };
    };

  return (
    <header className="Header">      
        <h1>
          <Link to='/'>
              {title}
          </Link>
        </h1>      
      <div className="header-popup-container">
         <button className='header-btn'onClick={handlePopUp}>Popup</button>        
      </div>
    </header>
  )
}

export default Header