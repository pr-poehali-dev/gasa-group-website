import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-accent text-white">Краснодар и Адыгея</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Строим дома вашей мечты
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Полный цикл строительства от поиска участка до финального ремонта. 
              Высокое качество, прозрачность процесса и сроки от 4 месяцев.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-accent">120+</div>
                <div className="text-white/70">Построенных домов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">4 мес</div>
                <div className="text-white/70">Средний срок</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-white/70">Видеонаблюдение</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/7bd914ba-6370-4f05-b79b-f27333997911.jpg" 
                alt="Строительство" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Icon name="Video" size={18} />
                <span className="text-sm font-medium">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
