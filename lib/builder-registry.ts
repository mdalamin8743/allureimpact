import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

// Register Hero Section
Builder.registerComponent(
  dynamic(() => import("@/components/sections/Hero")),
  {
    name: "Hero Section",
    inputs: [
      { name: "title", type: "string", defaultValue: "Elevating Brands" },
      { name: "subtitle", type: "string", defaultValue: "With Purpose" },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We craft extraordinary experiences that leave a lasting impression.",
      },
      { name: "buttonText", type: "string", defaultValue: "Our Services" },
      { name: "buttonLink", type: "string", defaultValue: "/services" },
    ],
  }
);

// Register Stats Section
Builder.registerComponent(
  dynamic(() => import("@/components/sections/Stats")),
  {
    name: "Stats Bar",
    inputs: [
      { name: "stat1Number", type: "string", defaultValue: "10+" },
      { name: "stat1Label", type: "string", defaultValue: "Years of Excellence" },
      { name: "stat2Number", type: "string", defaultValue: "200+" },
      { name: "stat2Label", type: "string", defaultValue: "Clients Worldwide" },
      { name: "stat3Number", type: "string", defaultValue: "98%" },
      { name: "stat3Label", type: "string", defaultValue: "Client Satisfaction" },
      { name: "stat4Number", type: "string", defaultValue: "50+" },
      { name: "stat4Label", type: "string", defaultValue: "Industry Awards" },
    ],
  }
);

// Register Services Section
Builder.registerComponent(
  dynamic(() => import("@/components/sections/Services")),
  {
    name: "Services Section",
    inputs: [
      { name: "sectionLabel", type: "string", defaultValue: "What We Do" },
      { name: "sectionTitle", type: "string", defaultValue: "Our Services" },
      {
        name: "services",
        type: "list",
        subFields: [
          { name: "number", type: "string" },
          { name: "title", type: "string" },
          { name: "description", type: "longText" },
        ],
        defaultValue: [
          { number: "01", title: "Brand Strategy", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. We craft strategies that position your brand for lasting impact." },
          { number: "02", title: "Marketing Consulting", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Data-driven insights to accelerate your business growth." },
          { number: "03", title: "Business Development", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Building meaningful partnerships and expanding your reach." },
        ],
      },
    ],
  }
);

// Register About Teaser
Builder.registerComponent(
  dynamic(() => import("@/components/sections/AboutTeaser")),
  {
    name: "About Teaser",
    inputs: [
      { name: "label", type: "string", defaultValue: "Who We Are" },
      { name: "title", type: "string", defaultValue: "Excellence Is Not" },
      { name: "titleAccent", type: "string", defaultValue: "An Option" },
      { name: "description", type: "longText" },
      { name: "buttonText", type: "string", defaultValue: "Our Story" },
      { name: "buttonLink", type: "string", defaultValue: "/about" },
      { name: "statNumber", type: "string", defaultValue: "10+" },
      { name: "statLabel", type: "string", defaultValue: "Years of Excellence" },
      {
        name: "quote",
        type: "string",
        defaultValue: "Dedicated to delivering extraordinary results for every client.",
      },
    ],
  }
);

// Register Text Block
Builder.registerComponent(
  dynamic(() => import("@/components/sections/TextBlock")),
  {
    name: "Text Block",
    inputs: [
      { name: "label", type: "string" },
      { name: "title", type: "string" },
      { name: "body", type: "richText" },
      {
        name: "alignment",
        type: "enum",
        enum: ["left", "center", "right"],
        defaultValue: "left",
      },
    ],
  }
);

// Register CTA Banner
Builder.registerComponent(
  dynamic(() => import("@/components/sections/CTABanner")),
  {
    name: "CTA Banner",
    inputs: [
      { name: "title", type: "string", defaultValue: "Ready to elevate your brand?" },
      { name: "buttonText", type: "string", defaultValue: "Get In Touch" },
      { name: "buttonLink", type: "string", defaultValue: "/contact" },
    ],
  }
);
