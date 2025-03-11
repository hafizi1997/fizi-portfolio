import React from "react";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react";
import Card from "../ui/Card";
import ContactForm from "../components/ContactForm";
import { useForm } from "../hooks/form-hook";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

export const ContactPages = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      subject: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        subject: formState.inputs.subject.value,
        message: formState.inputs.message.value,
      };
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICEID,
        import.meta.env.VITE_EMAIL_TEMPLATEID,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      console.log("Email sent successfully!", response.status, response.text);
      alert("Message sent successfully!");
      setFormData(
        {
          name: { value: "", isValid: false },
          email: { value: "", isValid: false },
          subject: { value: "", isValid: false },
          message: { value: "", isValid: false },
        },
        false
      );
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };
  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm
            onSubmit={handleSubmit}
            inputHandler={inputHandler}
            formState={formState}
          />
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <MailIcon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      hafizikamal8@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      +(60) 198176949
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-gray-400">Selangor, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <h4 className="text-lg font-medium text-white mb-4">
                Availability
              </h4>
              <p className="text-gray-400 mb-4">
                I'm currently available for freelance work and open to
                discussing new opportunities.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-gray-300">
                  Available for new projects
                </span>
              </div>
            </Card>
            <Card>
              <h4 className="text-lg font-medium text-white mb-4">
                Let's Connect
              </h4>
              <p className="text-gray-400 mb-4">Connect me on LinkedIn</p>
              <Button
                href="https://www.linkedin.com/in/muhammad-hafizi-kamal-ariffin-64002a1b2/"
                target="_blank"
                rel="noopener noreferrer"
                primary
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#0080ff] to-[#9333ea] text-white font-medium hover:shadow-lg hover:shadow-[#0080ff]/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Connect
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
