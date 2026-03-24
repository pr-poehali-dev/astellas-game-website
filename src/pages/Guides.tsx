import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

type GuideCategory = "all" | "survival" | "craft" | "locations" | "tips";

const guides = [
  {
    category: "survival",
    categoryLabel: "Выживание",
    icon: "Heart",
    color: "#FF2020",
    title: "Основы выживания",
    desc: "Контроль здоровья, голода, жажды и температуры. Как не умереть в первые 20 минут на сервере.",
    readTime: "5 мин",
    difficulty: "Новичок",
  },
  {
    category: "survival",
    categoryLabel: "Выживание",
    icon: "Zap",
    color: "#FF2020",
    title: "Медицина и лечение",
    desc: "Перевязки, переломы, болезни и их лечение. Полный список медикаментов и их применение.",
    readTime: "8 мин",
    difficulty: "Средний",
  },
  {
    category: "craft",
    categoryLabel: "Крафт",
    icon: "Wrench",
    color: "#FF8C00",
    title: "Крафт оружия",
    desc: "Как создать самодельное оружие из подручных материалов. Список рецептов и необходимые ресурсы.",
    readTime: "10 мин",
    difficulty: "Средний",
  },
  {
    category: "craft",
    categoryLabel: "Крафт",
    icon: "Home",
    color: "#FF8C00",
    title: "Строительство базы",
    desc: "Пошаговое руководство по постройке укреплённой базы. Какие материалы нужны, как расставить ловушки.",
    readTime: "15 мин",
    difficulty: "Продвинутый",
  },
  {
    category: "locations",
    categoryLabel: "Локации",
    icon: "Map",
    color: "#39FF14",
    title: "Лучшие места для лута",
    desc: "Топ локаций для сбора редкого лута: военные базы, больницы, супермаркеты и секретные бункеры.",
    readTime: "7 мин",
    difficulty: "Средний",
  },
  {
    category: "locations",
    categoryLabel: "Локации",
    icon: "Crosshair",
    color: "#39FF14",
    title: "Секретные бункеры 2035",
    desc: "Расположение всех секретных бункеров на карте Chernarus 2035. Как попасть внутрь и что там найти.",
    readTime: "12 мин",
    difficulty: "Продвинутый",
  },
  {
    category: "tips",
    categoryLabel: "Советы",
    icon: "Users",
    color: "#5865F2",
    title: "Игра в команде",
    desc: "Эффективная координация, распределение ролей и тактики для группы выживших.",
    readTime: "6 мин",
    difficulty: "Новичок",
  },
  {
    category: "tips",
    categoryLabel: "Советы",
    icon: "TrendingUp",
    color: "#5865F2",
    title: "Прокачка персонажа",
    desc: "Система опыта, прокачки навыков и привилегий. Как быстро развиться на сервере.",
    readTime: "9 мин",
    difficulty: "Средний",
  },
];

const categoryTabs: { key: GuideCategory; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "survival", label: "Выживание" },
  { key: "craft", label: "Крафт" },
  { key: "locations", label: "Локации" },
  { key: "tips", label: "Советы" },
];

const difficultyColor: Record<string, string> = {
  "Новичок": "#39FF14",
  "Средний": "#FF8C00",
  "Продвинутый": "#FF2020",
};

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState<GuideCategory>("all");
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeCategory === "all"
    ? guides
    : guides.filter((g) => g.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,140,0,0.05),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="font-orbitron text-[#FF8C00] text-xs tracking-[0.4em] uppercase">База знаний</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Гайды
          </h1>
          <p className="font-rc text-gray-400 text-lg leading-relaxed">
            Подробные руководства по выживанию на сервере Astellas. От основ до продвинутых техник.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-6xl mx-auto px-4 my-2 py-4">
        <div className="flex flex-wrap gap-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 font-orbitron text-xs uppercase tracking-wider border transition-all ${
                activeCategory === tab.key
                  ? "border-[#FF8C00] bg-[#FF8C00] text-black font-bold"
                  : "border-[#1e1e1e] text-gray-500 hover:border-[#FF8C00]/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((guide, i) => (
            <div
              key={i}
              className="group relative border border-[#1e1e1e] bg-[#0d0d0d] p-6 hover:border-[#FF8C00]/30 transition-all overflow-hidden cursor-pointer"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${guide.color}60, transparent)` }}
              />
              <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: guide.color }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 border flex items-center justify-center"
                  style={{ borderColor: `${guide.color}40`, color: guide.color }}
                >
                  <Icon name={guide.icon} size={18} fallback="BookOpen" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-rc text-[10px] uppercase tracking-wider px-2 py-0.5 border"
                    style={{ color: guide.categoryLabel === "Выживание" ? "#FF2020" : guide.categoryLabel === "Крафт" ? "#FF8C00" : guide.categoryLabel === "Локации" ? "#39FF14" : "#5865F2", borderColor: "transparent", backgroundColor: `${guide.color}15` }}
                  >
                    {guide.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="font-orbitron text-white text-sm font-bold mb-2 tracking-wider group-hover:text-[#FF8C00] transition-colors">
                {guide.title}
              </div>
              <div className="font-rc text-gray-500 text-xs leading-relaxed mb-4">{guide.desc}</div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-rc text-gray-600 text-xs">
                    <Icon name="Clock" size={10} />
                    {guide.readTime}
                  </span>
                  <span
                    className="font-rc text-xs"
                    style={{ color: difficultyColor[guide.difficulty] }}
                  >
                    {guide.difficulty}
                  </span>
                </div>
                <Icon name="ArrowRight" size={14} className="text-gray-600 group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="font-orbitron text-gray-600 text-sm">Гайды в разработке...</div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}