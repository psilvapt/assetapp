import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function AuthPage({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onAuth();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onAuth();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <form onSubmit={handleSubmit} className="max-w-xs w-full bg-white shadow p-6 rounded gap-2 flex flex-col">
        <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="p-2 border rounded" />
        <input type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="p-2 border rounded" />
        <button className="bg-blue-600 text-white py-2 rounded mt-2">
          {isRegister ? 'Registar' : 'Login'}
        </button>
        <button type="button" onClick={handleGoogle} className="bg-red-500 text-white py-2 rounded mt-2">Entrar com Google</button>
        <button type="button" className="underline mt-2 text-xs" onClick={() => setIsRegister(s => !s)}>
          {isRegister ? 'Já tenho conta' : 'Criar nova conta'}
        </button>
        {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
      </form>
    </div>
  );
}
