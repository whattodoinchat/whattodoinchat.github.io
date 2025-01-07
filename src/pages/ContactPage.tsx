import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { toast } = useToast();

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: '6975cb07-7351-44ef-ad1f-76880695f259' // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };

  const _handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="min-h-screen bg-travel-cream flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <nav className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="text-travel-navy hover:text-travel-gold">
              ← Back to Home
            </Link>
          </Button>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-travel-navy mb-8">Contact Us</h1>

        <div className="max-w-2xl">
          <p className="text-travel-slate mb-8">
            Have questions or suggestions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit} className="space-y-6">
            <Input type="hidden" name="accessKey" value="6975cb07-7351-44ef-ad1f-76880695f259" /> {/* https://www.staticforms.xyz/ key */}
            <Input type="hidden" name="subject" onChange={handleChange} />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-travel-navy mb-2">
                Name
              </label>
              <Input id="name" name="name" onChange={handleChange} required className="w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-travel-navy mb-2">
                Email
              </label>
              <Input id="email" type="email" name="email" onChange={handleChange} required className="w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-travel-navy mb-2">
                Message
              </label>
              <Textarea id="message" name="message" onChange={handleChange} required className="w-full min-h-[150px]" />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
            {/* Recomendation from staticforms.xyz to avoind receiving spam*/}
            <Input type="text" name="honeypot" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;