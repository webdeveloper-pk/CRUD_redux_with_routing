import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Add.module.css";

const AddUser = () => {
  
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const history = useHistory();

  const contacts = useSelector((state) => state.contactReducer);
  
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkPhone = contacts.find(
      (contact) => contact.phone == parseInt(phone)
    );
    console.log(phone, "phone")

    if ((!name || !email || !phone)) {
      return toast.warning("Fill All Fields");
    }

    if (checkEmail) {
      return toast.error("Email is Already exist");
    }

    if (checkPhone) {
      return toast.error("phone is Already exist");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phone
    }

    dispatch({ type: "ADD-CONTACT", payload: data })
    toast.success("Added Successfully")
    history.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <h1>Add User</h1>
      <div className={styles.inner_wrapper}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddUser;
