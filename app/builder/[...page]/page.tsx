"use client";

import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import "@/lib/builder-registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderContent {
  id: string;
  [key: string]: unknown;
}

export default function BuilderPage({ params }: { params: { page: string[] } }) {
  const [content, setContent] = useState<BuilderContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlPath = "/" + params.page.join("/");
    builder
      .get("page", {
        userAttributes: { urlPath },
      })
      .toPromise()
      .then((data) => {
        setContent(data as BuilderContent | null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.page]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#080808" }}
      >
        <div
          className="text-sm tracking-[0.3em] uppercase font-light"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#080808" }}
      >
        <p
          className="text-sm tracking-[0.3em] uppercase font-light"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Page Not Found
        </p>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}
