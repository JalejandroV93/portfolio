import content 		from '../../../content/projects/featured.json'
import css 			from '../../../styles/sections/projects/featured.module.scss'
import FeaturedProject from '../../blocks/projects/featured'
import SectionTitle from '../../blocks/section.title.block'
import Container 	from '../../structure/container';
// Section structure
import Section 		from '../../structure/section';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

// ,
// 	{
// 		"project": "andrewnelson.net",
// 		"url": "https://github.com/atlamors/portfolio",
// 		"repo": "Public",
// 		"descriptionTitle": "An open source portfolio",
// 		"description": "built on Next.js and React. A fast and agile MERN stack single page application.",
// 		"imageOptions": [
// 			{ "key": "size", 		"value": "large" }
// 		],
// 		"images": [
// 			{ "key": "portfolio", "hover": "left", "h": "797", "w": "556",  "url": "/img/portfolio-mock_single.png" }
// 		],
// 		"stack": [
// 			{ "key": "nextjs", 		"name": "Next.js", 		"type": "devicon" },
// 			{ "key": "react", 		"name": "React", 		"type": "devicon" },
// 			{ "key": "nodejs", 		"name": "Node.js", 		"type": "devicon" },
// 			{ "key": "mongodb", 	"name": "MongoDB", 		"type": "devicon" },
// 			{ "key": "javascript", 	"name": "JavaScript", 	"type": "devicon" },
// 			{ "key": "html5",		"name": "HTML5", 		"type": "devicon" },
// 			{ "key": "css3",		"name": "CSS3", 		"type": "devicon" },
// 			{ "key": "sass",		"name": "SCSS", 		"type": "devicon" },
// 			{ "key": "git",			"name": "Git(Hub)", 	"type": "devicon" }
// 		]
// 	}

export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Proyectos destacados"
					preTitle="UX y Full Stack"
					subTitle="Centrados en la experiencia, impulsados por la ingeniería."
				/> 				
				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}