import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-primary via-primary/98 to-primary/95">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 font-medium tracking-wide">Наша история</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white text-balance leading-tight">О компании<br/>ГАСА ГРУПП</h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed font-light">
              Мы — элитная команда архитекторов, инженеров и дизайнеров с безупречной репутацией 
              в сфере премиального строительства. Работаем напрямую, предлагая эксклюзивное качество 
              по честной цене.
            </p>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              Наша философия — абсолютная прозрачность и персональный подход к каждому клиенту. 
              Система видеонаблюдения 24/7 и личный куратор проекта гарантируют полный контроль 
              на всех этапах строительства.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
                <Icon name="Award" className="text-accent mb-3" size={36} />
                <div className="text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">лет безупречной работы</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
                <Icon name="Users" className="text-accent mb-3" size={36} />
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">довольных владельцев</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/img/f6037ffa-29b7-40be-b601-9c4757b868d7.jpg" 
                alt="Элитный дом" 
                className="rounded-lg shadow-2xl shadow-black/30 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/img/e1169cc6-c6e3-4c1f-9502-35ffadb88586.jpg" 
                alt="Премиум коттедж" 
                className="rounded-lg shadow-2xl shadow-black/30 mt-12 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
