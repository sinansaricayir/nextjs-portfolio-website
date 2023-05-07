import ProjectItem from "./ProjectItem";
import posApp from "../public/assets/projects/pos-app.png";
import ecommerce from "../public/assets/projects/ecommerce.png";
import food from "../public/assets/projects/food.png";
import scraping from "../public/assets/projects/scraping.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-[#5651e5] text-xl">
          Projects
        </p>
        <h2 className="py-4">What I`ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            img={posApp}
            title="Pos Application Project"
            tech="MERN Stack"
            url="https://ssa-pos-application.onrender.com"
          />
          <ProjectItem
            img={ecommerce}
            title="E-Commerce Website"
            tech="Html | Css | JavaScript"
            url="https://commerce-project.netlify.app"
          />
          <ProjectItem
            img={food}
            title="Food Ordering Website"
            tech="Next.js"
            url="https://github.com/sinansaricayir/nextjs-food-ordering"
          />
          <ProjectItem
            img={scraping}
            title="Web Scraping Project"
            tech="Node.js | Puppeteer | React.js"
            url="https://github.com/sinansaricayir/web-scraping-nodejs-reactjs"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
