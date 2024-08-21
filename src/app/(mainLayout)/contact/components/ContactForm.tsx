import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const ContactForm = () => {
  return (
    <form
      action="https://getform.io/f/a077c3bd-1748-4ee0-8cc6-9acfb6badaa6"
      method="POST"
      className="flex flex-col flex-1 gap-5 "
    >
      <Input
        required
        name="name"
        type="text"
        placeholder="Your Name"
        className="bg-transparent"
      />
      <Input
        required
        name="Email"
        type="Email"
        placeholder="Your Email Address"
        className="bg-transparent"
      />
      <Textarea
        required
        name="message"
        placeholder="Your Message"
        rows={10}
        className="bg-transparent"
      />
      <div className="flex justify-end -mt-1">
        <Button className="w-full">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
