import ContactForm from "./ContactForm/ContactForm";
import Map from "./Map/Map";
import Phone from "./Phone/Phone";
import Wrapper from "./Wrapper/Wrapper";

const Contact = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Phone />
      <Map />
    </Wrapper>
  );
};

export default Contact;
