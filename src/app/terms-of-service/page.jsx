import Navbar from "../../components/landing/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TermsOfService from "../../components/terms/TermsOfService";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar forceScrolled={true} />
      <TermsOfService />
      <Footer />
    </>
  );
}
