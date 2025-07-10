import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  benefits: string[];
  image: string;
  inStock: boolean;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    {
      id: 1,
      name: "N-Ацетил L-Цистеин (NAC)",
      category: "Антиоксиданты",
      price: 2990,
      description: "Мощный антиоксидант для восстановления и защиты клеток",
      benefits: ["Антиоксидант", "Восстановление", "Энергия"],
      image:
        "https://cdn.poehali.dev/files/9f1ecc7d-a902-4698-909a-7703250f3a81.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Коэнзим Q10",
      category: "Антиоксиданты",
      price: 3490,
      description:
        "Поддержка сердечно-сосудистой системы и энергетического метаболизма",
      benefits: ["Энергия", "Сердце", "Антиоксидант"],
      image: "https://via.placeholder.com/300x400/f5f5f5/333?text=CoQ10",
      inStock: true,
    },
    {
      id: 3,
      name: "Альфа-липоевая кислота",
      category: "Антиоксиданты",
      price: 2490,
      description:
        "Универсальный антиоксидант для защиты от свободных радикалов",
      benefits: ["Антиоксидант", "Метаболизм", "Защита"],
      image: "https://via.placeholder.com/300x400/f5f5f5/333?text=ALA",
      inStock: true,
    },
    {
      id: 4,
      name: "Глутатион",
      category: "Антиоксиданты",
      price: 4290,
      description: "Главный антиоксидант организма для детоксикации",
      benefits: ["Детокс", "Антиоксидант", "Иммунитет"],
      image: "https://via.placeholder.com/300x400/f5f5f5/333?text=GSH",
      inStock: true,
    },
  ];

  const addToCart = (productId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.poehali.dev/files/42180880-2188-416c-8bc2-d1ff0544851f.png"
                alt="VITAZUN"
                className="h-8 w-auto"
              />
              <h1 className="text-2xl font-bold text-black tracking-tight">
                VITAZUN
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Каталог
              </a>
              <a
                href="#contacts"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
            Антиоксиданты и БАДы
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Сертифицированные продукты премиум-класса для поддержания здоровья и
            энергии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge
              variant="secondary"
              className="bg-black text-white px-4 py-2"
            >
              Сертифицированный продукт
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Без примесей
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              100% состав
            </Badge>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск продуктов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 border-gray-200 focus:border-black focus:ring-black"
              />
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Каталог продуктов
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Премиальные антиоксиданты и БАДы для поддержания здоровья
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 border-gray-100"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-gray-50 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.benefits.map((benefit, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold text-black mb-2 leading-tight">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-black hover:bg-gray-800 text-white"
                      size="sm"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Контакты</h3>
            <p className="text-gray-600">
              Получите консультацию по выбору продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-black mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-black mb-2">Email</h4>
              <p className="text-gray-600">info@vitazun.ru</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-black mb-2">Часы работы</h4>
              <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.poehali.dev/files/42180880-2188-416c-8bc2-d1ff0544851f.png"
                alt="VITAZUN"
                className="h-6 w-auto"
              />
              <span className="text-sm text-gray-600">
                © 2024 VITAZUN. Все права защищены.
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
