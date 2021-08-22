import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon, } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItems from "./HeaderItems";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title='HOME' Icon={HomeIcon}/>
                <HeaderItems title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItems title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItems title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItems title='SEARCH' Icon={SearchIcon}/>
                <HeaderItems title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image 
               className="object-contain"
               src="https://res.cloudinary.com/dhoisx1hg/image/upload/v1629650215/diablo-removebg-preview_kn0nch.png"
               width={200} 
               height={100}/>
        </header>
    );
}

export default Header;

