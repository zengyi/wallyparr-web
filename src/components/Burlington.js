import React from "react";

import products from "../data/burlington.json";

console.log("products", products);
const Burlington = () => {
  const categories = Object.keys(products);
  return categories.map((cat) => {
    return (
      <div className="card border-primary mb-3" style={{ maxWidth: "25rem" }}>
        <div className="card-header">{cat}</div>
        <div className="card-body">
          <h4 className="card-title">{cat}</h4>
          <p class="card-text">
            <ul>
              {products[cat].map((item) => (
                <li>
                  {" "}
                  {item["name"]} {item.price}{" "}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    );
  });
};

export default Burlington;
