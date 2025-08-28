import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const cars = defineCollection({
  name: "Cars",
  directory: "docs/cars",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImageWhite: z.string(),
    coverImageBlack: z.string(),
    otherImages: z.array(z.string()),
    price: z.object({
      inRwf: z.string(),
      inUsd: z.string(),
    }),
    category: z.string().optional(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    return {
      ...document,
      slug: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
  onSuccess: (docs) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log(`generated content with ${docs.length} showcase items`);
  },
});

export default defineConfig({
  collections: [cars],
});
