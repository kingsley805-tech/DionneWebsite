import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder image - replace with actual image

import dionneHeroImage from "@/assets/dionne-hero.png";

const Index = () => {
  return (
    <main className="min-h-screen md:hidden bg-background">
      <section className="relative min-h-screen hero-section overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Mobile / Small screens layout */}
          <div className="flex md:hidden flex-col min-h-screen pt-20 pb-8">
            {/* Top section with subtle label */}
            <div className="opacity-0 animate-slide-up stagger-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs font-medium text-muted-foreground uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                Attorney • Speaker • Mentor
              </span>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-6 py-8">
              {/* Hero Image with elegant frame */}
              <div className="relative opacity-0 animate-slide-up stagger-2">
                {/* Decorative ring */}
                <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 -m-4 border-2 border-primary/10 rounded-3xl -rotate-2" />
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    alt="Dionne Tweneboah"
                    className="w-56 h-72 sm:w-64 sm:h-80 object-cover animate-float"
                    src={dionneHeroImage}
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-4 max-w-sm opacity-0 animate-slide-up stagger-3">
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
                  Dionne Tweneboah
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Blending law, leadership, and mentorship to shape a just and purpose-driven world.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs opacity-0 animate-slide-up stagger-4">
                <Button asChild variant="hero" size="lg" className="w-full group">
                  <Link to="/speaking" className="flex items-center justify-center gap-2">
                    Book Me
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg" className="w-full">
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-0 animate-fade-in stagger-4" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col min-h-screen relative pb-24 md:pb-32 items-center justify-center">
            {/* Left text */}
            <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-xs z-10 opacity-0 animate-slide-up">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Blending law, leadership, and<br />
                mentorship to shape a just and<br />
                purpose-driven world.
              </p>
            </div>

            {/* Center - Hero Image */}
            <div className="relative z-20 opacity-0 animate-slide-up stagger-2">
              <img 
                alt="Dionne Tweneboah" 
                src={dionneHeroImage} 
                className="md:w-[30rem] lg:w-[39rem] object-cover shadow-elegant rounded-2xl" 
              />
            </div>

            {/* Right buttons */}
            <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex gap-3 z-10 opacity-0 animate-slide-up stagger-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/speaking">Book Me</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;