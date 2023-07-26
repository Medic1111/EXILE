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
      <div className=" px-5  pb-[15vh] pt-[10vh] h-[70vh] sm:h-auto  flex items-center justify-start">
        <a
          href="tel:786507-5653"
          aria-label="7 8 6. 5 0 7. 5 6 5 3."
          className={`${styles.formTitle} font-marker  cursor-pointer pl-5 text-start hover:underline decoration-rose-600 transition  duration-2000 ease-in-out text-9xl  sm:text-7xl `}
        >
          .786
          <br />
          .507
          <br />
          .5653
        </a>
      </div>
      <Map />
      {/* <Text />
      <Hours /> */}
    </section>
  );
};

export default Contact;
