import { useState } from "react";
import { styles } from "../styles";
import { JackInTheBox } from "react-awesome-reveal";

const ContactForm = () => {
  const [showFeed, setShowFeed] = useState(false);

  return (
    <form
      // style={{
      //   backgroundColor: "#0d1322",
      //   backgroundImage:
      //     'url("https://www.transparenttextures.com/patterns/argyle.png")',
      // }}
      className={styles.form}
    >
      <p className={styles.formTitle}>
        GET <br /> IN <br /> <JackInTheBox>TOUCH</JackInTheBox>
      </p>
      <input
        type="text"
        placeholder="Name"
        className={`${styles.input}  mt-10`}
      />
      <input type="text" placeholder="Email" className={styles.input} />
      <input type="tel" placeholder="Phone number" className={styles.input} />
      {showFeed && <p className="pt-5 text-yellow-500 underline">feedback</p>}
      <input
        data-testid="submit"
        type="submit"
        value={"TTYS"}
        className={styles.submit}
      />
    </form>
  );
};

export default ContactForm;
