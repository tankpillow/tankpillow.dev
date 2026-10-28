import ParticlesBackground from "@/app/_components/ParticlesBackground";
import ProfilePicture from "@/app/_components/ProfilePicture";
import SocialLinks from "./_components/SocialLinks";
import MyGames from "./_components/MyGames";

export default function HomePage() 
{
    return (
        <main className="min-h-screen flex items-center justify-center p-8 relative">
            { /* Background */ }
            <ParticlesBackground />

            <div className="max-w-2xl w-full text-center">
                {/* Profile Section */}
                <div className="mb-8">
                    <ProfilePicture />
                    <h1 className="text-5xl font-bold mb-4">tankpillow</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        Creating games and documenting my journey on YouTube
                    </p>
                </div>

                {/* Social Links */}
                <SocialLinks />
                <hr/>
                {/* Games */}
                {/* <MyGames /> */}
                {/* Footer */}
                <footer className="text-sm text-gray-500 dark:text-gray-600 mt-16">
                    © {new Date().getFullYear()} tankpillow
                </footer>
            </div>
        </main>
    );
}
