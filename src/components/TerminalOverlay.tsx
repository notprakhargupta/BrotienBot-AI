const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="relative bg-black/70 backdrop-blur-md border border-indigo-500/50 rounded-lg p-3 overflow-hidden font-mono shadow-lg shadow-indigo-500/20">
        {/* Holographic effect top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600"></div>
        
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-indigo-500/30 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <p className="text-xs text-cyan-400 tracking-wider">NEURAL LINK ACTIVE</p>
          </div>
          <p className="text-xs text-indigo-300 font-light">SECURE-ID::78412.93</p>
        </div>
  
        <p className="text-sm text-white mb-3 tracking-wide">
          <span className="text-cyan-400">&gt;</span> FITNESS PLAN GENERATED
        </p>
  
        <div className="space-y-2 text-xs">
          <div className="flex items-center group">
            <div className="text-cyan-400 mr-2 font-bold">[01]</div>
            <span className="text-indigo-100 group-hover:text-cyan-300 transition-colors">30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center group">
            <div className="text-cyan-400 mr-2 font-bold">[02]</div>
            <span className="text-indigo-100 group-hover:text-cyan-300 transition-colors">20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center group">
            <div className="text-cyan-400 mr-2 font-bold">[03]</div>
            <span className="text-indigo-100 group-hover:text-cyan-300 transition-colors">10 min flexibility (recovery)</span>
          </div>
        </div>

        {/* Scanning effect line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400/70 animate-pulse"></div>
      </div>
    </div>
  );
};
export default TerminalOverlay;