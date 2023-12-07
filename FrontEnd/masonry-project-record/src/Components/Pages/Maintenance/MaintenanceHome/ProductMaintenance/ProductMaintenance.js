import React, {useState, useEffect} from 'react';
import LookupAPIs from '../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import ViewProduct from './ViewProduct';
import CreateProduct from './CreateProduct/CreateProduct';
import { MdAddCircle } from 'react-icons/md';
import {  Row, Col, Card, Table } from 'react-bootstrap';

export default function ProductMaintenance(){

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

                    {addProduct && <CreateProduct handleAddNew={handleAddProduct} />}

                    {productData.length === 0 ?
                    <div>No Users</div>
                    :
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
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