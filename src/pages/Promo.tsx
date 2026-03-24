import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const promoCodes = [
  {
    code: "ASTELLAS",
    bonus: "+10% к получаемому опыту",
    expires: "Бессрочно",
    type: "Опыт",
    color: "#FF8C00",
    active: true,
    description: "Бонус к опыту за все действия на сервере",
  },
  {
    code: "START2025",
    bonus: "Стартовый набор выжившего",
    expires: "31.12.2025",
    type: "Предметы",
    color: "#39FF14",
    active: true,
    description: "Набор начинающего: еда, вода, базовые инструменты",
  },
  {
    code: "DISCORD10",
    bonus: "10 золотых монет",
    expires: "01.09.2025",
    type: "Валюта",
    color: "#5865F2",
    active: true,
    description: "Внутриигровая валюта для покупок в игровом магазине",
  },
  {
    code: "VK_ASTELLAS",
    bonus: "+5% к скорости крафта",
    expires: "15.08.2025",
    type: "Бонус",
    color: "#0077FF",
    active: true,
    description: "Постоянный бонус к скорости создания предметов",
  },
  {
    code: "OLDBOY",
    bonus: "Эксклюзивный скин одежды",
    expires: "Истёк",
    type: "Косметика",
    color: "#555",
    active: false,
    description: "Ограниченный скин для старых игроков сервера",
  },
  {
    code: "NEWWAVE",
    bonus: "+15% к опыту (неделя)",
    expires: "Истёк",
    type: "Опыт",
    color: "#555",
    active: false,
    description: "Временный бонус к опыту на 7 дней",
  },
];

const typeColors: Record<string, string> = {
  "Опыт": "#FF8C00",
  "Предметы": "#39FF14",
  "Валюта": "#5865F2",
  "Бонус": "#0077FF",
  "Косметика": "#888",
};

export default function Promo() {
  const [copied, setCopied] = useState<string | null>(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const active = promoCodes.filter((p) => p.active);
  const expired = promoCodes.filter((p) => !p.active);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,140,0,0.05),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/60 to-transparent" />
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="font-orbitron text-[#FF8C00] text-xs tracking-[0.4em] uppercase">Бонусы</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Промокоды
          </h1>
          <p className="font-rc text-gray-400 text-lg leading-relaxed">
            Активные промокоды для получения бонусов на сервере. Вводи в меню персонажа или в магазине.
          </p>
        </div>
      </div>

      {/* How to use */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="border border-[#FF8C00]/20 bg-[#0d0a05] px-6 py-5 flex items-start gap-4">
          <div className="w-10 h-10 border border-[#FF8C00]/30 flex items-center justify-center shrink-0">
            <Icon name="Info" size={18} className="text-[#FF8C00]" />
          </div>
          <div>
            <div className="font-orbitron text-[#FF8C00] text-sm font-bold tracking-wider mb-1">Как использовать</div>
            <div className="font-rc text-gray-400 text-sm leading-relaxed">
              Скопируй промокод → Зайди на сервер → Открой меню (клавиша P) → Вкладка «Промокоды» → Введи код и нажми «Применить». Каждый промокод можно использовать один раз.
            </div>
          </div>
        </div>
      </section>

      {/* Active codes */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-[#39FF14]" />
          <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Активные</h2>
          <div className="ml-2 px-2 py-0.5 bg-[#39FF14]/10 border border-[#39FF14]/30">
            <span className="font-orbitron text-[#39FF14] text-xs">{active.length}</span>
          </div>
        </div>

        <div className="space-y-3">
          {active.map((p) => (
            <div key={p.code} className="relative border border-[#1e1e1e] hover:border-[#FF8C00]/30 bg-[#0d0d0d] transition-all overflow-hidden group">
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: p.color }}
              />
              <div className="pl-5 pr-6 py-5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div
                      className="font-orbitron text-xl font-black tracking-widest"
                      style={{ color: p.color }}
                    >
                      {p.code}
                    </div>
                    <span
                      className="font-rc text-[10px] uppercase tracking-wider px-2 py-0.5"
                      style={{ color: typeColors[p.type], backgroundColor: `${typeColors[p.type]}15`, border: `1px solid ${typeColors[p.type]}30` }}
                    >
                      {p.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] pulse-green" />
                      <span className="font-rc text-[#39FF14] text-xs">Активен</span>
                    </div>
                  </div>
                  <div className="font-rc text-white text-sm mb-1">{p.bonus}</div>
                  <div className="font-rc text-gray-600 text-xs">{p.description}</div>
                </div>

                <div className="flex flex-col md:items-end gap-2 shrink-0">
                  <div className="font-rc text-gray-600 text-xs">До: {p.expires}</div>
                  <button
                    onClick={() => handleCopy(p.code)}
                    className={`flex items-center gap-2 px-5 py-2.5 font-orbitron text-xs uppercase tracking-wider border transition-all ${
                      copied === p.code
                        ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10"
                        : "border-[#FF8C00]/50 text-[#FF8C00] hover:bg-[#FF8C00] hover:text-black"
                    }`}
                  >
                    <Icon name={copied === p.code ? "Check" : "Copy"} size={14} />
                    {copied === p.code ? "Скопировано!" : "Скопировать"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expired codes */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-gray-600" />
          <h2 className="font-orbitron text-gray-600 text-xl font-bold tracking-widest uppercase">Истёкшие</h2>
        </div>
        <div className="space-y-3">
          {expired.map((p) => (
            <div key={p.code} className="relative border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden opacity-50">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600" />
              <div className="pl-5 pr-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-orbitron text-gray-500 text-lg font-black tracking-widest line-through">{p.code}</div>
                  <div className="font-rc text-gray-600 text-xs mt-1">{p.bonus}</div>
                </div>
                <div className="font-rc text-gray-700 text-xs border border-gray-700 px-3 py-1">Истёк</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="font-rc text-gray-600 text-sm mb-2">Следи за новыми промокодами в нашем сообществе</div>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-[#1e1e1e] text-[#5865F2] font-rc text-xs uppercase tracking-wider hover:border-[#5865F2]/40 transition-colors">
              <span>💬</span> Discord
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-[#1e1e1e] text-[#0077FF] font-rc text-xs uppercase tracking-wider hover:border-[#0077FF]/40 transition-colors">
              <span>🔵</span> ВКонтакте
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-[#1e1e1e] text-[#26A5E4] font-rc text-xs uppercase tracking-wider hover:border-[#26A5E4]/40 transition-colors">
              <span>✈️</span> Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
