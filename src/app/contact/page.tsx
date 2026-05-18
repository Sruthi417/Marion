
import  ContactHero from '../../components/Contact/contacthero/ContactHero'
import ContactInfo from '../../components/Contact/contact/ContactInfo'
import Gallery from "../../components/Contact/album/Album"
import OurStory from "../../components/ourstory/ourStory"
import Footer from '@/src/components/footer/Footer'

const Contact = () => {
  return (
    <>
    <ContactHero/>
    <ContactInfo/>
    <Gallery/>
    <OurStory/>
    <div style={{ paddingBottom: '60px' }}></div>
    <Footer/>
    </>
  )
}

export default Contact