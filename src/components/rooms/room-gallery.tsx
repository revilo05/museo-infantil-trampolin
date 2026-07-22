import { ExperienceImage } from "@/components/shared/experience-image";
import type { ExperienceImage as ExperienceImageData } from "@/data/rooms";
import styles from "@/components/module-two.module.css";

type RoomGalleryProps = {
  images: ExperienceImageData[];
};

export function RoomGallery({ images }: RoomGalleryProps) {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image, index) => (
        <div className={styles.galleryItem} key={`${image.alt}-${index}`}>
          <ExperienceImage
            src={image.src}
            alt={image.alt}
            position={image.position}
          />
        </div>
      ))}
    </div>
  );
}
