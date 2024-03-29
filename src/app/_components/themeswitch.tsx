'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="..."
            priority={false}
            title="Light/Dark"
        />
    );

    if (resolvedTheme === 'dark') {
        return <button className="text-Neutrals/neutrals-7 cursor-pointer transition hover:text-white p-5"><SunIcon className="h-6 w-6" onClick={() => setTheme('light')}/></button>
    }

    if (resolvedTheme === 'light') {
        return <button className="text-Neutrals/neutrals-10 transition hover:text-Neutrals/neutrals-12 p-5"><MoonIcon className="h-6 w-6" onClick={() => setTheme('dark')}/></button>
    }
}