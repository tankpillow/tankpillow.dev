import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "./components/Navbar";

export const metadata : Metadata = {
  title: "tankpillow.dev",
  description: "The website for the YouTube channel tankpillow",
};

interface RootLayoutProps 
{
    children: React.ReactNode;
}

export default function RootLayout(props : RootLayoutProps) 
{
    const context = null;
    
    return (
        <html lang="en">
            <body>
                <header>
                    <hr/>
                    <NavbarComponent />
                    <hr/>
                </header>   
                {props.children}
            </body>
        </html>
    );
}

