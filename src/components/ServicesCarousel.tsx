type ServiceType = "image" | "video";

type Service = {
  id: number;
  title: string;
  type: ServiceType;
  mediaSrc: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Podcast Editing",
    type: "video",
    mediaSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 2,
    title: "Executive Resumes",
    type: "image",
    mediaSrc: "/images/hero-2.svg",
  },
  {
    id: 3,
    title: "Professional Electrician",
    type: "image",
    mediaSrc: "/images/hero-4.svg",
  },
  {
    id: 4,
    title: "Real Estate Broker",
    type: "image",
    mediaSrc: "/images/hero-6.svg",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <article className="group relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-slate-600/60 bg-slate-900/70 shadow-lg transition-all duration-300 hover:scale-105 hover:border-yellow-400/90 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
      {service.type === "video" ? (
        <video
          src={service.mediaSrc}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={service.mediaSrc}
          alt={service.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-base font-semibold tracking-wide text-white">{service.title}</h3>
      </div>
    </article>
  );
};

const ServicesCarousel = () => {
  const loopItems = [...services, ...services];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Core Services</h2>
          <p className="mt-2 text-muted-foreground">Built for professionals who demand premium execution.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border-y border-slate-500/40 bg-[#0A1128] py-8 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
          <div className="flex w-max animate-infinite-scroll gap-6 px-4 hover:[animation-play-state:paused]">
            {loopItems.map((service, index) => (
              <ServiceCard key={`${service.id}-${index}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
