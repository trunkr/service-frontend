/// <reference types="react-scripts" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.json' {
  const src: string;
  export default src;
}

interface Window {
  Kakao: {
    isInitialized: () => boolean;
    init: (key?: string) => void;
    Auth: {
      authorize: (data: { redirectUri: string; scope: string; nonce: string }) => void;
    };
  };
}
