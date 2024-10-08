"use client"

import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Button text="Book rom" onClick={() => router.push("/dashboard/adminBooking")} className="m-auto w-48" />
    </div>
  );
}