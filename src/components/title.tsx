import React from "react";

interface TitleProps {
    userName: string;
}

const Title: React.FC<TitleProps> = ({ userName }) => {
    return (
        <div className="text-lg font-semibold dark:text-white">
            <h2 className="mb-6">Good Afternoon, {userName}</h2>
        </div>
    );
};

export default Title;
