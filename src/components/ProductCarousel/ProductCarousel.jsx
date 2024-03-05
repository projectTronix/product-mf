import { React, useState, useEffect } from "react";
import "./ProductCarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import CarouselCard from "../CarouselCard/CarouselCard";
const ProductCarousel = ({categoryTitle}) => {
  const [products, setProducts] = useState([]);
  const reduceProducts = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    console.log(acc);
    return acc;
  };
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          let url = new URL(`http://localhost:8090/products/category/${categoryTitle}`);
          const response = await axios.get(url.toString());
            setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }, [categoryTitle]);
  return (
    <Carousel className="product-carousel">
      {products.reduce(reduceProducts, []).map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center gap-5">
            {item.map((item) => {
              const id = item.productId;
              return (
                <CarouselCard
                  id={id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  description={item.description.slice(0, 60)}
                  key={id}
                />
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
