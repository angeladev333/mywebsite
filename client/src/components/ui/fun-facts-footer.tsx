'use client';

import React from 'react';
import { InfiniteMovingCards } from './infinite-moving-cards';

export function FunFactsFooter() {
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiased  justify-center relative overflow-hidden">
        <p className="text-slate-600 text-left p-4 ">
          As a self-proclaimed jack of all trades, <br />
          there are a myriad of hobbies I have tried; activities attempted; and
          achievements not on the resume... here's some of them!{' '}
        </p>
        <InfiniteMovingCards
          items={cool_things}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const cool_things = [
  {
    quote: '5x Hackathon Wins',
    name: '1st Place @ Hack the Valley, Best AI Application @ DeltaHacks, AI Agents @ HackMIT, Best Use of MondoDB @ HackWestern, Radia Perlman Award @ Ignition Hacks',
  },
  {
    quote: 'Prev Web Developer',
    name: 'Math Soc, Google Developer Student Club, TechNova, WATOLINK',
    title: 'UWaterloo',
  },
  {
    quote: 'Math Contest Distinctions',
    name: 'Euclid and Cayley School Champion, Spirit of Math Olympiads Award, Beaver Computing Challenge Perfect Score',
    title: 'EHSS',
  },
  {
    quote: 'Certifications',
    name: 'YAMAHA Teaching License L4, AP Calculus BC, RMC ARCT Piano, RMC Level 10 Violin',
  },
  {
    quote: 'Scholarships',
    name: "JASSO 400,000¥, International Experience Award $2500, President's International Exchange $1500, President's Scholarship of Distinction $2000, Scotiabank WiCS Scholarship $10,000, GHC Sponsorship ~$1000",
    title: 'UWaterloo',
  },
  {
    quote: 'Some things I have tried (,,>-<,,)',
    name: 'President of Math Club, VP of DECA Club, Secretary of Chess Club',
    title: 'EHSS',
  },
  {
    quote: 'I graduated High School ദ്ദി ˉ͈̀꒳ˉ͈́ )✧',
    name: 'Math & Chemistry Graduating Awards | Piano Major, Honors',
    title: 'EHSS',
  },
  {
    quote: 'I graduated middle school (ᵕ—ᴗ—)',
    name: 'Math, Music, Media Graduating Awards | French Immersion',
    title: 'LBP',
  },
  {
    quote: '@meririlife  ☆⌒(ゝ。∂)',
    name: 'just a merry vlog channel :3',
    title: 'Tiktok, Instagram, Youtube',
  },
  {
    quote: 'YAMAHA Music School',
    name: 'Piano Assistant Teacher (Contract Part-time)',
    title: '2017-19',
  },
  {
    quote: 'Summer Programs',
    name: 'Google Computer Science Summer Institute, SHAD, CEMC Invitational Mathematics Workshop',
    title: '2022-23',
  },
];
