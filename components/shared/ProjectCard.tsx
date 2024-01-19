import Image from "next/image";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mb-5">
      <a href={`${project?.html_url}`} target="_blank" className="group ">
        <div className="flex flex-row justify-start items-center ">
          <figure className="relative h-[150px] w-[150px] lg:h-[80px] lg:w-[80px] mr-3">
            <Image
              // src={images[index].img}
              src="/images/git_4.jpg"
              alt="github screenshot reference"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-none lg:rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
          <div className="flex flex-col">
            <p className="p-medium-18 lg:on-hover">{project?.name}</p>
            <small className="block p-medium-12 p-underline lg:hidden">
              Read more
            </small>
          </div>
        </div>
      </a>
    </div>
  );
}
