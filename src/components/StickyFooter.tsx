export function StickyFooter() {
  return (
    <div className="sticky bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center z-0">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#ff5941]">
        <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul>
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Docs</li>
            <li className="hover:underline cursor-pointer">Comps</li>
          </ul>
          <ul>
            <li className="hover:underline cursor-pointer">Github</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">X (Twitter)</li>
          </ul>
        </div>
        <h2 className="absolute bottom-0 right-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#ff5941] font-hug-regular">
          השובך
        </h2>
      </div>
    </div>
  );
}
