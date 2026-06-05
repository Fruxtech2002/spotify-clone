const Loading = () => {
  return (
    <div className="flex justify-center mt-50 backdrop-blur-sm gap-3">
      <div className="w-3.5 h-3.5 rounded-full bg-[#1DB954] animate-wave [animation-delay:0s]" />
      <div className="w-3.5 h-3.5 rounded-full bg-[#1DB954] animate-wave [animation-delay:0.15s]" />
      <div className="w-3.5 h-3.5 rounded-full bg-[#1DB954] animate-wave [animation-delay:0.30s]" />
      <div className="w-3.5 h-3.5 rounded-full bg-[#1DB954] animate-wave [animation-delay:0.45s]" />
      <p className="text-amber-100">Please wait.</p>
    </div>
  );
};

export default Loading;