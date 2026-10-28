import fs from "fs";
import path from "path";
import Image from "next/image";

interface GameLinks
{
    title? : string;
    steamLink? : string;
    itchLink? : string;
    iosLink? : string;
    androidLink? : string;
}

interface Game extends GameLinks
{
    title : string;
    image : string;
}

// Keyed by the cover's filename in public/games (without .png)
const gameLinks : Record<string, GameLinks> = {
    vortix: {
        title: "Vortix",
        steamLink: "https://store.steampowered.com/app/2124110/Vortix/"
    }
}

const stores = [
    { key: "steamLink", text: "Steam" },
    { key: "itchLink", text: "itch.io" },
    { key: "iosLink", text: "iOS" },
    { key: "androidLink", text: "Android" }
] as const;

// Runs at build time, so any .png dropped into public/games shows up as a game
function getGames() : Game[]
{
    const gamesDir = path.join(process.cwd(), "public", "games");

    return fs.readdirSync(gamesDir)
        .filter((file) => file.toLowerCase().endsWith(".png"))
        .sort()
        .map((file) => {
            const name = path.parse(file).name;
            return {
                title: name.charAt(0).toUpperCase() + name.slice(1),
                ...gameLinks[name],
                image: `/games/${file}`
            };
        });
}

export default function MyGames()
{
    const games = getGames();

    return(
        <div className="mb-8">
            <h2 className="text-3xl font-bold mt-8 mb-6">My Games</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {games.map((game) => {
                    const links = stores.filter((store) => game[store.key]);
                    const mainLink = links.length > 0 ? game[links[0].key] : undefined;

                    return(
                        <div key={game.image} className="w-40 flex flex-col items-center">
                            <a
                                href={mainLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                            >
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    sizes="160px"
                                    className="object-cover"
                                />
                            </a>
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {links.map((store) => (
                                    <a
                                        key={store.key}
                                        href={game[store.key]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-sm bg-zinc-700 hover:bg-zinc-800 text-white rounded-md transition-colors font-medium"
                                    >
                                        {store.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
