import React from "react";
import Card from "../ui/Card";
import { SendIcon } from "lucide-react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
const ContactForm = ({ inputHandler, formState, onSubmit }) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-6">
        Send Me a Message
      </h3>
      <form className="space-y-5" onSubmit={onSubmit}>
        <Input
          id="name"
          type="text"
          label="Name"
          placeHolder="Your name"
          validators={[
            (value) => (value.trim().length > 0 ? null : "Name is required"),
          ]}
          onInput={inputHandler}
          value={formState.inputs.name.value}
          errorText="Please enter a valid username."
        />
        <Input
          id="email"
          type="email"
          label="Email"
          placeHolder="your.email@example.com"
          validators={[
            (value) => (value.includes("@") ? null : "Invalid email"),
          ]}
          onInput={inputHandler}
          value={formState.inputs.email.value}
        />
        <Input
          id="subject"
          type="text"
          label="Subject"
          placeHolder="Project inquiry"
          validators={[
            (value) =>
              value.length >= 4 && value.length <= 100
                ? null
                : "Subject must be between 4 and 100 characters",
          ]}
          onInput={inputHandler}
          value={formState.inputs.subject.value}
          errorText="Please enter a valid subject."
        />
        <Textarea
          id="message"
          type="text"
          label="Message"
          placeHolder="Your message here..."
          validators={[
            (value) =>
              value.length >= 4 && value.length <= 100
                ? null
                : "Message must be between 4 and 100 characters",
          ]}
          onInput={inputHandler}
          value={formState.inputs.message.value}
          errorText="Please enter a valid message."
        />
        <Button
          type="submit"
          className={`w-full px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            formState.isValid
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20"
              : "px-6 py-3 rounded-lg bg-[#111122] text-white font-medium border border-[#f8fafc]/10 hover:border-[#0080ff]/50 transition-all duration-300 cursor-not-allowed"
          }`}
          disabled={!formState.isValid}
        >
          <SendIcon size={18} />
          <span>Send Message</span>
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
