import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-auto">
      <div className="my-10 lg:my-20">
        <h1 className="h5-bold md:h1-bold lg:pr-8">
          Welcome to stuBlog! Web Dev blog covering a range of{" "}
          <span className="clip-text bg-hyper">frontend</span> and{" "}
          <span className="clip-text bg-emerald">fullstack</span> topics{" "}
        </h1>
      </div>
      <div className="grid grid-cols-galleryMobile md:grid-cols-galleryDesktop">
        <figure className="relative h-[40vh] md:h-full">
          <Image
            src="/images/computer.jpg"
            alt="computer on a desk showing a code IDE and some content of a blog article"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="flex flex-col flex-start justify-center my-10 lg:my-20 md:px-10 lg:px-20">
          <h2 className="h5-bold mb-5">Dummies guide to web development</h2>
          <p className="p-medium-18 lg:p-medium-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quas omnis distinctio, vero ducimus magni ratione aspernatur debitis
            adipisci accusantium beatae nostrum modi dolor in ad recusandae,
            architecto a temporibus!
          </p>
        </div>
      </div>
    </section>
  );
}
