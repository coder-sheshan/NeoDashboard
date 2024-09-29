import React, {  useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import Header from "../Layouts/Header";
import LandingPage from "../Layouts/Main";

export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(false);

    const [isProfileMenu, setIsProfileMenu] = useState(false);





   
  return (
    <div className="neo-container dark:bg-zinc-900">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} setIsProfileMenu={setIsProfileMenu} isProfileMenu={isProfileMenu}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setIsProfileMenu={setIsProfileMenu} isProfileMenu={isProfileMenu}/>
      <LandingPage />
    </div>
  );
}
