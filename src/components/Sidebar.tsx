import Link from "next/link"; // Importing Link for navigation
import { Bell, Package, Package2, ShoppingCart, Users, LineChart, Home, Bot, Workflow, DollarSign, Settings } from "lucide-react"; // Importing icons
import { Badge } from "@/components/ui/badge"; // Importing Badge component
import { usePathname } from "next/navigation"; // Importing usePathname hook
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SiteName } from "@/lib/site";

const Sidebar = () => {
    const pathname = usePathname(); // Get the current pathname

    // Define the links array
    const links = [
        { href: "/admin", label: "Főoldal", icon: <Home className="h-4 w-4" /> },
        { href: "/admin/orders", label: "Rendelések", icon: <ShoppingCart className="h-4 w-4" />, badge: 6 },
        { href: "/admin/products", label: "Termékek", icon: <Package className="h-4 w-4" /> },
        { href: "/admin/earnings", label: "Bevétel", icon: <DollarSign className="h-4 w-4" /> },
        { href: "/admin/users", label: "Felhasználók", icon: <Users className="h-4 w-4" /> },
        { href: "/admin/ai", label: "AI", icon: <Bot className="h-4 w-4" /> },
        { href: "/admin/automation", label: "Automatizálás", icon: <Workflow className="h-4 w-4" /> },
        { href: "/admin/analytics", label: "Statisztika", icon: <LineChart className="h-4 w-4" /> },
        { href: "/admin/settings", label: "Beállítások", icon: <Settings className="h-4 w-4" /> },
    ];

    return (
        <div className="hidden border-r bg-muted/40 md:block z-50"> {/* Sidebar container */}
            <div className="flex h-full max-h-screen flex-col gap-2"> {/* Main flex container */}
                {/* Header Section */}
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" /> {/* Company Icon */}
                        <span className="">{SiteName}</span> {/* Company Name */}
                    </Link>
                    <button className="ml-auto h-8 w-8"> {/* Notifications button */}
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span> {/* Accessibility label */}
                    </button>
                </div>
                {/* Navigation Section */}
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4"> {/* Navigation links */}
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === link.href
                                    ? 'bg-muted text-primary' // Active link styles
                                    : 'text-muted-foreground hover:text-primary' // Inactive link styles
                                    }`}
                                prefetch // Prefetching for improved performance
                            >
                                {link.icon}
                                {link.label}
                                {link.badge && (
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        {link.badge}
                                    </Badge> // Conditional rendering of the badge
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* Upgrade Section */}
                <div className="mt-auto p-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">Fejlesztés PRO-ra</CardTitle>
                            <CardDescription>Oldd fel az összes funkciót, és hódítsd meg a világot.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="default">Fejlesztés</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;