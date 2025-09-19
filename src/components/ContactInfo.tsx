
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Ready to discuss your smart textile project? Contact our team to explore how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@wrlds.com" className="flex items-center justify-center text-gray-700 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                info@wrlds.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
