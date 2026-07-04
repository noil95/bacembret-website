import Image from "next/image";
import Link from "next/link";
import { LaurelWreath } from "./icons";
import { GALLERY_TOP } from "@/lib/jf-data";

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-marble py-24 md:py-32 lg:py-40">
      {/* Decorative leaf far top right */}
      <Image
        src="/images/branch_final-min.png"
        alt=""
        aria-hidden
        width={420}
        height={520}
        className="pointer-events-none absolute -top-16 -right-10 hidden h-auto w-[260px] -rotate-6 opacity-70 lg:block xl:w-[360px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Headline + CTAs */}
        <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr_auto] lg:gap-16">
          <Link
            href="/menu"
            className="group relative hidden h-[160px] w-[160px] items-center justify-center text-black md:flex"
            aria-label="See menu"
          >
            <LaurelWreath className="absolute inset-0 h-full w-full text-black spin-slow opacity-90 group-hover:opacity-100" />
            <span className="font-ui relative text-[11px] tracking-[0.28em] uppercase">
              see menu
            </span>
          </Link>

          <h2 className="jf-headline text-center lowercase">
            çdo kafshatë, <span className="italic">një emocion ndryshe</span>
          </h2>

          <Link
            href="/menu"
            className="font-ui group hidden items-center gap-3 justify-self-end text-[12px] tracking-[0.28em] uppercase text-black md:inline-flex"
          >
            <span className="border-b border-black/60 pb-1 transition-colors group-hover:border-black">
              see menu
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* TOP ROW — only row that remains */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {GALLERY_TOP.map((item, i) => {
            const span = [
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-4 md:row-span-2",
              "md:col-span-2 md:row-span-2",
            ][i];
            return (
              <GalleryTile
                key={item.src}
                item={item}
                spanClass={span}
                aspect={i === 2 ? "aspect-[4/5]" : i === 3 ? "aspect-[3/8]" : "aspect-square"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface GalleryTileProps {
  item: { src: string; alt: string; className?: string };
  spanClass: string;
  aspect: string;
}

function GalleryTile({ item, spanClass, aspect }: GalleryTileProps) {
  return (
    <div className={`${spanClass} ${aspect} relative overflow-hidden ${item.className ?? ""}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}
