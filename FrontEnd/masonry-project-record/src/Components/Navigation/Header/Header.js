import './Header.css';
import { MsnryBlue } from '../../../Constants/Constants';

function Header(){
    

    return(
        <div className={"header-row"} >
            <h3 style={{color: MsnryBlue}}>Masonry Fixings Project Records</h3>
        </div>
    );
}
export default Header;