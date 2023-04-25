interface P extends InputProps {}

const Input: React.FC<P> = ({ ...props }) => {
  return (
    <input
      className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
      {...props}
    />
  );
};

export default Input;
