import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-secondary text-primary">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">ГАСА ГРУПП</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Профессиональная строительная компания с 15-летним опытом работы в Краснодаре 
              и Республике Адыгея. Специализируемся на возведении частных домов и коттеджей 
              под ключ.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Работаем напрямую, без посредников. Обеспечиваем полную прозрачность процесса: 
              система видеонаблюдения 24/7 позволяет контролировать ход строительства в режиме 
              реального времени из любой точки мира.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-5">
                <Icon name="Award" className="text-accent mb-3" size={32} />
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div className="border border-border rounded-lg p-5">
                <Icon name="Users" className="text-accent mb-3" size={32} />
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg" 
                alt="Построенный дом" 
                className="rounded-lg shadow-lg border border-border"
              />
              <img 
                src="/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg" 
                alt="Коттедж" 
                className="rounded-lg shadow-lg mt-8 border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
