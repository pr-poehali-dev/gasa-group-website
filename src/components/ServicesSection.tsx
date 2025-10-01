import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    number: '01',
    title: 'Консультация',
    description: 'Обсуждаем ваши пожелания, подбираем проект и участок'
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Разрабатываем индивидуальный проект или адаптируем типовой'
  },
  {
    number: '03',
    title: 'Оформление документов',
    description: 'Помогаем с покупкой участка и получением разрешений'
  },
  {
    number: '04',
    title: 'Строительство',
    description: 'Возводим дом с контролем качества на каждом этапе'
  },
  {
    number: '05',
    title: 'Отделка и ремонт',
    description: 'Выполняем чистовую отделку по вашему дизайн-проекту'
  },
  {
    number: '06',
    title: 'Сдача объекта',
    description: 'Передаем готовый дом с полным пакетом документов'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-secondary text-white">Процесс работы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги и этапы работы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс строительства от первого звонка до получения ключей
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-6xl font-bold text-secondary/10 mb-4">{service.number}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
