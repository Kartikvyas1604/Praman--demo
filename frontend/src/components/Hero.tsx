import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-40 pb-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Live on Base, Ethereum & Solana</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white">
              Trust But Verify
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
              On The Blockchain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The standard for secure, transparent, and tamper-proof certificate issuance. Empowering institutions and individuals with verifiable credentials.
          </p>

          <div className="flex gap-4 justify-center w-full max-w-md mx-auto flex-col sm:flex-row">
            <Link href="/issue" className="btn-primary text-lg px-8 py-4 justify-center flex items-center gap-2">
              Start Issuing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href="/verify" className="btn-secondary text-lg px-8 py-4 justify-center">
              Verify Credential
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 animate-slide-up bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="p-4">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-primary-800 mb-2">100%</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium text-lg">Tamper-Proof Security</div>
          </div>
          <div className="relative p-4 md:border-l md:border-r border-slate-200 dark:border-slate-700">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-primary-800 mb-2">3+</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium text-lg">Supported Networks</div>
          </div>
          <div className="p-4">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-primary-800 mb-2">∞</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium text-lg">Permanent Storage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
