import Image from "next/image";
import HomeLayout from "@/components/Layout/HomeLayout";
import Home from "@/components/HomeModule/Home";

export default function Index() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
