import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickFormOpen, setQuickFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [consultFormOpen, setConsultFormOpen] = useState(false);
  const [consultData, setConsultData] = useState({ 
    name: '', 
    phone: '', 
    privacyConsent: false, 
    dataConsent: false 
  });

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
      description: 'Помогаем с покупкой участка и получением разрешений. Оформление ипотеки.'
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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/16e58f4c-224d-4d3b-bca6-7092af1d374f.png" 
                alt="ГАСА ГРУПП" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg">Проекты</a>
              <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg">Портфолио</a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg">Услуги</a>
              <a href="#advantages" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg">Преимущества</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg">Контакты</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:+79398818942">
                <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 shadow-md hover:shadow-lg transition-all text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Звонок
                </Button>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img 
                  src="https://cdn.poehali.dev/files/16e58f4c-224d-4d3b-bca6-7092af1d374f.png" 
                  alt="ГАСА ГРУПП" 
                  className="h-12 w-auto"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                <a 
                  href="#projects" 
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Проекты
                </a>
                <a 
                  href="#portfolio" 
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Портфолио
                </a>
                <a 
                  href="#services" 
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#advantages" 
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Преимущества
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </nav>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Позвоните нам</p>
                    <a href="tel:+79398818942" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                      +7 (939) 881-89-42
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <a href="https://wa.me/79398818942" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button 
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="https://t.me/+79398818942" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button 
                      className="bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon name="Send" size={18} className="mr-2" />
                      Telegram
                    </Button>
                  </a>
                </div>
                <a href="tel:+79398818942" className="block mt-3">
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/5 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Краснодар и Адыгея</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-foreground">
                Строим дома для вашей семьи
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Создаём пространство для семейного счастья и уюта. Полный цикл строительства с заботой о каждой детали — от фундамента до последнего штриха в интерьере.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setConsultFormOpen(true)}
                >
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent/30 text-foreground hover:bg-accent/5 rounded-full px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="mt-16 grid grid-cols-3 gap-8">
                <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent/10">
                  <div className="text-5xl font-bold text-accent mb-2">120+</div>
                  <div className="text-muted-foreground text-sm">Счастливых семей</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent/10">
                  <div className="text-5xl font-bold text-accent mb-2">4 мес</div>
                  <div className="text-muted-foreground text-sm">До новоселья</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent/10">
                  <div className="text-5xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground text-sm">Забота о вас</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="/img/7bd914ba-6370-4f05-b79b-f27333997911.jpg" 
                  alt="Строительство" 
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-accent px-5 py-3 rounded-full flex items-center gap-2 shadow-lg border border-accent/20">
                  <Icon name="Video" size={18} />
                  <span className="text-sm font-semibold">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Почему нам доверяют семьи</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Наши ценности</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы строим не просто дома — мы создаём пространство для семейного тепла, уюта и счастья
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white/80 backdrop-blur-sm rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-accent/20">
                    <Icon name={advantage.icon} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Готовые решения</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Проекты домов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Каждый проект продуман до мелочей для комфорта вашей семьи
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-16">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-8 ${selectedCategory === 'all' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md' : 'border-2 border-accent/30 hover:bg-accent/5'}`}
            >
              Все проекты
            </Button>
            <Button 
              variant={selectedCategory === 'cottage' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('cottage')}
              className={`rounded-full px-8 ${selectedCategory === 'cottage' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md' : 'border-2 border-accent/30 hover:bg-accent/5'}`}
            >Одноэтажные</Button>
            <Button 
              variant={selectedCategory === 'house' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('house')}
              className={`rounded-full px-8 ${selectedCategory === 'house' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md' : 'border-2 border-accent/30 hover:bg-accent/5'}`}
            >Двухэтажные</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in bg-white border-2 border-accent/10 rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-accent px-5 py-2 rounded-full text-sm font-bold shadow-lg border border-accent/20">
                    {project.price}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Home" size={20} className="text-accent" />
                      <span className="font-medium">{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Layers" size={20} className="text-accent" />
                      <span className="font-medium">{project.floors} этаж</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setShowConsultForm(true)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Истории счастливых семей</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Более 120 семей уже нашли свой дом мечты вместе с нами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in bg-white border-2 border-accent/10 rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2">
                          <Icon name="MapPin" size={18} />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Icon name="Home" size={18} />
                          {item.area}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/10 font-medium group">
                      Смотреть проект
                      <Icon name="ArrowRight" size={16} className="ml-2 animate-arrow transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Наш путь к вашему дому</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Этапы сотрудничества</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              От первой встречи до радостного новоселья — мы рядом на каждом шагу
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-2 border-accent/10 rounded-3xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-7xl font-bold text-accent/15 mb-6 group-hover:text-accent/25 transition-colors">{service.number}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[3rem] group-hover:bg-accent/10 transition-colors"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-br from-accent/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Наша история</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">О компании ГАСА ГРУПП</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Мы — команда единомышленников, для которых строительство дома — это создание пространства для семейного счастья. Мы верим в честность, качество и бережное отношение к каждому клиенту.
              </p>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Наша миссия — сделать процесс строительства простым, понятным и радостным. Каждая семья заслуживает дом, где каждая деталь продумана с любовью.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/20 hover:shadow-lg transition-shadow">
                  <Icon name="Award" className="text-accent mb-3" size={36} />
                  <div className="text-3xl font-bold text-foreground mb-1">4 года</div>
                  <div className="text-muted-foreground">в сердцах клиентов</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/20 hover:shadow-lg transition-shadow">
                  <Icon name="Users" className="text-accent mb-3" size={36} />
                  <div className="text-3xl font-bold text-foreground mb-1">120+</div>
                  <div className="text-muted-foreground">счастливых семей</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg" 
                  alt="Дом" 
                  className="rounded-3xl shadow-2xl border-4 border-white/50"
                />
                <img 
                  src="/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg" 
                  alt="Коттедж" 
                  className="rounded-3xl shadow-2xl mt-12 border-4 border-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium rounded-full">Свяжитесь с нами</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Начнём ваш путь</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Оставьте заявку, и мы с радостью поделимся своими знаниями и поможем создать дом вашей мечты
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in bg-white border-2 border-accent/10 rounded-3xl shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-foreground">Отправить заявку</h3>
                  <form className="space-y-6">
                    <div>
                      <Input placeholder="Ваше имя" className="rounded-xl border-2 border-accent/20 focus:border-accent h-12" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="rounded-xl border-2 border-accent/20 focus:border-accent h-12" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="rounded-xl border-2 border-accent/20 focus:border-accent h-12" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажите о вашем проекте" rows={4} className="rounded-xl border-2 border-accent/20 focus:border-accent" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="bg-white border-2 border-accent/10 rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                      <Icon name="MapPin" className="text-accent" size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg text-foreground">Адрес офиса</h4>
                      <p className="text-muted-foreground">г. Краснодар, ул. Красная, 176</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-accent/10 rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                      <Icon name="Phone" className="text-accent" size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg text-foreground">Телефон</h4>
                      <a href="tel:+79398818942" className="text-muted-foreground font-medium hover:text-accent transition-colors block">
                        +7 (939) 881-89-42
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-accent/10 rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                      <Icon name="Mail" className="text-accent" size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg text-foreground">Email</h4>
                      <p className="text-muted-foreground font-medium">gasagrupp@bk.ru</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-accent/10 rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                      <Icon name="Clock" className="text-accent" size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg text-foreground">Режим работы</h4>
                      <p className="text-muted-foreground font-medium">Пн-Пт: 10:00-18:00</p>
                      <p className="text-muted-foreground font-medium">Сб-Вс: 10:00-17:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-accent/15 to-accent/10 py-16 border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/16e58f4c-224d-4d3b-bca6-7092af1d374f.png" 
                  alt="ГАСА ГРУПП" 
                  className="h-16 w-auto mb-4"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Создаём дома для семейного счастья в Краснодаре и Адыгее
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground text-lg">Навигация</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#projects" className="hover:text-accent transition-colors font-medium">Проекты</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors font-medium">Портфолио</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors font-medium">Услуги</a></li>
                <li><a href="#advantages" className="hover:text-accent transition-colors font-medium">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground text-lg">Контакты</h4>
              <ul className="space-y-3 text-muted-foreground font-medium">
                <li><a href="tel:+79398818942" className="hover:text-accent transition-colors">+7 (939) 881-89-42</a></li>
                <li><a href="mailto:info@gasagroup.ru" className="hover:text-accent transition-colors">info@gasagroup.ru</a></li>
                <li>г. Краснодар, ул. Красная, 176</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground text-lg">Мессенджеры</h4>
              <div className="flex gap-3">
                <a href="https://wa.me/79398818942" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="border-2 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground rounded-full">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </a>
                <a href="https://t.me/+79398818942" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="border-2 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground rounded-full">
                    <Icon name="Send" size={20} />
                  </Button>
                </a>
                <a href="tel:+79398818942">
                  <Button size="icon" variant="outline" className="border-2 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground rounded-full">
                    <Icon name="Phone" size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-accent/20 pt-8 text-center text-muted-foreground">
            <p className="font-medium">© 2024 ГАСА ГРУПП. Создано с любовью для вашей семьи.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
        <a 
          href="https://wa.me/79398818942" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <p className="text-sm font-medium text-foreground">Написать в WhatsApp</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
            <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer animate-bounce-slow">
              <Icon name="MessageCircle" className="text-white" size={28} />
            </div>
          </div>
        </a>
        <a 
          href="https://t.me/+79398818942" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <p className="text-sm font-medium text-foreground">Написать в Telegram</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0088cc] rounded-full animate-ping opacity-75"></div>
            <div className="relative w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
              <Icon name="Send" className="text-white" size={28} />
            </div>
          </div>
        </a>
        <button 
          onClick={() => setQuickFormOpen(true)}
          className="group relative"
        >
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <p className="text-sm font-medium text-foreground">Быстрая заявка</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
            <div className="relative w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
              <Icon name="Mail" className="text-accent-foreground" size={28} />
            </div>
          </div>
        </button>
      </div>

      {quickFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setQuickFormOpen(false)}>
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Быстрая заявка</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setQuickFormOpen(false)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">
              Оставьте контакты, и мы перезвоним в течение 15 минут
            </p>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
              setQuickFormOpen(false);
              setFormData({ name: '', phone: '' });
            }}>
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border-2 border-accent/20 focus:border-accent h-12"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="rounded-xl border-2 border-accent/20 focus:border-accent h-12"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Перезвоните мне
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      )}

      {consultFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setConsultFormOpen(false)}>
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full animate-fade-in-scale shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Получить консультацию</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setConsultFormOpen(false)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для бесплатной консультации
            </p>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              if (!consultData.privacyConsent || !consultData.dataConsent) {
                alert('Необходимо согласие с политикой конфиденциальности и обработкой персональных данных');
                return;
              }
              alert(`Спасибо, ${consultData.name}! Мы свяжемся с вами по номеру ${consultData.phone}`);
              setConsultFormOpen(false);
              setConsultData({ name: '', phone: '', privacyConsent: false, dataConsent: false });
            }}>
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  value={consultData.name}
                  onChange={(e) => setConsultData({ ...consultData, name: e.target.value })}
                  required
                  className="rounded-xl border-2 border-accent/20 focus:border-accent h-12"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Номер телефона" 
                  value={consultData.phone}
                  onChange={(e) => setConsultData({ ...consultData, phone: e.target.value })}
                  required
                  className="rounded-xl border-2 border-accent/20 focus:border-accent h-12"
                />
              </div>
              
              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5 transition-all">
                  <Icon name="Shield" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <input
                    type="checkbox"
                    checked={consultData.privacyConsent}
                    onChange={(e) => setConsultData({ ...consultData, privacyConsent: e.target.checked })}
                    required
                    className="mt-0.5 w-6 h-6 rounded-md border-2 border-accent/50 text-accent focus:ring-accent focus:ring-2 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    Я согласен с <Link to="/privacy" target="_blank" className="text-accent font-semibold underline hover:no-underline">политикой конфиденциальности</Link>
                  </span>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5 transition-all">
                  <Icon name="FileText" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <input
                    type="checkbox"
                    checked={consultData.dataConsent}
                    onChange={(e) => setConsultData({ ...consultData, dataConsent: e.target.checked })}
                    required
                    className="mt-0.5 w-6 h-6 rounded-md border-2 border-accent/50 text-accent focus:ring-accent focus:ring-2 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    Я согласен на <Link to="/personal-data" target="_blank" className="text-accent font-semibold underline hover:no-underline">обработку персональных данных</Link>
                  </span>
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all mt-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-background/50 backdrop-blur-sm border-t border-accent/10 py-12 mt-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Консалтинговые услуги. Все права защищены.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/privacy" 
                target="_blank"
                className="text-sm text-muted-foreground hover:text-accent transition-colors underline hover:no-underline"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/personal-data" 
                target="_blank"
                className="text-sm text-muted-foreground hover:text-accent transition-colors underline hover:no-underline"
              >
                Обработка персональных данных
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;