import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Users',
    title: 'Без посредников',
    description: 'Прямое сотрудничество с застройщиком, экономия до 20%'
  },
  {
    icon: 'Award',
    title: 'Высокое качество',
    description: 'Используем только проверенные материалы премиум-класса'
  },
  {
    icon: 'Key',
    title: 'Под ключ',
    description: 'От поиска участка до финального ремонта и мебели'
  },
  {
    icon: 'Zap',
    title: 'Быстрое строительство',
    description: 'Срок возведения дома от 4 месяцев'
  },
  {
    icon: 'Video',
    title: 'Онлайн-наблюдение',
    description: 'Камеры 24/7 на каждом строительном объекте'
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Официальный договор и гарантия на все виды работ'
  }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-secondary text-white">Почему мы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексный подход к строительству с максимальным контролем качества
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
