import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import plamont from "../assets/images/plamont.webp";
import icoop from "../assets/images/icoop.webp";
import lecardEstudante from "../assets/images/lecardEstudante.webp";

type Project = {
  id: number;
  title: string;
  company: string;
  image: string;
  description: string;
  tags: string[];
  descriptionImage: string;
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  const projects: Project[] = [
    {
      id: 1,
      title: t("portfolio.project1.title"),
      company: t("portfolio.project1.company"),
      image:
        "https://play-lh.googleusercontent.com/Dp-58zoEZgWFWF_Cm5FC1sCUnWxiT37JXDbvHDRcVrmEq-rAMr8OExZsVRkGTOhCGj0=w5120-h2880-rw",
      description: t("portfolio.project1.description"),
      descriptionImage:
        "https://play-lh.googleusercontent.com/lBqpdlEkVA9pj1nvo1AsRxobXVnf6hKmTv7GC7igwT0TFqFyAg68mAfch67pbwEzlIKk=w5120-h2880-rw",

      tags: ["React Native", "Node.js", "Firebase", "Redux"],
    },
    {
      id: 2,
      title: t("portfolio.project2.title"),
      company: t("portfolio.project2.company"),
      image: icoop,
      descriptionImage: icoop,
      description: t("portfolio.project2.description"),
      tags: ["React Native", "Node.js", "Firebase", "Contentfull", "Redux"],
    },
    {
      id: 3,
      title: t("portfolio.project3.title"),
      company: t("portfolio.project3.company"),
      image: plamont,
      descriptionImage: plamont,
      description: t("portfolio.project3.description"),
      tags: ["React Native", "RealmDB", "Zustand"],
    },
    {
      id: 4,
      title: t("portfolio.project4.title"),
      company: t("portfolio.project4.company"),
      image: lecardEstudante,
      descriptionImage: lecardEstudante,
      description: t("portfolio.project4.description"),
      tags: ["React Native", "Firebase", "OneSignal", "Mobx"],
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionTitle>{t("portfolio.title")}</SectionTitle>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group pane pane-interactive overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {/* Momento focal: a tela acende quando a vitrine entra em cena. */}
              <div className="h-64 lg:h-80 overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={cn(
                    "reveal-lit w-full h-full object-cover",
                    "group-hover:scale-[1.03] group-hover:duration-500",
                    inView && "is-in"
                  )}
                  style={{ transitionDelay: `${index * 140}ms` }}
                />
              </div>

              <div className="p-6">
                <h3 className="type-title">{project.title}</h3>
                <p className="mt-2 type-label text-muted-foreground">
                  {project.company}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent
              className="sm:max-w-3xl p-0 gap-0 overflow-hidden max-h-[90vh] shadow-overlay-drop
                [&>button]:z-20 [&>button]:right-4 [&>button]:top-4 [&>button]:rounded-full
                [&>button]:bg-background/80 [&>button]:backdrop-blur-sm [&>button]:p-2 [&>button]:opacity-90"
            >
              <div className="bg-secondary shrink-0">
                <img
                  src={selectedProject.descriptionImage || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[240px] sm:max-h-[420px] object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <DialogHeader className="space-y-2">
                  <p className="type-label text-muted-foreground">
                    {selectedProject.company}
                  </p>
                  <DialogTitle className="type-display-sub text-left">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <p className="mt-6 type-body text-muted-foreground measure">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="type-label text-muted-foreground border border-border rounded-full px-3.5 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
