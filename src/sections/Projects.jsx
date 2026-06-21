import { ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Horizon",
        description:
            "Recommends personalized content using a local LLM, tagging media for emotional themes and tracking the user's growth through reflective AI coaching.",
        image: "/projects/Horizen.png",
        tags: ["Python", "Flask", "React", "LLaMA 3.1"],
        link: "#", // deployment pending per your resume — add once live
        github: "https://github.com/arbind0705/Horizon", // add your repo URL
    },
    {
        title: "AI Summarizer",
        description:
            "Summarizes long legal and government documents through a 9-level NLP pipeline, with every line traceable to its source passage and a built-in AI chatbot for document-specific Q&A.",
        image: "/projects/PolicyLens.png",
        tags: ["Python", "Flask", "React", "FAISS", "MongoDB"],
        link: "https://github.com/arbind0705/AI_Summerizer", // add live demo URL if deployed
        github: "#", // add your repo URL
    },
    {
        title: "Travel Planning App",
        description:
            "Generates budget-optimized, day-wise travel itineraries — a custom C++ routing engine calculates the most cost-efficient order between destinations using live distance data.",
        image: "/projects/TPP.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/arbind0705/Class-project",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        featured work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
                        projects that{" "}
                        <span className="font-serif italic font-normal text-white">make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A few things I've built while learning how AI/ML systems actually work in practice — end to end, not just in theory.
                    </p>
                </div>
                {/* project grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <GitBranch className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagidx) => (
                                        <span key={tagidx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* view all cta */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a href="https://github.com/arbind0705" target="_blank" rel="noopener noreferrer">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};