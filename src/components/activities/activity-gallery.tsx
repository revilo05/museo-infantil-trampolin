import { ExperienceImage } from "@/components/shared/experience-image";
import type { Activity } from "@/data/activities";
import styles from "@/components/module-two.module.css";

type ActivityGalleryProps = {
  images: Activity["gallery"];
};

export function ActivityGallery({ images }: ActivityGalleryProps) {
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
