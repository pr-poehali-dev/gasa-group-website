import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded flex items-center justify-center">
                <Icon name="Home" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">ГАСА ГРУПП</h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Строительство частных домов в Краснодаре и Республике Адыгея
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#projects" className="hover:text-white transition">Проекты</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Портфолио</a></li>
              <li><a href="#services" className="hover:text-white transition">Услуги</a></li>
              <li><a href="#advantages" className="hover:text-white transition">Преимущества</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="hover:text-white transition cursor-pointer">+7 (861) 123-45-67</li>
              <li className="hover:text-white transition cursor-pointer">info@gasagroup.ru</li>
              <li>г. Краснодар<br/>ул. Красная, 176</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Мы в сети</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary transition-all">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary transition-all">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary transition-all">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© 2024 ГАСА ГРУПП. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}