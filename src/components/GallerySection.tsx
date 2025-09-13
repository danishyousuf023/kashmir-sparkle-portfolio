import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import cricketMatch from '@/assets/cricket-match.jpg';
import schoolAssembly from '@/assets/school-assembly.jpg';
import kashmirLandscape from '@/assets/kashmir-landscape.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: cricketMatch,
      alt: "Cricket match at school with mountains in background",
      title: "Cricket Tournament",
      description: "Participating in inter-school cricket tournament",
      category: "Sports",
    },
    {
      id: 2,
      src: schoolAssembly,
      alt: "Leading morning assembly at school",
      title: "Morning Assembly",
      description: "As Secretary, leading the morning assembly",
      category: "Leadership",
    },
    {
      id: 3,
      src: kashmirLandscape,
      alt: "Beautiful Kashmir landscape with Dal Lake",
      title: "My Beautiful Kashmir",
      description: "The breathtaking beauty of my homeland",
      category: "Landscape",
    },
    // Placeholder items to show gallery layout
    {
      id: 4,
      src: cricketMatch,
      alt: "School sports day activities",
      title: "Sports Day",
      description: "Annual sports day celebrations",
      category: "Sports",
    },
    {
      id: 5,
      src: schoolAssembly,
      alt: "Academic achievement ceremony",
      title: "Achievement Day",
      description: "Receiving academic excellence award",
      category: "Academic",
    },
    {
      id: 6,
      src: kashmirLandscape,
      alt: "Kashmir valley during spring",
      title: "Spring in Kashmir",
      description: "Kashmir's natural beauty in spring season",
      category: "Landscape",
    },
  ];

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredItems.length) % filteredItems.length
      : (selectedImage + 1) % filteredItems.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses from my academic journey, sports activities, and the beautiful landscapes of Kashmir.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Camera className="h-6 w-6 text-white/80" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;