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
        className={`${styles.formTitle}  p-5 hover:text-rose-600 cursor-pointer`}
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
