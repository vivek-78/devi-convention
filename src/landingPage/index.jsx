import React, { useState, useMemo } from 'react'
import { venues } from './utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { tabs } from './utils';
import { MapPin, Car, Plane, Train, BusFront } from 'lucide-react';

export default function LandingPage() {
    return (
        <div>
            <LandingSection />
            <div className="flex flex-col gap-28 mt-10 justify-center items-center">
                <AboutUs />
                <OurVenues />
                <Gallery />
                <ServicesSection />
                <LocationSection />
            </div>

        </div>
    )
}

const AboutUs = () => {
    return (
        <div class="flex flex-col md:flex-row  w-fit gap-16 items-center justify-center">
            <img src="images/venueImage1.jpg"
                alt="Decorative Flower" className='w-[300px] h-[400px]' />
            <div class="relative max-w-[550px] p-5">
                <div class="text-2xl text-gray-900 mb-4 leading-snug flex flex-col gap-3">
                <h4 className="text-lg text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-red-600 after:mt-1">
                        About Us
                    </h4>
                    <p className='font-semibold'>
                        Unparalleled Luxury In The
                    </p>
                    <p className='font-semibold'>
                        Heart of Hyderabad
                    </p>
                </div>
                <p class="text-md text-gray-700 leading-relaxed">
                    Devi Convention – Hyderabad's Premier Luxury Convention Center in Kondapur.
                    <br /><br />
                    Welcome to the epitome of refined luxury, Devi Convention Luxury Conventions in Hyderabad. Here, every moment you celebrate is an exquisite experience. With bespoke architecture, exquisite interiors, and an array of world-class amenities, Devi Convention sets the stage for your precious celebration and takes it to a whole new level!
                </p>

            </div>
        </div>
    )
}

const OurVenues = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className="text-2xl font-bold text-center">Our Venues</h2>
            <div className="flex align-center mb-4">
                <Swiper
                    spaceBetween={80} // Adjust gap between slides
                    slidesPerView={1} // Show 2 slides at a time
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-[1500px] flex justify-center"
                >
                    {venues?.map((venue, index) => (
                        <SwiperSlide key={index}>
                            <VenuCard
                                name={venue.name}
                                description={venue.description}
                                details={venue.details}
                                image={venue.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

const VenuCard = ({ name, description, details, image }) => {
    return (
        <div className="relative w-[500px] mx-auto">
            {/* Image */}
            <img
                src={image}
                alt="Terrace Garden"
                className="w-full h-[280px] object-cover rounded-lg shadow-lg"
            />

            {/* Overlapping Card - Slightly touching image */}
            <div className="absolute top-1/2 right-[-160px] -translate-y-1/2 bg-[#fdf5dc] border-b-8 border-[#480d1b] w-[300px] p-4 shadow-xl z-10 rounded-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-700 text-xs mb-4">
                    {description}
                </p>
                <div className="flex flex-col gap-2 text-gray-700 text-sm">
                    {details?.map((detail, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <span>{detail?.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export function Gallery() {
    const [activeTab, setActiveTab] = useState('Convention Hall');

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
                        className={`pb-2 ${activeTab === tab?.name
                            ? 'border-b-2 border-[#550C18] text-[#550C18] font-medium'
                            : 'text-gray-700'
                            }`}
                    >
                        {tab?.name}
                    </button>
                ))}
            </div>

            {/* Images */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
                {tabs?.find(tab => tab.name === activeTab)?.images.map((src, index) => (
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
    const backgroundStyle = useMemo(() => ({
        backgroundImage: `url("/images/landingImage3.jpg")`,
        filter: 'brightness(0.5)',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0
    }), []);

    return (
        <div className="relative h-screen w-full overflow-hidden" style={{ margin: 0, padding: 0 }}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={backgroundStyle}
            />

            {/* Gold circular border
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-6xl max-h-6xl border-8 border-yellow-500 rounded-full opacity-20"></div>
      </div> */}

            {/* Header */}
            <header className="absolute top-0 w-full bg-gradient-to-b from-burgundy-900 to-transparent p-4 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-serif text-3xl italic">
                        <span className="text-yellow-300">D</span>evi <span className="text-yellow-300">C</span>onventions
                    </div>
                    <button className="text-white p-2 rounded-full">
                        {/* <Menu size={24} /> */}
                    </button>
                </div>
            </header>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif text-slate-200 mb-4">
                    Celebrate Life's<br />
                    Finest Moments in Grandeur!
                </h1>
                <p className="text-xl md:text-2xl text-white mb-6">
                    Devi Convention - Best Luxury Convention in<br />
                    <span className="text-yellow-300">Kondapur, Hyderabad.</span>
                </p>
                <button className="bg-yellow-300 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                    Reservations Open
                </button>
            </div>

            {/* Bottom Logo */}
            {/* <div className="absolute bottom-4 right-4">
        <div className="text-white font-serif text-2xl italic">
          <span className="text-yellow-300">M</span>aaya
        </div>
      </div> */}
        </div>
    );
};

function LocationSection() {
    return (
        <section className="px-6 mb-10 md:px-20 bg-white text-gray-900">
            <div className='mb-3'>
                <h4 className="text-lg text-gray-600 relative inline-block after:block after:w-10 after:h-0.5 after:bg-red-600 after:mt-1">
                    Location
                </h4>
                <h2 className="text-4xl font-bold mt-2">Getting Here?</h2>
                <p className="mt-4 text-gray-700">
                    It's easy. Devi Convention in Kondapur, Ranga Reddy, Telangana.
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
                            <p className="text-gray-700 text-sm">Easily accessible on maps.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Plane className="text-yellow-900" />
                        <div>
                            <h4 className="font-semibold text-yellow-900">Airport</h4>
                            <p className="text-gray-700 text-sm">Just a 30 Min drive from RGIA.</p>
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
                                Accessible through 10H/P Route Bus, Monday–Sunday, from 6 am to 9 pm.
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
            title: 'Centralised AC',
            description:
                'Embrace comfort with our centralized AC, ensuring an atmosphere of tranquillity, all day long.',
            image: 'https://maayaconvention.com/images/new/kc.webp',
        },
        {
            title: 'Complete Power Back-up',
            description:
                'A complete power backup to keep your moments illuminated, uninterrupted, and flawless.',
            image: 'https://maayaconvention.com/images/new/buffet.webp',
        },
        {
            title: 'Valet Service',
            description:
                'Sophisticated Valet Service to ease your opulent experience.',
            image: 'https://maayaconvention.com/images/gl_images/suite_1bhk.webp',
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
                  <p className="mt-2 text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
            </div>
        </section>
    );
}

