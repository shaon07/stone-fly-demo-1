type TriangleShapedCardProps = {
  children: React.ReactNode;
};

export default function TriangleShapedCard({
  children,
}: TriangleShapedCardProps) {
  return (
    <div className="relative w-full mx-auto bg-white shadow-lg">
      {/* Left triangle */}
      <div
        className="absolute left-0 top-0 h-full w-[15%] bg-primary"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      ></div>

      {/* Right triangle */}
      <div
        className="absolute right-0 top-0 h-full w-[15%] bg-primary"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      ></div>

      {/* Main content area */}
      <div className="relative z-10 p-6 mx-[15%]">{children}</div>
    </div>
  );
}
