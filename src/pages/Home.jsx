import React, { useEffect } from "react";
import Product from "../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchproducts } from "../Redux/fetures/product";
import Loading from "../component/Loading";

function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  if (status === STATUSES.Loading) {
    return <Loading />;
  }

  return (
    <>
      <Product data={products} />
    </>
  );
}

export default Home;
