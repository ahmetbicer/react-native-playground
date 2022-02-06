import {LayoutChangeEvent} from 'react-native';

export interface LayoutEvent {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface TooltipProps {
  position: string;
  target: LayoutEvent;
}

export const InitialLayout = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
