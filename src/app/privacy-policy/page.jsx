import Navbar from "../../components/landing/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PrivacyPolicy from "../../components/policy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar forceScrolled={true} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
