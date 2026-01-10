'use server';
import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
    const query = new URLSearchParams();
    const search = formData.get('searchInput')?.toString();
    if (search) {
        query.set('q', search);
        redirect(`/search?${query.toString()}`);
    }
}
