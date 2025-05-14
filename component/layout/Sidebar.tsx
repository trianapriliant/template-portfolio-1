    "use client"
    import { FaGithub, FaFigma } from "react-icons/fa";
    import { TbButterfly } from "react-icons/tb";
    import Link from "next/link";
    import { usePathname } from "next/navigation";

    const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
    ];

    export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 h-screen w-[60px] bg-primary text-white hidden md:flex flex-col items-center justify-between py-6 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">T</div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 mt-10">
            {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center justify-center h-10 group"
            >
                {pathname === item.href && (
                <span className="absolute left-0 h-full w-[6px] bg-cyan-400"></span>
                )}
                <span className="text-sm text-gray-300 transform -rotate-90 group-hover:text-white transition">
                {item.label}
                </span>
            </Link>
            ))}
        </nav>

        {/* Icons at the bottom */}
        <div className="flex flex-col gap-4 items-center text-gray-400 text-xl">
            <TbButterfly />
            <FaFigma />
            <FaGithub />
        </div>
        </aside>
    );
    }
