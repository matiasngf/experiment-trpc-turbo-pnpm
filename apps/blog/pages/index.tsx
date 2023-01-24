import Link from "next/link";
import { trpc } from "@/utils/trpc";
import { getProxySSH } from "@/utils/ssg-helpers";

export default function IndexPage() {
  const posts = trpc.post.list.useQuery({
    limit: 10,
  });

  if (!posts.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container py-7 space-y-3">
      {posts.data.items.map(({ id, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>
            <div className="p-4 border-md border border-slate-200 hover:bg-slate-50 transition-all">
              <h2>{title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const ssg = await getProxySSH();
  await ssg.post.list.prefetch({ limit: 10 });
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
}
