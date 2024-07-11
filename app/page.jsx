import UpperBar from "./components/UpperBar";
import Users from "./components/Users";
import BottomBar from "./components/BottomBar";
import MetaData from "./components/BottomBar/MetaData";
import ButtonsRight from "./components/BottomBar/ButtonsRight";

export default function Home() {
  return (
    <main className="flex flex-col p-[16px] ">
      <UpperBar />

      <Users />
      <BottomBar />
    </main>
  );
}
