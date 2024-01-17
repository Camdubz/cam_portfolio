"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/doseandcohome.png",
    title: "Shopify Development & IMC Campaign",
    desc: "Built Dose & Co’s website and supported the marketing & PR strategy. 10M in digital sales after 18 months with expansion into the United States. Venture capital buyout after two years.",
  },
  {
    img: "/image/thematichome.png",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/thematichome.png",
    title: "Growth Analytics Implementation",
    desc: "Orchestrated Thematic's growth marketing, ensuring channel synergy, revenue optimization, and a unified, truthful data source using GTM, Looker, GA4, and Sheets.",
  },
  {
    img: "/image/beautynjblog.png",
    title: "Large E-commerce SEO Campaign & Analytics Reporting",
    desc: "Authored 70+ articles for Beauty Ninja, elevating organic web traffic from 4k to 40k per month, achieving a 3x digital revenue in 9 months. Led SEO campaign, managed freelancers, and executed affiliate marketing (Awin, CJ) for a 6x return on ad spend.",
  },
  {
    img: "/image/SOHLHOME.png",
    title: "Innovative Health Startup Shopify and IMC",
    desc: "Key marketing consultant for SOHL (buysohl.com), shaping strategy across channels, content, and socials.",
  },
  {
    img: "/image/NZHCOBLOGS.png",
    title: "Growth Consulting - NZ Honey Giant (Paste & Publish)",
    desc: "New Zealand Honey Co. SEO and CRO campaigns achieved a 9x return collectively. I created their marketing analytics using Google Data Studio (now Looker Studio) and used segmentation to identify areas for marketing spend allocation. I discovered a profitable cohort in Dubai which was a big reason for the CRO return (6X). I also strategised an SEO campaign  which includes research, clustering/categorisation, briefing and analysis with a 4x ROI.",
  },
  {
    img: "/image/mobilityplushome.png",
    title: "Large Mobility Ecommerce Store Consulting (Paste & Publish)",
    desc: "Built https://mobilityplus.co.nz/ website and ran their SEO and SEM campaigns. 3x return on ad spend, 7x return on SEO activities.",
  },
  {
    img: "/image/A2XBlog.png",
    title: "NZ Accounting App Content Strategy (Paste & Publish)",
    desc: "Achieved 4x return on A2X SEO/Content Marketing campaign strategy by conducting keyword research on 70k keywords, clustering and briefing. I then used Trello to manage a team of writers to deliver 30 blogs per month. ",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have an app idea you want to launch or you need to boost valuable metrics with growth testing, I'm your guy. 
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
