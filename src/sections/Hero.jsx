import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, GitBranch, Globe, Mail } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "React",
    "MongoDB",
    "ML",
    "llm",
    "AWS",
    "DBMS",
    "Python",
    "C++",
    "DSA"
];
export const Hero = () => {
    return (<section className="relative min-h-screen flex items-center overflow-hidden">
        {/* bg */}
        <div className="absolute inset-0">
            <img src="hero-bg.jpg" alt="hero image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>
        {/* green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (

                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }} />
            ))}
        </div>
        {/* content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left colum-text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software work with react
                        </span>
                    </div>
                    {/* headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hello! I'm Arbind Malava i am a robitics engineer at cgc 4th year , with also knowledge abiut software technology with web applications , application and stuffs welcome and explore my portfolio
                        </p>
                    </div>
                    {/* CTAS */}
                    <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>
                    {/* social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow: </span>
                        {[
                            { icon: GitBranch, href: "#" },
                            { icon: Globe, href: "#" },
                            { icon: Mail, href: "#" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 erounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5" />}</a>
                        ))}
                    </div>
                </div>
                {/* right section with img */}
                <div className="relatice animate-fade-in animation-delay-300">
                    {/* profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/profile.jpg" alt="Arbind" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                            {/* floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl py-4 p-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">10+</div>
                                <div className="text-xm text-muted-foreground">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* skills section */}
            <div className="mt-20 animate-fade-in animate-delay-600">
                <p className="text-sm text-muted-forground mb-6 text-center">
                    Technologies and languages i work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}</div>
                </div>
            </div>

        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
            <a href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary ">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />

            </a>
        </div>
    </section>
    );
};