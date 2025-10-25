import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/footer";

// Star rating component for reusability
type StarRatingProps = {
    rating: number;
    className?: string;
};

const StarRating = ({ rating, className = "" }: StarRatingProps) => {
    return (
        <div className={`flex gap-1 ${className}`}>
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

// The featured review from your design
const featuredReview = {
    name: "Venkatesh",
    text: "Received the logo for my finance app—modern, minimal, and smartly designed to reflect trust, clarity, and professionalism in every detail!!",
    rating: 5,
};

// Component
const Reviews = (): JSX.Element => {
    const averageRating = 4.0;

    return (
        <>
            <div className="relative bg-white pt-20 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    {/* --- Average Rating Section --- */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-8 -mt-11">
                        <p className="font-normal text-lg text-gray-800">
                            Average rating : {averageRating.toFixed(1)}
                        </p>
                        <StarRating rating={Math.round(averageRating)} />
                    </div>
                </div>

                {/* === Ellipse Behind Everything === */}
                <div className="absolute left-1/2 top-[230px] -translate-x-1/2 -z-0 pointer-events-none opacity-70">
                    <div
                        className="w-[1588px] h-[730.35px] bg-[rgba(239,249,251,0.56)]
                        rounded-[50%] shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                        blur-[0px] "
                    ></div>

                </div>

                {/* --- Main Image & Testimonial Section --- */}
                <div className="relative flex flex-col items-center z-10">
                    {/* Image */}
                    <div className="w-[1521px] h-[558px]">
                        <img
                            src="/Frame 277.png.jpg"
                            alt="A herd of cows against a sunset sky"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Testimonial content (no white box) */}
                    <div className="relative mt-16 text-center max-w-3xl">
                        <h3 className="font-[Mochiy Pop P One] text-[rgba(0,0,0,1)] tracking-wide mb-4 h-[17px] top-[847px] underline decoration-solid decoration-2 decoration-[rgba(0,0,0,1)]">
                            Farmer feedback
                        </h3>
                        <p className="text-xl font-sans leading-[100%] tracking-[0%] text-center w-[1098px] h-[72px] right-[171px] top-6 relative" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                            "{featuredReview.text}"
                        </p>
                        <p className="mt-6 text-xl font-[Mochiy Pop P One] text-[rgba(78,77,77,1)] h-[29px] mt-6 relative">
                            - {featuredReview.name}
                        </p>
                        <StarRating
                            rating={featuredReview.rating}
                            className="justify-center mt-1"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Reviews;
