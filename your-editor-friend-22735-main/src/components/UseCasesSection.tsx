import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
const useCases = [{
  title: "Private Data Cloud",
  description: "Secure, encrypted storage for your sensitive information",
  icon: "🔒"
}, {
  title: "Credential Verification - KYC",
  description: "Know Your Customer verification with zero-knowledge proofs",
  icon: "✓"
}, {
  title: "Investor Accreditation",
  description: "Verify accredited investor status privately",
  icon: "💼"
}, {
  title: "Professional Credentials",
  description: "Validate professional certifications and licenses",
  icon: "🎓"
}, {
  title: "AI Password/Data Manager",
  description: "Intelligent password and data management with AI",
  icon: "🔑"
}, {
  title: "Tax Agent",
  description: "AI-powered tax preparation and optimization",
  icon: "📊"
}, {
  title: "Loan Agent",
  description: "Automated loan application and verification",
  icon: "🏦"
}, {
  title: "Healthcare Agent",
  description: "Private health data management and verification",
  icon: "⚕️"
}, {
  title: "Hiring Agent",
  description: "Background checks and credential verification for hiring",
  icon: "👥"
}, {
  title: "Therapy Agent",
  description: "Confidential mental health support and records",
  icon: "🧠"
}];
export const UseCasesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUseCases = useCases.filter(useCase => useCase.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        

        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            
          </div>
        </div>

        <Carousel opts={{
        align: "start",
        loop: true
      }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredUseCases.map((useCase, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>;
};