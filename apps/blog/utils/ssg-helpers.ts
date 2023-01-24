import { appRouter } from '@experiment/api';
import superjson from 'superjson';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';

// Fix for pnpm inferred types error
// https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220
import type * as _ServerTypes from '@trpc/server';
import type * as _QueryTypes from '@tanstack/react-query'

export const getProxySSH = async (ctx: Object = {}) => {
  const helper = createProxySSGHelpers({
    router: appRouter,
    ctx,
    transformer: superjson,
  })
  return helper
}
