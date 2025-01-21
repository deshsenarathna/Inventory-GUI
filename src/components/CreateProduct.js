import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct(){
    const [id,setCode]=useState("");
    const [name,setName]=useState("");
    const [qty,setQty]=useState("");
    const [price,setPrice]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const productData= {id,name,qty,price};
        console.log(productData)
        fetch('http://localhost:5000/Products',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(productData)
        }

        )
        .then((res)=>{
            alert("Product added successfuly");
            navigate("/productTable");
        })
            
        .catch((err)=>console.log(err.message)
    
   

    )
        
    }
    
    return(
        <div className="container">
            <h2>ADD NEW PRODUCT</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">CODE:</label>
                <input type="text" id="id"  required value={id} onChange={e=>setCode(e.target.value)}></input>
                
                <label htmlFor="name">NAME:</label>
                <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)}></input>

                <label htmlFor="qty">QTY:</label>
                <input type="text" id="qty" name="qty" required value={qty} onChange={e=>setQty(e.target.value)}></input>

                <label htmlFor="price">PRICE:</label>
                <input type="text" id="price" name="price" required value={price} onChange={e=>setPrice(e.target.value)}></input>

                <div>
                <button className="btn btn-save">Save</button>
                    <Link to="/productTable" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    )
}