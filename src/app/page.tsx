import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <h1>/* Welcome to tankpillow.dev */</h1>
            <h2>I'm tankpillow!</h2>
            <p>
                I'm a 22 year old white dude who enjoys traveling while making video games.
            </p>
            <br/>
            
            <h1>/* Projects */</h1>
            <Link target="_blank" href="https://store.steampowered.com/app/2124110/Vortix/"><h2>Vortix</h2></Link>
            <ul>
                <li><strong>Genre:</strong> 2D Multiplayer Arcade</li>
                <li><strong>Engine:</strong> Godot</li>
                <li><strong>Team Size:</strong> 2</li>
                <li>
                    <strong>Description:</strong> <br/>
                    <p>
                        My main goal when developing Vortix was to experiment with syncing physics over a network.
                        With this task, I created a simple sumo game where players try to knock the opponent out of 
                        a shrinking circle. I was one out of two developers on this project. My main task was networking
                        and basic game design.
                    </p>
                </li>
            </ul>
 
            <Link target="_blank" href="https://www.youtube.com/watch?v=Oj1zJGCLkHA&list=PL5jLfVLLj99cg9Iwrnv1-4lhoRrW5JaCs"><h2>Mexel</h2></Link>
            <ul>
                <li><strong>Genre:</strong> 3D Multiplayer Tank Shooter</li>
                <li><strong>Engine:</strong> Custom (C++)</li>
                <li><strong>Team Size:</strong> 1</li>
                <li>
                    <strong>Description:</strong> <br/>
                    <p>
                        Mexel is a 3D multiplayer tank shooter that I developed in C++ from scratch.
                        It is currently in a engine prototype stage and is not yet playable.
                    </p>
                </li>
            </ul>


        </main>
    );
}
