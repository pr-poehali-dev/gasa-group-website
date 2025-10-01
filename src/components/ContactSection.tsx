import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  return (
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
  );
}
