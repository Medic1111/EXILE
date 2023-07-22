import Text from "./Text/Text";
import ContactForm from "./ContactForm/ContactForm";
import Hours from "./Hours/Hours";
import { styles } from "./styles";
import Map from "./Map/Map";

const Contact = () => {
  return (
    <section className={styles.section}>
      {/* <div className={styles.leftBox}>
        <Text />
        <Hours />
      </div> */}
      <ContactForm />
      <p
        className={`${styles.formTitle} font-marker  p-5  cursor-pointer text-end hover:underline decoration-rose-600`}
      >
        .786
        <br />
        .507
        <br />
        .5653
      </p>
      <Map />
      {/* <Text />
      <Hours /> */}
    </section>
  );
};

export default Contact;
