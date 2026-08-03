const Logo = ({ light = false, size = "md" }: { light?: boolean; size?: "sm" | "md" }) => {
  const wordmark = size === "sm" ? "text-lg" : "text-xl";
  const mark = size === "sm" ? "w-8 h-8 text-base" : "w-9 h-9 text-lg";

  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center rounded-[10px] bg-[#F5B700] font-black text-[#141414] ${mark}`}
      >
        K
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-black tracking-[0.04em] ${wordmark} ${light ? "text-white" : "text-[#141414]"}`}>
          KEZIAA
        </span>
        <span
          className={`text-[8px] tracking-[0.3em] uppercase font-semibold ${
            light ? "text-white/50" : "text-[#141414]/45"
          }`}
        >
          Business Group
        </span>
      </span>
    </span>
  );
};

export default Logo;
