import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const IconButton = ({ children, disabled, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-secondary-600 flex justify-center items-center rounded-lg w-dm-40 h-dm-40",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-85",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )

}

export default IconButton;
