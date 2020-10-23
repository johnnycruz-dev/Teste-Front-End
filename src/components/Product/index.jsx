import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import iconStar from '../../assets/icon-star.svg';
import iconStarFilled from '../../assets/icon-star-filled.svg';
import iconLeftArrow from '../../assets/icon-left-arrow.svg';
import iconRightArrow from '../../assets/icon-right-arrow.svg';
import flag from '../../assets/flag.png';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import {
  Container,
  ProductContainer,
  WebCarousel,
  ProductItem,
  ProductInfo,
  StarContainer,
  Star,
  Flag,
  ArrowRight,
  ArrowLeft,
  MobileCarousel,
  Slider,
  SliderButton,
} from './styles';

function Product({ addCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(1);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(
        response.data.map(product => {
          return {
            ...product,
            quantity: product.installments.map(
              installment => installment.quantity,
            ),
            formattedPrice: formatValue(String(product.price)),
            formattedInstallmentValue: formatValue(
              String(
                product.installments.map(installment => installment.value),
              ),
            ),
          };
        }),
      );
    });
  }, []);

  function handleRightArrow() {
    const lastItem = products.pop();
    products.unshift(lastItem);
    setProducts([...products]);
  }

  function handleLeftArrow() {
    const firstItem = products.shift();
    products.push(firstItem);
    setProducts([...products]);
  }

  function handleSliderButton(id) {
    setSelectedProduct(id);
  }

  return (
    <Container>
      <h1>Mais Vendidos</h1>
      <WebCarousel>
        <ArrowLeft
          src={iconLeftArrow}
          alt="Seta Esquerda"
          onClick={handleLeftArrow}
        />
        <ProductContainer>
          {products.map(product => (
            <ProductItem key={product.productId}>
              {product.listPrice !== null && (
                <Flag>
                  <img src={flag} alt="Flag" />
                </Flag>
              )}
              <img src={product.imageUrl} alt={product.productName} />
              <ProductInfo>
                <h3>{product.productName}</h3>
                <StarContainer>
                  <Star
                    src={product.stars > 0 ? iconStarFilled : iconStar}
                    alt="Estrela1"
                  />
                  <Star
                    src={product.stars > 1 ? iconStarFilled : iconStar}
                    alt="Estrela2"
                  />
                  <Star
                    src={product.stars > 2 ? iconStarFilled : iconStar}
                    alt="Estrela3"
                  />
                  <Star
                    src={product.stars > 3 ? iconStarFilled : iconStar}
                    alt="Estrela4"
                  />
                  <Star
                    src={product.stars > 4 ? iconStarFilled : iconStar}
                    alt="Estrela5"
                  />
                </StarContainer>
                <h2>{`por ${product.formattedPrice}`}</h2>
                {product.installments.length > 0 && (
                  <p>{`ou em ${product.quantity}x de ${product.formattedInstallmentValue}`}</p>
                )}
                <div />
                <button type="button" onClick={addCart}>
                  COMPRAR
                </button>
              </ProductInfo>
            </ProductItem>
          ))}
        </ProductContainer>
        <ArrowRight
          src={iconRightArrow}
          alt="Seta Direita"
          onClick={handleRightArrow}
        />
      </WebCarousel>
      <MobileCarousel>
        <ProductContainer>
          <Slider>
            {products.map(
              product =>
                product.productId < 4 && (
                  <SliderButton
                    key={product.productId}
                    type="button"
                    active={product.productId === selectedProduct}
                    onClick={() => {
                      handleSliderButton(product.productId);
                    }}
                  />
                ),
            )}
          </Slider>
          {products.map((product, index) => (
            <ProductItem
              key={product.productId}
              className={
                selectedProduct === index || selectedProduct === index + 1
                  ? ''
                  : 'hidden'
              }
            >
              {product.listPrice !== null && (
                <Flag>
                  <img src={flag} alt="Flag" />
                </Flag>
              )}
              <img src={product.imageUrl} alt={product.productName} />
              <ProductInfo>
                <h3>{product.productName}</h3>
                <StarContainer>
                  <Star
                    src={product.stars > 0 ? iconStarFilled : iconStar}
                    alt="Estrela1"
                  />
                  <Star
                    src={product.stars > 1 ? iconStarFilled : iconStar}
                    alt="Estrela2"
                  />
                  <Star
                    src={product.stars > 2 ? iconStarFilled : iconStar}
                    alt="Estrela3"
                  />
                  <Star
                    src={product.stars > 3 ? iconStarFilled : iconStar}
                    alt="Estrela4"
                  />
                  <Star
                    src={product.stars > 4 ? iconStarFilled : iconStar}
                    alt="Estrela5"
                  />
                </StarContainer>
                <h2>{`por ${product.formattedPrice}`}</h2>
                {product.installments.length > 0 && (
                  <p>{`ou em ${product.quantity}x de ${product.formattedInstallmentValue}`}</p>
                )}
                <div />
                <button type="button" onClick={addCart}>
                  COMPRAR
                </button>
              </ProductInfo>
            </ProductItem>
          ))}
        </ProductContainer>
      </MobileCarousel>
    </Container>
  );
}

Product.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Product;
