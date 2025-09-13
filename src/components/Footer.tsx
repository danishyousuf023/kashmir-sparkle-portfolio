import React from 'react';
import { Heart, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Mir Muhammad Alsudais
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A passionate student from Kashmir, dedicated to academic excellence 
              and personal growth through education and leadership.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sagam, Kukarnag, Anantnag, Kashmir</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Achievements', href: '#achievements' },
                { name: 'Hobbies', href: '#hobbies' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* School Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Academic Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Islamia Model School, Kingam</p>
                  <p className="text-sm text-muted-foreground">Currently in 9th Grade</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>🏆 Top 3 Student</p>
                <p>📊 98% in 8th Grade</p>
                <p>🎤 Secretary of Morning Assembly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center">
            <blockquote className="text-lg font-medium text-foreground italic mb-2">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="text-sm text-muted-foreground">— Nelson Mandela</cite>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Mir Muhammad Alsudais. Personal Portfolio Website.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>from Kashmir</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;