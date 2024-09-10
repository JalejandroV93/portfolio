// Core packages D:\Personales\Python_Projects\protecapp\portfolio\components\sections\articles\careerarticle.jsx
import Image from "next/image";
import { useEffect, useState } from "react";

import careerData from '../../../content/articles/careerdata.json';
// Career scss
import career from "../../../styles/sections/index/career.module.scss";
import SectionGridBg from "../../blocks/section.grid.block";
// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import Container from "../../structure/container";
// Section structure
import Section from "../../structure/section";
import Badges from "../../utils/badge.list.util";
import CareerArticle from "../articles/careerarticle";
import CareerTimeline from "../articles/careertimeline";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experiencia"
          preTitle="Carrera"
          subTitle="Actualmente lidero el area de Tecnología en el Liceo Taller San Miguel, aportando con soluciones tecnológicas y digitales para la gestión de la institución."
        />
        <section className={career.area}>
        <CareerArticle {...careerData.currentPosition} />
        <CareerTimeline positions={careerData.positions} />
        {careerData.previousPositions.map((position, index) => (
          <CareerArticle key={index} {...position} />
        ))}
      </section>
      </Container> 
    </Section>
  );
}

const organizedTechStack = {
  frontend: [
    { key: "html5", name: "HTML5", type: "devicon" },
    { key: "css3", name: "CSS", type: "devicon" },
    { key: "javascript", name: "JavaScript", type: "devicon" },
    { key: "react", name: "React", type: "devicon" },
    { key: "nextjs", name: "Next.js", type: "devicon" },
    { key: "tailwindcss", name: "Tailwind", type: "devicon" },
    { key: "wordpress", name: "WordPress", type: "devicon" },
    { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  ],
  backend: [
    { key: "nodejs", name: "Node.js", type: "devicon" },
    { key: "express", name: "Express", type: "devicon" },
    { key: "python", name: "Python", type: "devicon" },
    { key: "fastapi", name: "FastAPI", type: "devicon" },
  ],
  database: [
    { key: "mysql", name: "MySQL", type: "devicon" },
    { key: "mongodb", name: "MongoDB", type: "devicon" },
    { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  ],
  devops: [
    { key: "git", name: "Git", type: "devicon" },
    { key: "docker", name: "Docker", type: "devicon" },
    { key: "jenkins", name: "Jenkins", type: "devicon" },
    { key: "amazonwebservices", name: "AWS", type: "devicon" },
    { key: "azure", name: "Azure", type: "devicon" },
  ],
  operatingSystems: [
    { key: "linux", name: "Linux", type: "devicon" },
    { key: "ubuntu", name: "Ubuntu", type: "devicon" },
    { key: "windows8", name: "Windows", type: "devicon" },
  ],
  designTools: [
    { key: "figma", name: "Figma", type: "devicon" },
    { key: "adobexd", name: "Adobe XD", type: "devicon" },
    { key: "photoshop", name: "Photoshop", type: "devicon" },
    { key: "illustrator", name: "Illustrator", type: "devicon" },
    { key: "indesign", name: "InDesign", type: "devicon" },
    { key: "premiere", name: "Premiere", type: "devicon" },
    { key: "aftereffects", name: "After Effects", type: "devicon" },
  ],
  projectManagement: [
    { key: "jira", name: "Jira", type: "devicon" },
    { key: "trello", name: "Trello", type: "devicon" },
  ],
  communication: [
    { key: "slack", name: "Slack", type: "devicon" },
    { key: "teams", name: "Teams", type: "devicon" },
    { key: "zoom", name: "Zoom", type: "devicon" },
  ],
  other: [
    { key: "cpanel", name: "cPanel", type: "devicon" },
  ]
};