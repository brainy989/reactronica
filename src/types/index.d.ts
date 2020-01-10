declare module 'reactronica' {
  import * as React from 'react';

  export type SongProps = {
    isPlaying?: boolean;
    bpm?: number;
    swing?: number;
    subdivision?: string;
    volume?: number;
    isMuted?: boolean;
    children: React.ReactNode;
  };

  export type TrackProps = {
    isPlaying?: boolean;
    steps?: any[];
    volume?: number;
    pan?: number;
    subdivision?: string;
    effects?: React.ReactNode[];
    children: React.ReactNode;
    onStepPlay?: Function;
  };

  export type InstrumentType =
    | 'amSynth'
    | 'duoSynth'
    | 'fmSynth'
    | 'membraneSynth'
    | 'metalSynth'
    | 'pluckSynth'
    | 'synth';

  export type InstrumentProps = {
    type?: InstrumentType;
    options?: any;
    notes?: any[];
    polyphony?: number;
    oscillatorType?: 'triangle' | 'sine' | 'square';
    envelopeAttack?: number;
    envelopeDecay?: number;
    envelopeSustain?: number;
    envelopeRelease?: number;
    samples?: {
      [k: string]: string;
    };
    volume?: number;
    pan?: number;
    effectsChain?: React.ReactNode[];
    onInstrumentUpdate?: Function;
  };

  export type EffectProps = {
    type?: string;
    id?: string;
    delayTime?: string;
    feedback?: number;
    onAddToEffectsChain?: Function;
    onRemoveFromEffectsChain?: Function;
  };

  // WIP, not exported yet
  type config = {
    instruments: {
      id: InstrumentType;
      name: string;
    }[];
    effects: {
      id: string;
      name: string;
    }[];
  };

  const Song: React.FunctionComponent<SongProps>;
  const Track: React.FunctionComponent<TrackProps>;
  const Instrument: React.FunctionComponent<InstrumentProps>;
  const Effect: React.FunctionComponent<EffectProps>;

  export { Song, Track, Instrument, Effect };
}
