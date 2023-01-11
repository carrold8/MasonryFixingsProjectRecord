import {Row, Col} from 'react-bootstrap';
import './Header.css';


function Header(){
    
    return(
        <Row className={"header-row"}>
            <Col className={"col-md-2"}>
                <h1 style={{color: 'white'}}>Masonry Fixings Project Records</h1>
            </Col>
            
        </Row>
    );
}
export default Header;