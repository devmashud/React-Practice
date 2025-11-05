import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../feature/cart/cartSlice";


function Cart() {
  
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  function handleRemove(name) {
    dispatch(removeFromCart(name))
        console.log("remove")

  }

  function handleClear() {
    dispatch(clearCart())
    console.log("clear")
  }

//   const cartItems = [
//     { name: "Shoes", quantity: 2, totalPrice: 200, img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
//     { name: "T-Shirt", quantity: 1, totalPrice: 50, img: "https://fabrilife.com/products/61507e01d69a1-square.jpg" },
//   ];

//   const totalPrice = 250;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <div className="text-center py-16 text-gray-500 border rounded-lg bg-gray-50">
          Your cart is empty 😢
        </div>
      ) : (
        <>
          {/* Cart items */}
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 rounded-lg transition"
              >
                {/* Left side (image + name + quantity) */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shadow-sm"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                  </div>
                </div>

                {/* Right side (price + remove) */}
                <div className="flex items-center gap-5">
                  <p className="text-lg font-bold text-gray-700">
                    ${item.totalPrice}
                  </p>
                  <button onClick={()=> handleRemove(item.name)} className="text-sm text-red-600 hover:underline font-medium">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total section */}
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800">
              Total: <span className="text-indigo-600">${totalPrice}</span>
            </h3>
            <button  onClick={() => handleClear()}  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Clear
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
