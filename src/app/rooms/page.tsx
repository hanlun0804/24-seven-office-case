import Navbar from "@/components/organisms/Navbar";

export default function Rooms() {

  return (
    <div>
      <Navbar />
      <main className="p-12 flex flex-col gap-20">
        <div className="flex flex-row gap-12 items-center">
            <img src="/single.png" alt="Single room" className="w-2/5" />
            <div className="text-lg">
                <p className="font-semibold">
                    Single rommet lar deg nyte en fredelig natt 
                    alene til en billig penge. Pult, god 
                    belysning og lynraskt internett gjør 
                    rommet ideelt for jobbreiser.
                </p>
                <p>Rommet inkluderer:</p>
                <ul className="list-disc ml-6">
                    <li>Enkeltseng</li>
                    <li>Pult</li>
                    <li>God belysning</li>
                    <li>Internett</li> 
                    <li>Dusj</li>
                    <li>Hårføner</li>
                    <li>Håndkle</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-row gap-12 items-center">
            <img src="/double.png" alt="Double room" className="w-2/5" />
            <div className="text-lg ">
                <p className="font-semibold">
                    Dobbeltrommet er perfekt for par eller 
                    venner som ønsker å dele en god opplevelse 
                    sammen. Rommet har en dobbeltseng, 
                    skrivebord og en koselig sofa.
                </p>
                <p>Rommet inkluderer:</p>
                <ul className="list-disc ml-6">
                    <li>Dobbeltseng</li>
                    <li>Skrivebord</li>
                    <li>Sofa</li>
                    <li>Internett</li> 
                    <li>Badekar</li>
                    <li>Hårføner</li>
                    <li>Håndkle</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-row gap-12 items-center">
            <img src="/suite.png" alt="Suite" className="w-2/5" />
            <div className="text-lg">
                <p className="font-semibold">
                    Suiterommet er for deg som ønsker det 
                    lille ekstra. Her får du en dobbeltseng, 
                    sofa, skrivebord og en liten balkong. 
                    Perfekt for en romantisk helg.
                </p>
                <p>Rommet inkluderer:</p>
                <ul className="list-disc ml-6">
                    <li>Dobbeltseng</li>
                    <li>Skrivebord</li>
                    <li>Sofa</li>
                    <li>Balkong</li>
                    <li>Internett</li> 
                    <li>Boblebad</li>
                    <li>Hårføner</li>
                    <li>Håndkle</li>
                </ul>
            </div>
        </div>
      </main>
    </div>
  );
}