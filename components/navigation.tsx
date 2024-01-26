// Navigation.jsx
"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Navigation = () => {
    const router = useRouter();

    useEffect(() => {
        // Perform the navigation when the component mounts
        router.push('/login');
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <></>
    );
}

export default Navigation;
