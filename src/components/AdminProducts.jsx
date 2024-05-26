import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const AdminProducts = ({ item, onDelete }) => {


    const deleteProduct = async (id) =>{
        await axios.delete("http://localhost:3000/products/" + id )
        onDelete(id);
    }

  return (
    <tr>
      <td>
        <h6>{item.title}</h6>
      </td>
      <td>
        <p>{item.description}</p>
      </td>
      <td>
        <img src={item.image} alt="" />
      </td>
      <td>
        <div className="adminBtns">
          <Link to={"/admin/edit/" + item.id}>
            <button>Edit</button>
          </Link>
          <button onClick={() => {
            deleteProduct(item.id)
          }}>
            Delet
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminProducts;
