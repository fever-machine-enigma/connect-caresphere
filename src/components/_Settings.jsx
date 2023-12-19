import { Switch } from '@headlessui/react'
import { useState } from 'react';

export default function _Settings() {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);


  return (
    <main className="p-2 flex flex-col justify-between gap-3">
      <header className="flex flex-col gap-3">
        <h1 className="font-Inter font-bold text-5xl">Settings</h1>
        <hr className="w-1/2 border-1 border-gray-500" />
      </header>
      <ul className="flex flex-col gap-10 list-disc p-4">
        <li className="flex gap-2 items-center">
          <h1 className="font-Inter text-xl">Dark Mode</h1>
          <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-bgDark' : 'bg-bgDark/30'}
          relative inline-flex h-[34px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-bgLight shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </li>

        <li className="flex gap-2 items-center">
          <h1 className="font-Inter text-xl">24h time</h1>
          <Switch
        checked={enabled2}
        onChange={setEnabled2}
        className={`${enabled2 ? 'bg-bgDark' : 'bg-bgDark/30'}
          relative inline-flex h-[34px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled2 ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-bgLight shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </li>
        
      </ul>
      
      
    </main>
  );
}
