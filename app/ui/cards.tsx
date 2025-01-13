import Link from "next/link";

export default function Card({
                                title,
                                src
                             }: {
   title: string,
   src: string,
}) {

   return (
      <div className="flex justify-center w-full h-full m-2 border-2 border-white">
         <Link href={`/${src}`}>
            <h1>{title}</h1>
         </Link>
      </div>
   );
}