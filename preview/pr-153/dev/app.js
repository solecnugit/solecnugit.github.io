const {
  useState,
  useEffect
} = React;

// --- Icons Component Wrapper ---
const Icon = ({
  name,
  size = 24,
  className = ""
}) => {
  useEffect(() => {
    lucide.createIcons();
  }, [name]);
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    width: size,
    height: size,
    className: className
  });
};

// --- Navigation ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Features",
    href: "#features"
  }, {
    name: "Getting Started",
    href: "#start"
  }, {
    name: "Benchmarks",
    href: "#benchmarks"
  }, {
    name: "Coverage",
    href: "#coverage"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "fixed w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-primary tracking-tighter flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "binary",
    size: 24
  }), "Dr.avx")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-10 flex items-baseline space-x-8"
  }, navLinks.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.name,
    href: link.href,
    className: "hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
  }, link.name)), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/solecnugit/Dr.avx",
    target: "_blank",
    className: "bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full flex items-center gap-2 transition-all"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "GitHub")))), /*#__PURE__*/React.createElement("div", {
    className: "-mr-2 flex md:hidden"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsOpen(!isOpen),
    className: "text-gray-300 hover:text-white p-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isOpen ? "x" : "menu"
  }))))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden bg-surface border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3"
  }, navLinks.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.name,
    href: link.href,
    onClick: () => setIsOpen(false),
    className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  }, link.name)))));
};

// --- Hero Section ---
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center"
}, /*#__PURE__*/React.createElement("div", {
  className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-8 border border-green-500/20"
}, /*#__PURE__*/React.createElement("span", {
  className: "relative flex h-2 w-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
}), /*#__PURE__*/React.createElement("span", {
  className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
})), "Built on DynamoRIO 10.0.0"), /*#__PURE__*/React.createElement("h1", {
  className: "text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
}, "Seamless AVX-512 Execution ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400"
}, "on Unsupported Hardware")), /*#__PURE__*/React.createElement("p", {
  className: "mt-4 max-w-3xl text-xl text-gray-400 mb-10"
}, "Dr.avx addresses Generational ISA Fragmentation (GIF). It enables seamless execution of unmodified AVX-512 binaries on hardware that lacks native support, ensuring compatibility across diverse x86-64 generations via dynamic binary translation."), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col sm:flex-row gap-4"
}, /*#__PURE__*/React.createElement("a", {
  href: "#start",
  className: "px-8 py-4 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-all flex items-center justify-center gap-2"
}, "Get Started", /*#__PURE__*/React.createElement(Icon, {
  name: "terminal",
  size: 20
})), /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx",
  target: "_blank",
  className: "px-8 py-4 rounded-lg bg-surface hover:bg-slate-700 text-white font-bold border border-white/10 transition-all flex items-center justify-center gap-2"
}, "View Source", /*#__PURE__*/React.createElement(Icon, {
  name: "github",
  size: 20
}))));

// --- Feature Grid ---
const Features = () => {
  const features = [{
    title: "Transparent Execution",
    desc: "Run binaries compiled for AVX-512 on hardware that lacks native support. No recompilation or source code modification required.",
    icon: "ghost"
  }, {
    title: "Dynamic Rewriting",
    desc: "Translates AVX-512 instructions at runtime into semantically equivalent sequences of supported instructions.",
    icon: "cpu"
  }, {
    title: "Effective Performance",
    desc: "Achieves effective performance on real-world workloads like xz compression and LLaMa.cpp",
    icon: "zap"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "py-20 bg-surface/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-2"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400"
  }, f.desc))))));
};

// --- Getting Started Section ---
const GettingStarted = () => {
  const prereqs = `sudo apt-get update && \\
sudo apt-get install -y build-essential cmake git \\
    libunwind-dev libsnappy-dev liblz4-dev libxxhash-dev`;
  const buildRelease = `git clone https://github.com/solecnugit/Dr.avx.git
cd dravx
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j"$(nproc)"`;
  const buildDebug = `cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON \\
    -DCMAKE_BUILD_TYPE=Debug -DDEBUG=ON -DDR_FAST_IR=ON
cmake --build build -j"$(nproc)"`;
  const runCmd = `./build/bin64/dravx -- <program> [args...]
# Example:
# ./build/bin64/dravx -- ./unittests/vadd-512`;
  const [activeTab, setActiveTab] = useState('release');
  const [copied, setCopied] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };
  const CodeBlock = ({
    code,
    id,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    className: "bg-surface rounded-xl border border-white/10 overflow-hidden mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-black/30 px-4 py-3 border-b border-white/10 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-gray-400 uppercase"
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleCopy(code, id),
    className: "text-xs text-primary hover:text-white transition-colors"
  }, copied === id ? "Copied!" : "Copy")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 overflow-x-auto"
  }, /*#__PURE__*/React.createElement("pre", {
    className: "font-mono text-sm text-gray-300 leading-relaxed"
  }, code)));
  return /*#__PURE__*/React.createElement("section", {
    id: "start",
    className: "py-24 max-w-5xl mx-auto px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-white mb-4 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    className: "text-primary"
  }), "Getting Started"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg"
  }, "Build Dr.avx from source. Supports Linux (Ubuntu 20.04+ tested) on x86-64.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-4"
  }, "1. Install Dependencies"), /*#__PURE__*/React.createElement(CodeBlock, {
    code: prereqs,
    id: "prereq",
    label: "Ubuntu/Debian"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white"
  }, "2. Build"), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-surface rounded-lg p-1 border border-white/10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('release'),
    className: `px-4 py-1 rounded-md text-sm font-medium transition-all ${activeTab === 'release' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`
  }, "Release"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('debug'),
    className: `px-4 py-1 rounded-md text-sm font-medium transition-all ${activeTab === 'debug' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`
  }, "Debug"))), activeTab === 'release' ? /*#__PURE__*/React.createElement(CodeBlock, {
    code: buildRelease,
    id: "release",
    label: "For maximum performance"
  }) : /*#__PURE__*/React.createElement(CodeBlock, {
    code: buildDebug,
    id: "debug",
    label: "For analysis & IR emission"
  }), activeTab === 'debug' && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-yellow-500/80 mt-2 mb-4"
  }, "* Debug mode emits rewritten instruction sequences but is significantly slower (3-5x).")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-4"
  }, "3. Run"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mb-4"
  }, "Use Dr.avx as a prefix launcher for your target binary."), /*#__PURE__*/React.createElement(CodeBlock, {
    code: runCmd,
    id: "run",
    label: "Execution"
  }))));
};

// --- Custom Bar Chart Component (Matches Python Logic) ---
const DbBenchmarkChart = ({
  title,
  data
}) => {
  // data format: { label, native, sde, dravx }
  // We render Normalized TPS (Val / Native)

  const BarGroup = ({
    item
  }) => {
    const normSde = item.sde / item.native;
    const normDravx = item.dravx / item.native;

    // Scaling Configuration:
    // Move baseline to 92% height (was 80%) to reduce top whitespace.
    // 1.0 (Native) = 92% of container height.
    const baselinePct = 92;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center flex-1 min-w-[100px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative h-64 w-full bg-surface/30 rounded-lg border border-white/5 flex items-end justify-center gap-2 p-2 overflow-visible group hover:bg-surface/50 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-full border-t-2 border-dashed border-chartNative opacity-60",
      style: {
        bottom: `${baselinePct}%`
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "w-12 bg-chartDravx rounded-t transition-all hover:brightness-110 relative group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
      style: {
        height: `${normDravx * baselinePct}%`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white whitespace-nowrap"
    }, (normDravx * 100).toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
      className: "w-12 bg-chartSde rounded-t transition-all hover:brightness-110 relative group-hover:shadow-[0_0_15px_rgba(148,163,184,0.4)]",
      style: {
        height: `${normSde * baselinePct}%`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white whitespace-nowrap"
    }, (normSde * 100).toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-sm text-gray-300 font-medium text-center uppercase tracking-wider"
    }, item.label));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-darker p-6 rounded-2xl border border-white/10 w-full"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-1 text-center"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest"
  }, "Higher is better \u2191"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between gap-4 items-end"
  }, data.map((item, idx) => /*#__PURE__*/React.createElement(BarGroup, {
    key: idx,
    item: item
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center gap-6 mt-8 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-chartDravx"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-300"
  }, "Dr.avx")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 rounded-full bg-chartSde"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-300"
  }, "Intel SDE")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-4 border-t-2 border-dashed border-chartNative"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-300"
  }, "Native Baseline (1.0)"))));
};

// --- Benchmarks Section ---
const Benchmarks = () => {
  // Data from your python script
  const mysqlData = [{
    label: 'Read Only',
    native: 25481.69,
    sde: 9842.47,
    dravx: 22381.88
  }, {
    label: 'Read Write',
    native: 16656.76,
    sde: 5917.24,
    dravx: 13673.91
  }, {
    label: 'Write Only',
    native: 42491.29,
    sde: 15644.63,
    dravx: 31855.86
  }];
  const mongoData = [{
    label: 'Read Only',
    native: 58169.45,
    sde: 22876.51,
    dravx: 54214.05
  }, {
    label: 'Read Update',
    native: 61509.96,
    sde: 22791.04,
    dravx: 60699.41
  }, {
    label: 'Read Insert',
    native: 59994.35,
    sde: 23126.59,
    dravx: 51816.04
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "benchmarks",
    className: "py-24 bg-surface/30 border-y border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-white mb-8 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bar-chart-2",
    className: "text-primary"
  }), "Performance Benchmarks"), /*#__PURE__*/React.createElement("div", {
    className: "mb-16"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4"
  }, "Database Workloads (TPS)"), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement(DbBenchmarkChart, {
    title: "MySQL (16 threads, 1800s)",
    data: mysqlData
  }), /*#__PURE__*/React.createElement(DbBenchmarkChart, {
    title: "MongoDB (16 threads, 1800s)",
    data: mongoData
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 mt-4 text-center"
  }, "Performance normalized to Native Hardware (100%).")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4"
  }, "Application Workloads"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface p-8 rounded-2xl border border-white/10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-6 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-archive",
    size: 20,
    className: "text-yellow-500"
  }), "xz Compression (Time)"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-medium"
  }, "Dr.avx"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-400"
  }, "106.64 s")), /*#__PURE__*/React.createElement("div", {
    className: "h-4 bg-black/50 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-chartDravx w-[92%]"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "Intel SDE"), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "115.91 s")), /*#__PURE__*/React.createElement("div", {
    className: "h-4 bg-black/50 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-chartSde w-full"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 pt-4 border-t border-white/5"
  }, "Lower is better. Dr.avx is faster than Intel SDE."))), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface p-8 rounded-2xl border border-white/10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-6 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bot",
    size: 20,
    className: "text-purple-500"
  }), "LLaMa.cpp (Tokens/s)"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 text-sm border-b border-white/10 pb-2 text-gray-500"
  }, /*#__PURE__*/React.createElement("div", null, "Backend"), /*#__PURE__*/React.createElement("div", null, "Tokens/s"), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, "Diff")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white"
  }, "Native"), /*#__PURE__*/React.createElement("div", {
    className: "text-chartNative"
  }, "25.11"), /*#__PURE__*/React.createElement("div", {
    className: "text-right text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded"
  }, "Baseline")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white"
  }, "Dr.avx"), /*#__PURE__*/React.createElement("div", {
    className: "text-chartDravx"
  }, "24.92"), /*#__PURE__*/React.createElement("div", {
    className: "text-right text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
  }, "~99%")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-gray-400"
  }, "Intel SDE"), /*#__PURE__*/React.createElement("div", {
    className: "text-chartSde"
  }, "9.78"), /*#__PURE__*/React.createElement("div", {
    className: "text-right text-xs bg-slate-500/20 text-slate-400 px-2 py-1 rounded"
  }, "~39%")))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 p-6 bg-gradient-to-r from-surface to-dark border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-bold text-white mb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-bar-chart",
    size: 20,
    className: "text-primary"
  }), "Benchmarks Guide"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm"
  }, "Detailed methodologies, scripts, and configurations of benchmark suites are available in our bench branch.")), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/solecnugit/Dr.avx/tree/bench/docs",
    target: "_blank",
    className: "px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap group"
  }, "View Benchmark Docs", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    className: "group-hover:translate-x-1 transition-transform"
  })))));
};

// --- Coverage & Contributing Section ---
const Coverage = () => /*#__PURE__*/React.createElement("section", {
  id: "coverage",
  className: "py-24 max-w-4xl mx-auto px-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-2 gap-12"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-white mb-6"
}, "Coverage"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-400 mb-6"
}, "Dr.avx currently supports ", /*#__PURE__*/React.createElement("strong", null, "159+"), " AVX-512 instructions, covering a wide range of integer and floating-point operations, including mask register manipulations."), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap gap-2 mb-8"
}, ['VPADDD', 'VMOVDQA64', 'KADDB', 'VPERMI2Q', 'VPMULLQ', 'VPRORQ'].map(inst => /*#__PURE__*/React.createElement("span", {
  key: inst,
  className: "px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-gray-300"
}, inst)), /*#__PURE__*/React.createElement("span", {
  className: "px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-gray-500"
}, "...and more")), /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx/blob/main/docs/coverage.md",
  target: "_blank",
  className: "text-primary hover:text-white text-sm font-bold flex items-center gap-2"
}, "View Full Coverage List ", /*#__PURE__*/React.createElement(Icon, {
  name: "external-link",
  size: 14
})), /*#__PURE__*/React.createElement("div", {
  className: "mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
}, /*#__PURE__*/React.createElement("h4", {
  className: "text-blue-400 font-bold mb-2 flex items-center gap-2"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "test-tube-2",
  size: 18
}), "Unit Tests"), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-gray-400 mb-3"
}, "To ensure correctness across supported instructions, we provide a partial suite of unit tests. These tests validate instruction behavior against native execution."), /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx/tree/main/unittests",
  target: "_blank",
  className: "text-xs font-mono text-white bg-surface border border-white/10 px-3 py-2 rounded hover:bg-surface/80 transition-colors inline-flex items-center gap-2"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "folder",
  size: 12
}), "/unittests"))), /*#__PURE__*/React.createElement("div", {
  className: "bg-gradient-to-br from-surface to-dark border border-white/10 p-8 rounded-2xl"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-bold text-white mb-4"
}, "Extending Dr.avx"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-400 text-sm mb-6"
}, "The project features a modular architecture allowing easy addition of new instruction rewrites. Our ", /*#__PURE__*/React.createElement("code", null, "guide.md"), " provides step-by-step instructions for implementation, register spilling, and TLS state management."), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3 text-sm text-gray-300 font-mono bg-black/30 p-4 rounded-lg border border-white/5"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-blue-400"
}, "1."), " ", /*#__PURE__*/React.createElement("span", null, "Identify Opcode (", /*#__PURE__*/React.createElement("code", null, "opcode_api.h"), ")")), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-blue-400"
}, "2."), " ", /*#__PURE__*/React.createElement("span", null, "Register Rewrite Function")), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-blue-400"
}, "3."), " ", /*#__PURE__*/React.createElement("span", null, "Implement Instruction Logic"))), /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx/blob/main/docs/guide.md",
  target: "_blank",
  className: "mt-6 inline-flex w-full items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg text-white text-sm font-bold transition-colors"
}, "Read Developer Guide"))));

// --- Footer ---
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "bg-darker py-12 border-t border-white/5"
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
}, /*#__PURE__*/React.createElement("div", {
  className: "mb-4 md:mb-0"
}, "\xA9 2025 Dr.avx Project. Licensed under BSD 3-Clause."), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-6"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx",
  className: "hover:text-white flex items-center gap-2"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "github",
  size: 16
}), " GitHub"), /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/solecnugit/Dr.avx/issues",
  className: "hover:text-white"
}, "Report Issue"))));

// --- Main App Component ---
const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-dark text-slate-300 font-sans selection:bg-primary/30 selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(GettingStarted, null), /*#__PURE__*/React.createElement(Benchmarks, null), /*#__PURE__*/React.createElement(Coverage, null)), /*#__PURE__*/React.createElement(Footer, null));
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
