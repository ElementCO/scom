declare module "@lucky-canvas/react" {
  export const LuckyWheel: import("react").FC<{
    onEnd: (perze: any) => void;
    width: string;
    ref: any;
    height: string;
    blocks: any;
    prizes: any;
    buttons: any;
  }> & {
    play: () => void;
    stop: (index: number) => void;
  };
}
