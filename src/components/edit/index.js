import React, { useState, useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useParams, Link  , useHistory} from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Edit.module.css";

const EditUser = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const contacts = useSelector((state) => state.contactReducer);

  const currentContact = contacts.find((contact) => contact.id == id);

  useEffect(() => {

    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

const updateSubmit = () => {
  const checkEmail = contacts.find(
    (contact) => contact.id != id && contact.email === email
  );

  const checkPhone = contacts.find(
    (contact) =>  contact.id != id && contact.phone == parseInt(phone)
  );
  
  if (!name || !email || !phone) {
    return toast.warning("Fill All Fields");
  }

  if (checkEmail) {
    return toast.error("Email is Already exist");
  }

  if (checkPhone) {
    return toast.error("phone is Already exist");
  }

  const data = {
    id: id,
    name,
    email,
    phone,
  };

  dispatch({ type: "UPDATE-CONTACT", payload: data });
  toast.success("Updated Successfully");
  history.push("/");
};


  return (
    <div className={styles.wrapper}>
      <h1>Edit User {id}</h1>
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
        <div className={styles.btn_wrapper}>
          <button type="submit" onClick={updateSubmit}>
            Update
          </button>
          <Link to="/" className={styles.btn}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
