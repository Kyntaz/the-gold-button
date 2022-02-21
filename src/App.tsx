import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { TextPrompt, TextPromptProperties } from './components/TextPrompt';

export const App: React.FC = () => {
  const [promptProperties, setPromptProperties] = React.useState<TextPromptProperties>({
    text: 'The Gold Button',
    color: 'white',
    size: 32,
  });

  return (
    <div className='app'>
      <TextPrompt 
        text={promptProperties?.text ?? ''}
        color={promptProperties?.color ?? 'white'}
        size={promptProperties?.size ?? 24}
      />
      <Button />
    </div>
  );
}
