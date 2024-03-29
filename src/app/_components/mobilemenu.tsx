import React from "react";
import NavLink from "./navlink";

interface Link {
    href: string;
    title: string;
}

interface MobileMenuProps {
    links: Link[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MobileMenu;