import ContactForm from "./ContactForm/ContactForm";
import Map from "./Map/Map";
import Phone from "./Phone/Phone";
import Wrapper from "./Wrapper/Wrapper";
import Hours from "./Hours/Hours";

const Contact = () => {
  return (
    <Wrapper>
      <Hours />
      <ContactForm />
      <Phone />
      <Map />
    </Wrapper>
  );
};

export default Contact;
