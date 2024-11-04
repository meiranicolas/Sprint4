import { useEffect } from 'react';

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      onLoad?: (instance: any) => Promise<void>;
      clientVersion?: string;
    };
  }
}

const WatsonChat: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.watsonAssistantChatOptions = {
        integrationID: "819c1705-2156-4040-90a6-cb83df3ae950",
        region: "us-south",
        serviceInstanceID: "760b8a6f-1b4c-4cb8-8edc-ef2608656713",
        onLoad: async (instance) => {
          await instance.render();
        }
      };

      setTimeout(() => {
        const script = document.createElement('script');
        script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
          window.watsonAssistantChatOptions?.clientVersion || 'latest'
        }/WatsonAssistantChatEntry.js`;
        document.head.appendChild(script);
      });
    }
  }, []);

  return null;
};

export default WatsonChat;
