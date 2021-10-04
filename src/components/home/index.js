import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactReducer);

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE-CONTACT", payload: id });
    toast.success ("deleted successfully")
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link to="/add" className={styles.btn}>
          Add New user
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan="2">Actions</th>
          </thead>
          <tbody>
            {contacts.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    <Link to={`/edit/${value.id}`} className={styles.editbtn}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type= "button"
                      className={styles.deletebtn}
                      onClick={() => deleteHandler(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
