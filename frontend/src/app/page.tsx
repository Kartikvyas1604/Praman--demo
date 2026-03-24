import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent opacity-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Praman</span>
              <span className="px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800">Beta</span>
            </Link>
            <div className="flex gap-8 items-center">
              <Link href="/verify" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Verify
              </Link>
              <Link href="/issue" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Issue
              </Link>
              <Link href="/dashboard" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Dashboard
              </Link>
              <Link href="/issue" className="btn-primary py-2 px-4 text-sm shadow-none">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600 dark:bg-primary-900 select-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to secure your credentials?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join forward-thinking institutions worldwide in issuing tamper-proof, verifiable certificates on the blockchain.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/issue"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200"
            >
              Issue Certificate Now
            </Link>
        </div>
      </div>
    </section>

    {/* Footer */}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Praman</h3>
              <p className="text-gray-400">
                Secure, transparent, and decentralized certificate verification.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/verify" className="hover:text-white">Verify</Link></li>
                <li><Link href="/issue" className="hover:text-white">Issue</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Blockchain</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ethereum</li>
                <li>Base</li>
                <li>Solana</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Praman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
