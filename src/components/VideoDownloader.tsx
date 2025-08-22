import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Download, Youtube, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DownloadItem {
  id: string;
  url: string;
  title: string;
  format: string;
  status: 'pending' | 'downloading' | 'completed' | 'error';
  progress: number;
}

export const VideoDownloader = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp4-720p");
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const { toast } = useToast();

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)/;
    return youtubeRegex.test(url);
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a YouTube URL",
        variant: "destructive"
      });
      return;
    }

    if (!isValidYouTubeUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube URL",
        variant: "destructive"
      });
      return;
    }

    // Create new download item
    const newDownload: DownloadItem = {
      id: Date.now().toString(),
      url: url,
      title: "Fetching video information...",
      format: format,
      status: 'pending',
      progress: 0
    };

    setDownloads(prev => [newDownload, ...prev]);
    setUrl("");

    // Simulate download process
    setTimeout(() => {
      setDownloads(prev => prev.map(item => 
        item.id === newDownload.id 
          ? { ...item, title: "Sample Video Title", status: 'downloading' }
          : item
      ));

      // Simulate progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setDownloads(prev => prev.map(item => 
            item.id === newDownload.id 
              ? { ...item, status: 'completed', progress: 100 }
              : item
          ));
          toast({
            title: "Download Complete",
            description: "Video downloaded successfully!"
          });
        } else {
          setDownloads(prev => prev.map(item => 
            item.id === newDownload.id 
              ? { ...item, progress: Math.round(progress) }
              : item
          ));
        }
      }, 500);
    }, 1000);
  };

  const formatOptions = [
    { value: "mp4-1080p", label: "MP4 - 1080p (High Quality)" },
    { value: "mp4-720p", label: "MP4 - 720p (Good Quality)" },
    { value: "mp4-480p", label: "MP4 - 480p (Standard)" },
    { value: "mp3-320k", label: "MP3 - 320kbps (Audio Only)" },
    { value: "mp3-128k", label: "MP3 - 128kbps (Audio Only)" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Download Form */}
      <Card className="p-8 bg-gradient-card border-border shadow-card">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Download YouTube Videos
            </h2>
            <p className="text-muted-foreground">
              Paste a YouTube URL below to get started
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 bg-input border-border"
                  onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger className="flex-1 bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {formatOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleDownload}
                disabled={!url.trim()}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-8"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Downloads List */}
      {downloads.length > 0 && (
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Downloads</h3>
          <div className="space-y-4">
            {downloads.map((download) => (
              <div
                key={download.id}
                className="p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {download.title}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {download.url}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Format: {download.format}
                    </p>
                  </div>
                  <div className="ml-4">
                    {download.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {download.status === 'error' && (
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    )}
                    {download.status === 'downloading' && (
                      <Download className="w-5 h-5 text-primary animate-pulse" />
                    )}
                  </div>
                </div>
                
                {download.status === 'downloading' && (
                  <div className="space-y-1">
                    <Progress value={download.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {download.progress}% complete
                    </p>
                  </div>
                )}
                
                {download.status === 'completed' && (
                  <p className="text-sm text-green-500 font-medium">
                    Download completed successfully!
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};