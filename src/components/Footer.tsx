import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}
