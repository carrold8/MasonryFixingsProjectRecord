import {Row, Col} from 'react-bootstrap';
import './Header.css';
import { MsnryBlue } from '../../../Constants/Constants';

function Header(){
    

    return(
        <Row className={"header-row"} style={{marginLeft: '0'}}>
            <Col sm={12} style={{display: 'flex', justifyContent:'center',height: '7vh'}}>
                <h1 style={{color: MsnryBlue, display: 'flex', justifyContent: 'center'}}>Masonry Fixings Project Records</h1>
            </Col>
            
        </Row>
    );
}
export default Header;