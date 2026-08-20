import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={
 metadataBase:new URL("https://already-tried.hook-impalas-0b.chatgpt.site"),
 title:"AlreadyTried — Stop repeating what didn't work",
 description:"Keep a private record of what you tried, what happened, and share the full picture in seconds.",
 openGraph:{title:"AlreadyTried",description:"Stop repeating what didn't work.",images:["/og.png"]},
 twitter:{card:"summary_large_image",title:"AlreadyTried",description:"Stop repeating what didn't work.",images:["/og.png"]},
 icons:{icon:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
