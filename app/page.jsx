import UpperBar from "./components/UpperBar";
import Users from "./components/Users";
import BottomBar from "./components/BottomBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UpperBar />
      <Users />
      <BottomBar />
    </main>
  );
}
