import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex min-h-screen min-w-[320px] flex-col items-center justify-center bg-gray-800 px-4 text-center text-white">
      <div className="flex gap-4 lg:gap-16">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-indigo-500 hover:text-indigo-600"
        >
          <img src="/vite.svg" className="h-16 lg:h-24" alt="Vite logo" />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-indigo-500 hover:text-indigo-600"
        >
          <img
            src={reactLogo}
            className="h-16 animate-[spin_20s_infinite_linear] lg:h-24"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-8 text-xl font-medium lg:text-3xl">
        Vite + React + Tailwind CSS + ESLint + Prettier
      </h1>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-8 py-3 font-medium transition hover:border-indigo-600 focus:outline-4"
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="my-4 text-gray-400">Click on the Vite and React logos to learn more.</p>
      <p className="text-gray-400">
        created by
        <a
          href="https://github.com/rayatn1011"
          target="_blank"
          rel="noreferrer"
          className="ml-4 text-indigo-500 underline"
        >
          rayatn1011
        </a>
      </p>
    </div>
  );
}

export default App;
