import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Users, Clock, Shield } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Complete Transparency",
      description: "Every step of your application is visible to you. No hidden processes, no mysteries - just clear communication about where you stand.",
      highlight: "100% visibility"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership", 
      description: "We work together to find the best solution for your needs. Your input matters in crafting terms that work for your situation.",
      highlight: "True partnership"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Decisions",
      description: "Decisions in 5-7 business days with regular updates throughout the process. You'll never wonder what's happening.",
      highlight: "5-7 day decisions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Trusted",
      description: "Your information is protected with enterprise-grade security. Our collaborative approach builds on a foundation of trust.",
      highlight: "Bank-level security"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Your Collaborative Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience lending built on collaboration and transparency. We believe your financial journey should be a partnership, not a transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-card border-0 shadow-jade hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-jade rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-primary">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">
                  {step.description}
                </p>
                <div className="inline-block bg-gradient-warm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-accent-foreground">
                    {step.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card p-8 rounded-lg shadow-jade max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Choose Collaborative Lending?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional lending feels transactional. We believe it should feel like a partnership. That's why we've built every aspect of our process around collaboration, transparency, and your success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">Open Communication</h4>
                <p className="text-sm text-muted-foreground">Regular updates and direct access to your loan specialist throughout the entire process.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Flexible Solutions</h4>
                <p className="text-sm text-muted-foreground">We work together to structure terms that fit your unique financial situation and goals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Long-term Partnership</h4>
                <p className="text-sm text-muted-foreground">Our relationship doesn't end at closing. We're here to support your ongoing financial journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;