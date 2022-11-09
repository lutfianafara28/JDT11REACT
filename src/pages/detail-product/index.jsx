import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data?.data?.product };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);

  return (
    <div className="text-center">
      <Title className="text-center my-5">Detail Product</Title>
      <p>Nama Produk: {product?.name}</p>
      <p>Kategori: {product?.categoryId?.name}</p>
      <p>Harga: {product?.price}</p>
      <p>Yang Jual: {product?.ownerId?.name}</p>
      <Button type="danger" onClick={() => navigate(-1)}>
        Pulang
      </Button>
    </div>
  );
};

export default DetailProduct;
