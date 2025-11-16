import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
};

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={twMerge("w-full px-dm-20 max-w-[1128px] mx-auto", className)} {...props}>
      {children}
    </div>
  )
}

export default Container;
