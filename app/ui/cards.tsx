import Link from "next/link";
import Image from "next/image";

export default function Card({
                                title,
                                src
                             }: {
   title: string,
   src: string,
}) {

   return (
      <div className="rounded-xl shadow-2xl flex overflow-hidden  mb-5 mx-2 max-w-[300px] md:w-1/2">
         <Link href={`/${src}`}>
               <Image
                  src="https://placehold.co/300x300/png"
                  alt="image"
                  height={300}
                  width={300}
               />
            <div className="p-4">
               <h2 className="text-xl ">{title}</h2>
               <p className="text-sm text-gray-400 ">
                  This is the link for {title} page testing testing testing...
               </p>
            </div>
         </Link>
      </div>
   );
}