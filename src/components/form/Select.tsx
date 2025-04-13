interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value?: string; // New prop for controlled value
  defaultValue?: string; // Keep for uncontrolled usage
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  value, // Use value if provided
  defaultValue = "",
}) => {
  // Use value if provided, otherwise fall back to defaultValue (for uncontrolled cases)
  const controlledValue = value !== undefined ? value : defaultValue;

  return (
    <select
      className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
        controlledValue
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
      } ${className}`}
      value={controlledValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option
        value=""
        disabled
        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
      >
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={`text-gray-700 dark:bg-gray-900 dark:text-gray-400 ${
            option.value === "__add_vendor__"
              ? "text-green-500 font-semibold"
              : ""
          }`}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;