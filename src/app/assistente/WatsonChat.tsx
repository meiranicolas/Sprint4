import React, { useEffect } from 'react';

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      clientVersion?: string;
      onLoad?: (instance: any) => Promise<void>;
    };
  }
}

const WatsonChat: React.FC = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "7f3b8352-3fdb-483a-a020-1c3565bbaf4a",
      region: "us-south",
      serviceInstanceID: "ed9a0c7d-cdca-4d41-923b-a111408237fb",
      onLoad: async (instance: any) => {
        await instance.render();
      },
    };

    const script = document.createElement('script');
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default WatsonChat;
