import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Footer } from "../../components/footer";
import { useState } from "react";
import { PopNotify } from "../PopNotify";

// const navigationItems = [
//   { label: "HOME", active: false },
//   { label: "SHOP", active: true },
//   { label: "MOBILE APP", active: false },
//   { label: "REVIEWS", active: false },
//   { label: "CONTACT", active: false },
// ];

const thumbnailImages = ["/frame-268.svg", "/frame-269.svg", "/frame-270.svg"];
const productHighlights = [
  {
    emoji: "💧",
    title: "Hygienic & Safe:",
    description: "Made with food-grade materials ensuring clean, free milk",
  },
  {
    emoji: "⚙",
    title: "Efficient & Time-Saving:",
    description:
      "Milks cows in just a few minutes with consistent suction flow.",
  },
  {
    emoji: "🔋",
    title: "Energy-Efficient Design:",
    description: "Low power consumption with long-lasting performance.",
  },
  {
    emoji: "🚀",
    title: "Portable & Easy to Use:",
    description:
      "Compact and lightweight — ideal for small and large dairy farms.",
  },
  {
    emoji: "📲",
    title: "Smart Monitoring (optional):",
    description: "Real-time tracking of milking volume and machine performance",
  },
  {
    emoji: "🐮",
    title: "Animal-Friendly Operation:",
    description:
      "Gentle suction mimics natural milking, preventing udder stress.",
  },
];

export const Shop = (): JSX.Element => {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen w-full">

      <main className="flex gap-[145px] px-[148px] pt-[36px] pb-[153px]">
        <section className="flex flex-col gap-[45px]">
          <div className="w-[668px] h-[520px]">
            <img
              className="w-full h-full object-contain"
              alt="Ease Milker Product"
              src="/Group 61.png"
            />
          </div>

          <div className="flex gap-[30px]">
            {thumbnailImages.map((_src, index) => (
              <button
                key={index}
                className="w-[133px] h-[133px] border-2 border-transparent hover:border-[#8dc201] rounded-md transition-colors"
              >
                <img
                  className="w-full h-full object-contain"
                  alt="Ease Milker Product"
                  src="/Group 61.png"
                />
              </button>
            ))}
          </div>

          <div className="mt-[20px]">
            <h2 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-black text-lg tracking-[0] leading-[25px] mb-[11px]">
              Description
            </h2>
            <p className="w-[537px] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#84827d] text-xs tracking-[0] leading-[25px]">
              EaseMilker is an automated, portable milking system designed to
              make dairy farming easier, faster, and more hygienic. It ensures
              gentle milking, high milk yield, and animal comfort while reducing
              manual effort and contamination risks.
            </p>
          </div>
        </section>

        <section className="flex flex-col pt-[44px]">
          <h1 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#032a4a] text-3xl tracking-[0] leading-[13.5px] mb-[44px]">
            Ease Milker
          </h1>

          <div className="[font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[13.5px] mb-[38px]">
            $175.00
          </div>

          <Card className="w-[425px] bg-[#cae5fd] rounded-[14px] border border-solid border-[#0a4bd5] mb-[43px]">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <img src="/box.png" alt="Package" className="w-6 h-6 flex-shrink-0 text-black" />
                <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[25px]">
                  Azhizen offers{" "}
                  <span className="font-bold">free delivery</span> across India,
                  ensuring your orders reach you safely and on time. Get your
                  products delivered within{" "}
                  <span className="font-bold">3–10 business days</span>, with no
                  extra shipping cost.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-[11px] mb-[52px]">
            <label className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-[12.4px] tracking-[0] leading-[normal]">
              NUMBER OF PRODUCT:
            </label>
            <Input
              type="number"
              defaultValue="1"
              min="1"
              className="w-[55px] h-7 text-center [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-[12.4px] border-[#4e4d4d]"
            />
          </div>

          <div className="mb-[41px]">
            <h3 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#032a4a] text-[15px] tracking-[0] leading-[25px] mb-[18px]">
              Product Highlights:
            </h3>

            <div className="flex flex-col gap-[9px]">
              {productHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-xs tracking-[0] leading-[23px]"
                >
                  <span className="text-black">
                    {highlight.emoji} {highlight.title}
                  </span>
                  <br />
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#999999] ml-6">
                    {highlight.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => setIsOrderDialogOpen(true)}
            className="w-[425px] h-[54px] bg-[#042a4b] hover:bg-[#053a5f] rounded-[10px] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-xl"
          >
            BUY NOW
          </Button>
        </section>
      </main>

      <PopNotify 
        isOpen={isOrderDialogOpen}
        onOpenChange={setIsOrderDialogOpen}
      />
      
      <Footer />
    </div>
  );
};
