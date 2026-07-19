import Link from 'next/link';
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiBox,
  FiGrid,
} from 'react-icons/fi';

const topics = [
  {
    href: '/docs/fpga/learning-fpgas',
    icon: FiCpu,
    title: 'Getting Started with FPGAs',
    description: 'Introduction to Field-Programmable Gate Arrays. Learn what FPGAs are, why they matter, and write your first Verilog module.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    href: '/docs/fpga/finite-state-machines',
    icon: FiGitBranch,
    title: 'Finite State Machines',
    description: 'Master the backbone of FPGA design. Understand Moore vs Mealy machines with practical Verilog examples.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FiCode,
    title: 'Verilog Basics',
    description: 'Core Verilog syntax and constructs for hardware description. Modules, wires, registers, and combinational logic.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: FiLayers,
    title: 'VHDL Fundamentals',
    description: 'Introduction to VHDL for hardware design. Entities, architectures, processes, and concurrent signal assignment.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: FiBox,
    title: 'Hardware Design Patterns',
    description: 'Reusable patterns for FPGA design. Pipelines, state machines, handshaking, and clock domain crossing.',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    icon: FiGrid,
    title: 'Digital Logic Fundamentals',
    description: 'Combinational and sequential logic, truth tables, Karnaugh maps, and Boolean algebra — the foundations.',
    color: 'from-rose-500 to-pink-600',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Never Stop{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Learning
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          Notes on hardware design, FPGAs, and digital logic. Documenting what
          I learn along the way.
        </p>
        <Link
          href="/docs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          <FiBookOpen />
          Browse Notes
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const cardContent = (
              <>
                <div
                  className={`absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${topic.color} opacity-20 blur-2xl transition group-hover:opacity-30`}
                />
                <topic.icon className="mb-4 h-8 w-8 text-gray-400" />
                <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {topic.description}
                </p>
                {topic.href && (
                  <span className="mt-4 inline-block text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                    Read notes →
                  </span>
                )}
              </>
            );

            if (topic.href) {
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={topic.title}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 opacity-60"
              >
                {cardContent}
                <span className="mt-4 inline-block text-xs font-medium text-gray-600">
                  Coming soon
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-600">
        Never Stop Learning — Built with Fumadocs + Next.js
      </footer>
    </main>
  );
}
