import Link from "next/link";

export default function Logo({
  src,
  width,
  height,
  text,
  className,
  link_to,
}: {
  src: string;
  width: string;
  height: string;
  text: string;
  className: string;
  link_to: string;
}) {
  return (
    <Link href={link_to + ""}>
      <div className={className + " " + `flex items-center justify-center`}>
        {" "}
        <img
          alt="toddo:implement alt property before its too late"
          className={`${height} ${width} text-blue-500`}
          src={src}
        />{" "}
        {text === "" ? null : (
          <h1 className="text-white text-3xl font-bold ml-4 ">{text}</h1>
        )}
      </div>
    </Link>
  );
}
