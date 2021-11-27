import React from 'react';
import firstPhoto from '../../images/Foto-10.jpg';
import secondPhoto from '../../images/Foto-11.jpg';
import thirdPhoto from '../../images/Manos-10.jpg';
import Carrousel from '../../Components/Slider';

const Slider = () => {
  const slides = [
    {
      name: 'Foto 10',
      description: 'Jugando',
      image: firstPhoto,
    },
    {
      name: 'Foto 11',
      description: 'Corriendo',
      image: secondPhoto,
    },
    {
      name: 'Manos 10',
      description: 'Dibujando',
      image: thirdPhoto,
    },
  ];
  return (
    <Carrousel items={slides} />
  );
};

export default Slider;
