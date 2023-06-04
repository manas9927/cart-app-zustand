import Head from "next/head";
import React from "react";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
  return (
    <>
      <Head>
        <title>Cart Page</title>
      </Head>
      <h1>Cart Page</h1>
    </>
  );
};

export default CartPage;
