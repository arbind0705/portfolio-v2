import { ChevronLeft, ChevronRight, DivideCircle, Quote } from "lucide-react";
import { useState } from "react";
const testimonials = [
    {
        quote:"titan is one of the most patient and talented engineers working with him was a blast of experience",
        author:"Robo-chan",
        role: "CTO, Tech Innovator Inc.",
        avatar: "https://www.flaticon.com/free-icon/avatar_4874875"
    },

    {
        quote:"maybe words will be less on this planet if i were to speak my heart of what i feel toward you ",
        author:"Robo-chan",
        role: "CTO, Tech Innovator Inc.",
        avatar: "https://www.flaticon.com/free-icon/avatar_4874875"
    },

    {
        quote:"bound by these chains of life what else can the final gift be then looking at the sun like you ",
        author:"Robo-chan",
        role: "CTO, Tech Innovator Inc.",
        avatar: "https://www.flaticon.com/free-icon/avatar_4874875"
    },

    {
        quote:"titan is one of the most patient and talented engineers working with him was a blast of experience",
        author:"Robo-chan",
        role: "CTO, Tech Innovator Inc.",
        avatar: "https://www.flaticon.com/free-icon/avatar_4874875"
    },
]


export const Testimonials = () => {
   
   const [activeIdx, setActiveIdx] = useState(0);

        const next = () => {
            setActiveIdx((prev) => (prev + 1) % testimonials.length);
        }
        const previous = () => {
            setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
   
   
   
   
    return (

        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* container */}
                <div className=" text-center max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What People say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from <span className="font-serif italic font-normal text-white">
                            {" "}amazing people.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sequi, maxime nemo voluptate nesciunt officia ipsum voluptatum corrupti minima veritatis!
                    </p>
                </div>
                {/* testimonial carousel */}

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* main testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground"/>
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb:-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <img src={testimonials[activeIdx].avatar} 
                                alt={testimonials[activeIdx].author}
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />

                                <div>
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* testimonials navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                <ChevronLeft />

                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                <button 
                                onClick={() => setActiveIdx(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx == activeIdx ? "w-8 bg-primary": "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
                            ))}
                            </div>
                            <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronRight />

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}