import { Button } from "./ui/button";
import { Github, Download, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const DeveloperSection = () => {
  return (
    <section className="py-32 px-[5%] relative bg-[hsl(var(--purple))]/5">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-[hsl(var(--purple))] bg-clip-text text-transparent">
        🧠 For Developers
      </h2>
      <p className="text-center text-white/85 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
        Build on the Valyd Network. Explore our open-source SDKs, contribute to the protocol, and help shape the decentralized identity web.
      </p>

      <div className="max-w-4xl mx-auto">
        <p className="text-center text-white/90 text-xl mb-6 font-semibold">
          Get started:
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full text-base px-8 border-[hsl(var(--purple))] text-[hsl(var(--purple))] hover:bg-[hsl(var(--purple))]/10"
            onClick={() => window.open('/valyd-documentation.html', '_blank')}
          >
            <Github className="mr-2" />
            View on GitHub
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full text-base px-8 border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))]/10"
            asChild
          >
            <Link to="/developer-hub">
              <Download className="mr-2" />
              Download Test SDK
            </Link>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full text-base px-8 border-white/20 text-white hover:bg-white/5"
            onClick={() => window.open('/valyd-documentation.html', '_blank')}
          >
            <BookOpen className="mr-2" />
            Developer Docs
          </Button>
        </div>

        <p className="text-center text-white/70 text-lg max-w-2xl mx-auto">
          Join our community of builders accelerating trusted AI and decentralized identity.
        </p>
      </div>
    </section>
  );
};
