declare module "@lucky-canvas/react" {
  export const LuckyWheel: import("react").FC<{
    onEnd: (res: any) => void;
    width: string;
  }> & {
    play: () => void;
    stop: (index: number) => void;
  };
}
