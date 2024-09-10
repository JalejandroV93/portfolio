import About from "../components/sections/index/about";
import Career from "../components/sections/index/career";
import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import Technical from "../components/sections/index/technical";
import FeaturedProjects from "../components/sections/projects/featured";
import Color from "../components/utils/page.colors.util";
import colors from "../content/index/_colors.json";

//
export default function HomePage() {
  return (
    <>
      <Color colors={colors} />
      <Hero/>
      <section id="featured-projects">
        <FeaturedProjects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technical">
        <Technical />
      </section>
      <section id="career">
        <Career />
      </section>
    </>
  );
}
