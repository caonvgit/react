import React from "react";
import { Products } from "../../interfaces/Products";

type Props = {products : Products[]};

const dashboard = ({products}: Props) => {
  return (
    <table className="table table-bodrer">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Thumbail</th>
          <th>Description</th>
          <th>TT</th>
        </tr>
      </thead>
      <tbody>
      (products.map(product)=>{

      })
      </tbody>
    </table>
  );
};
export default dashboard;
