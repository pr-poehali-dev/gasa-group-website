import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded flex items-center justify-center">
                <Icon name="Home" className="text-primary" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ГАСА ГРУПП</h3>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Премиальное строительство частных резиденций в Краснодаре и Республике Адыгея
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Навигация</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#projects" className="hover:text-accent transition">Проекты</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition">Портфолио</a></li>
              <li><a href="#services" className="hover:text-accent transition">Услуги</a></li>
              <li><a href="#advantages" className="hover:text-accent transition">Преимущества</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Контакты</h4>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-accent transition cursor-pointer">+7 (861) 123-45-67</li>
              <li className="hover:text-accent transition cursor-pointer">info@gasagroup.ru</li>
              <li>г. Краснодар<br/>ул. Красная, 176</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Мы в сети</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2024 ГАСА ГРУПП. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
