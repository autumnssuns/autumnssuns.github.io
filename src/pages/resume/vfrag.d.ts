declare module 'vfrag' {
  export function paginateAll(options: { sections: string; aspectRatio: number; running: boolean }): Promise<void>;
}