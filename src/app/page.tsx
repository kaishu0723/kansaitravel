import List from "./components/list";
import Menbers from "./components/menbers";
import Comment from "./components/comment";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl text-center p-4">関西</h1>
      <h2 className="text-4xl text-center p-4">2025/5/14~16</h2>
      <section className="flex flex-wrap justify-center gap-4">
        <Comment />
        <Menbers />
      </section>
      <List />
    </div>
  );
}
