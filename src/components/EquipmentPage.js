import React, { useState } from 'react';
import ScanMenu from './ScanMenu';

export default function EquipmentPage({ equipment }) {
  const [scanned, setScanned] = useState(false);

  if (!equipment) {
    return <ScanMenu onScan={() => setScanned(true)} />;
  }

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-xl font-bold my-2">Equipamento Encontrado</h1>
      <div className="bg-gray-50 rounded-lg shadow p-4 mb-4">
        <div className="mb-2">
          <span className="font-semibold">Descrição:</span> {equipment.description}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Garantia:</span> {equipment.warranty}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Manual:</span> <a className="text-blue-600 underline" href={equipment.manualUrl} target="_blank">Abrir manual</a>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Fotos:</span> {equipment.photos?.map((url, i) => <img key={i} src={url} className="inline mr-2 h-16 rounded-md" alt="foto do equipamento" />)}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Documentos anexos:</span> {equipment.docs?.map((doc, i) => <a key={i} href={doc.url} className="text-blue-400 underline ml-2" target="_blank">{doc.name}</a> )}
        </div>
      </div>
      <h2 className="text-lg font-semibold mt-6 mb-2">Histórico de Manutenção</h2>
      <ul className="mb-4 bg-white rounded-lg p-2 shadow">
        {equipment.maintenanceHistory?.map((m, i) => (
          <li key={i} className="border-b py-1 text-sm last:border-b-0">
            {m.date}: {m.type} | {m.info}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-4 mb-2">Manutenções Ativas/Previsões</h2>
      <ul className="mb-4 bg-white rounded-lg p-2 shadow">
        {equipment.maintenanceUpcoming?.map((m, i) => (
          <li key={i} className="border-b py-1 text-sm last:border-b-0">
            {m.datePrevista}: {m.type}
            {m.notificado ? (<span className="ml-2 text-green-600 text-xs">Notificado</span>) : null }
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-4 mb-2">Logs de Movimentação</h2>
      <ul className="mb-4 bg-white rounded-lg p-2 shadow">
        {equipment.logs?.map((log, i) => (
          <li key={i} className="border-b py-1 text-sm last:border-b-0">
            {log.data}: {log.acao}
          </li>
        ))}
      </ul>
    </div>
  );
}
