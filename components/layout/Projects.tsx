import SubTitle from "../shared/SubTitle";
import ProjectCard from "../shared/ProjectCard";
import { Project } from "@/types";

const token = process.env.GITHUB_ACCESS_TOKEN;

async function fetchGithubAPI() {
  const res = await fetch(
    `https://api.github.com/users/stu1612/repos?sort=created&per_page=4`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
      next: {
        revalidate: 0,
      },
    }
  );

  return res.json();
}

export default async function Projects() {
  const data = await fetchGithubAPI();

  const projectData = data.map(({ html_url, name }: Project) => ({
    html_url,
    name,
  }));

  return (
    <div className="grid-aside-projects ">
      <div>
        <SubTitle
          title="Check out my recent github projects"
          style="clip-text bg-emerald"
        />
      </div>

      {projectData.map((project: Project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
}
