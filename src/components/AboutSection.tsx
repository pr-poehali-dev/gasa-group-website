import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}
