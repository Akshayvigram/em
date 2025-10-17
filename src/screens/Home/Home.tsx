import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/footer";
import { Link } from 'react-router-dom';

const productImages = [
  { src: "/image-37.png", alt: "Image", className: "absolute top-[183px] left-0 w-[125px] h-[136px]" },
  { src: "/image-36-1.png", alt: "Image", className: "absolute top-[158px] left-[62px] w-[125px] h-[161px]" },
  { src: "/image-38.png", alt: "Image", className: "absolute top-[207px] left-[109px] w-[125px] h-28" },
  { src: "/image-39.png", alt: "Image", className: "absolute top-[153px] left-[162px] w-[125px] h-[166px]" },
  { src: "/image-40.png", alt: "Image", className: "absolute top-[170px] left-[221px] w-[125px] h-[149px]" },
];

const featureIcons = [
  { src: "/image-187.png", alt: "Product", label: "Product" },
  { src: "/image-188.png", alt: "Features", label: "Features" },
  { src: "/image-189.png", alt: "Working", label: "Working" },
  { src: "/image-190.png", alt: "App", label: "App" },
];

// ------------------------------------
// HOW IT WORKS SECTION
// ------------------------------------
const features = [
  {
    title: "Flow Detection",
    description:
      "Detects milk flow in real-time using precision sensors to ensure milking efficiency and avoid dry suction.",
    bgColor: "bg-[#042a4b]",
    textColor: "text-[#8dc201]",
    descColor: "text-white",
  },
  {
    title: "Weight Detection",
    description:
      "Integrated load cell system monitors milk weight in real time, ensuring accurate tracking and cutoff control.",
    bgColor: "bg-[#8dc201]",
    textColor: "text-black",
    descColor: "text-white",
  },
  {
    title: "Milk Testing",
    description:
      "Analyzes milk quality instantly by checking parameters such as fat content, SNF, temperature, and conductivity.",
    bgColor: "bg-[#042a4b]",
    textColor: "text-[#8dc201]",
    descColor: "text-white",
  },
  {
    title: "Monitoring",
    description:
      "Provides a live dashboard and OLED display showing all system states, alerts, and progress of milking sessions.",
    bgColor: "bg-[#8dc201]",
    textColor: "text-black",
    descColor: "text-white",
  },
];

// ------------------------------------
// MOBILE APP IMAGE SECTION
// ------------------------------------
const appImages = [
  { src: "/image-184.png", alt: "Image", className: "w-full max-w-[415px] h-[415px] rounded-[10px] object-cover" },
  { src: "/image-182.png", alt: "Image", className: "w-full max-w-[306px] h-[203px] rounded-[10px] object-cover" },
  { src: "/image-178.png", alt: "Image", className: "w-full max-w-[356px] h-[200px] rounded-[10px] object-cover" },
  { src: "/image-183.png", alt: "Image", className: "w-full max-w-[442px] h-48 rounded-[10px] object-cover" },
  { src: "/image-180.png", alt: "Image", className: "w-full max-w-[220px] h-[191px]" },
];

// ------------------------------------
// MAIN HOME COMPONENT
// ------------------------------------
export const Home = (): JSX.Element => {
  const scrollToProduct = () => {
    const element = document.getElementById('product-section');
    if (element) {
      const headerOffset = -120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features-section');
    if (element) {
      const headerOffset = -120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToWorking = () => {
    const element = document.getElementById('working-section');
    if (element) {
      const headerOffset = -90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToApp = () => {
    const element = document.getElementById('app-section');
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative w-full h-[793px] bg-[#d6e6f4]">
        <Card className="absolute top-[90px] left-[143px] w-[1180px] h-[473px] rounded-[50px] overflow-hidden border-0">
          <CardContent className="relative w-full h-full p-0">
            <img className="absolute top-0 left-0 w-full h-full object-cover" alt="Background" src="/image-30.png" />
            <div className="absolute top-[154px] left-[145px] w-[445px] h-[387px]">
              {productImages.map((image, i) => (
                <img key={i} className={image.className} alt={image.alt} src={image.src} />
              ))}
              <img
                className="absolute top-0 left-[89px] w-[360px] h-[319px] object-cover"
                alt="Main product"
                src="/image-34.png"
              />
            </div>
            <img className="absolute top-0 left-0 w-full h-full object-cover" alt="Overlay" src="/image-36.png" />
            <img className="absolute top-0 left-[803px] w-[594px] h-[536px]" alt="Rectangle" src="/rectangle-11.svg" />
            <div className="absolute top-[200px] left-[590px]">
              <h1 className="font-bold text-black text-[20.7px]">EASEMILKER</h1>
              <p className="mt-[30px] text-black text-[17px]">
                &quot;INNOVATING AGRICULTURE, NURTURING GROWTH&quot;
              </p>
            </div>
            <img
              className="absolute bottom-[53px] right-[75px] w-[118px] h-[45px] object-cover"
              alt="Whatsapp contact"
              src="/whatsapp-image-2025-08-18-at-10-26-26-am-1.png"
            />
          </CardContent>
        </Card>
        <div className="absolute top-[650px] left-[489px] flex gap-[98px]">
          {featureIcons.map((icon, i) => {
            let handleClick;
            if (icon.label === 'Product') {
              handleClick = scrollToProduct;
            } else if (icon.label === 'Features') {
              handleClick = scrollToFeatures;
            } else if (icon.label === 'Working') {
              handleClick = scrollToWorking;
            } else if (icon.label === 'App') {
              handleClick = scrollToApp;
            }

            return (
              <button 
                key={i} 
                onClick={handleClick}
                className="flex flex-col items-center gap-[11.3px] hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <img className="w-[45.19px] h-[45.19px] object-cover" alt={icon.alt} src={icon.src} />
                <span className="text-[#999999] text-[9.8px]">{icon.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ------------------ MAIN CONTENT SECTION ------------------ */}
      <section id="product-section" className="relative w-full bg-[#d6e6f4] py-16">
        <div className="relative w-full h-[820px]">
          <img className="absolute top-0 left-[169px] w-[1271px] h-[820px]" alt="Group" src="/group-81.png" />
          <img className="absolute top-[265px] left-[806px] w-[473px] h-[368px]" alt="Group" src="/group-62.png" />
          <div className="absolute top-[211px] left-[179px] w-[595px] text-[25px] text-justify">
            <span className="text-[#8dc201]">Easemilker</span>
            <span className="text-[#032a4a]">
              {' '}
              Is A Smart, Automated Milking System That Ensures Efficient, Hygienic, And Animal-friendly Dairy
              Operations.
            </span>
          </div>
          <Link to="/contact" className="no-underline">
            <Button
              className="absolute top-[527px] left-[269px] w-[321px] h-[79px] bg-[#8dc201] hover:bg-[#7ab001] rounded-[50px] text-white text-[25px]"
            >
              Buy Now
            </Button>
          </Link>
          <p className="absolute top-[369px] left-[174px] w-[423px] text-[#84827d] text-xs text-justify">
            Smart Monitoring System, Which Provides Real-time Tracking Of Milk Yield, Machine Performance, And Animal
            Health Through A Connected Mobile App.
          </p>
          <p className="absolute top-[499px] left-[398px] text-black text-xs">Get It Soon</p>
        </div>
      </section>

      {/* ------------------ FEATURES SECTION ------------------ */}
      <section id="features-section" className="relative w-full py-[137px] bg-gradient-to-b from-white to-[#d3e3f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-[122px]">
            <span className="underline text-xl">Main Features of Ease Milker</span>
            <br />
            <span className="text-[25px]">that help you to understand</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1268px] mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <img className="w-[75px] h-[51px] mb-[1px]" alt="Arrow top" src="/polygon-70.svg" />
                <Card
                  className={`${feature.bgColor} rounded-[44.4px_0px_0px_44.4px] shadow-md border-0 w-full max-w-[232px] h-[360px]`}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <h3 className={`${feature.textColor} text-[22.2px] text-center mb-6`}>{feature.title}</h3>
                    <p className={`${feature.descColor} text-[13.3px] text-center w-[205px]`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
                <img className="w-[75px] h-[51px] mt-[1px]" alt="Arrow bottom" src="/polygon-79.svg" />
              </div>
            ))}
          </div>
        </div>
        <div id="app-section" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
          <div className="relative flex justify-center items-center">
            <img
              className="w-full max-w-[455px] h-auto object-cover relative z-10"
              alt="Iphone"
              src="/iphone-15.png"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-[215px] h-[15px] bg-black rounded-[107.5px/7.5px] blur-[10px]" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-black text-[15px]">Easemilker App</h2>
            <p className="text-[#4e4d4d] text-xs text-justify font-semibold">
              The smart monitoring app features/options you can include for EaseMilker — designed to help farmers manage milking operations easily and efficiently:
            </p>
            <div className="flex gap-4 flex-wrap">
              <img className="w-[159px] h-[48px] mt-5" alt="PlayStore" src="/image-176.png" />
              <img className="w-[159px] h-[89px]" alt="AppStore" src="/image-175.png" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ HOW IT WORKS SECTION ------------------ */}
      <section id="working-section" className="relative w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-[#032a4a] text-2xl font-semibold underline underline-offset-4 mb-12">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-10">
            {appImages.length > 0 && (
              <div className="w-full h-full">
                <img
                  src={appImages[0].src}
                  alt={appImages[0].alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            )}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6">
              {appImages.slice(1, 5).map((img, i) => (
                <div key={i} className="w-full h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-[#5c5a57] text-[14px] leading-relaxed mb-6 text-center" >
            The system operates efficiently with controlled suction and pulsation to maintain comfort and milk quality, automatically stopping once milking is complete to prevent over-milking.
          </p>
          <p className="text-[#032a4a] font-semibold text-lg tracking-wide text-center">
            EASE MILKER
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};
