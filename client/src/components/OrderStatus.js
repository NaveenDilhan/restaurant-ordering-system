import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

const OrderStatus = () => {
  // ---------------------------------------------------------
  // CONFIGURATION
  // ---------------------------------------------------------
  // Change this to "Delivery", "Takeaway", or "Dine-in" to switch the UI
  // In the real app, this will come from your database via WebSockets
  const [orderType, setOrderType] = useState("Delivery"); 
  
  const [currentStep, setCurrentStep] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // Total steps based on order type
  // Delivery has 5 steps. Takeaway and Dine-in both have 4 steps.
  const totalSteps = orderType === "Delivery" ? 5 : 4;

  // ---------------------------------------------------------
  // SIMULATION (TEMPORARY)
  // ---------------------------------------------------------
  // This automatically moves the order forward every 3 seconds
  // so you can see the animation working.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSteps]);

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------------------------------------
  // STATUS CONTENT DATA (Business Logic)
  // ---------------------------------------------------------
  const statusContent = {
    1: {
      title: "Your order is Accepted!",
      desc: "Your order has been accepted by the system",
      img: "order_done.jpeg",
    },
    2: {
      title: "Your order is Preparing!",
      desc: "Your order is being prepared by the Kitchen. Order Preparation in progress...",
      img: "cooking.jpg",
    },
    3: {
      title: "Your order is Prepared!",
      desc: "Your order has been prepared by the Kitchen. Final checks in progress...",
      img: "food_done.jpg",
    },
    // --- STEP 4: The logic splits here based on the 3 Order Types ---
    4: {
      title: orderType === "Delivery" 
        ? "Your order is Ready to Delivery!" 
        : orderType === "Dine-in" 
            ? "Your order is Served!" 
            : "Your order is Ready to Take Out!", // Default to Takeaway

      desc: orderType === "Delivery" 
        ? "Your order will be picked up by the Delivery Driver" 
        : orderType === "Dine-in"
            ? "Please wait, our staff is bringing the food to your table."
            : "You can pick up the order by showing the Order Number",
      
      // Image logic for the 3 types
      img: orderType === "Delivery" 
        ? "food_done.jpg" // Delivery uses this intermediate image before the final step
        : orderType === "Dine-in"
            ? "DiningIN.jpg" // The new image for Dine-in
            : "Takeaway.jpg", // The image for Takeaway
    },
    // --- STEP 5: Only exists for Delivery ---
    5: {
      title: "Your order is on the way!",
      desc: "Your order is picked up by the Delivery Driver",
      img: "Delivery.png",
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-widest font-serif text-[#C10A0A]">NIKUMAN</h1>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/menu" className="text-sm font-medium tracking-wide text-stone-600 hover:text-[#C10A0A] transition">MENU</Link>
            <Link to="/about" className="text-sm font-medium tracking-wide text-stone-600 hover:text-[#C10A0A] transition">OUR STORY</Link>
            <Link to="/login" className="text-sm font-medium tracking-wide text-stone-600 hover:text-[#C10A0A] transition">LOGIN</Link>
            <Link to="/book" className="px-6 py-2 rounded-full text-sm font-semibold bg-[#C10A0A] text-white hover:bg-red-800 transition transform hover:scale-105">Book a Table</Link>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-32 pb-20 px-6 flex flex-col items-center">
        
        {/* Toggle Buttons for Testing (Remove later) */}
        <div className="mb-8 flex gap-4 flex-wrap justify-center">
          <button 
            onClick={() => { setOrderType("Delivery"); setCurrentStep(1); }}
            className={`px-4 py-2 rounded border ${orderType === "Delivery" ? "bg-stone-800 text-white" : "text-stone-600"}`}
          >
            Test Delivery (5 Steps)
          </button>
          <button 
            onClick={() => { setOrderType("Takeaway"); setCurrentStep(1); }}
            className={`px-4 py-2 rounded border ${orderType === "Takeaway" ? "bg-stone-800 text-white" : "text-stone-600"}`}
          >
            Test Takeaway (4 Steps)
          </button>
          <button 
            onClick={() => { setOrderType("Dine-in"); setCurrentStep(1); }}
            className={`px-4 py-2 rounded border ${orderType === "Dine-in" ? "bg-stone-800 text-white" : "text-stone-600"}`}
          >
            Test Dine-in (4 Steps)
          </button>
        </div>

        <h2 className="text-3xl font-serif text-stone-800 mb-12">
          Your Order Status: <span className="text-[#C10A0A]">{orderType}</span>
        </h2>

        {/* PROGRESS BAR */}
        <div className="w-full max-w-3xl flex items-center justify-between relative mb-16 px-4">
          {/* Grey Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -z-10 transform -translate-y-1/2 mx-4" style={{width: 'calc(100% - 2rem)'}}></div>

          {/* Active Red Line */}
          <div
            className="absolute top-1/2 left-0 h-2 bg-[#C10A0A] -z-10 transform -translate-y-1/2 transition-all duration-500 ease-in-out mx-4"
            // The math here ensures the line stops exactly at the current circle
            style={{ width: `calc(${((currentStep - 1) / (totalSteps - 1)) * 100}% - 2rem)` }}
          ></div>

          {/* Dynamic Steps Circles */}
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div
              key={step}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 transition-colors duration-500 z-10 bg-white ${
                step <= currentStep
                  ? "bg-[#C10A0A] border-[#C10A0A] text-white"
                  : "bg-gray-200 border-gray-200 text-white"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* DYNAMIC IMAGE & TEXT */}
        <div className="text-center flex flex-col items-center animate-fade-in">
          {/* Image */}
          <div className="mb-6 w-64 h-64 flex items-center justify-center">
             {statusContent[currentStep] && (
                 <img 
                   src={statusContent[currentStep].img} 
                   alt="Status Icon" 
                   className="object-contain w-full h-full"
                 />
             )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif text-stone-800 mb-4">
            {statusContent[currentStep] ? statusContent[currentStep].title : ""}
          </h3>

          {/* Description */}
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            {statusContent[currentStep] ? statusContent[currentStep].desc : ""}
          </p>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-serif mb-6">Nikuman</h4>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Bringing the authentic street flavors of Osaka to your neighborhood.
              Fresh ingredients, traditional techniques, modern speed.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#C10A0A] transition cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#C10A0A] transition cursor-pointer">FB</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold tracking-widest mb-6 uppercase">Visit Us</h4>
            <div className="flex flex-col gap-4 text-stone-400">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="text-[#C10A0A] shrink-0" size={20} />
                <span>123 Blossom Street,<br/>Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="text-[#C10A0A] shrink-0" size={20} />
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
};

export default OrderStatus;