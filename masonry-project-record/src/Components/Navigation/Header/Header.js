import {Row, Col} from 'react-bootstrap';
import './Header.css';


function Header(){
    

    return(
        <Row className={"header-row"} >
            <Col >
                <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Masonry Fixings Project Records</h1>
            </Col>
            
        </Row>
    );
}
export default Header;