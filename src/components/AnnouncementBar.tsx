import React from 'react';
import { StoreConfig } from '../types';
import { Truck, MessageCircle } from 'lucide-react';

interface AnnouncementBarProps {
  storeConfig: StoreConfig;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ storeConfig }) => {
  return (
    <div className="bg-[#111111] text-white text-[11px] font-mono tracking-wider py-2 px-4 border-b border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
        <div className="flex items-center gap-2">
          <Truck className="w-3.5 h-3.5 text-white/70" />
          <span>Envio para todo o Brasil</span>
        </div>

        <div className="flex items-center gap-5 text-white/70 text-[10px] uppercase">
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>Pedidos pelo WhatsApp</span>
          </span>
        </div>
      </div>
    </div>
  );
};
