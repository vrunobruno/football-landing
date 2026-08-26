import React from 'react';
import { StoreConfig } from '../types';
import { MessageCircle } from 'lucide-react';

interface AnnouncementBarProps {
  storeConfig: StoreConfig;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ storeConfig }) => {
  return (
    <div className="bg-[#111111] text-white text-[11px] font-mono tracking-wider py-2 px-4 border-b border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <span className="flex items-center gap-2 uppercase">
          <MessageCircle className="w-3 h-3 text-[#25D366]" />
          Pedidos pelo WhatsApp
        </span>
      </div>
    </div>
  );
};
