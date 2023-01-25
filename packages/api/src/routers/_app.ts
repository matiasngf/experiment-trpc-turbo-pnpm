import { publicProcedure, router } from '../trpc';
import { postRouter } from './post';

const routes = {
  healthcheck: publicProcedure.query(() => 'yay!'),
  post: postRouter,
}

export const appRouter = router(routes);

export type AppRouter = typeof appRouter;
export type Routes = keyof typeof routes;
