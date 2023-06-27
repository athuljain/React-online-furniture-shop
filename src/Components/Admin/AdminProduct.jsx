import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../User/UserContext"

const AdminProducts=()=>{

  const navigate=useNavigate()
  const productData=useContext(UserContext)
  const {products,setProducts,searchProducts,setSearchProducts}=productsData
  // console.log(products);
const details=products.filter((item)=>(item))

const deleteHandler=(item)=>{
  const buttonid=parseInt(item.target.id)
  const updated=products.filter((item)=>(item.id !== buttonid))
  setProducts(updated)
}
const searchDetails=products.filter((item)=>{
  const name = item.title.toLowerCase()
  return  name.includes(searchProducts)})
  const searchHandler=(e)=>{
setSearchProducts((e.target.value).toLowerCase())


  }

  return (
    <div>

  <input placeholder='Search Products here ' className='m-3 p-2 inputproductsadmin' onChange={searchHandler}></input>
  <Button style={{border:'1px solid green',borderRadius:'1px' }} variant="success"  onClick={()=>navigate('/admin/addproducts')}>Add Products</Button>


    <div className='d-flex flex-column container'>
    <div className='row gap-1'>
   {searchDetails.map((item)=>(
    
    <div key={item.id}>
      <div
         key={item.id}
         className="d-flex align-items-center justify-content-between ps-2 bg-secondary"
         style={{
           maxWidth: "100%",
           borderLeft:'0px ',
           borderRight:'0px',
           borderTop:'0px',
           borderBottom:'2px',
           borderStyle:'solid',
           borderColor:'white',
         }}
         id='adminproducts'
       >
         <div className="d-flex">
          
           <Image
             className="img-fluid"
             src={item.image}
             style={{
               maxWidth: "80px",
               minWidth: "1px",
               height: "70px",
               border: "1px solid black",
               borderRadius: "5px",
             }}
           ></Image>
           <div className="bd-secondary">
           <h4>{item.title}</h4>
           <p>
             <strong> Price</strong>: 
             <strong> ₹{item.price} </strong>
           </p>
         </div>
         </div>

         <div className="d-flex pt-1 pb-1 ">
          

           <div className="d-flex ">
             <Button
               id={item.id}
               onClick={()=>navigate(`/admin/productedit/${item.id}`)}
               className="btn-block bg-primary me-3 ms-3"
               style={{ border: "1px solid white", color:"white" }}
             >
               Edit
             </Button>
             <Button
               id={item.id}
               
               className="btn-block bg-danger me-3 ms-3"
               style={{ border: "1px solid white", color:"white" }}
               onClick={deleteHandler}
             >
               Remove
             </Button>
           </div>
         </div>
       </div>
     </div>
   ))}
    </div>
    </div>
   
    
    </div>

  )
}

export default AdminProducts
 
}