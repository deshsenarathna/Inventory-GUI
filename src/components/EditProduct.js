import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct(){
    const {productCode}=useParams();
    const [id,setCode]=useState("");
    const [name,setName]=useState("");
    const [qty,setQty]=useState("");
    const [price,setPrice]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        
         fetch('http://localhost:5000/Products/'+productCode)
         .then((res)=>res.json())
         .then((data) => {
            
            setCode(data.id);
            setName(data.name);
            setQty(data.qty);
            setPrice(data.price);
            
        })
        
         .catch((err)=>console.log(err.message))
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const productData= {id,name,qty,price};
        
        fetch('http://localhost:5000/Products'+productCode,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(productData)
        }

        )
        .then((res)=>{
            alert("Product added successfuly");
            navigate("/");
        })
            
        .catch((err)=>console.log(err.message)
    
   

    )
        
    }
    return(
        <div className="container">
        <h2>EDIT PRODUCT</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">CODE:</label>
            <input type="text" id="id" name="id" required value={id} onChange={e=>setCode(e.target.value)}></input>
            
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)}></input>

            <label htmlFor="qty">QTY:</label>
            <input type="text" id="qty" name="qty" required value={qty} onChange={e=>setQty(e.target.value)}></input>

            <label htmlFor="price">PRICE:</label>
            <input type="text" id="price" name="price" required value={price} onChange={e=>setPrice(e.target.value)}></input>

            <div>
                <button className=" btn btn-save">Update</button>
                <Link to="/" className="btn btn-back">Back</Link>
            </div>
        </form>
    </div>
    )
}