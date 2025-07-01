import React from 'react';
import { Button } from '@/components/ui/button';
import LoanApplicationForm from '@/components/LoanApplicationForm';
import ProcessSection from '@/components/ProcessSection';
import heroImage from '@/assets/hero-jade.jpg';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience <span className="text-accent">Financial</span> Partners
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Where your financial journey becomes a collaborative experience
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience lending built on collaboration and transparency. Your financial partner every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToApplication}
              className="min-w-64"
            >
              Start Your Journey
            </Button>
            <div className="text-sm opacity-80">
              Decisions in 5-7 business days with complete visibility
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary-foreground opacity-70" />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Application Section */}
      <section id="application" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Begin Your Collaborative Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards a transparent, collaborative lending partnership. 
              Every question brings us closer to finding the perfect solution for your needs.
            </p>
          </div>
          
          <LoanApplicationForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-subtle border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Trusted by thousands for transparent lending
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
                <div className="text-muted-foreground">Loans Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5-7 Days</div>
                <div className="text-muted-foreground">Average Decision Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-2">Experience Financial Partners</h4>
          <p className="text-primary-foreground/80 mb-4">
            Your collaborative lending partner
          </p>
          <p className="text-sm text-primary-foreground/60">
            Licensed lender committed to transparency and collaboration in every financial partnership.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;