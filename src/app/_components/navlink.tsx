import Link from "next/link"

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 rounded md:p-0 transition text-Neutrals/neutrals-10 hover:text-Neutrals/neutrals-12 dark:text-Neutrals/neutrals-5 dark:hover:text-white"
        >
            {title}
        </Link>
    )
}

export default NavLink;