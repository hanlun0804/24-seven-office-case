"use client"

import Navbar from "@/components/organisms/Navbar";
import AdminBookingComp from "@/components/organisms/AdminBooking";
import { useRouter } from "next/navigation";

export default function AdminBooking() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <AdminBookingComp />
    </div>
  );
}