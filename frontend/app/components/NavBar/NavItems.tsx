import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, HTMLAttributes, ReactNode } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Button from "../ui/Button";

interface NavItemsProps extends HTMLAttributes<HTMLUListElement> {}

const NavItems: FC<NavItemsProps> = ({ className, ...props }) => {
  return (
    // <div className={cn("flex flex-1 items-center", className)} {...props}>
    <ul
      className={cn(
        "flex flex-row items-center gap-4 text-sm flex-2",
        className
      )}
      {...props}
    >
      {process.env.NEXT_PUBLIC_ENV === "local" ? (
        <>

          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/upload">UploadDoc</NavLink>
          <NavLink to="/explore">DataSet</NavLink>
         
        </>
      ) : (
        <>
          {/* <NavLink to="https://xgenplus.com">XgenPlus</NavLink>
 */}
        </>
      )}
      <div className="flex sm:flex-1 sm:justify-end flex-col items-center justify-center sm:flex-row gap-5 sm:gap-2">
        <Link href={"https://try-quivr.streamlit.app"}>
          <Button variant={"secondary"}>LogOut</Button>
        </Link>
        {/* <DarkModeToggle /> */}
      </div>
    </ul>
    // </div>
  );
};

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLink: FC<NavLinkProps> = ({ children, to }) => {
  return (
    <li className="group relative">
      <Link href={to}>{children}</Link>
      <hr className="aboslute top-full border border-transparent border-b-primary dark:border-b-white scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform" />
    </li>
  );
};

export default NavItems;
