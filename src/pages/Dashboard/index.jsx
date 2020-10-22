import React, { useState } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Product from '../../components/Product';

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

  function handleSliderButton(id) {
    setSelectedBanner(id);
  }

  return (
    <>
      <Header />
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
      <Product />
    </>
  );
}

export default Dashboard;
