import Link from "next/link"
import Image from "next/image"
import favicon from "@/img/favicon.ico"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const NavBar = () => {
  return (
    <div className="flex justify-between bg-primary text-white py-2 px-5">
        <Link href="/">
            <Image src={favicon} alt="Abresh" width={40}/>
        </Link>

        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>

                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/auth">Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default NavBar