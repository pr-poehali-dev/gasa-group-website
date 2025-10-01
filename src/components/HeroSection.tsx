import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 font-medium tracking-wide">Краснодар · Адыгея</Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-[1.1] text-white text-balance">
              Дома премиум-класса
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
              Эксклюзивное строительство от земельного участка до финального штриха интерьера. 
              Безупречное качество, полная прозрачность и гарантированные сроки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-xl shadow-accent/30 px-8 py-6 text-base">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Консультация эксперта
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-6 text-base font-semibold">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="border-l-2 border-accent pl-4">
                <div className="text-5xl font-bold text-accent mb-1">120+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Реализованных проектов</div>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <div className="text-5xl font-bold text-accent mb-1">4 мес</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Средний срок</div>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <div className="text-5xl font-bold text-accent mb-1">24/7</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Онлайн-контроль</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/30">
              <img 
                src="/img/7bd914ba-6370-4f05-b79b-f27333997911.jpg" 
                alt="Строительство" 
                className="w-full h-auto"
              />
              <div className="absolute top-6 right-6 bg-accent text-primary px-5 py-2.5 rounded-md flex items-center gap-2 font-semibold shadow-lg">
                <Icon name="Video" size={18} />
                <span className="text-sm">ПРЯМОЙ ЭФИР</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
