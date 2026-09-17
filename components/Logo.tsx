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
        className={`text-[26px] font-extrabold tracking-tight md:text-[30px] ${
          onDark ? "text-white" : "text-brand-purple"
        }`}
      >
        ویژن
      </span>
      <span className={`mt-0.5 text-[10px] font-medium ${onDark ? "text-green-200" : "text-brand-green"}`}>
        VISION
      </span>
    </span>
  );
}
