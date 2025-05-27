import React, { useState, useMemo, useEffect } from "react";
import { venues } from "./utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { tabs } from "./utils";
import { MapPin, Car, Plane, Train, BusFront } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <LandingSection />
      <div className="flex flex-col gap-24 mt-10 justify-center items-center">
        <AboutUs />
        <OurVenues />
        <Gallery />
        <ServicesSection />
        <LocationSection />
      </div>
    </div>
  );
}

const AboutUs = () => {
  return (
    <div class="flex flex-col md:flex-row  w-fit gap-16 items-center justify-center">
      <img
        src="images/venueImage1.webp"
        alt="Decorative Flower"
        className="w-[300px] h-[400px]"
      />
      <div class="relative max-w-[550px] p-5">
        <div class="text-2xl text-gray-900 mb-4 leading-snug flex flex-col gap-3">
          <h4 className="text-lg text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-red-600 after:mt-1">
            About Us
          </h4>
          <p className="font-semibold">Unparalleled Luxury In The</p>
          <p className="font-semibold">Heart of Hyderabad</p>
        </div>
        <p class="text-md text-gray-700 leading-relaxed">
          Devi Convention – Hyderabad's Premier Luxury Convention Center in
          Yenkapally.
          <br />
          <br />
          Welcome to the epitome of refined luxury, Devi Convention Luxury
          Conventions in Hyderabad. Here, every moment you celebrate is an
          exquisite experience. With bespoke architecture, exquisite interiors,
          and an array of world-class amenities, Devi Convention sets the stage
          for your precious celebration and takes it to a whole new level!
        </p>
      </div>
    </div>
  );
};

const OurVenues = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[100vw] overflow-hidden px-4 sm:px-6 md:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-2">
        Our Venues
      </h2>
      <div className="flex align-center w-full overflow-visible">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="w-full max-w-[100vw]"
          cssMode={true}
          grabCursor={true}
          style={{
            "--swiper-wrapper-transition-timing-function":
              "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {venues?.map((venue, index) => (
            <SwiperSlide key={index} className="w-full h-auto">
              <div className="relative w-full flex justify-center py-2">
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-800 ease-in-out swiper-slide-active:opacity-0 swiper-slide-prev:opacity-50"></div>
                <VenuCard
                  name={venue.name}
                  description={venue.description}
                  details={venue.details}
                  image={venue.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function VenuCard({ name, description, details, image }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageSrc(image);
      setImageLoaded(true);
    };
  }, [image]);

  return (
    <div className="w-[300px] sm:w-[400px] md:w-[350px] lg:w-[500px] bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px]">
        {/* Loading Placeholder */}
        <div
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
            imageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Actual Image */}
        <img
          src={imageSrc || image}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-6 sm:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
          {name}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-2">{description}</p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {details?.map((detail, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full"
            >
              {detail?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [activeTab, setActiveTab] = useState("Convention Hall");

  return (
    <div className="flex flex-col items-center px-4">
      {/* Heading */}
      <h2 className="text-lg font-medium text-center text-gray-600">Gallery</h2>
      <h1 className="text-4xl font-semibold text-center mt-2">The Grandeur</h1>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab?.name}
            onClick={() => setActiveTab(tab?.name)}
            className={`pb-2 ${
              activeTab === tab?.name
                ? "border-b-2 border-[#550C18] text-[#550C18] font-medium"
                : "text-gray-700"
            }`}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {tabs
          ?.find((tab) => tab.name === activeTab)
          ?.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Venue ${index + 1}`}
              className="w-full rounded-md object-cover"
            />
          ))}
      </div>
    </div>
  );
}

const LandingSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = "../images/landingImage3.webp";
    img.onload = () => {
      setImageSrc(img.src);
      setImageLoaded(true);
    };
    return () => {
      img.onload = null;
    };
  }, []);

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
      filter: "brightness(0.5)",
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      transition: "all 1s ease-in-out",
      opacity: imageLoaded ? 1 : 0,
      backgroundColor: "#000",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transform: imageLoaded ? "scale(1)" : "scale(1.1)",
    }),
    [imageLoaded, imageSrc]
  );

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Background Image with placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Header */}
      <header className="absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6 z-10 transition-all duration-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-serif text-2xl sm:text-3xl md:text-4xl italic transform hover:scale-105 transition-transform duration-300">
            <span className="text-yellow-300">D</span>evi{" "}
            <span className="text-yellow-300">C</span>onventions
          </div>
          <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
            {/* <Menu size={24} /> */}
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <div
          className="space-y-4 sm:space-y-6 transform transition-all duration-700 delay-300"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-2 sm:mb-4 leading-tight">
            Celebrate Life's{" "}
            <span className="text-yellow-300">Finest Moments</span>
            <br className="hidden sm:block" />
            in Grandeur!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-8 max-w-2xl mx-auto">
            Devi Convention - Best Luxury Convention in
            <br className="hidden sm:block" />
            <span className="text-yellow-300 font-semibold">
              Yenkapally, Hyderabad.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-yellow-300 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-semibold">
              Reservations Open
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

function LocationSection() {
  return (
    <section className="px-6 mb-10 md:px-20 bg-white text-gray-900">
      <div className="mb-3">
        <h4 className="text-lg text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-red-600 after:mt-1">
          Location
        </h4>
        <h2 className="text-4xl font-bold mt-2">Getting Here?</h2>
        <p className="mt-4 text-gray-700">
          It's easy. Devi Convention in Yenkapally, Ranga Reddy, Telangana.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center">
        {/* Left Side: Text + Map */}
        <div>
          {/* Google Maps Embed */}
          <div className="border border-yellow-300 rounded overflow-hidden">
            <iframe
              title="Devi Convention Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.230217492539!2d78.37010407473502!3d17.447657501321987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f7fd8aa9c3%3A0xbbf2b63427b74d2!2sMaaya%20Luxury%20Convention!5e0!3m2!1sen!2sin!4v1715194699372!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Transport Options */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Car className="text-yellow-900" />
            <div>
              <h4 className="font-semibold text-yellow-900">Car</h4>
              <p className="text-gray-700 text-sm">
                Easily accessible on maps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Plane className="text-yellow-900" />
            <div>
              <h4 className="font-semibold text-yellow-900">Airport</h4>
              <p className="text-gray-700 text-sm">
                Just a 30 Min drive from RGIA.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Train className="text-yellow-900" />
            <div>
              <h4 className="font-semibold text-yellow-900">Railway Station</h4>
              <p className="text-gray-700 text-sm">
                Closest station is Lingampally Railway Station (4.7 km).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <BusFront className="text-yellow-900" />
            <div>
              <h4 className="font-semibold text-yellow-900">Bus</h4>
              <p className="text-gray-700 text-sm">
                Accessible through 10H/P Route Bus, Monday–Sunday, from 6 am to
                9 pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Centralised AC",
      description:
        "Embrace comfort with our centralized AC, ensuring an atmosphere of tranquillity, all day long.",
      image: "https://maayaconvention.com/images/new/kc.webp",
    },
    {
      title: "Complete Power Back-up",
      description:
        "A complete power backup to keep your moments illuminated, uninterrupted, and flawless.",
      image: "https://maayaconvention.com/images/new/buffet.webp",
    },
    {
      title: "Valet Service",
      description:
        "Sophisticated Valet Service to ease your opulent experience.",
      image: "https://maayaconvention.com/images/gl_images/suite_1bhk.webp",
    },
  ];

  return (
    <section className="text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 md:min-w-[1000px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h4 className="text-lg text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-red-600 after:mt-1">
            Services
          </h4>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
            The Exquisite Experience
          </h2>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded overflow-hidden shadow-lg group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="absolute bottom-0 z-20 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
