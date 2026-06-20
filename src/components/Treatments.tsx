"use client";
import React from 'react';
import { 
  Shield, Zap, Sparkles, Smile, Activity, Heart, 
  Stethoscope, CheckCircle2, Star, Plus, ArrowRight 
} from 'lucide-react';

interface TreatmentCard {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  desc: string;
}

const treatments: TreatmentCard[] = [
  { name: "Dental Implant", icon: Shield, desc: "Permanent, natural-looking tooth replacements." },
  { name: "Root Canal Treatment RCT", icon: Activity, desc: "Save infected teeth and relieve pain." },
  { name: "Wisdom Teeth", icon: Stethoscope, desc: "Safe and painless extraction." },
  { name: "Clear Aligners", icon: Sparkles, desc: "Invisible orthodontics for a straight smile." },
  { name: "Cosmetic Dental Bonding", icon: Star, desc: "Repair chips and cracks seamlessly." },
  { name: "Laser Dentistry", icon: Zap, desc: "Advanced, pain-free dental procedures." },
  { name: "Kids Dentistry", icon: Heart, desc: "Gentle and fun care for little smiles." },
  { name: "Dental Crowns And Bridges", icon: Shield, desc: "Restore tooth shape, size, and strength." },
  { name: "Gum Disease Treatment", icon: Activity, desc: "Comprehensive care for healthy gums." },
  { name: "Dental Filling", icon: CheckCircle2, desc: "Durable composite fillings for cavities." },
  { name: "Dentures", icon: Smile, desc: "Custom-fitted complete and partial dentures." },
  { name: "Teeth Whitening", icon: Sparkles, desc: "Professional brightening for a dazzling smile." },
  { name: "Mouth Ulcers", icon: Plus, desc: "Effective diagnosis and treatment." },
  { name: "Braces", icon: Smile, desc: "Traditional orthodontics for all ages." },
  { name: "Smile Makeover", icon: Star, desc: "Complete cosmetic transformation." },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-forest uppercase tracking-tight">
            Comprehensive <span className="text-lime">Treatments</span>
          </h2>
          <p className="text-forest/70 font-semibold text-lg">
            State-of-the-art dental care tailored to your unique needs. We provide a full range of services under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={idx} 
                id={`treatment-${t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="group p-8 rounded-3xl border border-forest/10 hover:border-forest bg-forest/5 hover:bg-forest transition-all duration-500 cursor-pointer flex flex-col justify-between items-start h-full shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-forest group-hover:text-lime shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-extrabold text-forest group-hover:text-white transition-colors duration-300">
                    {t.name}
                  </h3>
                  <p className="text-sm font-semibold text-forest/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-forest group-hover:text-lime font-bold text-sm transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
