import React from 'react';
import { MapPin, GraduationCap, Trophy } from 'lucide-react';
import profilePicture from '/profile-picture.jpg';
import kashmirLandscape from '@/assets/kashmir-landscape.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={kashmirLandscape}
          alt="Beautiful Kashmir landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="w-full">
            <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
              {/* Text Content */}
              <div className="lg:flex-1 lg:pr-12">
                <div className="animate-fade-in-up">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Hi, I am{' '}
                    <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                      Mir Muhammad Alsudais
                    </span>
                  </h1>
                </div>
                
                <div className="animate-fade-in-up animate-delay-100">
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                    A passionate and hardworking student from Sagam, Kukarnag, Anantnag, Kashmir.
                  </p>
                </div>

                <div className="animate-fade-in-up animate-delay-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 mb-8">
                    <div className="flex items-center text-white/80">
                      <MapPin className="h-5 w-5 mr-2 text-accent" />
                      <span>Sagam, Kukarnag, Anantnag, Kashmir</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <GraduationCap className="h-5 w-5 mr-2 text-accent" />
                      <span>9th Grade, Islamia Model School</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Trophy className="h-5 w-5 mr-2 text-accent" />
                      <span>98% in 8th Grade</span>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in-up animate-delay-300">
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover"
                  >
                    Learn More About Me
                  </button>
                </div>
              </div>

              {/* Profile Image */}
              <div className="lg:flex-1 lg:flex lg:justify-center mt-12 lg:mt-0">
                <div className="animate-fade-in-up animate-delay-400">
                  <div className="relative inline-block">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                      <img
                        src={profilePicture}
                        alt="Mir Muhammad Alsudais"
                        className="w-full h-full object-cover rounded-full profile-hover shadow-soft border-4 border-white/20"
                      />
                    </div>
                    {/* Floating animation element */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl float-animation"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-lg float-animation" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;