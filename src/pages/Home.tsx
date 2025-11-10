import { Button } from "@/components/ui/button";
import { ChevronRight, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FloatingTimeWidget from "@/components/floating-time-widget"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import SwipeableCardsSection from "@/components/swipeable-cards-section"
import NewsSection from "@/components/news-section"
import CTASection from "@/components/cta-section"

import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
import slide3 from "@/assets/images/slide3.jpg";
import slide4 from "@/assets/images/slide4.jpg";
import slide5 from "@/assets/images/slide5.jpg";

const slideImages = [
  { src: slide1, alt: "STEP-STUDY Research Excellence", animation: "zoom-in" },
  { src: slide2, alt: "Teacher Professional Development", animation: "zoom-out" },
  { src: slide3, alt: "International Collaboration", animation: "pan-left" },
  { src: slide4, alt: "Educational Innovation", animation: "pan-right" },
  { src: slide5, alt: "Academic Research", animation: "zoom-in" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const mainText = "Strengthening Teachers, Transforming Education";

  useEffect(() => {
    // Slideshow auto-advance
    const slideInterval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
        // Reset typing animation
        setDisplayedText("");
        setIsTypingComplete(false);
        setAnimationKey((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 1500);
      }
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [isTransitioning]);

  useEffect(() => {
    // Typing animation for main text - restarts with each slide
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= mainText.length) {
        setDisplayedText(mainText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [animationKey]); // Re-run when animationKey changes

  useEffect(() => {
    // Cursor blinking after typing is complete
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      // Reset typing animation
      setDisplayedText("");
      setIsTypingComplete(false);
      setAnimationKey((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 1500);
    }
  };

  const getAnimationClass = (animation, isActive) => {
    if (!isActive) return "scale-100";

    switch (animation) {
      case "zoom-in":
        return "animate-ken-burns-zoom-in";
      case "zoom-out":
        return "animate-ken-burns-zoom-out";
      case "pan-left":
        return "animate-ken-burns-pan-left";
      case "pan-right":
        return "animate-ken-burns-pan-right";
      default:
        return "animate-ken-burns-zoom-in";
    }
  };

  return (
    <div >
      <FloatingTimeWidget />
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Modern Slideshow Container */}
        <div className="absolute inset-0 z-0">
          {slideImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Ken Burns Effect Container */}
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[8000ms] ease-linear ${getAnimationClass(
                  slide.animation,
                  index === currentSlide
                )}`}
                style={{
                  backgroundImage: `url(${slide.src})`,
                }}
              />

              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/40" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center py-16 mb-12">
          {/* Animated Main Headline - Fixed Height */}
          <div className="mb-8 sm:mb-15 min-h-[120px] sm:min-h-[140px] lg:min-h-[180px] flex items-center justify-center">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">
              <span className="inline-block whitespace-normal max-w-5xl">
                {displayedText}
                <span
                  className={`inline-block w-0.5 sm:w-1 ml-1 bg-white transition-opacity duration-100 align-middle ${
                    isTypingComplete
                      ? showCursor
                        ? "opacity-100"
                        : "opacity-0"
                      : "animate-pulse opacity-100"
                  }`}
                  style={{
                    height: "0.9em",
                    verticalAlign: "middle",
                  }}
                >
                  |
                </span>
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 transition-all duration-1000 ${
              displayedText.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <Link to="/research" className="flex items-center justify-center">
                <span className="relative z-10">Explore Our Research</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link to="/about" className="flex items-center justify-center">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Floating Cards Preview */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto transition-all duration-1000 ${
              displayedText.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { title: "Research Excellence", desc: "Evidence-based educational solutions" },
              { title: "Teacher Empowerment", desc: "Professional development programs" },
              { title: "Global Collaboration", desc: "International partnerships" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 dark:border-gray-700/30 group"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {slideImages.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-white/60 rounded-full transition-all duration-400 relative ${
                index === currentSlide ? "bg-white" : "bg-transparent hover:bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Custom Styles for Ken Burns Animations */}
        <style>{`
          @keyframes ken-burns-zoom-in {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.15);
            }
          }

          @keyframes ken-burns-zoom-out {
            0% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes ken-burns-pan-left {
            0% {
              transform: scale(1.15) translateX(0);
            }
            100% {
              transform: scale(1.15) translateX(-4%);
            }
          }

          @keyframes ken-burns-pan-right {
            0% {
              transform: scale(1.15) translateX(0);
            }
            100% {
              transform: scale(1.15) translateX(4%);
            }
          }

          .animate-ken-burns-zoom-in {
            animation: ken-burns-zoom-in 8s ease-out forwards;
          }

          .animate-ken-burns-zoom-out {
            animation: ken-burns-zoom-out 8s ease-out forwards;
          }

          .animate-ken-burns-pan-left {
            animation: ken-burns-pan-left 8s ease-out forwards;
          }

          .animate-ken-burns-pan-right {
            animation: ken-burns-pan-right 8s ease-out forwards;
          }
        `}</style>
      </section>
     <FeaturesSection/>
      <StatsSection/>
      <SwipeableCardsSection/>
      <NewsSection/>
      <CTASection/>
  </div>
  )
}