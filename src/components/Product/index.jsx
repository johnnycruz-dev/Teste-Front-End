import React, { useEffect, useState } from 'react';

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
  ProductItem,
  ProductInfo,
  StarContainer,
  Star,
  Flag,
  ArrowRight,
  ArrowLeft,
} from './styles';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(
        response.data.map(product => {
          return {
            ...product,
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

  return (
    <Container>
      <h1>Mais Vendidos</h1>
      <ProductContainer>
        <ArrowLeft src={iconLeftArrow} alt="Seta Esquerda" />
        <ArrowRight src={iconRightArrow} alt="Seta Direita" />
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
                <p>{`ou em 9x de ${product.formattedInstallmentValue}`}</p>
              )}
              <div />
              <button type="button">COMPRAR</button>
            </ProductInfo>
          </ProductItem>
        ))}
      </ProductContainer>
    </Container>
  );
}

export default Product;
