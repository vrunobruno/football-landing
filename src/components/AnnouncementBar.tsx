import React from 'react';
import { StoreConfig } from '../types';
import { Truck, QrCode, ShieldCheck } from 'lucide-react';

interface AnnouncementBarProps {
  storeConfig: StoreConfig;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ storeConfig }) => {
  return (
    <div className="bg-[#111111] text-white text-[11px] font-mono tracking-wider py-2 px-4 border-b border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between text-center">
        <div className="flex items-center gap-2">
          <Truck className="w-3.5 h-3.5 text-white/70 hidden sm:inline" />
          <span>{storeConfig.announcementText}</span>
        </div>

        <div className="hidden md:flex items-center gap-5 text-white/70 text-[10px] uppercase">
          <span className="flex items-center gap-1">
            <QrCode className="w-3 h-3 text-white" />
            <span>Pix Imediato</span>
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-white" />
            <span>Envio Seguro</span>
          </span>
        </div>
      </div>
    </div>
  );
};
