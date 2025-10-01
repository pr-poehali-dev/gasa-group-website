import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProjectsSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'Проект "Комфорт"',
    area: '120 м²',
    floors: 1,
    price: 'от 4.5 млн ₽',
    category: 'cottage',
    image: '/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg'
  },
  {
    id: 2,
    title: 'Проект "Премиум"',
    area: '240 м²',
    floors: 2,
    price: 'от 8.2 млн ₽',
    category: 'house',
    image: '/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg'
  },
  {
    id: 3,
    title: 'Проект "Семейный"',
    area: '180 м²',
    floors: 2,
    price: 'от 6.8 млн ₽',
    category: 'house',
    image: '/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg'
  }
];

export default function ProjectsSection({ selectedCategory, setSelectedCategory }: ProjectsSectionProps) {
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent text-white">Готовые решения</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты домов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите готовый проект или закажите индивидуальную разработку
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-secondary' : ''}
          >
            Все проекты
          </Button>
          <Button 
            variant={selectedCategory === 'cottage' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('cottage')}
            className={selectedCategory === 'cottage' ? 'bg-secondary' : ''}
          >
            Коттеджи
          </Button>
          <Button 
            variant={selectedCategory === 'house' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('house')}
            className={selectedCategory === 'house' ? 'bg-secondary' : ''}
          >
            Дома
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Home" size={18} />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Layers" size={18} />
                    <span>{project.floors} этаж</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
