import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolio = [
  {
    title: 'Дом в Краснодаре',
    location: 'г. Краснодар',
    area: '200 м²',
    year: '2024',
    image: '/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg'
  },
  {
    title: 'Коттедж в Адыгее',
    location: 'Республика Адыгея',
    area: '150 м²',
    year: '2023',
    image: '/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg'
  },
  {
    title: 'Загородный дом',
    location: 'г. Краснодар',
    area: '180 м²',
    year: '2024',
    image: '/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent text-white">Наши работы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио построенных домов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 120 успешно реализованных проектов в Краснодаре и Адыгее
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Home" size={16} />
                        {item.area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <Button variant="ghost" size="sm" className="text-secondary">
                    Смотреть проект
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
