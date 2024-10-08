"use client"

import { FC, useState } from 'react';
import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';

const Signup: FC = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Skriv inn både e-post og passord');
            return;
        }
        
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, action: "register" }),
            });
      
            const data = await response.json();
      
            if (!response.ok) {
                setError(data.message || 'Noe gikk galt.');
            } else {
                localStorage.setItem('isLoggedIn', 'true');
                router.push("/dashboard")
            }
        } catch (error) {
            setError('Noe gikk galt, prøv igjen.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-6">Registrer</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email">
                        E-post
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">
                        Passord
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
        
                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        
                <Button className="w-full" text="Registrer bruker" />
            </form>
        </div>
    );
};

export default Signup;
