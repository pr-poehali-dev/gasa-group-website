import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-secondary text-primary font-medium">Строительство под ключ</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-primary">
              Строительство частных домов в Краснодаре
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Профессиональное строительство жилых домов и коттеджей с гарантией качества. 
              Прозрачные сроки, фиксированная стоимость, полный контроль на всех этапах.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8">
                Каталог проектов
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">завершённых объектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">гарантия качества</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
              <img 
                src="/img/7bd914ba-6370-4f05-b79b-f27333997911.jpg" 
                alt="Строительство дома" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Video" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">Видеонаблюдение 24/7</div>
                    <div className="text-xs text-muted-foreground">Следите за стройкой онлайн</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
