import { useState } from "react";
import { styles } from "../styles";

const ContactForm = () => {
  const [showFeed, setShowFeed] = useState(false);

  return (
    <form className={styles.form}>
      <p className={styles.formTitle}>
        GET <br /> IN <br /> TOUCH
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
        value={">"}
        className={styles.submit}
      />
    </form>
  );
};

export default ContactForm;
