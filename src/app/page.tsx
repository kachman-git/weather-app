export default function Home() {
  return (
    <>
      <main className="h-screen relative ">
        <video
          src="/pexels_videos_4083 (1080p).mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full -z-20 object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </main>
    </>
  );
}
