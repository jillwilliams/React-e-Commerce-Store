import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="My" title="Products" />

            <div className="row">
            <ProductConsumer>
{/* Value is now being used as an object */}
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
// Product
    );
  }
}
