"use client";

import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import "@/lib/builder-registry";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import AboutTeaser from "@/components/sections/AboutTeaser";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderContent {
  id: string;
  [key: string]: unknown;
}

export default function Home() {
  const [builderContent, setBuilderContent] = useState<BuilderContent | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Only try Builder.io if the API key is configured
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY || process.env.NEXT_PUBLIC_BUILDER_API_KEY === "YOUR_KEY_HERE") {
      setChecked(true);
      return;
    }

    builder
      .get("page", {
        userAttributes: { urlPath: "/" },
      })
      .toPromise()
      .then((data) => {
        setBuilderContent(data as BuilderContent | null);
        setChecked(true);
      })
      .catch(() => {
        setChecked(true);
      });
  }, []);

  // Show nothing briefly while checking for Builder content
  if (!checked) {
    return null;
  }

  // If Builder.io has content for the homepage, use it
  if (builderContent) {
    return <BuilderComponent model="page" content={builderContent} />;
  }

  // Otherwise fall back to static sections
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <AboutTeaser />
    </>
  );
}
