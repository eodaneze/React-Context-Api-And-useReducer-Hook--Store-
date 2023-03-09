import React from 'react'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'


const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <NewsLetter />
    </div>
  )
}

export default Home