type CardWrapperProps = {
  children: React.ReactNode;
};
export default function CardWrapper({ children }: CardWrapperProps) {
  return <div className="p-4 bg-primary rounded-md w-full min-h-[150px]">{children}</div>;
}
