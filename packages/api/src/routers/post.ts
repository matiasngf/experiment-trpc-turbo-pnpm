import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const EXAMPLE_DATA: PostType[] = [
  {
    id: '1',
    title: "Post 1",
    body: "Hello"
  },
  {
    id: '2',
    title: "Post 2",
    body: "Hello"
  },
  {
    id: '3',
    title: "Post 3",
    body: "Hello"
  },
]

const listAllValidator = z.object({
  limit: z.number().optional(),
  cursor: z.string().nullish(),
})

type ListAllInput = z.infer<typeof listAllValidator>

const listAllHandler = async ({ input, ctx }: { input: ListAllInput, ctx: any }) => {
  // Fetch data
  const items = EXAMPLE_DATA;

  return {
    items,
  };
}

export interface PostType {
  id: string;
  title: string;
  body: string;
}

export const postRouter = router({
  byId: publicProcedure
    .input(z.object({
      id: z.string().nullable(),
    }))
    .query(async ({ input }) => {
      const item = EXAMPLE_DATA.find((item) => item.id === input.id);
      if (!item) {
        throw new Error('Not found');
      }
      return item;
    }),
  list: publicProcedure
    .input(listAllValidator)
    .query(listAllHandler)
})
