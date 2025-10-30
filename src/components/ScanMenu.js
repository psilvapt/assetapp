import React from 'react';
import { FiCamera, FiSend, FiFileText } from 'react-icons/fi';

export default function ScanMenu({ onScan }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <button className="bg-blue-500 rounded-full p-4 text-white shadow-lg flex flex-col items-center" aria-label="Scan QR/NFC" onClick={onScan}>
        <FiCamera size={32} />
        <span className="text-xs mt-2">Scan QR / NFC</span>
      </button>
    </div>
  );
}
