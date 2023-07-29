import ContactForm from "./ContactForm/ContactForm";
import { styles } from "./styles";
import Map from "./Map/Map";
import Phone from "./Phone/Phone";

const Contact = () => {
  return (
    <section className={styles.section}>
      <ContactForm />
      <Phone />
      <Map />
    </section>
  );
};

export default Contact;
