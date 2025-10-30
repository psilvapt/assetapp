import React, { useState } from 'react';
import EquipmentPage from './components/EquipmentPage';

export default function App() {
  const [equipment, setEquipment] = useState(null);

  // Simulação: substituir por chamada à API do Firebase
  function handleScan() {
    setEquipment({
      description: 'Ar Condicionado - LG Dual Inverter',
      warranty: 'Até 2027',
      manualUrl: 'https://manufacturer.com/manual.pdf',
      photos: ['https://loremflickr.com/320/240/ac','https://loremflickr.com/320/240/ac2'],
      docs: [{name:'Comprovativo Garantia', url:'https://example.com/comprovativo.pdf'}],
      maintenanceHistory: [
        {date: '2024-06-01', type: 'Preventiva', info: 'Filtro limpo'},
        {date: '2024-04-01', type: 'Corretiva', info: 'Troca de capacitor'},
      ],
      maintenanceUpcoming: [
        {datePrevista: '2025-03-15', type: 'Preventiva', notificado: true},
        {datePrevista: '2026-03-15', type: 'Preventiva'}
      ],
      logs: [
        {data: '2023-12-20', acao: 'Transferido para sala 3'},
        {data: '2025-04-10', acao: 'Manutenção solicitada'}
      ]
    });
  }

  return <EquipmentPage equipment={equipment} />;
}
