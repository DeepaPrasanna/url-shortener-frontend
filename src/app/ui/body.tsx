import { FaHistory, FaRocket } from "react-icons/fa";
import { MdOutlineTimer, MdOutlinePreview } from "react-icons/md";
import { Form } from "./form";

const features = [
  {
    name: "History",
    description:
      "Track all your shortened URLs effortlessly from your dashboard.",
    logo: <FaHistory />,
  },
  {
    name: "Fast & Efficient",
    description:
      "Experience lightning-fast URL shortening without compromising efficiency.",
    logo: <FaRocket />,
  },
  {
    name: "TTL (Time To Live) Management",
    description:
      "Control the lifespan of your shortened URLs with customizable Time To Live settings, ensuring timely expiration and enhanced control over your shared content.",
    logo: <MdOutlineTimer />,
  },
  {
    name: "Link Preview",
    description:
      "Preview your shortened URLs before sharing to ensure they lead to the right destination.",
    logo: <MdOutlinePreview />,
  },
  // {
  //   name: "Secure Link Management",
  //   description:
  //     "Rest assured with robust security measures for managing and sharing your links securely.",
  // },
  // {
  //   name: "Custom Short URLs",
  //   description:
  //     "Personalize your links with custom aliases for enhanced branding and recognition.",
  // },
  // {
  //   name: "Analytics",
  //   description:
  //     "Gain insights into link performance with comprehensive analytics, empowering informed decisions.",
  // },
];

const Body = () => {
  return (
    <>
      <div className="hero py-10 md:py-12 grid sm:grid-cols-2 md:grid-cols-2  gap-14 md:gap-20 lg:gap-35">
        <section className="sm:mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col  sm:items-center sm:justify-center gap-4 text-center">
          <div className="p-4">
            <h1 className="text-balance bg-gradient-to-tr bg-clip-text text-center text-3xl font-bold text-transparent from-zinc-400/10 via-white/90 to-white/20 sm:text-5xl md:text-4xl lg:text-6xl">
              Instant Links, Infinite Reach! 🌱
            </h1>
            <p className="text-balance mb-10 mt-4 text-center text-muted-foreground text-sm  lg:text-xl">
              Instantly shorten your URLs and effortlessly expand your digital
              footprint infinitely with TeenyURL. Share seamlessly and reach
              farther in just a click.
            </p>
            {/* <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href={githubUrl}>
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div> */}
          </div>
        </section>
        <Form />
      </div>
      <section id="features">
        <div className="container mx-auto lg:max-w-screen-lg mt-56 mb-40">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="features"></a> Features
          </h1>
          <p className="text-balance mb-10 text-center text-muted-foreground md:text-lg lg:text-xl">
            Hey there! Ready to level up your URL shortening game? Check out
            these awesome features of TeenyURL!
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
            {features.map((feature, i) => (
              <div
                className="bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl hover:scale-105 hover:border-black hover:shadow-lg"
                key={i}
              >
                <div className="pb-6 flex flex-col space-y-1.5 p-6">
                  <div className="flex flex-row pb-6">
                    <div className="pr-4 text-2xl">{feature.logo}</div>
                    <div className="text-2xl font-semibold leading-none tracking-tight">
                      {feature.name}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
