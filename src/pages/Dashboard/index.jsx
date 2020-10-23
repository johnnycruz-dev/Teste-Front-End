import React, { useState } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Product from '../../components/Product';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

import banner1 from '../../assets/banner-img1.png';
import banner2 from '../../assets/01.jpg';

import { BannersContainer, Slider, SliderButton } from './styles';

function Dashboard() {
  const [selectedBanner, setSelectedBanner] = useState(1);
  const [banners] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);
  const [cartCounter, setCartCounter] = useState(() => {
    const counter = Number(localStorage.getItem('@Corebiz:counter'));

    if (counter) {
      return counter;
    }

    return 0;
  });

  function handleSliderButton(id) {
    setSelectedBanner(id);
  }

  function handleAddCart() {
    setCartCounter(cartCounter + 1);

    localStorage.setItem('@Corebiz:counter', cartCounter + 1);
  }

  return (
    <>
      <Header cartCounter={cartCounter} />
      <BannersContainer>
        <Banner bannerImage={banner1} showBanner={selectedBanner === 1} />
        <Banner
          bannerImage={banner2}
          text1="Olá, oque você está procurando?"
          text2="Migrar ou criar seu e-commerce?"
          showBanner={selectedBanner === 2}
        />
        <Slider>
          {banners.map(banner => (
            <SliderButton
              key={banner.id}
              type="button"
              active={banner.id === selectedBanner}
              onClick={() => {
                handleSliderButton(banner.id);
              }}
            />
          ))}
        </Slider>
      </BannersContainer>
      <Product addCart={handleAddCart} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Dashboard;
