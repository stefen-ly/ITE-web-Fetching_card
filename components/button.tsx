type ButtonDemoProps = {
  label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonDemo({
  label = "Click Me",
  className = "",
  type = "button",
  ...props
}: ButtonDemoProps) {
  return (
    <button
      type={type}
      className={`h-12 rounded-full border border-amber-600 bg-amber-400 px-6 text-sm font-semibold text-amber-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:translate-y-0 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
