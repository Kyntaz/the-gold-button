import "./GoldenButton.css";
import React from "react";

type GoldenButtonProps = {
    onClick: () => void;
};

export const GoldenButton: React.FC<GoldenButtonProps> = (props) => {
    return (
        <button className="the-button" onClick={props.onClick}>
            Launch!
        </button>
    );
};
