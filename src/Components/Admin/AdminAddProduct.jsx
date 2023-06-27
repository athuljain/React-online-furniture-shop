import React,{useContext,useRef} from "react"
import  {Button}  from "bootstrap"
import  Form  from "react-bootstrap/Form"

import UserContext from "../User/UserContext"
import { useNavigate } from "react-router-dom"


export default function AdminAddProduct(){
    const navigate=useNavigate()
    const inputRef=useRef(null)
    const {products,setProducts}=useContext(UserContext)


    const submitHandler=()=>{
        const id=parseInt(inputRef.current.Id.value)
        const title=inputRef.current.Title.value 
        const image=inputRef.current.Image.value 
        const category=inputRef.current.Category.value
        const price=inputRef.current.Price.value 
        const qty=inputRef.current.Qty.value 
        setProducts([...products,{id,title,image,category,price,qty,}])
        console.log(products);

        navigate('/admin/products')
    }

    return(
        <div>
    <Form ref={inputRef} onSubmit={e=>e.preventDefault()}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Id</Form.Label>
      <Form.Control name='Id' type="text" placeholder="Enter id" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control name='Title' type="text" placeholder="Enter title" />
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>Image</Form.Label>
        <Form.Control name='Image' type="text" placeholder="Add image" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <Form.Control name='Category' type="text" placeholder="Category" />
      </Form.Group>
    
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control name='Price' type="text" placeholder="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name='Qty' type="text" placeholder="quantity" />
      </Form.Group>
      

     
      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
    </div>
    )
}