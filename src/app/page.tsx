import Image from "next/image";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { allBlogs } from "contentlayer/generated";
import FeaturedPost from "../components/Home/FeaturedPost";

export default function Home() {
  console.log(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs as unknown as any} />
      <FeaturedPost  blogs={allBlogs as unknown as any} />
    </main>
  );
}
