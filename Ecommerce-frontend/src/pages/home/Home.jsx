
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import DisplayProducts from '../../components/productCard/DisplayProducts'




function Home() {
 

  return (
    <div >
      <Layout>
        <HeroSection/>
        <Filter/>
        <DisplayProducts/>
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  )
}

export default Home
