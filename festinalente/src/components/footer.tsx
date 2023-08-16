import IconLinkedin from "../icons/linkedin";
import IconMail from "../icons/mail";
import IconPhone from "../icons/phone";

const Footer = () => {
  return (
    <footer className="mt-16 flex h-[30vh] flex-wrap items-center justify-evenly gap-4 bg-secondary p-4">
      <a className="font-lg flex items-center gap-2 font-black text-primary" href="https://nl.linkedin.com/in/carolinevandijk">
        <IconLinkedin className="w-8" />
        Linkedin
      </a>
      <a className="font-lg flex items-center gap-2 font-black text-primary" href="mailto:caroline@c-dijk.nl">
        <IconMail className="w-8" />
        caroline@c-dijk.nl
      </a>
      <a className="font-lg flex items-center gap-2 font-black text-primary" href="tel:+31610069594">
        <IconPhone className="w-8" />
        Phone
      </a>
    </footer>
  );
};

export default Footer;
