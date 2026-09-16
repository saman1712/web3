/** Placeholder wordmark. Replace /public/logo.svg with the official ویژن lockup. */
export function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const onDark = variant === "dark";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`relative grid h-11 w-11 place-items-center rounded-full shadow-sm ${
          onDark ? "bg-white text-brand-purple" : "bg-brand-purple text-white"
        }`}
      >
        <span className="font-extrabold text-lg leading-none">V</span>
        <span className="absolute -bottom-0.5 -left-0.5 h-3.5 w-3.5 rounded-full bg-brand-green ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[22px] font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-brand-purple"
          }`}
        >
          ویژن
        </span>
        <span className={`mt-1 text-[10px] font-medium ${onDark ? "text-green-200" : "text-brand-green"}`}>
          پیتزا ویژن
        </span>
      </span>
    </span>
  );
}
