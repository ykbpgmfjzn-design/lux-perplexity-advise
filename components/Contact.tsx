
import React from 'react';
import Button from './Button';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. A specialist will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Personal Advisory</h2>
            <p className="text-gray-500 text-lg font-light mb-12 leading-relaxed">
              Experience the pinnacle of real estate service. Our advisors are ready to guide you through our portfolio and investment opportunities.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#C5A059]" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Global Headquarters</h4>
                  <p className="text-gray-500 font-light">125 Luxury Way, Marina District<br />Monte Carlo, Monaco</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <Phone className="text-[#C5A059]" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Direct Line</h4>
                  <p className="text-gray-500 font-light">+377 98 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <Mail className="text-[#C5A059]" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Email</h4>
                  <p className="text-gray-500 font-light">concierge@luxedev.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12">
            <h3 className="text-2xl font-serif mb-8">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-100 px-4 py-3 text-sm focus:border-[#C5A059] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white border border-gray-100 px-4 py-3 text-sm focus:border-[#C5A059] outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Interested In</label>
                <select className="w-full bg-white border border-gray-100 px-4 py-3 text-sm focus:border-[#C5A059] outline-none transition-colors cursor-pointer">
                  <option>Azure Bay Residencies</option>
                  <option>The Obsidian Villa</option>
                  <option>Metropolis Heights</option>
                  <option>Pine Crest Estate</option>
                  <option>Investment Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message (Optional)</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your requirements..." 
                  className="w-full bg-white border border-gray-100 px-4 py-3 text-sm focus:border-[#C5A059] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <Button type="submit" className="w-full h-14">
                <Send size={18} className="mr-3" /> SEND INQUIRY
              </Button>
              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                By submitting this form, you agree to our Privacy Policy and consent to our advisors contacting you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
