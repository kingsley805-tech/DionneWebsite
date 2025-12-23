import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterImage from "@/assets/newsletter-image.jpg";

const Newsletter = () => {
  return (
    <section className="bg-background">
      <div className="grid md:grid-cols-2">
        {/* Left - Image Section */}
        <div className="relative min-h-[500px] md:min-h-[600px]">
          <img
            src={newsletterImage}
            alt="Dionne Tweneboah"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
            <p className="font-heading text-lg md:text-xl">
              Dionne Tweneboah
            </p>
            
            <div className="space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                It's Your Time to Shine
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-lg">
                Join my newsletter for honest conversations on growth, purpose, and becoming your best
                self. Every message is crafted to inspire you to rise above ordinary and step boldly
                into your calling.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="bg-white flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Sign up to my weekly newsletter
              </h3>
              <p className="text-foreground text-lg">
                Don't miss your chance. Sign Up today!
              </p>
            </div>
            
            <div className="space-y-6">
              <Input
                type="email"
                placeholder="Your email"
                className="h-14 rounded-full border-muted-foreground/30 px-6 text-base"
              />
              
              {/* Decorative divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-muted-foreground/30"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                <div className="flex-1 h-px bg-muted-foreground/30"></div>
              </div>
              
              <Button variant="hero" className="w-full h-14 text-base">
                Sign me Up!
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              No spam, just real talk in your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;