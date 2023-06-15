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
                
              </div>
            </div>
            
                
              </div>
            </div>

          </div>
        </div>
        )}


