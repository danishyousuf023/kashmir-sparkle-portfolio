import React from 'react';
import { Book, Users, Award, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      value: "98%",
      label: "8th Grade Score",
    },
    {
      icon: Book,
      value: "9th",
      label: "Current Grade",
    },
    {
      icon: Users,
      value: "Top 3",
      label: "Class Ranking",
    },
    {
      icon: Heart,
      value: "100%",
      label: "Dedication",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover more about my academic journey, achievements, and passion for learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Academic Excellence & Leadership
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am currently studying at Islamia Model School, Kingam, where I have consistently 
                maintained my position among the top 3 students in my class. My academic journey 
                has been marked by dedication, hard work, and a genuine love for learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a remarkable 98% score in my 8th grade examinations, I have proven my 
                commitment to academic excellence. Beyond academics, I serve as the Secretary 
                of the Morning Assembly, where I lead my fellow students and help create a 
                positive start to each school day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey from the beautiful valleys of Kashmir has taught me the importance 
                of perseverance, community, and maintaining strong values while pursuing 
                educational goals.
              </p>
            </div>

            <div className="animate-fade-in-up animate-delay-100">
              <h4 className="text-lg font-semibold text-foreground mb-3">Key Qualities</h4>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Confidence', 'Dedication', 'Academic Excellence', 'Team Spirit', 'Responsibility'].map((quality, index) => (
                  <span
                    key={quality}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="card-gradient p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 text-center group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* School Information */}
        <div className="mt-16 animate-fade-in-up animate-delay-300">
          <div className="card-gradient p-8 rounded-xl shadow-card">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Islamia Model School, Kingam
              </h3>
              <p className="text-muted-foreground mb-4">
                My academic home where I continue to grow and excel
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📚 Currently in 9th Grade</span>
                <span>🏆 Consistent Top 3 Performance</span>
                <span>🎤 Secretary of Morning Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;