import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "hello world",
    type: "success",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter Values", "danger");
    } else if (name && isEditing) {
      //edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      showAlert(true, "Item added successfully into the cart", "success");
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    showAlert(true, "empty list", "danger")
    setList([]);
  }

  // const removeItem = () => {

  // }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}{" "}
        {/*conditional rendering */}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button onClick={clearList} className="clear-btn">
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
