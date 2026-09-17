/** Typographic ویژن wordmark. */
export function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const onDark = variant === "dark";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`text-[20px] font-extrabold tracking-tight sm:text-[26px] md:text-[30px] ${
          onDark ? "text-white" : "text-brand-purple"
        }`}
      >
        ویژن
      </span>
      <span className={`mt-0.5 text-[8px] font-medium sm:text-[10px] ${onDark ? "text-green-200" : "text-brand-green"}`}>
        VISION
      </span>
    </span>
  );
}
