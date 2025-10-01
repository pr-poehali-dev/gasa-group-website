import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-black/5">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <Icon name="Home" className="text-accent" size={26} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary tracking-tight">ГАСА ГРУПП</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Премиальное строительство</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-foreground/80 hover:text-foreground transition tracking-wide">Проекты</a>
            <a href="#portfolio" className="text-sm font-medium text-foreground/80 hover:text-foreground transition tracking-wide">Портфолио</a>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition tracking-wide">Услуги</a>
            <a href="#advantages" className="text-sm font-medium text-foreground/80 hover:text-foreground transition tracking-wide">Преимущества</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition tracking-wide">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg shadow-accent/20">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
}
