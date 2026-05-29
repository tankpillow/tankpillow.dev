"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProfilePicture() {
    // null = idle, "flash" = showing flashbang, "white" = full white screen, "fade" = fading out
    const [stage, setStage] = useState<null | "flash" | "white" | "fade">(null);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        return () => timers.current.forEach(clearTimeout);
    }, []);

    function detonate() {
        if (stage !== null) return;

        const audio = new Audio("/flashbang.mp3");

        setStage("flash");
        // Show the flashbang briefly, then blow out to white (and play the sound).
        timers.current.push(
            setTimeout(() => {
                setStage("white");
                audio.play().catch(() => {});
            }, 500),
        );
        // Hold white for 3 seconds, then begin the slow fade.
        timers.current.push(setTimeout(() => setStage("fade"), 3500));
        // After the fade finishes, remove the overlay entirely.
        timers.current.push(setTimeout(() => setStage(null), 6500));
    }

    return (
        <>
            <button
                type="button"
                onClick={detonate}
                aria-label="tankpillow profile picture"
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden block cursor-pointer"
            >
                <Image
                    src="/tankpillow.jpg"
                    alt="tankpillow"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                />
            </button>

            {stage !== null && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none ${
                        stage === "flash" ? "bg-black" : ""
                    }`}
                >
                    {stage === "flash" && (
                        <Image
                            src="/flashbang.webp"
                            alt=""
                            width={512}
                            height={384}
                            className="max-w-[80vw] max-h-[80vh] object-contain"
                            priority
                        />
                    )}
                    {stage !== "flash" && (
                        <div
                            className={`absolute inset-0 bg-white transition-opacity ease-in-out ${
                                stage === "fade"
                                    ? "opacity-0 duration-[3000ms]"
                                    : "opacity-100 duration-0"
                            }`}
                        />
                    )}
                </div>
            )}
        </>
    );
}
