import { Home, Bookmark, Grid3X3, FileText, Share2, BarChart3, Folder, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const LeftNavigation = () => {
  const location = useLocation();
  return <nav className="fixed left-0 top-12 w-16 h-[calc(100vh-48px)] bg-trellis-magenta-1400 border-r  z-40 flex flex-col items-center py-4 space-y-4" onWheel={(e) => e.stopPropagation()}>
      <Link to="/" className={`p-2 rounded-lg transition-colors ${location.pathname === '/' ? 'bg-transparent text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'}`}>
        <Home className="h-5 w-5" />
      </Link>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <Bookmark className="h-5 w-5" />
      </div>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <Grid3X3 className="h-5 w-5" />
      </div>
      <Link to="/canvas-mode" className={`p-2 rounded-lg transition-colors ${location.pathname === '/canvas-mode' ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'}`}>
        <FileText className="h-5 w-5" />
      </Link>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <Share2 className="h-5 w-5" />
      </div>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <BarChart3 className="h-5 w-5" />
      </div>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <Folder className="h-5 w-5" />
      </div>
      <div className="p-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/10 cursor-pointer transition-colors">
        <Calendar className="h-5 w-5" />
      </div>
    </nav>;
};