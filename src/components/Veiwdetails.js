
import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";

export default function Veiwdetails(){
    
    const {productCode}=useParams();
    //console.log(productCode);
    const [productData,setProductData]=useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/Products/'+productCode)
        .then((res)=>res.json())
        .then((data)=>setProductData(data))
        .catch((err)=>console.log(err.message))

    },[]);
    
    return(
<div className="container">
            <h2>Product Details</h2>
            { productData && <div className="details">
                <p><strong>CODE:</strong>{productData.id}</p>
                <p><strong>NAME:</strong>{productData.name}</p>
                <p><strong>QTY:</strong>{productData.qty}</p>
                <p><strong>PRICE:</strong>{productData.price}</p>
            </div>
            }
            
            <Link to="/" className="btn btn-back">Back</Link>
        </div>

    )
}