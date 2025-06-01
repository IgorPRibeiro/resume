import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import plamont from "../assets/images/plamont.png";
import icoop from "../assets/images/icoop.png";
import lecardEstudante from "../assets/images/lecardEstudante.png";

type Project = {
  id: number;
  title: string;
  company: string;
  image: string;
  description: string;
  tags: string[];
  descriptionImage: string;
};

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: (project: Project) => void;
}) => {
  return (
    <div
      className="bg-secondary rounded-lg overflow-hidden card-hover cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-highlight">{project.company}</p>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <section id="portfolio" className="section py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">{t("portfolio.title")}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="mt-4">
                <div className="rounded-md overflow-hidden mb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80"
                  />
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-highlight">
                    {selectedProject.company}
                  </h4>
                  <p className="mt-2">{selectedProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-xs"
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
