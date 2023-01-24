import { publicProcedure, router } from '../trpc';
import { postRouter } from './post';

const createAppRouter = () => {
  const appRouter = router({
    healthcheck: publicProcedure.query(() => 'yay!'),
    post: postRouter,
  });
  return appRouter;
}

export const appRouter = createAppRouter();

export type AppRouter = ReturnType<typeof createAppRouter>;
