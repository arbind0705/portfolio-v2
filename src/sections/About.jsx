import { Brain, Code2, Cpu, Compass } from "lucide-react";

const highlights = [
    {
        icon: Brain,
        title: "AI/ML Focused",
        description: "Building with LLMs and NLP pipelines, not just learning the theory.",
    },
    {
        icon: Code2,
        title: "Full-Stack Capable",
        description: "Comfortable end-to-end — React frontends to Flask backends and databases.",
    },
    {
        icon: Cpu,
        title: "Robotics Background",
        description: "Hardware roots that shape how I think about systems and constraints.",
    },
    {
        icon: Compass,
        title: "Versatile Problem Solver",
        description: "Drawn to a wide range of problem types over repeating the same ones — keeps thinking sharp across domains.",
    },
];



export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid  gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="text-center animation-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                            <p>
                                I'm a final-year Computer Science student with a habit of chasing whatever I don't understand yet — right now, that's AI/ML. Most of my recent projects sit at the intersection of LLMs and real systems: a personality-development platform that uses a local LLM to recommend content, and a legal document summarizer with a full NLP pipeline and source-traceable answers.
                            </p>
                            <p>
                               That curiosity doesn't stop at one layer of the stack. I build end-to-end — Python and Flask on the backend, React up front, FAISS or MongoDB wherever a project calls for it — because I'd rather understand a system from the database up than just the part users see.
                            </p>
                            <p>
                                It started even earlier, with robotics and hardware — IoT projects, embedded systems, Raspberry Pi builds. That hands-on root is still where my instinct to take things apart and figure out how they work comes from, and it's the same instinct that's now pulling me deeper into AI.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                I've always been more interested in taking things apart to see how they work than in just using them — these days, that means AI systems instead of circuit boards.
                            </p>
                        </div>
                    </div>
                    {/* right column-highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay:`${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}