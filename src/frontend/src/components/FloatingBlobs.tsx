export function FloatingBlobs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary pink blob — top left */}
      <div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.12] animate-blob-move"
        style={{
          background:
            "radial-gradient(circle, #FF4D8D 0%, #FF4D8D44 50%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "9s",
        }}
      />

      {/* Violet blob — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.10] animate-blob-move-reverse"
        style={{
          background:
            "radial-gradient(circle, #7A5CFF 0%, #7A5CFF44 50%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "11s",
        }}
      />

      {/* Pink blob — bottom right */}
      <div
        className="absolute -bottom-64 -right-64 w-[700px] h-[700px] rounded-full opacity-[0.08] animate-blob-move"
        style={{
          background:
            "radial-gradient(circle, #FF4D8D 0%, #7A5CFF44 50%, transparent 70%)",
          filter: "blur(100px)",
          animationDuration: "13s",
          animationDelay: "2s",
        }}
      />

      {/* Violet blob — bottom left */}
      <div
        className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07] animate-blob-move-reverse"
        style={{
          background:
            "radial-gradient(circle, #7A5CFF 0%, #FF4D8D33 50%, transparent 70%)",
          filter: "blur(90px)",
          animationDuration: "15s",
          animationDelay: "1s",
        }}
      />

      {/* Center accent blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #FF4D8D 0%, #7A5CFF 50%, transparent 70%)",
          filter: "blur(100px)",
          animationDuration: "7s",
        }}
      />
    </div>
  );
}
