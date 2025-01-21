
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function ProductTable(){
    const [Products,setProducts]=useState("");
    const navigate=useNavigate();
    const displayDetails=(id)=>{
        
        navigate("/product/veiw/"+id);
    }
    const editDetails=(id)=>{
        navigate("/product/edit/"+id);
    }

    const deleteProduct=(id)=>{
        if(window.confirm("Are you sure you want to delete?")){
            fetch("http://localhost:5000/Products/"+id,{
                method:'DELETE',
            })
            .then((res)=>{
                alert("Removed Student Data successfully");
               window.location.reload();
            })
            .catch((err)=>console.log(err.message)
            )
    }
}
    useEffect(()=>{
        fetch('http://localhost:5000/Products')
        .then((res)=>res.json())
        .then((data)=>
            setProducts(data)).catch((err)=>
            console.log(err.message))
    },[])
    return(
        <div className="container">
            <h2>Product Records</h2>
            <div className="table-container">
                <Link to="/product/create" className="btn btn-add">ADD NEW PRODUCT</Link>
                <table>
                    <thead>
                        <tr>
                            <th>CODE</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                       Products && Products.map((item)=>(
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>displayDetails(item.id)} className="btn btn-info">Veiw</button>
                                <button onClick={()=>editDetails(item.id)} className="btn btn-primary">Edit</button>
                                <button onClick={()=>deleteProduct(item.id)} className="btn btn-danger">Delete</button>
                            </td>
                         </tr>
                        )
                        )
                        
                     }

                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}