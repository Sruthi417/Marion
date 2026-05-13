import Hero from '../components/landing/hero/Hero'
import Popular from "../components/popular/Popular";
import Collection from "../components/collections/Collections"
import NewArrivals from "../components/newarrivals/NewArrivals"
import OurStory from "../components/ourstory/ourStory"
import Discount from "../components/disccount/Discount"
import  Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Collection/>
    <NewArrivals/>
    <OurStory/>
    <Discount/>
    <Footer/>
    </>
    )
}

export default Home