// export const GradientLight = () => {
//   return (
//     <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
//     // <div className="bg-red-500 absolute top-0 left-0 w-32 h-32"/>
//   );
// };
export const GradientLight = () => {
  return (
    <div
      className="absolute top-0 left-1/4 w-full aspect-square pointer-events-none"
      style={{
        background: "radial-gradient(closest-side, rgba(40, 32, 108, 0.6), transparent 80%)",
      }}
    />
  );
};