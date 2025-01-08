export default function Ticker() {
  return (
    <div className="bg-white text-black">
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee text-lg font-medium px-4">
          <div className="inline-block">
            <p className="inline-block mr-8">
              School holiday alert: Winter break starts on December 22nd!
            </p>
            <p className="inline-block mr-8">
              Attention staff: New training materials have been uploaded to the
              portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
