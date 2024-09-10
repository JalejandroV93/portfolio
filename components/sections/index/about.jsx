// Core packages
import Image from 'next/image'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';
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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Sobre mí"
					preTitle="Sinopsis"
					subTitle="Soy un profesional digital con habilidades en diseño UX/UI y desarrollo full stack,
					especializado en la creación de experiencias de usuario intuitivas y funcionales. Mi experiencia abarca tanto el frontend como el backend,
					lo que me permite ofrecer soluciones completas y eficientes.
					Además, como IT Manager apasionado por la tecnología, tengo una sólida experiencia en la gestión de infraestructuras tecnológicas y operativas,
					siempre buscando optimizar procesos y aprovechar la innovación para transformar digitalmente las organizaciones."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/temporal.jpg" alt="Foto Saludando" width={600} height={800}/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Habilidades blandas que pagan las cuentas"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Además de mi experiencia en diseño y tecnología, también tengo habilidades sólidas de liderazgo, gestión del tiempo y multitarea,
							desarrolladas a través de mi experiencia como lider de TI en un colegio privado.
							Fuera del trabajo, me gusta mantenerme activo practicando deportes como futbol.
							Tengo confianza en mi capacidad para aportar pasión y valor a cualquier proyecto."
						/>
						<BadgesBlock 
							title="Investigación y planificación" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Uno de los aspectos que más me gusta de la creación es planificar la arquitectura de un proyecto.
							Desde los sistemas de diseño hasta la estrategia de marca, disfruto trabajando con los muchos puntos de contacto de la experiencia del usuario."
							invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'planet-moon', name: 'Investigación', type: 'fad' },
	{ key: 'qrcode', name: 'Estrategia Digital', type: 'fad' },
	{ key: 'window', name: 'Sistemas de Diseño', type: 'fad' },
	{ key: 'cubes', name: 'Estrategia de Producto', type: 'far' },
	{ key: 'layer-plus', name: 'Estrategia de Marca', type: 'fad' },
	{ key: 'solar-system', name: 'Operaciones', type: 'fad' },
];