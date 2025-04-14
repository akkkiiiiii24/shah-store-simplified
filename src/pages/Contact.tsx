
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { storeInfo } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("contact")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Get in touch with us and we'll be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kirana-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-kirana-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{t("address")}</h3>
                    <p className="text-gray-600">{storeInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kirana-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-kirana-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{t("phone")}</h3>
                    <p className="text-gray-600">{storeInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kirana-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-kirana-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{t("email")}</h3>
                    <p className="text-gray-600">{storeInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kirana-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-kirana-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{t("storeHours")}</h3>
                    <p className="text-gray-600">
                      Monday - Friday: {storeInfo.hours.monday}<br />
                      Saturday: {storeInfo.hours.saturday}<br />
                      Sunday: {storeInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-64 rounded-lg overflow-hidden">
                <iframe 
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004884857!2d77.04106211286012!3d28.527252731261444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1652535615693!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to tell us?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-kirana-primary hover:bg-green-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
