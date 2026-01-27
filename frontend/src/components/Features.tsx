export function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Tamper-Proof',
      description: 'Certificates stored on blockchain are immutable and cannot be altered or forged.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30'
    },
    {
      icon: '⚡',
      title: 'Instant Verification',
      description: 'Verify certificates in seconds using QR codes or certificate IDs.',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30'
    },
    {
      icon: '🌐',
      title: 'Multi-Chain Support',
      description: 'Deploy on Ethereum, Base, or Solana based on your needs.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30'
    },
    {
      icon: '🔍',
      title: 'Transparent',
      description: 'All certificate transactions are publicly verifiable on the blockchain.',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30'
    },
    {
      icon: '💾',
      title: 'Permanent Storage',
      description: 'Certificates are stored permanently on the blockchain, accessible anytime.',
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30'
    },
    {
      icon: '🚀',
      title: 'Easy Integration',
      description: 'Simple APIs and tools for institutions to integrate certificate issuance.',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Features</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">Why Choose Praman?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built with cutting-edge blockchain technology to ensure security, transparency, and
            efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group hover:shadow-2xl transition-all duration-300 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
