import React from 'react';
import { Trophy, Star, Users, Mic } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Consistently among top 3 students in school",
      highlight: "Top 3 Position",
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Trophy,
      title: "Outstanding Performance",
      description: "Achieved remarkable 98% in 8th grade examinations",
      highlight: "98% Score",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Mic,
      title: "Leadership Role",
      description: "Secretary of the Morning Assembly, leading daily school activities",
      highlight: "Student Leader",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Active Participation",
      description: "Regular participant in academic competitions and sports tournaments",
      highlight: "Multi-talented",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
  ];

  const qualities = [
    "Confidence in public speaking",
    "Strong leadership skills",
    "Academic brilliance",
    "Responsible and reliable",
    "Team collaboration",
    "Competitive spirit",
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of excellence, leadership, and continuous growth through dedication and hard work.
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                        {achievement.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notable Qualities */}
        <div className="animate-fade-in-up animate-delay-400">
          <div className="card-gradient p-8 rounded-xl shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Key Strengths & Qualities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 animate-fade-in-up animate-delay-500">
          <div className="hero-gradient p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Known for Confidence, Leadership, and Brilliance
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Recognized by teachers and peers for exceptional academic performance, 
              natural leadership abilities, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;