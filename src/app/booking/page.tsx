"use client"

import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/navigation";

export default function Booking() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
    </div>
  );
}