import { VideoDownloader } from "@/components/VideoDownloader";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Download, Shield, Zap, HardDrive, Play, Github } from "lucide-react";
import heroImage from "@/assets/hero-video-downloader.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">TubeGrabber</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TubeGrabber Studio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Download YouTube videos in high quality with ease. Fast, secure, and completely free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Start Downloading
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose TubeGrabber?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with modern technology for the best downloading experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Download videos at maximum speed with our optimized backend infrastructure."
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Private"
            description="Your downloads are processed securely. We don't store your data or video files."
          />
          <FeatureCard
            icon={HardDrive}
            title="Multiple Formats"
            description="Choose from various video qualities and audio formats to suit your needs."
          />
          <FeatureCard
            icon={Download}
            title="Batch Download"
            description="Download multiple videos simultaneously with our advanced queue system."
          />
        </div>
      </section>

      {/* Main Downloader */}
      <section id="download" className="py-20 container mx-auto px-4">
        <VideoDownloader />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
                  <Play className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">TubeGrabber</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The fastest and most reliable YouTube video downloader.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#download" className="hover:text-foreground transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TubeGrabber Studio. Built with React & Node.js.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;