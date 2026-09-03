import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const officeImageUrl = "/images/ibge-office-reception.jpg";
const logoUrl = "/images/ibge-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Integrated Business & General Enterprises Tanzania Ltd",
      },
      {
        name: "description",
        content:
          "A Dar es Salaam company offering consultancy, training, tourism, ICT, supply, construction, transport and property services across the Tanzania.",
      },
      {
        property: "og:title",
        content: "Integrated Business & General Enterprises Tanzania Ltd",
      },
      {
        property: "og:description",
        content:
          "Consultancy, training, tourism, ICT, general supply, construction, transport and property services from Dar es Salaam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Business & management consultancy",
    items: [
      "A written review of how the business is run today",
      "Company registration, licensing and statutory filing support",
      "Business plans and proposals prepared to lender standard",
      "A named adviser you can call between meetings",
    ],
  },
  {
    title: "Human resources & human development",
    items: [
      "Recruitment, shortlisting and interview panels",
      "Contracts, job descriptions and staff handbooks",
      "Payroll structures and appraisal systems set up",
      "Coaching for supervisors, on site",
    ],
  },
  {
    title: "Health & social science consultancy",
    items: [
      "Baseline studies, surveys and field data collection",
      "Community health and social programme design",
      "Monitoring and evaluation frameworks with indicators",
      "A report written for the people who must act on it",
    ],
  },
  {
    title: "Training & professional development",
    items: [
      "Courses in finance, entrepreneurship and marketing",
      "Project management, leadership and information systems",
      "Computer literacy and hotel management short courses",
      "A manual for each participant and a certificate at the end",
    ],
  },
  {
    title: "Tourism & hospitality",
    items: [
      "Safari tours, camp sites and itinerary planning",
      "Marketing and promotion for lodges and tour firms",
      "Advice on siting, licensing and guest operations",
      "Bookings and ground handling for visiting groups",
    ],
  },
  {
    title: "ICT & internet services",
    items: [
      "Internet connection for offices, schools and colleges",
      "Network installation, cabling and troubleshooting",
      "Websites, email and record-keeping systems",
      "Programming, support and staff training on the tools",
    ],
  },
  {
    title: "Trade, import, export & general supply",
    items: [
      "Sourcing and wholesale or retail supply of goods",
      "Import and export handling, clearing and forwarding",
      "Warehousing and storage under contract",
      "Tender preparation and delivery against schedule",
    ],
  },
  {
    title: "Construction & engineering works",
    items: [
      "Building works, civil and mechanical contracting",
      "Electrical, plumbing, heating and ventilation installation",
      "Finishing trades: joinery, plastering, painting, shopfronts",
      "Site supervision with a written progress record",
    ],
  },
  {
    title: "Transport, plant & logistics",
    items: [
      "Haulage and transport contracts by road and water",
      "Vehicle, car hire and taxi services",
      "Supply of machinery, plant, equipment and appliances",
      "Plant hire with operators and maintenance",
    ],
  },
  {
    title: "Property, estates & agency",
    items: [
      "Property development and project supervision",
      "Estate agency, letting and property management",
      "Insurance agency and brokerage",
      "Acting as agent, broker or nominee on your behalf",
    ],
  },
];

const process = [
  {
    title: "We listen",
    body: "You set out what you need. We ask what we need to know, and we do not promise what we will not do.",
  },
  {
    title: "We scope it in writing",
    body: "A written statement of the work, the deliverables, the timeline and the fee. Nothing is left to memory.",
  },
  {
    title: "We do the work",
    body: "We deliver against the scope and keep you informed at each stage, in plain language.",
  },
  {
    title: "We hand over",
    body: "We explain what we did, answer your questions, and stay reachable for the close-out.",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="font-body">
      <header className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <a href="#" className="flex items-center">
              <img
                src={logoUrl}
                width={1240}
                height={1240}
                alt="Integrated Business and General Enterprises Tanzania Limited"
                className="h-70 w-auto sm:h-80"
              />
            </a>
            <nav className="hidden items-center gap-8 text-sm md:flex">
              <a
                href="#services"
                className="text-ink/70 transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-ink/70 transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                About
              </a>
              <a
                href="#process"
                className="text-ink/70 transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                Process
              </a>
              <a
                href="#contact"
                className="rounded-full bg-ink px-4 py-2 text-cream ring-1 ring-ink transition-transform hover:-translate-y-0.5"
              >
                Enquire
              </a>
            </nav>
          </div>
          <div className="border-t border-ink/15" />
        </div>
      </header>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="reveal lg:col-span-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-clay">
                Dar es Salaam &middot; Tanzania
              </p>
              <h1 className="mt-5 max-w-[40ch] font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                One company, many trades, and a clear note of what we will deliver.
              </h1>
              <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-ink/75 sm:text-lg">
                We are a Tanzanian limited company working across consultancy, training, tourism,
                information technology, general supply, construction, transport and property. Whatever
                the job, you get the scope in writing before we start.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream ring-1 ring-ink transition-transform hover:-translate-y-0.5"
                >
                  Start an enquiry
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-clay underline underline-offset-4 transition-colors hover:text-ink"
                >
                  See what we deliver
                </a>
              </div>
            </div>
            <div className="reveal lg:col-span-12">
              <div className="relative">
                <img
                  src={officeImageUrl}
                  width={1280}
                  height={854}
                  alt="IBGE reception area with company logo, modern desks and waiting seating"
                  className="aspect-[16/10] w-full rounded-[14px] object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="chrome-seal absolute -bottom-6 right-6 grid size-28 place-items-center rounded-full text-center sm:right-10 lg:right-14">
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ink/70">Reg.</span>
                    <span className="font-display text-2xl text-ink">TZ</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ink/70">Ltd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-[56ch]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-clay">What we deliver</p>
            <h2 className="mt-3 max-w-[48ch] font-display text-3xl leading-tight text-ink sm:text-4xl">
              Ten lines of work, and exactly what you get from each.
            </h2>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="border-t border-ink/15 pt-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-ochre/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink">{service.title}</h3>
                </div>
                <ul className="mt-3 space-y-1.5 pl-9 text-sm text-ink/75">
                  {service.items.map((item) => (
                    <li key={item} className="list-disc marker:text-clay">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-clay">Who we are</p>
              <h2 className="mt-3 max-w-[48ch] font-display text-3xl leading-tight text-ink sm:text-4xl">
                A firm built on doing the work and standing behind it.
              </h2>
              <div className="mt-6 max-w-[56ch] space-y-4 text-base leading-relaxed text-ink/75">
                <p>
                  Integrated Business and General Enterprises Tanzania Limited is incorporated under
                  the Companies Act, 2002 (CAP 212) and registered in the Tanzania. We were
                  set up to take on work across several trades rather than one, because that is how
                  business is actually done here &mdash; a client who needs a feasibility study this
                  month may need a building supervised the next.
                </p>
                <p>
                  Our directors are Gasper Mrosso, Nana Liundi and Evarist Michael. We keep the
                  client list small enough that the person who signs the papers is the person who did
                  the work, and we bring in tradesmen and specialists we have worked with before
                  rather than whoever is cheapest.
                </p>
              </div>
              <div className="mt-8 border-t border-ink/15 pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-clay">Sectors we serve</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Government &amp; public bodies &middot; Non-governmental organisations &middot;
                  Schools, colleges &amp; universities &middot; Hotels, lodges &amp; tour operators
                  &middot; Manufacturing &amp; agribusiness &middot; Retail &amp; trade &middot;
                  Health services &middot; Transport &amp; logistics &middot; Real estate
                </p>
              </div>
            </div>
            <div className="reveal lg:col-span-5">
              <div className="rounded-[14px] bg-cream p-7 ring-1 ring-black/5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-clay">Incorporation</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="text-ink/60">Incorporated under</dt>
                    <dd className="text-right text-ink">Companies Act, 2002 (CAP 212)</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="text-ink/60">Registered in</dt>
                    <dd className="text-right text-ink">Tanzania</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="text-ink/60">Liability</dt>
                    <dd className="text-right text-ink">Limited by shares</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="text-ink/60">Directors</dt>
                    <dd className="text-right text-ink">Gasper Mrosso &middot; Nana Liundi &middot; Evarist Michael</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/60">Address</dt>
                    <dd className="text-right text-ink">P.O. Box 4621, Dar es Salaam</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-[56ch]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-clay">How we work</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Four steps, and we tell you where we are at each one.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="reveal">
                <span className="font-display text-3xl text-ochre/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-clay">
                Start a conversation
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Tell us what you are trying to sort out, and we will reply.
              </h2>
              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-clay">Write to us</p>
                  <p className="mt-1 text-ink/80">
                    P.O. Box 4621, Dar es Salaam
                    <br />
                    Tanzania
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-clay">Email</p>
                  <a
                    href="mailto:info@ige.co.tz"
                    className="mt-1 block text-ink/80 underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    info@ige.co.tz
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-clay">Call</p>
                  <a
                    href="tel:+255745670202"
                    className="mt-1 block text-ink/80 underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    +255745670202
                  </a>
                </div>
              </div>
            </div>
            <div className="reveal lg:col-span-7">
              <form
                className="rounded-[14px] bg-paper p-7 ring-1 ring-black/5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-clay">
                      Your name
                    </span>
                    <input
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-[8px] border border-ink/20 bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
                      placeholder="e.g. Neema Juma"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-clay">Company</span>
                    <input
                      type="text"
                      className="mt-1.5 w-full rounded-[8px] border border-ink/20 bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
                      placeholder="e.g. Kivule Textiles Ltd"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-clay">Email</span>
                    <input
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-[8px] border border-ink/20 bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
                      placeholder="you@company.co.tz"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-clay">Phone</span>
                    <input
                      type="tel"
                      className="mt-1.5 w-full rounded-[8px] border border-ink/20 bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
                      placeholder="+255 ..."
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-clay">
                      Which service, and what do you need
                    </span>
                    <textarea
                      rows={4}
                      required
                      className="mt-1.5 w-full resize-none rounded-[8px] border border-ink/20 bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
                      placeholder="A few lines on the work and when you need it."
                    />
                  </label>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-ink/55">
                    {sent
                      ? "Thank you — your note is with us. We will be in touch."
                      : "We reply within two working days."}
                  </p>
                  <button
                    type="submit"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream ring-1 ring-ink transition-transform hover:-translate-y-0.5"
                  >
                    Send the enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream/80">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg text-cream">
                Integrated Business &amp; General Enterprises Tanzania Ltd
              </p>
              <p className="mt-1 text-xs">P.O. Box 4621, Dar es Salaam</p>
            </div>
            <p className="text-xs leading-relaxed">
              Incorporated under the Companies Act, 2002 (CAP 212).
              <br />
              Registered in the Tanzania.
            </p>
          </div>
          <div className="mt-8 border-t border-cream/15 pt-5 text-xs">
            &copy; {new Date().getFullYear()} &middot; Made in Dar es Salaam
          </div>
        </div>
      </footer>
    </div>
  );
}
