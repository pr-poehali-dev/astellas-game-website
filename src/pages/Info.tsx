import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    color: "#39FF14",
    title: "PVE режим",
    desc: "Никакого PVP. Здесь враги — зомби, дикие животные и суровая природа. Сражайся с угрозами, а не с другими выжившими.",
  },
  {
    icon: "Map",
    color: "#FF8C00",
    title: "Chernarus 2035",
    desc: "Переработанная карта с новыми локациями, секретными бункерами и изменённым ландшафтом. Мир изменился — исследуй его.",
  },
  {
    icon: "Zap",
    color: "#FF8C00",
    title: "Моды и контент",
    desc: "Расширенный список модификаций: новое оружие, транспорт, предметы и система крафта. Всегда что-то новое.",
  },
  {
    icon: "Users",
    color: "#39FF14",
    title: "Активное сообщество",
    desc: "Дружелюбные игроки, регулярные ивенты от администрации, конкурсы с наградами и активный Discord.",
  },
  {
    icon: "Clock",
    color: "#FF8C00",
    title: "24/7 онлайн",
    desc: "Сервер работает круглосуточно без плановых остановок. Выживай в любое удобное время.",
  },
  {
    icon: "Trophy",
    color: "#39FF14",
    title: "Ивенты и события",
    desc: "Регулярные мероприятия: охота на боссов, экспедиции, соревнования выживших с реальными наградами.",
  },
];

const serverInfo = [
  { label: "Адрес", value: "play.astellas.ru:2302" },
  { label: "Карта", value: "Chernarus 2035" },
  { label: "Режим", value: "PVE" },
  { label: "Слоты", value: "60 игроков" },
  { label: "Версия", value: "DayZ 1.25" },
  { label: "Рестарты", value: "Каждые 4 часа" },
  { label: "Язык", value: "Русский" },
  { label: "Uptime", value: "99.8%" },
];

export default function Info() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
            <span className="font-orbitron text-[#FF8C00] text-xs tracking-[0.4em] uppercase">О проекте</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Информация
          </h1>
          <p className="font-rc text-gray-400 text-lg leading-relaxed max-w-2xl">
            Astellas — это постапокалиптический PVE-сервер DayZ с уникальной атмосферой, проработанными модами и дружелюбным сообществом выживших.
          </p>
        </div>
      </div>

      {/* Server info table */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-[#FF8C00]" />
          <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Параметры сервера</h2>
        </div>
        <div className="border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden hud-corner">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {serverInfo.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 border-b border-[#1e1e1e] ${
                  i % 2 === 0 ? "md:border-r" : ""
                } last:border-b-0`}
              >
                <span className="font-rc text-gray-500 text-sm uppercase tracking-wider">{item.label}</span>
                <span className="font-orbitron text-white text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#FF8C00]" />
          <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Особенности сервера</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="group relative border border-[#1e1e1e] bg-[#0d0d0d] p-6 hover:border-[#FF8C00]/30 transition-all overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${f.color}50, transparent)` }}
              />
              <div
                className="w-10 h-10 border flex items-center justify-center mb-4"
                style={{ borderColor: `${f.color}40`, color: f.color }}
              >
                <Icon name={f.icon} size={18} fallback="Star" />
              </div>
              <div className="font-orbitron text-white text-sm font-bold mb-2 tracking-wider">{f.title}</div>
              <div className="font-rc text-gray-500 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
