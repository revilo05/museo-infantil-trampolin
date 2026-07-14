import {
  BookOpenText,
  Camera,
  Compass,
  HandHeart,
  Landmark,
  Leaf,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Conoce el museo",
  description:
    "Conoce la misión, la propuesta educativa, los valores y el entorno histórico del Museo Infantil Trampolín.",
  path: "/conoce-el-museo",
});

const values = [
  {
    title: "Curiosidad",
    description: "Hacemos espacio para preguntar, observar y probar nuevas ideas.",
    icon: Lightbulb,
  },
  {
    title: "Inclusión",
    description: "Escuchamos distintas necesidades para construir experiencias más abiertas.",
    icon: HandHeart,
  },
  {
    title: "Creatividad",
    description: "El juego y la imaginación conectan aprendizajes con la vida cotidiana.",
    icon: Compass,
  },
  {
    title: "Cuidado",
    description: "Aprendemos a valorar a las personas, la cultura y nuestro entorno.",
    icon: Leaf,
  },
];

const story = [
  {
    title: "Una casa histórica",
    description:
      "El Museo Infantil Trampolín desarrolla sus actividades dentro de Casa Rodrigo de Bastidas, en la Zona Colonial de Santo Domingo.",
    icon: Landmark,
  },
  {
    title: "Aprender haciendo",
    description:
      "Su propuesta reúne ciencia, naturaleza, cultura y creatividad para que el conocimiento se experimente de forma activa.",
    icon: BookOpenText,
  },
  {
    title: "Una experiencia compartida",
    description:
      "Familias y centros educativos encuentran un punto de encuentro donde conversar, jugar y descubrir juntos.",
    icon: UsersRound,
  },
];

export default function MuseumPage() {
  return (
    <>
      <PageHero
        eyebrow="Descubrir es divertido"
        title="Conoce un museo que empieza con una pregunta"
        description="Trampolín convierte la curiosidad infantil en experiencias de aprendizaje activo, conectando a niñas, niños, familias y educadores con el mundo que les rodea."
        tone="yellow"
        actions={
          <>
            <ButtonLink href="#propuesta" showArrow>
              Nuestra propuesta
            </ButtonLink>
            <ButtonLink href="#galeria" variant="secondary">
              Ver galería
            </ButtonLink>
          </>
        }
        aside={
          <div className="museum-intro-card">
            <div className="museum-intro-card__icon" aria-hidden="true">
              <Landmark size={42} />
            </div>
            <span>Nuestro entorno</span>
            <strong>Casa Rodrigo de Bastidas</strong>
            <p>Una referencia histórica que acompaña la experiencia del museo.</p>
          </div>
        }
      />

      <Section className="section--identity" labelledBy="identity-title">
        <SectionHeader
          id="identity-title"
          eyebrow="Nuestra brújula"
          title="Lo que orienta cada experiencia"
          description="Una propuesta institucional que une aprendizaje, juego y exploración con una mirada cercana a las familias."
          align="center"
        />
        <div className="mission-grid">
          <article className="mission-card mission-card--primary">
            <span>Misión</span>
            <h3>Despertar la curiosidad</h3>
            <p>
              Ofrecer un entorno educativo interactivo donde el juego, la
              exploración y el descubrimiento ayuden a construir aprendizajes
              significativos.
            </p>
          </article>
          <article className="mission-card mission-card--secondary">
            <span>Visión</span>
            <h3>Crecer como referente educativo</h3>
            <p>
              Fortalecer una experiencia de educación no formal, innovadora y
              accesible, con impacto positivo en nuevas generaciones.
            </p>
          </article>
        </div>
      </Section>

      <Section className="section--values" labelledBy="values-title">
        <SectionHeader
          id="values-title"
          eyebrow="Valores"
          title="Principios que se sienten en cada sala"
          description="Más que palabras, son decisiones que ayudan a crear una experiencia educativa cálida y responsable."
        />
        <div className="value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="value-card">
                <Icon aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="propuesta" className="section--proposal" labelledBy="proposal-title">
        <div className="proposal-grid">
          <div>
            <p className="eyebrow">Propuesta educativa</p>
            <h2 id="proposal-title">Tocar, imaginar, conversar y volver a intentar</h2>
            <p className="proposal-grid__lead">
              El aprendizaje se vuelve memorable cuando niñas y niños participan
              activamente. Por eso, la experiencia digital no intenta revelar
              todo: prepara la visita y deja espacio para el asombro.
            </p>
          </div>
          <ol className="learning-list">
            <li>
              <span>01</span>
              <div>
                <strong>Observar</strong>
                <p>Reconocer detalles, patrones y nuevas preguntas.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Experimentar</strong>
                <p>Aprender con el cuerpo, los sentidos y la colaboración.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Compartir</strong>
                <p>Conversar sobre lo descubierto y conectarlo con la vida.</p>
              </div>
            </li>
          </ol>
        </div>
      </Section>

      <Section className="section--story" labelledBy="story-title">
        <SectionHeader
          id="story-title"
          eyebrow="Nuestra historia"
          title="Una experiencia que conecta pasado, presente y futuro"
          description="La cronología institucional detallada está pendiente de validación; esta narrativa utiliza únicamente los acuerdos documentados del proyecto."
        />
        <div className="story-line">
          {story.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="story-item">
                <div className="story-item__marker" aria-hidden="true">
                  <span>{index + 1}</span>
                  <Icon />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="galeria" className="section--gallery" labelledBy="gallery-title">
        <div className="section-heading-row">
          <SectionHeader
            id="gallery-title"
            eyebrow="Galería institucional"
            title="Imágenes que llegarán del museo"
            description="Los espacios están preparados para recibir material oficial con sus créditos y textos alternativos."
          />
          <div className="pending-badge">
            <Camera aria-hidden="true" size={16} /> Material pendiente
          </div>
        </div>
        <div className="gallery-grid">
          {["Experiencias de aprendizaje", "Familias explorando", "Casa Rodrigo de Bastidas"].map(
            (label, index) => (
              <div
                key={label}
                className={`gallery-placeholder gallery-placeholder--${index + 1}`}
                role="img"
                aria-label={`Espacio reservado para fotografía oficial: ${label}`}
              >
                <Camera aria-hidden="true" />
                <span>{label}</span>
                <small>Fotografía oficial por confirmar</small>
              </div>
            ),
          )}
        </div>
      </Section>

      <Section className="section--final-cta" labelledBy="museum-cta-title">
        <div className="final-cta final-cta--blue">
          <div>
            <p className="eyebrow">Sigue explorando</p>
            <h2 id="museum-cta-title">La historia continúa con tu visita</h2>
            <p>Conoce las salas o cuéntanos cómo podemos orientarte.</p>
          </div>
          <div className="button-row">
            <ButtonLink href="/salas" variant="secondary" showArrow>
              Explorar salas
            </ButtonLink>
            <ButtonLink href="/contacto" showArrow>
              Contactar
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
