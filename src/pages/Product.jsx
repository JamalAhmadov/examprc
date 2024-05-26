import React, { useEffect, useState } from "react";
import AdminProducts from "../components/AdminProducts";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [select, setSelect] = useState("normal");
  const [search, setSearch] = useState("");

  const getData = async () => {
    let respons = await axios.get("http://localhost:3000/products/");
    setProduct(respons.data);
  };

  const handleDelete = () => {
    getData();
  };

  const filterData = () => {
    let sorted;

    if (select == "a-z") {
      sorted = product.toSorted((a, b) => a.title.localeCompare(b.title));
    } else if (select == "z-a") {
      sorted = product.toSorted((a, b) => b.title.localeCompare(a.title));
    } else {
      sorted = [...product];
    }

    let searchWithTtitle = sorted.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    let searchWithDesc = sorted.filter((item) =>
      item.description.toLowerCase().includes(search.toLowerCase())
    );

    let arr = [...searchWithTtitle, ...searchWithDesc];

    return arr.filter((item, i, array) => array.indexOf(item) == i);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <select
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="normal">Normal</option>
          <option value="a-z">A-z</option>
          <option value="z-a">Z-a</option>
        </select>

        <input
          type="text"
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <table className="adminTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filterData().map((item) => {
            return (
              <AdminProducts item={item} key={item.id} onDelete={handleDelete} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
