import Image from "next/image";
import { Button } from "../@/components/ui/button"; // adjust the path if needed
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <UserButton/>
    </div>
  );
}
