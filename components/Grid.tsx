"use client";

import dynamic from "next/dynamic";
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const BentoGrid = dynamic(() =>
  import("./ui/BentoGrid").then((mod) => mod.BentoGrid)
);
const BentoGridItem = dynamic(() =>
  import("./ui/BentoGrid").then((mod) => mod.BentoGridItem)
);

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imageClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
