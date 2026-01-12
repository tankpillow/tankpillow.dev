import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function HomePage() 
{
    return (
        <main className="min-h-screen flex items-center justify-center p-8 relative">
            { /* Background */ }
            <ParticlesBackground />

            <div className="max-w-2xl w-full text-center">
                {/* Profile Section */}
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                        <Image
                            src="/tankpillow.jpg" 
                            alt="tankpillow" 
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">tankpillow</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Creating content and sharing my journey on YouTube
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a 
                        href="https://youtube.com/@tankpillow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                    >
                        YouTube
                    </a>
                    <a 
                        href="https://discord.gg/ppQkQnWdMp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                    >
                        Discord 
                    </a>

                    <a 
                        href="https://github.com/tankpillow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white rounded-lg transition-colors font-medium"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://ko-fi.com/tankpillow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-pink-800 hover:bg-pink-900 dark:bg-pink-700 dark:hover:bg-pink-600 text-white rounded-lg transition-colors font-medium"
                    >
                        Ko-Fi
                    </a>
                    <a 
                        href="https://modrinth.com/user/tankpillow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-800 hover:bg-green-900 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
                    >
                        Modrinth
                    </a>

                </div>

                {/* Footer */}
                <footer className="text-sm text-gray-500 dark:text-gray-600 mt-16">
                    © {new Date().getFullYear()} tankpillow
                </footer>
            </div>
        </main>
    );
}
