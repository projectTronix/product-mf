import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const ProductDetail = ({cart, setCart}) => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      let url = new URL(`http://localhost:8090/products/${id}`);
      const response = await axios.get(url.toString());
      console.log(response.data);
      setProduct(response.data);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <Container>
      <Row>
        <ProductCard
          id={product.productId}
          title={product.title}
          description={product.description}
          image={product.imageUrl}
          specifications={product.specifications}
          price={product.price}
        />
      </Row>
      <Row>
        <h3>People also viewed</h3>
        <ProductCarousel categoryTitle={product.categoryTitle} />
      </Row>
    </Container>
  );
};

export default ProductDetail;
