import Navbar from "@/components/organisms/Navbar";

export default function Home() {

  return (
    <div className="w-full">
      <Navbar />

      <main className="p-12 mt-20 flex items-center justify-center flex-col"> 
        <h1 className="text-5xl font-bold text-center">Hallo, og velkommen til 24SevenLiving!</h1>
        <h2 className="text-2xl my-4 text-center">Hos oss får du et komfortabelt og luksuriøst opphold mens du får opplevd de flotte stedene Norge har å by på!</h2>
        <div className="flex flex-col gap-4 lg:flex-row sm:justify-between *:w-64 *:mx-4">
          <img src="/single.png" alt="Single room" className="hover:scale-105" />
          <img src="/double.png" alt="Double room" className="hover:scale-105" />
          <img src="/suite.png" alt="Suite" className="hover:scale-105" />
        </div>
      </main>
    </div>
  );
}
