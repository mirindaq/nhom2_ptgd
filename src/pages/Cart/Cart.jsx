import { ShoppingCart as CartIcon } from "lucide-react";
import { useCart } from "../../hooks/CartContext";
import { useRef } from "react";

const ShoppingCart = () => {
  const { cart, removeFromCart, totalItems } = useCart();
  const modalRef = useRef(null);

  return (
    <>
      {/* Nút mở modal */}
      <button
        className="btn btn-primary position-relative"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <ShoppingCart />
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
            {totalItems}
          </span>
        )}
      </button>

      {/* Modal Bootstrap */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">
                Your Cart ({totalItems} items)
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map((product) => (
                  <div
                    key={product.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <span>
                      {product.title} - ${product.price}
                    </span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
