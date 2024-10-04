import { DarkMode } from "./ui/dark-mode";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="w-full flex-1">
            </div>
            <DarkMode />
            <UserButton />
        </header>
    );
};

export default Header;
