import Link from "next/link";
import TeamPage from "./team/page";
import TeamMemberPage from "./team/[slug]/page";

export default function AboutPage(){
    return(
        <div className="flex justify-center text-center items-center h-screen">
        <div className="text-amber-400">
            <h1 className="f text-7xl">
                This is about page
            </h1>

            <button className="bg-fuchsia-400 rounded-full w-40 h-10 ">
                 <Link href="/about/team" className="text-{3px}"> Meet My Team</Link>
            </button>
            
        </div>

        
       
        </div>

    )
}