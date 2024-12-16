"use client";

import { CodeBlock, dracula } from "react-code-blocks";


export default function CreatingVoxelEnginePage()
{
    const cmakeScript0 = `# CMakeLists.txt
cmake_minimum_required(VERSION 3.25)
project(Orlin)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

include(FetchContent)
FetchContent_Declare(
    raylib
    GIT_REPOSITORY "https://github.com/raysan5/raylib.git"
    GIT_TAG "5.5"
)

FetchContent_MakeAvailable(raylib)

file(GLOB_RECURSE SOURCES src/*.cpp)

add_executable(Orlin \${SOURCES})

target_include_directories(Orlin PRIVATE include)
target_link_libraries(Orlin raylib)`;

    const windowsSetup = `:: setup.bat
@echo off

:: Check if the user has CMake installed
cmake --version
if %errorlevel% neq 0 (
    echo "CMake is not installed. Please install CMake and try again."
    exit /b 1
)

:: Check if the user has MinGW installed
g++ --version
if %errorlevel% neq 0 (
    echo "MinGW is not installed. Please install MinGW and try again."
    exit /b 1
)

:: Check if the user has Git installed
git --version
if %errorlevel% neq 0 (
    echo "Git is not installed. Please install Git and try again."
    exit /b 1
)

:: Set the path to the MinGW compiler
cmake . -G "MinGW Makefiles" -DCMAKE_CXX_COMPILER=g++ -DCMAKE_C_COMPILER=gcc`;

const mainTestCpp = `// main.cpp
#include <iostream>
#include <raylib.h>

int main(int argc, char* argv[])
{
    // onStart
    //--------------------------------------------------------------------------------------
    InitWindow(800, 600, "Voxel Engine");
    SetTargetFPS(60);

    while(!WindowShouldClose()) {
        // onUpdate
        //--------------------------------------------------------------------------------------

        // onRender
        //--------------------------------------------------------------------------------------
        BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawFPS(10, 10);
        EndDrawing();
    } 

    // onExit
    //--------------------------------------------------------------------------------------
    CloseWindow();
    return 0;
}
`;

    return (
        <main>
            <h1>/* Creating a Voxel Engine */</h1>
            <h2>// Introduction</h2>
            <p>
                This article will be my journey in creating a voxel engine from scratch.
            </p>

            <h2>// Project Setup</h2>
            <p>
                For this project I will be using CMake, C++, and RayLib. I will be using RayLib for the graphics and input handling.
                Below is the CMake script I used to setup my project.
                <br/>
                <br/>
                <CodeBlock text={cmakeScript0} showLineNumbers={true} language="cmake" theme={dracula}/>

                <br/>

                To make sure that the project is setup correctly for windows I created this script.
                <CodeBlock text={windowsSetup} showLineNumbers={true} language="batch" theme={dracula}/>

                <br/>

                This script will check if CMake, MinGW, and Git are installed on the system. If they are not installed it will exit with an error code.
                If they are installed it will set the path to the MinGW compiler. 

                Finally, I created a main.cpp file to ensure that the project is setup correctly.
                <CodeBlock text={mainTestCpp} showLineNumbers={true} language="cpp" theme={dracula}/>
            </p>
            <h2>// Conclusion</h2>
            <p>
                This page is a work in progress. I will be updating it as I make progress on the project.
                Make sure to check back later for updates!
            </p>
        </main>
    )
}