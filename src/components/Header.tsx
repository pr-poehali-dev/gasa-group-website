import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ГАСА ГРУПП</h1>
              <p className="text-xs text-white/70">Строительство домов</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-white/90 hover:text-white transition">Проекты</a>
            <a href="#portfolio" className="text-white/90 hover:text-white transition">Портфолио</a>
            <a href="#services" className="text-white/90 hover:text-white transition">Услуги</a>
            <a href="#advantages" className="text-white/90 hover:text-white transition">Преимущества</a>
            <a href="#contact" className="text-white/90 hover:text-white transition">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
}
