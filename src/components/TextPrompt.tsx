import './TextPrompt.css';
import React from 'react';

export type TextPromptProperties = {
    text: string,
    color: string,
    size: number,
}

export const TextPrompt: React.FC<TextPromptProperties> = (props) => {
    return (
        <p className='text-prompt' style={{
            color: props.color,
            fontSize: props.size,
        }}>
            {props.text}
        </p>
    );
};
