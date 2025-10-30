import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import EquipmentPage from './components/EquipmentPage';
import AuthPage from './components/AuthPage';

export default function App() {
  const [user, setUser] = useState(null);
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return () => unsub();
  }, []);

  if(!user) return <AuthPage onAuth={() => {}} />;

  return (
    <div>
      <div className="w-full flex justify-end p-2"><button onClick={() => signOut(auth)}>Logout</button></div>
      <EquipmentPage equipment={equipment} />
    </div>
  );
}
