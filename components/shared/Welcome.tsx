import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <section>
      <figure className="w-full h-[40vh] mb-5 relative md:hidden">
        <Image
          src="/images/midjourney_ai_image_of_stuartbolderson.png"
          alt="midjourney AI generated image of Stuart Bolderson"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <p className="p-medium-18">
        I hope you find my blog articles of interest, my goal is to test myself
        learning new things, improve my understanding of current trends whilst
        having fun coding ! If you have any advice for me, would like to
        collaborate together or would like me to build a test application to
        help your learnign please reach out.
      </p>
    </section>
  );
}
