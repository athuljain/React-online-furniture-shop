import React,{useContext,useEffect,useRef} from "react"
import { useNavigate,useParams } from "react-router-dom"
import {UserContext} from '../../Components/User/UserContext'
import {Form,Button} from 'react-bootstrap'


const AdminEdit=()=>{
    const{products,setProducts}=useContext(UserContext)
    const {id}=useParams()
    const Navigate=useNavigate()
    const edit=products.filter((item)=>item.id===parseInt(id))
    const [edited]=edit
    console.log(edit);
    console.log(edited);

    const inputRef=useRef(edited)

    const editHandler=()=>{
        const id=parseInt(inputRef.current.Id.value)
        const title=inputRef.current.Title.value 
        const image=inputRef.current.Image.value 
        const category=inputRef.current.Category.value
        const price=inputRef.current.Price.value 
        const qty=inputRef.current.Qty.value 

        const updated=products.filter((item)=>item.id !== edited.id)

        const newDetails=({id,title,image,category,price,qty,})

       setProducts([...updated,newDetails])

       Navigate('/admin/products')
       alert('product edited succesfully')
    }

    return (
        <div>{edit.map((item)=>
            <div key={item.id}>
            <Form  ref={inputRef} onSubmit={e=>e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Id</Form.Label>
              <Form.Control  name='Id' type="text" value={item.id}  placeholder="Enter id" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control   name='Title' type="text" defaultValue={item.title}  placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control  name='Image' type="text" defaultValue={item.image}  placeholder="Add image" />
              </Form.Group>
               
              <Form.Group className="mb-3" >
                <Form.Label>Category</Form.Label>
                <Form.Control   name='Category' type="text" defaultValue={item.Category}   placeholder="Category" />
              </Form.Group>
            
              <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control  name='Price' type="text" defaultValue={item.price}   placeholder="price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control  name='Qty' type="text" defaultValue={item.qty}    placeholder="quantity" />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={editHandler} >
                Submit
              </Button>
              
            </Form>
            
            </div>
            )}</div>
      )
    }
    
    export default AdminEdit
