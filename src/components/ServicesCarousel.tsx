type ServiceType = "image" | "video";

type Service = {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  type: ServiceType;
  mediaSrc: string;
  poster?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Short-form Video Editing",
    subtitle: "High-retention reels and social cuts",
    tag: "Video",
    type: "video",
    mediaSrc: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/photos/8102676/pexels-photo-8102676.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "General CV Making",
    subtitle: "Clean resume structure for faster shortlisting",
    tag: "CV",
    type: "image",
    mediaSrc: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Specialized CV Making",
    subtitle: "Role-focused CVs with stronger positioning",
    tag: "CV",
    type: "image",
    mediaSrc: "https://images.pexels.com/photos/4101343/pexels-photo-4101343.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Podcast and Long-form Edits",
    subtitle: "Polished audio-video sync and pacing",
    tag: "Video",
    type: "video",
    mediaSrc: "https://videos.pexels.com/video-files/5512585/5512585-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/photos/3783270/pexels-photo-3783270.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Portfolio Without Animation",
    subtitle: "Simple, elegant portfolio pages",
    tag: "Portfolio",
    type: "image",
    mediaSrc: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Animated Portfolio Design",
    subtitle: "Interactive premium portfolio experiences",
    tag: "Portfolio",
    type: "video",
    mediaSrc: "https://videos.pexels.com/video-files/7989850/7989850-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <article className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-slate-950/80 shadow-[0_15px_45px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_20px_55px_rgba(56,189,248,0.3)]">
      {service.type === "video" ? (
        <video
          src={service.mediaSrc}
          poster={service.poster}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={service.mediaSrc}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
        {service.tag}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-base font-bold tracking-wide text-white">{service.title}</h3>
        <p className="mt-1 text-xs text-white/75">{service.subtitle}</p>
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">Core Services</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Premium media-powered service showcase</h2>
          <p className="mt-2 text-muted-foreground">Every service card now includes rich visual media with smooth premium animation.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-600/40 bg-[linear-gradient(120deg,#030712,#0F172A)] py-8 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
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
