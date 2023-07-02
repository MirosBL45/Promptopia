import Image from 'next/image';

function Loading() {
  return (
    <div className="w-full flex-center">
      <Image
        className="object-contain"
        src="assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
      />
    </div>
  );
}

export default Loading;
