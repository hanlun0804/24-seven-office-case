import { FC, useState } from "react"

type CardProps = {
    userId: string
    className?: string
    roomtype: string
    roomnumber: string
    startDate: string
    endDate: string
    roomId: number
}

const Card: FC<CardProps> = ({ userId, className, roomtype, roomnumber, startDate, endDate, roomId }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };

    const handleApproveClick = async () => {
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId, 
                    roomId: roomId, 
                    startDate: startDate,
                    endDate: endDate,
                }),
            });
    
            if (response.ok) {
                const result = await response.json();
                alert("Rommet ble booket");
            } else {
                console.error("En feil skjedde:", response.statusText);
                alert("Det oppstod en feil i rombookingen. Vennligst prøv igjen.");
            }
        } catch (error) {
            console.error("En feil skjedde:", error);
            alert("Det oppstod en feil i rombookingen. Vennligst prøv igjen.");
        }
    };

    return (
        <div
            className={`relative p-4 bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300`}
            onClick={handleCardClick}
        >
            <img src={`/${roomtype}.png`} alt={roomtype} className={`w-64 h-64 object-cover rounded-lg ${isClicked ? "blur-sm" : ""}`} />
            <p className="text-xl font-bold">Romtype: {roomtype}</p>
            <p className="text-lg">Romnummer: {roomnumber}</p>

            {isClicked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 p-4 rounded-lg">
                    <p className="mb-4 text-xl font-bold">Vil du booke dette rommet til bruker {userId}?</p>
                    <div className="flex gap-2">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handleApproveClick}
                        >
                            Ja
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={() => {}}
                        >
                            Nei
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card 