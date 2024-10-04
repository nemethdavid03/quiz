"use client";

import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs"; // Clerk hooks
import { insertUserOnSignIn } from "./add.user.on.signin";

const UserInsertHandler = () => {
    const { isLoaded, isSignedIn } = useAuth(); // Clerk authentication status
    const { user } = useUser(); // Clerk user object

    useEffect(() => {
        const handleUserInsertion = async () => {
            if (isLoaded && isSignedIn && user) {
                try {
                    const clerkId = user.id;
                    const email = user.primaryEmailAddress?.emailAddress || "";
                    const name = `${user.firstName || ""} ${user.lastName || ""}`;
                    const role = "USER"; // Default role (could be dynamic based on logic)

                    // Call the insertUser function
                    await insertUserOnSignIn(clerkId, email, name, role);
                } catch (error) {

                }
            }
        };

        handleUserInsertion(); // Insert user on component mount if logged in
    }, [isLoaded, isSignedIn, user]);

    return null; // This component renders nothing, it only runs logic
};

export default UserInsertHandler;