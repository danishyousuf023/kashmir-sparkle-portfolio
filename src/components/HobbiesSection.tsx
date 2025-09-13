import React from 'react';
import { Film, Zap, Heart, Clock } from 'lucide-react';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: Zap,
      title: "Cricket",
      description: "Passionate about cricket, actively playing and participating in school tournaments. Love the strategy, teamwork, and excitement of the game.",
      image: "🏏",
      activities: ["School tournaments", "Weekend matches", "Team captain experience"],
    },
    {
      icon: Zap,
      title: "Badminton",
      description: "Enjoy the fast-paced nature of badminton. Great for improving reflexes, agility, and maintaining physical fitness.",
      image: "🏸",
      activities: ["School competitions", "Regular practice", "Singles & doubles"],
    },
    {
      icon: Film,
      title: "Watching Movies",
      description: "Love exploring different genres of movies during free time. From action-packed adventures to inspiring stories, cinema is my way to relax and learn.",
      image: "🎬",
      activities: ["Weekend movie nights", "Various genres", "Story analysis"],
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, I'm passionate about sports and entertainment that keep me active, engaged, and balanced.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hobby.image}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {hobby.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {hobby.description}
                </p>

                {/* Activities */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    What I Love About It:
                  </h4>
                  <ul className="space-y-2">
                    {hobby.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 animate-fade-in-up animate-delay-300">
          <div className="card-gradient p-8 rounded-xl shadow-card text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Balance in Life
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I believe in maintaining a healthy balance between academics and recreation. 
              Sports keep me physically fit and teach valuable lessons about teamwork and perseverance, 
              while movies help me unwind and explore different perspectives on life.
            </p>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-400">
          {[
            { label: "Sports Played", value: "2+" },
            { label: "Tournaments", value: "Multiple" },
            { label: "Movie Genres", value: "All" },
            { label: "Free Time Activity", value: "Sports & Movies" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;