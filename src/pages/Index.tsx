import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Home" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ГАСА ГРУПП</h1>
                <p className="text-xs text-white/70">Строительство домов</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#projects" className="text-white/90 hover:text-white transition">Проекты</a>
              <a href="#portfolio" className="text-white/90 hover:text-white transition">Портфолио</a>
              <a href="#services" className="text-white/90 hover:text-white transition">Услуги</a>
              <a href="#advantages" className="text-white/90 hover:text-white transition">Преимущества</a>
              <a href="#contact" className="text-white/90 hover:text-white transition">Контакты</a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

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

      <section id="about" className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-accent text-white">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании ГАСА ГРУПП</h2>
              <p className="text-lg text-white/90 mb-6">
                Мы — команда профессионалов с многолетним опытом в строительстве частных домов. 
                Работаем напрямую, без посредников, что позволяет нам гарантировать высокое качество 
                по справедливой цене.
              </p>
              <p className="text-lg text-white/90 mb-8">
                Наша миссия — сделать процесс строительства дома максимально простым и прозрачным для вас. 
                Камеры видеонаблюдения на каждом объекте позволяют отслеживать ход работ в режиме реального времени.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Award" className="text-accent mb-2" size={32} />
                  <div className="text-2xl font-bold">15+ лет</div>
                  <div className="text-white/70">на рынке</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon name="Users" className="text-accent mb-2" size={32} />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-white/70">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg" 
                  alt="Дом" 
                  className="rounded-2xl shadow-xl"
                />
                <img 
                  src="/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg" 
                  alt="Коттедж" 
                  className="rounded-2xl shadow-xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent text-white">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и получите бесплатную консультацию
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Адрес офиса</h4>
                      <p className="text-muted-foreground">г. Краснодар, ул. Красная, 176</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (861) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (918) 987-65-43</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@gasagroup.ru</p>
                      <p className="text-muted-foreground">sales@gasagroup.ru</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 17:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">ГАСА ГРУПП</h3>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Строительство частных домов в Краснодаре и Республике Адыгея
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#projects" className="hover:text-white transition">Проекты</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Портфолио</a></li>
                <li><a href="#services" className="hover:text-white transition">Услуги</a></li>
                <li><a href="#advantages" className="hover:text-white transition">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+7 (861) 123-45-67</li>
                <li>info@gasagroup.ru</li>
                <li>г. Краснодар, ул. Красная, 176</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 ГАСА ГРУПП. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
