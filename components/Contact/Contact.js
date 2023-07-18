import Text from "./Text/Text";

import ContactForm from "./ContactForm/ContactForm";
import Hours from "./Hours/Hours";
import { styles } from "./styles";

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.leftBox}>
        <Text />
        <Hours />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
