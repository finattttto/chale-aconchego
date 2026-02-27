"use client";

import Image from "next/image";
import { Droplets, Trophy, Mountain, Flame, Users, Trees } from "lucide-react";

const ACTIVITIES = [
  {
    icon: Droplets,
    title: "Rio",
    description: "Banho e diversao nas aguas cristalinas",
  },
  {
    icon: Trophy,
    title: "Voleio",
    description: "Partidas no campo de areia",
  },
  {
    icon: Mountain,
    title: "Camping",
    description: "Area para montar sua barraca",
  },
  {
    icon: Flame,
    title: "Fogueira",
    description: "Noites memoraveis ao ar livre",
  },
  {
    icon: Users,
    title: "Area de festas",
    description: "Espaco para grandes reunioes",
  },
  {
    icon: Trees,
    title: "Trilhas",
    description: "Caminhos em meio a natureza",
  },
];

export function RecantoActivities() {
  return (
    <section id="atividades" className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            O que fazer
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Atividades para todos
          </h2>
        </div>

        {/* Two-column layout: image + activities grid */}
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Large image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm lg:col-span-2">
            <Image
              src="/assets/recanto/area-externa.jpg"
              alt="Area externa do Recanto Aconchego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={75}
            />
          </div>

          {/* Activities grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:gap-6">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.title}
                className="flex flex-col items-start rounded-sm border border-[#d4cfc5] bg-[#eae6df] p-6 transition-colors hover:bg-[#e2ded7]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#f5f2ed]">
                  <activity.icon className="h-5 w-5 text-[#4a6741]" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-[#2d3a2e]">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7c6b]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
