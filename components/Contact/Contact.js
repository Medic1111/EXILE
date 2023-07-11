import Text from "./Text/Text";

import ContactForm from "./ContactForm/ContactForm";
import Hours from "./Hours/Hours";

const Contact = () => {
  return (
    <div className="w-full grow h-auto sm:min-h-screen bg-slate-50 lg:flex lg:items-center lg:justify-around border-t-2 border-solid border-slate-50">
      <div className="text-slate-950 lg:w-1/2 p-5 lg:pt-10 min-h-screen flex flex-col  items-start justify-between gap-5">
        <Text />
        <Hours />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
