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
    title: 'Резиденция Комфорт',
    area: '120 м²',
    floors: 1,
    price: 'от 4.5 млн ₽',
    category: 'cottage',
    image: '/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg'
  },
  {
    id: 2,
    title: 'Вилла Премиум',
    area: '240 м²',
    floors: 2,
    price: 'от 8.2 млн ₽',
    category: 'house',
    image: '/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg'
  },
  {
    id: 3,
    title: 'Особняк Семейный',
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
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 font-medium tracking-wide">Архитектурные решения</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Эксклюзивные проекты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Авторская архитектура или индивидуальная разработка по вашим пожеланиям
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-16">
          <Button 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-primary text-white font-semibold' : 'border-2 font-medium'}
          >
            Все проекты
          </Button>
          <Button 
            variant={selectedCategory === 'cottage' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('cottage')}
            className={selectedCategory === 'cottage' ? 'bg-primary text-white font-semibold' : 'border-2 font-medium'}
          >
            Коттеджи
          </Button>
          <Button 
            variant={selectedCategory === 'house' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('house')}
            className={selectedCategory === 'house' ? 'bg-primary text-white font-semibold' : 'border-2 font-medium'}
          >
            Особняки
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-scale-in border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 bg-accent text-primary px-4 py-2 rounded-md text-sm font-bold shadow-lg">
                  {project.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Home" size={20} />
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Layers" size={20} />
                    <span className="font-medium">{project.floors} уровень</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                  Изучить проект
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
