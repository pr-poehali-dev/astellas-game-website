import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "Download",
    title: "Купи DayZ Standalone",
    color: "#FF8C00",
    desc: "Приобрети DayZ в Steam. Для игры необходима лицензионная копия игры. После покупки установи её через клиент Steam.",
    link: { text: "Открыть в Steam", href: "https://store.steampowered.com/app/221100/DayZ/" },
  },
  {
    num: "02",
    icon: "Settings",
    title: "Установи моды",
    color: "#FF8C00",
    desc: "Зайди на страницу мастерской Steam нашего сервера и подпишись на все необходимые моды. Они загрузятся автоматически при запуске лаунчера.",
    link: { text: "Список модов", href: "#" },
  },
  {
    num: "03",
    icon: "Search",
    title: "Найди сервер",
    color: "#39FF14",
    desc: "В главном меню DayZ выбери \"Community\" → \"Найти сервер\" → введи в строке поиска \"Astellas\" или введи IP напрямую.",
    tip: "IP: play.astellas.ru:2302",
  },
  {
    num: "04",
    icon: "Play",
    title: "Подключись и выживи",
    color: "#39FF14",
    desc: "Двойной клик по серверу в списке → дождись загрузки → выбери точку спавна. Добро пожаловать в Chernarus 2035!",
  },
];

const tips = [
  { icon: "Heart", text: "Следи за здоровьем, голодом и жаждой — это главные показатели выживания" },
  { icon: "Backpack", text: "Собирай предметы в домах: консервы, одежда, медикаменты — всё пригодится" },
  { icon: "Users", text: "Находи других игроков. В команде выжить гораздо легче" },
  { icon: "MessageCircle", text: "Используй внутриигровой чат и Discord для координации" },
  { icon: "Map", text: "Изучи карту заранее — знание локаций даёт огромное преимущество" },
  { icon: "Flame", text: "Разведи костёр ночью — он согреет и отпугнёт опасность" },
];

export default function HowToPlay() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(57,255,20,0.04),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent" />
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#39FF14]" />
            <span className="font-orbitron text-[#39FF14] text-xs tracking-[0.4em] uppercase">Инструкция</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Как начать игру
          </h1>
          <p className="font-rc text-gray-400 text-lg leading-relaxed">
            Четыре простых шага — и ты уже на сервере Astellas. Весь процесс занимает около 20 минут.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="relative border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: step.color }}
              />
              <div className="pl-6 pr-6 py-6 flex flex-col md:flex-row md:items-start gap-5">
                {/* Number */}
                <div className="flex items-center gap-4 shrink-0">
                  <div
                    className="font-orbitron text-3xl font-black opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="w-10 h-10 border flex items-center justify-center"
                    style={{ borderColor: `${step.color}40`, color: step.color }}
                  >
                    <Icon name={step.icon} size={18} fallback="Play" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="font-orbitron text-white text-base font-bold mb-2 tracking-wider">{step.title}</div>
                  <div className="font-rc text-gray-400 text-sm leading-relaxed mb-3">{step.desc}</div>
                  {step.tip && (
                    <div className="inline-flex items-center gap-2 bg-[#111] border border-[#1e1e1e] px-3 py-2 mt-1">
                      <Icon name="Info" size={12} className="text-[#FF8C00]" />
                      <span className="font-orbitron text-[#FF8C00] text-xs tracking-wider">{step.tip}</span>
                    </div>
                  )}
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 font-rc text-xs uppercase tracking-wider transition-colors"
                      style={{ color: step.color }}
                    >
                      {step.link.text} <Icon name="ExternalLink" size={12} />
                    </a>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-8 -bottom-3 z-10">
                  <Icon name="ChevronDown" size={16} className="text-gray-700" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-[#FF8C00]" />
          <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Советы новичку</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3 border border-[#1e1e1e] bg-[#0d0d0d] px-4 py-4">
              <Icon name={tip.icon} size={16} className="text-[#FF8C00] mt-0.5 shrink-0" fallback="Star" />
              <span className="font-rc text-gray-300 text-sm leading-relaxed">{tip.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="steam://connect/play.astellas.ru:2302"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#FF8C00] text-black font-orbitron font-bold text-sm uppercase tracking-wider hover:bg-[#FF6B00] transition-all pulse-orange"
          >
            <Icon name="Play" size={18} />
            Подключиться к серверу
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
