import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Users',
    title: 'Прямое сотрудничество',
    description: 'Работаем без посредников — экономия до 20% при премиальном качестве'
  },
  {
    icon: 'Award',
    title: 'Элитные материалы',
    description: 'Эксклюзивные материалы премиум-класса от ведущих европейских производителей'
  },
  {
    icon: 'Key',
    title: 'Комплексное решение',
    description: 'От приобретения земли до дизайнерской мебели — полный цикл под ключ'
  },
  {
    icon: 'Zap',
    title: 'Точные сроки',
    description: 'Гарантированное возведение за 4 месяца с фиксацией в договоре'
  },
  {
    icon: 'Video',
    title: 'Полный контроль',
    description: 'Система видеонаблюдения 24/7 и личный менеджер проекта'
  },
  {
    icon: 'Shield',
    title: 'Юридические гарантии',
    description: 'Расширенная гарантия и полное страхование всех этапов строительства'
  }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 font-medium tracking-wide">Наши стандарты</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Философия качества</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Индивидуальный подход и безупречное исполнение каждого проекта
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 animate-fade-in bg-white/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={advantage.icon} className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
