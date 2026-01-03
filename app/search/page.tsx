'use client';

import { useSearchParams } from "next/navigation";  

export default function SearchPage() {
    const params = useSearchParams();
    const query = params.get('q');
    return (
        <main className="pt-12 pl-24">
            <p className="text-7xl text-white">{query}</p>
        </main>
    )
}