import { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import Dashboard from "../components/dashboard";

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dark:bg-zinc-900   ">
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activePage="Home"
            />
            <Dashboard userName="Erica" />
        </div>
    );
}
