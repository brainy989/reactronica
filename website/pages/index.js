import React, { useState } from 'react';

import { Song, Track, Instrument } from 'reactronica';

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <h1>Reactronica</h1>

      <button onClick={() => setIsPlaying(!isPlaying)}>Play</button>

      <Song isPlaying={isPlaying} swing={1} swingSubdivision={'8n'}>
        <Track
          subdivision={'16n'}
          steps={[
            {
              note: 'C3',
              duration: 0.5,
            },
            null,
            null,
            null,
            {
              note: 'D3',
              duration: 0.5,
            },
            null,
            null,
            null,
            {
              note: 'E3',
              duration: 0.5,
            },
            null,
            null,
            null,
            {
              note: 'F3',
              duration: 0.5,
            },
            null,
            null,
            null,
          ]}
          onStepPlay={(step) => {
            console.log(step);
          }}
        >
          <Instrument type={'polySynth'} notes={[]} />
        </Track>
      </Song>
    </div>
  );
};

export default HomePage;
