// Core packages
import Image from 'next/image'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'
// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'
import SectionGridBg from '../../blocks/section.grid.block'
// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import Container from '../../structure/container';
// Section structure
import Section from '../../structure/section';

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Ingeniero de Sistemas y Computación"
					preTitle="Habilidades técnicas"
					subTitle="Como ingeniero en sistemas, diseño y gestiono soluciones tecnológicas eficientes,
					abarcando tanto el desarrollo de experiencias digitales intuitivas como la optimización de infraestructuras TI.
					Utilizo una amplia variedad de herramientas y lenguajes para crear entornos que mejoren la operatividad y productividad de las organizaciones."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Fundamentos polímata"
							icon={[ 'fat', 'chart-network' ]}
							copy="Con una sólida base tanto en diseño como en desarrollo, aporto una perspectiva única a cada proyecto y estoy en constante aprendizaje
							y evolución para mantenerme actualizado con las últimas tendencias de la industria."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software con el que me encanta trabajar" 
							copy="Con más de 5 años de experiencia creando activos digitales, tengo una comprensión profunda e intuitiva de cómo se diseñan las interfaces
							 de los mejores productos de software del mundo. Este es solo parte del software que he utilizado durante ese tiempo."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Tecnologías con las que me encanta construir" 
							copy="Disfruto profundamente resolviendo problemas a través del código. Desde el front-end hasta el back-end y las API en el medio. Ningún proyecto es demasiado desafiante para mí."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 por Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	// { key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	// { key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'list-music',	name: 'Ableton', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'After Effects', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]