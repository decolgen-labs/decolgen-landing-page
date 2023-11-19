import React from "react";

import CardProject, { CardProjectProps } from "../Card/CardProject";

const OurProject = () => {
  const listProject: CardProjectProps[] = [
    {
      link: "#",
      image: "/images/art/face-to-see.png",
      title: "Face To See Collection",
      content:
        "A collection of 666 unique NFTs representing The Nature of Humans. Face To See aims to build a vibrant community of Starknet True Human through exploring the human inner-self and self-discovery concept.",
    },
    {
      link: "#",
      image: "/images/art/arcade_hub.png",
      title: "Starknet Arcade Hub",
      content:
        "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens. The first product with upcominng Beta will be a CoinFlip game, allowing folks to place bets and multiply their $ETH holdings on Starknet.",
      label_btn: "View Info",
    },
  ];
  return (
    <div className="container mx-auto max-w-5xl">
      <div>
        <p>Our Project</p>
      </div>
      <div className="flex gap-10">
        {listProject.map(project => (
          <div
            className="h-auto flex-1 overflow-hidden rounded-3xl"
            key={project.title}
          >
            <CardProject
              link={project.link}
              image={project.image}
              title={project.title}
              content={project.content}
              label_btn={project.label_btn}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProject;
