import React, {useState, useEffect} from 'react';
import LookupAPIs from '../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import ViewProduct from './ViewProduct';
import CreateProduct from './CreateProduct/CreateProduct';
import { MdAddCircle } from 'react-icons/md';
import {  Row, Col, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProductMaintenance(){

    const navigate = useNavigate();
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addProduct, setAddProduct] = useState(false);

    const getProductData = () => {

        LookupAPIs.GetProducts()
        .then((response) => {
            if(response.status === 200){
                setProductData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleAddProduct = () => {
        setAddProduct(false);
        getProductData();
    }

 

    useEffect(() => {
        getProductData();
    }, []);

    if(loading){
        return(
            <div>Loading Users...</div>
        )
    }
    else{
        return(
            <div>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col >
                                <strong>Product Maintenance</strong>
                            </Col>
                            <Col align={'end'}>
                                <span onClick={() => setAddProduct(!addProduct)}><MdAddCircle/></span>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>

                    

                    {productData.length === 0 ?
                    <div>No Users</div>
                    :
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {addProduct && <CreateProduct handleAddNew={handleAddProduct} />}
                            {productData.map((product) => {
                                return(
                                    <ViewProduct key={product.id} product={product} getProductData={getProductData}/>
                                )
                            }) }  
                        </tbody>
                    </Table>
                }
                    </Card.Body>
                </Card>
                

                
            </div>
        )
    }
}