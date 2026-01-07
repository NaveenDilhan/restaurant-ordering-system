import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Utensils, ShoppingBag, ChevronRight, Clock, MapPin, Star } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-red-200">
      
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h1 className={`text-3xl font-bold tracking-widest font-serif ${scrolled ? 'text-red-700' : 'text-white'}`}>
            NIKUMAN
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/menu" className={`text-sm font-medium tracking-wide hover:text-red-500 transition ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}>
              MENU
            </Link>
            <Link to="/about" className={`text-sm font-medium tracking-wide hover:text-red-500 transition ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}>
              OUR STORY
            </Link>
            <Link to="/login" className={`text-sm font-medium tracking-wide hover:text-red-500 transition ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}>
              LOGIN
            </Link>
            <Link
              to="/book"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 ${
                scrolled 
                ? "bg-red-700 text-white shadow-lg hover:bg-red-800" 
                : "bg-white text-red-700 hover:bg-stone-100"
              }`}
            >
              Book a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/Zq3W1FQy/alva-pratt-a5To-DH34m0I-unsplash.jpg" 
            alt="Japanese Izakaya Atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="block text-red-500 font-medium tracking-[0.3em] mb-4 uppercase text-sm animate-fade-in">
            Authentic Japanese Cuisine
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight">
            Tradition in <br/> Every Bite
          </h2>
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light">
            Experience the warmth of a traditional Izakaya. <br className="hidden md:block"/>
            Hand-crafted Nikuman, savory Ramen, and crispy Karaage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white rounded-sm hover:bg-red-800 transition duration-300 shadow-xl"
            >
              <ShoppingBag size={18} /> Order Takeaway
            </Link>
            <Link
              to="/reservations"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white text-white rounded-sm hover:bg-white hover:text-black transition duration-300"
            >
              <Utensils size={18} /> Dine-In Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICE MODES (Dine In vs Takeaway) --- */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Dine In Card */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=2084&auto=format&fit=crop" 
                alt="Dining Interior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-3xl font-serif mb-2">The Dine-In Experience</h3>
                <p className="mb-6 text-stone-200">Immerse yourself in our serene atmosphere.</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-white pb-1">
                  Book a Table <ChevronRight size={16} />
                </span>
              </div>
            </div>

            {/* Takeaway Card */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606509653868-23d90299f029?q=80&w=1966&auto=format&fit=crop" 
                alt="Takeaway Bento" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-3xl font-serif mb-2">Order to Go</h3>
                <p className="mb-6 text-stone-200">Enjoy premium Japanese flavors at home.</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-white pb-1">
                  View Online Menu <ChevronRight size={16} />
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SIGNATURE DISHES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Our Menu</span>
          <h3 className="text-4xl font-serif font-medium text-stone-900 mt-3">Signature Selections</h3>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              name: "Nikuman Special", 
              price: "LKR 650", 
              desc: "Steamed fluffy buns filled with soy-glazed pork and shiitake mushrooms.",
              img: "https://images.unsplash.com/photo-1626809837422-b5e15822e4eb?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              name: "Tokyo Shoyu Ramen", 
              price: "LKR 1500", 
              desc: "24-hour broth, chashu pork, bamboo shoots, and soft-boiled egg.",
              img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop"
            },
            { 
              name: "Crispy Karaage", 
              price: "LKR 1200", 
              desc: "Ginger-garlic marinated fried chicken served with yuzu mayo.",
              img: "https://images.unsplash.com/photo-1622323758558-8d7d6f588c80?q=80&w=2144&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-stone-100">
              <div className="h-64 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="text-xl font-bold font-serif text-stone-800">{item.name}</h4>
                  <span className="text-red-700 font-semibold">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link to="/menu" className="text-stone-900 text-sm font-bold border-b-2 border-red-100 hover:border-red-600 transition-colors pb-1">
                  ORDER NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="inline-block px-10 py-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* --- INFO / FOOTER PREVIEW --- */}
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <h4 className="text-2xl font-serif mb-6">Nikuman</h4>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Bringing the authentic street flavors of Osaka to your neighborhood. 
              Fresh ingredients, traditional techniques, modern speed.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-red-700 transition cursor-pointer">IG</div>
               <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-red-700 transition cursor-pointer">FB</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-widest mb-6 uppercase">Visit Us</h4>
            <div className="flex flex-col gap-4 text-stone-400">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="text-red-500 shrink-0" size={20} />
                <span>123 Blossom Street,<br/>Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="text-red-500 shrink-0" size={20} />
                <span>Daily: 11:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-lg font-bold tracking-widest mb-6 uppercase">Quick Links</h4>
             <div className="flex flex-col gap-2 text-stone-400">
               <Link to="/menu" className="hover:text-white transition">Menu</Link>
               <Link to="/reservations" className="hover:text-white transition">Book a Table</Link>
               <Link to="/about" className="hover:text-white transition">About Us</Link>
               <Link to="/contact" className="hover:text-white transition">Contact</Link>
             </div>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-stone-600 text-sm">
          <p>© 2026 Nikuman Authentic Japanese. All rights reserved.</p>
        </div>
      </section>

    </div>
  );
}