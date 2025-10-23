import { Card, CardContent } from "../../components/ui/card";

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

// Renamed to be a regular const declaration
const Reviews = (): JSX.Element => {
    const averageRating = 4.0;

    return (
        <div className="bg-[#f0f4f7] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* --- Average Rating Section --- */}
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                    <p className="font-semibold text-lg text-gray-800">
                        Average rating: {averageRating.toFixed(1)}
                    </p>
                    <StarRating rating={Math.round(averageRating)} />
                </div>

                {/* --- Main Image & Testimonial Section --- */}
                <div className="relative">
                    <div className="w-full h-64 sm:h-80 lg:h-[500px] shadow-lg overflow-hidden">
                        <img
                            src="/Frame 277.png.jpg"
                            alt="A herd of cows against a sunset sky"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative px-4 sm:px-8 md:px-16 -mt-24 sm:-mt-20">
                        <Card className="bg-white rounded-2xl shadow-2xl">
                            <CardContent className="p-8 md:p-12 text-center">
                                <h3 className="font-semibold text-gray-500 tracking-wide mb-4">
                                    Farmer feedback
                                </h3>
                                <p className="text-xl md:text-2xl italic text-[#012e43] leading-relaxed">
                                    "{featuredReview.text}"
                                </p>
                                <p className="mt-6 text-xl font-bold text-gray-800">
                                    - {featuredReview.name}
                                </p>
                                <StarRating rating={featuredReview.rating} className="justify-center mt-3" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- FIX APPLIED HERE ---
export default Reviews;