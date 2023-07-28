import ContactForm from "./ContactForm/ContactForm";
import { styles } from "./styles";
import Map from "./Map/Map";

const Contact = () => {
  return (
    <section className={styles.section}>
      <ContactForm />
      <div className=" px-5  pb-[15vh] pt-[10vh] h-[70vh] sm:h-auto  flex items-center justify-start">
        <a
          href="tel:786507-5653"
          aria-label="7 8 6. 5 0 7. 5 6 5 3."
          className={`${styles.formTitle} font-marker  cursor-pointer pl-5 text-start hover:underline decoration-rose-600 transition  duration-2000 ease-in-out text-8xl  sm:text-7xl md:text-9xl xl:text-9xl`}
        >
          .786
          <br />
          .507
          <br />
          .5653
        </a>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
