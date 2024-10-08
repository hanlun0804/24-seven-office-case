import { useState } from "react";
import Button from "../atoms/Button";
import Card from "../molecules/Card";

const AdminBooking = () => {
    const [formData, setFormData] = useState({
        userId: "",
        startDate: "",
        endDate: "",
    });
    const [availableRooms, setAvailableRooms] = useState<{ number: string; id: number; category: string }[]>([]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!formData.userId || !formData.startDate || !formData.endDate) {
            alert("Vennligst fyll ut alle feltene.");
            return;
        }

        if (new Date(formData.startDate) >= new Date(formData.endDate)) {
            alert("Startdato må være før sluttdato.");
            return;
        }

        try {
            const response = await fetch("/api/booking/available-rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                }),
            });

            if (response.ok) {
                const rooms = await response.json();
                setAvailableRooms(rooms);
            } else {
                console.error("Error fetching rooms:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-9/10 mx-auto p-6 bg-white rounded-lg flex gap-4 justify-center">
            <div className="mb-4 w-52">
                <label htmlFor="Bruker ID (userId)">Bruker ID (userId)</label>
                <input
                type="number"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>

            <div className="mb-4 w-52">
                <label htmlFor="startDate">Startdato</label>
                <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>

            <div className="mb-4 w-52">
                <label htmlFor="endDate">Sluttdato</label>
                <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            
            <Button text="Søk etter rom" className="w-52"/>
            </form>

            {availableRooms.length !== undefined && (
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {availableRooms.map((room) => (
                        <Card key={room.id} userId={formData.userId} roomnumber={room.number} roomtype={room.category} startDate={formData.startDate} endDate={formData.endDate} roomId={room.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminBooking;
