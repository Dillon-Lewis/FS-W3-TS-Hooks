import { FormEvent, useReducer, useState } from "react";
import shoppingCartReducer from "./ShoppingCartReducer";
import { ShoppingCartItem } from "./ShoppingCartReducer";
import { Form, Button } from "react-bootstrap";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingCartReducer, { cartItems: [] });
  const [nameInput, setNameInput] = useState("");
  const [price, setPrice] = useState("");

  const handleAddToCart = (event: FormEvent) => {
    event.preventDefault();

    const newToCart: ShoppingCartItem = {
      id: Date.now(),
      name: nameInput,
      price: price,
    };

    dispatch({ type: "ADD_ITEM", payload: newToCart });
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <>
      <h1>Add Item to Cart</h1>
      <Form onSubmit={handleAddToCart}>
        <Form.Group className="mb-3" controlId="formNewPost">
          <Form.Label>Please enter name of the item:</Form.Label>
          <Form.Control
            value={nameInput}
            type="text"
            placeholder="New item here"
            autoComplete="off"
            onChange={(event) => setNameInput(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNewPost">
          <Form.Label>What is the Price? </Form.Label>
          <Form.Control
            value={price}
            type="text"
            placeholder="$$$"
            autoComplete="off"
            onChange={(event) => setPrice(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ul>
        {state.cartItems.map((item) => (
            <li key={item.id}>
                {item.name} sells for {item.price} <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Delete Item</Button>

            </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingCart;
