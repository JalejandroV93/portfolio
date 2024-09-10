// Core packages D:\Personales\Python_Projects\protecapp\portfolio\components\sections\articles\careerarticle.jsx
import Image from "next/image";
import { useEffect, useState } from "react";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";
import SectionGridBg from "../../blocks/section.grid.block";
// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import CareerArticle from "../../sections/articles/careerarticle";
import Container from "../../structure/container";
// Section structure
import Section from "../../structure/section";
import Badges from "../../utils/badge.list.util";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const startDate = new Date("Apr 2018");
    const currentDate = new Date();
    const diff = currentDate - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );

    setYears(years);
    setMonths(months);
  }, []);

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experiencia"
          preTitle="Carrera"
          subTitle="Actualmente lidero el area de Tecnología en el Liceo Taller San Miguel, aportando con soluciones tecnológicas y digitales para la gestión de la institución."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Liceo Taller San Miguel</h3>
                <h4>Tiempo completo</h4>
                <h4>{`(${years} años ${months} meses)`}</h4>
                <h5>Pereira, Risaralda, Colombia</h5>
              </span>
              <p>
                El Liceo Taller San Miguel es una institución educativa que
                ofrece una educación integral a niños y jóvenes en la ciudad de
                Pereira. Como líder de tecnología, soy responsable de la
                planificación, implementación y mantenimiento de la
                infraestructura tecnológica de la institución. Esto incluye la
                gestión de la red, la seguridad de la información, la
                administración de sistemas y la implementación de soluciones
                digitales para la gestión de la institución.
              </p>
            </div>
            <div className={career.companyAlt}></div>
            <div className={career.companyLogo}>
              <Image
                src="/img/company-logoi.png"
                alt="Company Logo"
                width={100}
                height={100}
              />
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Director de Diseño y Desarrollo de Productos</h3>
                  <h4>Nov 2021 - Presente · 1 año 3 meses</h4>
                </span>
                <p>
                  Soy responsable de la ideación, planificación y desarrollo de
                  nuevos bienes de consumo y software de microservicios para
                  clientes y empleados. Durante estos proyectos, trabajo con las
                  partes interesadas clave dentro de nuestra empresa y cadena de
                  suministro para garantizar y cumplir los objetivos de calidad
                  en múltiples dominios.
                </p>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    Desarrollador Full Stack y Diseñador de Experiencia de
                    Usuario
                  </h3>
                  <h4>Feb 2020 - Nov 2021 · 1 año 10 meses</h4>
                </span>
                <p>
                  Como desarrollador full stack líder, soy responsable del
                  desarrollo de software, CI/CD y control de calidad. Esto
                  incluye el front-end, las API y el back-end. Además, se me
                  asignó la tarea de identificar y analizar los puntos débiles
                  en el recorrido del cliente y los flujos de trabajo de los
                  empleados. Cada proyecto tuvo que ser estimado y priorizado en
                  función de su carga de trabajo y su impacto inmediato en la
                  eficiencia o los ingresos. Algunos de estos proyectos han
                  tenido tanto éxito internamente que hemos planeado su
                  refactorización para su comercialización.
                </p>
                <p>
                  Algunos proyectos clave completados durante este tiempo 👇
                </p>
                <ul className={career.list}>
                  <li>
                    Pruebas automatizadas de atributos y configuraciones de
                    productos
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Eliminación de
                      errores críticos en la entrada de datos
                    </span>
                  </li>
                  <li>
                    Informes y automatización de gestión de inventario
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Reducción del
                      trabajo de compra en un ~80%
                    </span>
                  </li>
                  <li>
                    Plugin de gestión de ventas con integración de carrito de
                    compras AJAX
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Aumento del valor
                      promedio de pedido en un 8.3%
                    </span>
                  </li>
                  <li>
                    Software de verificación de identificación personalizado e
                    integración con WooCommerce
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Reducción del
                      fraude con tarjetas de crédito en un 98%
                    </span>
                  </li>
                </ul>
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    Desarrollador Front-End y Diseñador de Interfaz de Usuario
                  </h3>
                  <h4>Abr 2019 - Feb 2020 · 11 meses</h4>
                </span>
                <p>
                  Fui contratado para cubrir varios roles creativos en un
                  entorno de inicio pequeño. Trabajé con el equipo de marketing
                  para crear la marca y los logotipos, diseñé y desarrollé un
                  nuevo front-end para el sitio web y mejoré la experiencia de
                  los usuarios y los KPI de la tienda a través de optimizaciones
                  de diseño y merchandising.
                </p>
                <p>
                  Algunos proyectos clave completados durante este tiempo 👇
                </p>
                <ul className={career.list}>
                  <li>
                    Carrito de compras interactivo de funcionalidad completa
                    para reemplazar la página del carrito
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Aumento de las
                      conversiones en un 0.7%
                    </span>
                  </li>
                  <li>
                    Menús animados de varios estados complejos representados en
                    una interfaz elegante
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Impulso de
                      confianza en la marca con un menú de última generación
                    </span>
                  </li>
                  <li>
                    Diseño y desarrollo del sitio y estrategia de merchandising
                    optimizada para el mercado
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Tasa de conversión
                      general del 7.1%
                    </span>
                  </li>
                </ul>
                <Badges
                  list={stack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          <CareerArticle
            company="EcoTecnologia S.A.S"
            position="Soporte Tecnico"
            startDate="2019-01-01"
            endDate="2020-12-31"
            location="Pereira, Risaralda, Colombia"
            description="Era el encargado de brindar soporte técnico a los clientes de la empresa,
			 realizando mantenimiento preventivo y correctivo a los equipos de cómputo y redes."
			 logo="/img/logos/ecotecnologia.png"
			
          />
          <CareerArticle
            company="Liceo Taller San Miguel"
            position="Practicante Tecnologia"
            startDate="2018-01-01"
            endDate="2018-12-31"
            location="Pereira, Risaralda, Colombia"
            description="Realice mis practicas como tecnologo en sistemas, realizando mantenimiento y soporte a la infraestructura tecnologica de la institucion."
			logo="/img/company-logoi.png"
          />
          <CareerArticle
            company="Soportec"
            position="Medio Tiempo"
            startDate="2012-12-01"
            endDate="2018-11-30"
            location="Pereira, Risaralda, Colombia"
            description="Como Apasionado por la tecnologia 🧙‍♂️. Algo que inicio como hobby termino siendo mi primer trabajo arreglaba computadoras, tablets y teléfonos celulares."
          />
          {/* <article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Soportec</h3>
								<h4>Tiempo completo permanente</h4>
								<h4>Ene 2006 - Nov 2011 · 5 años 11 meses</h4>
								<h5>Vancouver, Columbia Británica, Canadá</h5>
							</span>
							<p>Yo era el Mago de la Electrónica 🧙‍♂️</p>
							<p>Electrónica de la Costa Oeste era un taller de reparación que arreglaba computadoras, consolas y teléfonos celulares.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article> */}
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "tailwind", name: "Tailwind", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "jenkins", name: "Jenkins", type: "devicon" },
  { key: "aws", name: "AWS", type: "devicon" },
  { key: "azure", name: "Azure", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "adobexd", name: "Adobe XD", type: "devicon" },
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "indesign", name: "InDesign", type: "devicon" },
  { key: "premiere", name: "Premiere", type: "devicon" },
  { key: "aftereffects", name: "After Effects", type: "devicon" },
  { key: "xd", name: "XD", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "trello", name: "Trello", type: "devicon" },
  { key: "slack", name: "Slack", type: "devicon" },
  { key: "teams", name: "Teams", type: "devicon" },
  { key: "zoom", name: "Zoom", type: "devicon" },
  { key: "meet", name: "Meet", type: "devicon" },
  { key: "skype", name: "Skype", type: "devicon" },
  { key: "whatsapp", name: "WhatsApp", type: "devicon" },
  { key: "telegram", name: "Telegram", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
