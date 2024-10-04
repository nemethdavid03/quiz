import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { getUserByClerkId } from "@/lib/helpers/check.role";
import { Role } from "@prisma/client";

const useCheckAccess = (allowedRoles: Role[]) => {
    const router = useRouter();
    const { isSignedIn, user, isLoaded } = useUser();
    const [hasAccess, setHasAccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState<Role | null>(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (!isLoaded) return;

            if (isSignedIn) {
                const clerkId = user?.id;

                try {
                    const dbUser = await getUserByClerkId(clerkId);
                    if (!dbUser) {
                        setLoading(false);
                        return; // Handle user not found case
                    }

                    const userHasAccess = allowedRoles.includes(dbUser.role as Role);
                    setHasAccess(userHasAccess);
                    setUserRole(dbUser.role as Role);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                // If the user is not signed in, they are still allowed to view the page
                setHasAccess(true);
            }
            setLoading(false);
        };

        fetchUserRole();
    }, [isSignedIn, isLoaded, router, user, allowedRoles]);

    return { hasAccess, loading, userRole };
};

export default useCheckAccess;
