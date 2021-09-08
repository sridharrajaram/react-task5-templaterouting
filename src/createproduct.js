import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from './productcontext';


function CreateProduct(props) {

    const [productName, setProductName] = useState("");
    const [productAuthor, setProductAuthor] = useState("");
    const [productCompany, setProductCompany] = useState("");
    const [productDate, setProductDate] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const productContext = useContext(ProductContext);
    const history = useHistory(); //calling useHistory function for redirection to other component
    
    let handleSubmit = (e) => {
        e.preventDefault();//prevant default will stop auto submitting the form
        //console.log({userName,position,office,age,startDate,salary}); //destructured way of obj declaration
        
        let productData = {productName,productAuthor,productCompany,productDate,productPrice}; //destructured way of obj declaration only if keys should match object variable
        productContext.setProductList([...productContext.productList,productData]); //productList and setproductList are maintained by productContext

        history.push("/product") //redirection command to users component
    }


    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Products</h1>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 mt-2">
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Product Author</label>
                            <input type="text" value={productAuthor} onChange={(e)=>{setProductAuthor(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Product Company</label>
                            <input type="text" value={productCompany} onChange={(e)=>{setProductCompany(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Product Date</label>
                            <input type="date" value={productDate} onChange={(e)=>{setProductDate(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Product Price</label>
                            <input type="text" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    )
}

export default CreateProduct