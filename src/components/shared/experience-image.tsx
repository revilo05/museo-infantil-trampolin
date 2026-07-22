import Image from "next/image";
import type { CSSProperties } from "react";
import type { AtlasPosition } from "@/data/rooms";
import styles from "@/components/module-two.module.css";

type AtlasStyle = CSSProperties & {
  "--atlas-x": number;
  "--atlas-y": number;
};

type ExperienceImageProps = {
  src: string;
  alt: string;
  position: AtlasPosition;
  preload?: boolean;
};

export function ExperienceImage({
  src,
  alt,
  position,
  preload = false,
}: ExperienceImageProps) {
  const atlasStyle: AtlasStyle = {
    "--atlas-x": position.column,
    "--atlas-y": position.row,
  };

  return (
    <span className={styles.atlasFrame}>
      <Image
        className={styles.atlasImage}
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        sizes="1254px"
        loading={preload ? "eager" : "lazy"}
        style={atlasStyle}
        draggable={false}
      />
    </span>
  );
}
