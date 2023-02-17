import React from 'react'
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import Slider from '../../components/slider/Slider'
import FeaturedProducts from './../../components/featuredProducts/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home