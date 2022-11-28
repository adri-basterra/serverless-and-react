import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(false);
  const { productId } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/api/products?id=${productId}`);
      setProduct(data);
    } catch (error) {

    }
  }

  useEffect(() => fetchData(), []);

  if (loading)
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    )

  const { fields } = product;
  const { name, description, price, image } = fields;

  return <section className="section section-center">
    <Link to="/" className="link">
      back home
    </Link>
    <div>
      <div className="title">
        <h2>{name}</h2>
        <div className="title-underline" />
      </div>
      <article className="single-product">
        <img className="single-product-img" src={image[0].url} alt={name} />
        <div>
          <h5>{name}</h5>
          <h5 className="price">${price}</h5>
          <p>{description}</p>
        </div>
      </article>
    </div>
  </section>
}

export default Product
