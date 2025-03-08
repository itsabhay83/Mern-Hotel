import { useEffect } from 'react'
import HomeMain from '../../components/homeMain/HomeMain'
import HomeAbout from '../../components/homeAbout/HomeAbout'
import HomeTestimonial from '../../components/homeTestimonial/HomeTestimonial'
import HomeNewsletter from '../../components/homeNewsletter/HomeNewsletter'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeTestimonial />
      <HomeNewsletter />
    </>
  )
}

export default Home