import { z, defineCollection } from "astro:content";

const cardsGlobalLinksCollection = defineCollection({
    type: "data",
    schema: z.object({
        link: z.string(),
        iconName: z.string(),
        label: z.string(),
        order: z.number(),
    }),
});

const staffCollection = defineCollection({
    type: "data",
    schema: z.object({
        image: z.string(),
        name: z.string(),
        title: z.string(),
        company: z.string(),
        links: z.array(
            z.object({
                label: z.string(),
                link: z.string(),
                iconName: z.string(),
                order: z.number(),
            })
        ),
    }),
});

export const collections = {
    cardsGlobalLinks: cardsGlobalLinksCollection,
    staff: staffCollection,
};
