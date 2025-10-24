import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/footer";

const features = [
  "• Live Milking Status",
  "• Milk Yield Analytics",
  "• Smart Alerts & Notifications",
  "• Cleaning & Maintenance Tracker",
  "• Data Storage & Cloud Sync",
  "• Animal Health Insights",
  "• Device Control & Settings",
  "• Multi-Language Support",
];

export const MobileApp = (): JSX.Element => {
  return (
    <>
    <div className="flex items-start justify-center pt-[83px] pb-20">
      <Card className="w-[1110px] h-[650px] bg-white rounded-[10px] shadow-[0px_4px_4px_#00000040] overflow-hidden">
        <CardContent className="p-0 h-full flex">
          <div className="relative w-[544px] h-full">
            <img
              className="absolute top-[437px] left-[119px] w-[331px] h-[54px]"
              alt="Ellipse"
              src="/ellipse-65.svg"
            />

            <img
              className="absolute top-[34px] left-0 w-[544px] h-[380px] object-cover"
              alt="Iphone"
              src="/iphone-15.png"
            />
          </div>

          <div className="flex-1 pt-[50px] pl-[3px] pr-[64px]">
            <h1 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-[5px]">
              EASE MILKER&nbsp;&nbsp;MOBILE APP
            </h1>

            <p className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#999999] text-xs tracking-[0] leading-[normal] mb-[56px]">
              MOBILE APP FOR EASEMILKER ,RUNS ON ANDROID/IOS
            </p>

            <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal] mb-[33px]">
              FEATURE:
            </h2>

            <ul className="[font-family:'Inter',Helvetica] font-semibold text-[#4e4d4d] text-[15px] tracking-[0] leading-[normal] space-y-[3px] mb-[47px] mt-[-20px]">
              {features.map((feature, index) => (
              <li key={index}>{feature}</li>
              ))}
            </ul>

            <p className="[font-family:'Inter',Helvetica] font-semibold text-black text-xs text-justify tracking-[0] leading-[normal] mb-[67px]">
              The Smart Monitoring App Features/options You Can Include For
              Easemilker — Designed To Help Farmers Manage Milking Operations
              Easily And Efficiently:
            </p>

            <div className="flex gap-4">
              <img
                className="w-[181px] h-[53px] object-cover"
                alt="Google Play Store"
                src="/image-176.png"
              />
              <img
                className="w-[182px] h-[53px] object-cover"
                alt="Apple App Store"
                src="/image-175.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <Footer />
    </>
  );
};