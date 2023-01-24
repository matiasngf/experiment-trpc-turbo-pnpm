import { Button } from "@experiment/ui";
import { getProxySSH } from "@/utils/ssg-helpers";
import { trpc } from "@/utils/trpc";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage(props: PageProps) {
  const { id } = props;

  const postResponse = trpc.post.byId.useQuery({
    id,
  });

  if (!postResponse.data) {
    return <div>Loading...</div>;
  }

  const post = postResponse.data;

  return (
    <div className="container py-6">
      <div className="flex items-center space-x-4 border-b border-b-slate-200 pb-4">
        <div>
          <Link href="/">
            <Button variant="secondaryOutline">
              <span>👈</span>
            </Button>
          </Link>
        </div>
        <h2 className="text-3xl">{post.title}</h2>
      </div>
      <div className="pt-4">
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const ssg = await getProxySSH();
  const id = context.params?.id as string;
  await ssg.post.byId.prefetch({ id });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ssg = await getProxySSH();
  const posts = await ssg.post.list.fetch({ limit: 10 });
  const ids = posts.items.map((post) => post.id);
  return {
    paths: ids.map((id) => ({ params: { id: id.toString() } })),
    fallback: true,
  };
};
