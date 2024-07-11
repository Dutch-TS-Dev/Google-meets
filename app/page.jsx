import UpperBar from "./components/UpperBar";
import Users from "./components/Users";
import BottomBar from "./components/BottomBar";

export default function Home() {
  return (
    <main className="flex flex-col p-[16px] ">
      <UpperBar />
      <Users />
      <BottomBar />
    </main>
  );
}
