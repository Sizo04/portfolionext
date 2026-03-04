export default function HeroBackground() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: "75%",
          height: "100%",
          background:
            "radial-gradient(ellipse 65% 70% at 45% 45%, rgba(112,0,255,0.13) 0%, rgba(80,0,200,0.07) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "45%",
          height: "60%",
          background:
            "radial-gradient(ellipse 70% 60% at 40% 40%, rgba(130,0,255,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "40%",
          height: "80%",
          background:
            "radial-gradient(ellipse 60% 70% at 55% 45%, rgba(100,0,220,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(150,60,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 42% 45%, black 20%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 42% 45%, black 20%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 35%, #111111 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "25%",
          background: "linear-gradient(to bottom, transparent, #111111)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
