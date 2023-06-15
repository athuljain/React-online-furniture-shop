export default function Cart({ cartItems = [] }) {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "black" }}>Your cart is empty.</p>
      )}




      <div className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                </div>
                <div className="card-body">
                  {/* Rest of your code */}
                </div>
              </div>
            </div>
            
                <div className="card-body">
                 


                <section class="vh-100" style="background-color: #fdccbc;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <p><span class="h2">Shopping Cart </span><span class="h4"></span></p>

        {cartItems.map((item) => (
                          <div key={item.id} className="card mb-4">
          <div class="card-body p-4">

            <div class="row align-items-center">
              <div class="col-md-2">
                <img src={item.image}
                  class="img-fluid" alt="Generic placeholder image" />
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">{item.name}</p>
                 
                </div>
              </div>
             
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Quantity</p>
                  <p class="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Price {item.price}</p>
                  
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Total</p>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
        ))}

        <div class="card mb-5">
          <div class="card-body p-4">

            <div class="float-end">
              <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Order total:</span> 
              </p>
            </div>

          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" class="btn btn-primary btn-lg">Add to cart</button>
        </div>

      </div>
    </div>
  </div>
</section>








                </div>
              </div>
            </div>
          </div>
        </div>
      
   
  );
}
