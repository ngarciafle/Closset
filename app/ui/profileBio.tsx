'use client';

import { useState, useTransition } from "react";
import { updateBio } from "@/app/actions/updateBio";
import { cn } from "@/app/lib/utils";

export function BioEditor({ initialBio }: { initialBio: string }) {
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState(initialBio || "");
    const [isPending, startTransition] = useTransition();

    const handleCancel = () => {
        setBio(initialBio || "");
        setIsEditing(false);
    };

    const handleSave = () => {
        startTransition(async () => {
            await updateBio(bio);
            setIsEditing(false);
            setBio(bio);
        });
    };

    if (isEditing) {
        return (
            <div className="flex flex-col gap-2 mt-2">
                <textarea
                    className={cn("w-full p-2 border rounded text-black", isPending && "opacity-50")}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    disabled={isPending}
                    rows={3}
                />
                <div className="flex gap-2">
                    <button 
                        onClick={handleSave} 
                        disabled={isPending}
                        className="bg-black text-white px-3 py-1 rounded text-sm"
                    >
                        {isPending ? "Guardando..." : "Save"}
                    </button>
                    <button 
                        onClick={handleCancel} 
                        disabled={isPending}
                        className="text-gray-500 text-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-2 group">
            <p className="text-gray-700">{bio || "Empty biography..."}</p>
            <button 
                onClick={() => setIsEditing(true)} 
                className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                Edit Bio
            </button>
        </div>
    );
}