import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b24c01e4-0a8a-4772-9d6b-ad47f789eacd/files/9b4189a9-9077-4336-b4dc-4cc62c4adca8.jpg";

const PROMO_CODES = [
  { code: "ASTELLAS", bonus: "+10% к опыту", expires: "Бессрочно", active: true },
  { code: "START2025", bonus: "Стартовый набор", expires: "31.12.2025", active: true },
  { code: "DISCORD10", bonus: "10 золотых монет", expires: "01.09.2025", active: true },
];

function ServerStatus() {
  const [players] = useState(24);
  const [maxPlayers] = useState(60);
  const [ping] = useState(18);

  return (
    <div className="relative border border-[#FF8C00]/40 bg-[#0d0d0d] overflow-hidden hud-corner">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent" />
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#39FF14] pulse-green" />
            <span className="font-orbitron text-[#39FF14] text-xs tracking-[0.3em] uppercase">Сервер онлайн</span>
          </div>
          <div className="font-orbitron text-gray-500 text-[10px] tracking-widest">
            SV_STATUS :: ACTIVE
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-3">
            <div className="font-rc text-gray-500 text-xs uppercase tracking-wider mb-1">Игроки</div>
            <div className="font-orbitron text-[#FF8C00] text-2xl font-bold">
              {players}<span className="text-gray-600 text-sm">/{maxPlayers}</span>
            </div>
            <div className="mt-2 h-1 bg-[#1e1e1e] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] transition-all"
                style={{ width: `${(players / maxPlayers) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-3">
            <div className="font-rc text-gray-500 text-xs uppercase tracking-wider mb-1">Карта</div>
            <div className="font-orbitron text-white text-sm font-bold leading-tight">Chernarus<br />2035</div>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-3">
            <div className="font-rc text-gray-500 text-xs uppercase tracking-wider mb-1">Режим</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-orbitron text-[#39FF14] text-lg font-bold">PVE</span>
              <Icon name="Shield" size={16} className="text-[#39FF14]" />
            </div>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-3">
            <div className="font-rc text-gray-500 text-xs uppercase tracking-wider mb-1">Пинг</div>
            <div className="font-orbitron text-[#39FF14] text-2xl font-bold">{ping}<span className="text-xs text-gray-500"> мс</span></div>
            <div className="font-rc text-gray-500 text-[10px] mt-1">Uptime 99.8%</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between bg-[#0a0a0a] border border-[#1e1e1e] px-4 py-2">
          <div className="flex items-center gap-2">
            <Icon name="Server" size={14} className="text-[#FF8C00]" />
            <span className="font-rc text-gray-500 text-xs uppercase tracking-wider">IP:</span>
            <span className="font-orbitron text-white text-sm tracking-wider">play.astellas.ru:2302</span>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText("play.astellas.ru:2302")}
            className="flex items-center gap-1 text-[#FF8C00] hover:text-white transition-colors"
          >
            <Icon name="Copy" size={14} />
            <span className="font-rc text-xs uppercase">Копировать</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />
    </div>
  );
}

export default function Index() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-white py-[19px] my-0">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Astellas" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-[#090909]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/60 to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-20 py-0"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")", backgroundSize: "150px" }}
        />
        <div className="absolute top-24 right-8 font-orbitron text-[#FF8C00]/20 text-[10px] tracking-[0.4em] uppercase rotate-90">
          CHERNARUS · 2035
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full animate-fade-in-up py-[265px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="font-orbitron text-[#FF8C00] text-xs tracking-[0.4em] uppercase">DayZ Standalone</span>
          </div>
          <h1 className="font-orbitron font-black text-6xl md:text-8xl text-white mb-2 tracking-tight leading-none glitch">
            ASTELLAS
          </h1>
          <div className="font-rc text-gray-400 text-xl md:text-2xl tracking-widest uppercase mb-8">
            Выживи. Объединись. Стань легендой.
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="steam://connect/play.astellas.ru:2302"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8C00] text-black font-orbitron font-bold text-sm uppercase tracking-wider hover:bg-[#FF6B00] transition-all pulse-orange"
            >
              <Icon name="Play" size={18} />
              Начать игру
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF8C00]/50 text-[#FF8C00] font-orbitron text-sm uppercase tracking-wider hover:bg-[#FF8C00]/10 transition-all"
            >
              <span>💬</span>
              Discord сервер
            </a>
          </div>
        </div>
      </section>

      {/* SERVER STATUS */}
      <section className="relative z-10 -mt-6 max-w-7xl mx-auto px-4 py-[39px] rounded-0 my-0.5">
        <ServerStatus />
      </section>

      {/* COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 py-0 my-[29px]">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#FF8C00]" />
          <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Сообщество</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="group relative border border-[#1e1e1e] hover:border-[#5865F2]/60 bg-[#0d0d0d] p-6 transition-all hover:bg-[#5865F2]/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5865F2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-5xl mb-4">💬</div>
            <div className="font-orbitron text-white text-lg font-bold mb-2 tracking-wider">Discord</div>
            <div className="font-rc text-gray-500 text-sm leading-relaxed mb-4">
              Общайся с выжившими, следи за обновлениями, участвуй в ивентах. Наш Discord — сердце сообщества.
            </div>
            <div className="flex items-center gap-2 text-[#5865F2] font-rc text-xs uppercase tracking-wider">
              <span>Присоединиться</span>
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          <a href="#" className="group relative border border-[#1e1e1e] hover:border-[#0077FF]/60 bg-[#0d0d0d] p-6 transition-all hover:bg-[#0077FF]/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0077FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-5xl mb-4">🔵</div>
            <div className="font-orbitron text-white text-lg font-bold mb-2 tracking-wider">ВКонтакте</div>
            <div className="font-rc text-gray-500 text-sm leading-relaxed mb-4">
              Новости сервера, скриншоты выживших, анонсы обновлений и конкурсы для участников группы.
            </div>
            <div className="flex items-center gap-2 text-[#0077FF] font-rc text-xs uppercase tracking-wider">
              <span>Вступить в группу</span>
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          <a href="#" className="group relative border border-[#1e1e1e] hover:border-[#FF8C00]/60 bg-[#0d0d0d] p-6 transition-all hover:bg-[#FF8C00]/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-5xl mb-4">🛒</div>
            <div className="font-orbitron text-white text-lg font-bold mb-2 tracking-wider">Магазин</div>
            <div className="font-rc text-gray-500 text-sm leading-relaxed mb-4">
              Привилегии, косметика, игровые предметы. Поддержи сервер и получи преимущества для выживания.
            </div>
            <div className="flex items-center gap-2 text-[#FF8C00] font-rc text-xs uppercase tracking-wider">
              <span>Открыть магазин</span>
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* VOTE */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="relative border border-[#39FF14]/30 bg-[#0a0f0a] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.04),transparent_70%)]" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-[#39FF14]/40 flex items-center justify-center shrink-0 pulse-green">
                <span className="text-3xl">⭐</span>
              </div>
              <div>
                <div className="font-orbitron text-[#39FF14] text-xs tracking-[0.3em] uppercase mb-1">Поддержи сервер</div>
                <h3 className="font-orbitron text-white text-xl font-bold mb-2">Голосуй за нас каждый день</h3>
                <p className="font-rc text-gray-400 text-sm leading-relaxed max-w-lg">
                  Каждый голос помогает нам расти и привлекать новых выживших. Голосование занимает 30 секунд — это огромная помощь для развития!
                </p>
              </div>
            </div>
            <a
              href="#"
              className="shrink-0 flex items-center gap-2 px-8 py-4 border-2 border-[#39FF14] text-[#39FF14] font-orbitron text-sm uppercase tracking-wider hover:bg-[#39FF14] hover:text-black transition-all font-bold"
            >
              <Icon name="Star" size={16} />
              Голосовать на WARGM
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />
        </div>
      </section>

      {/* PROMO CODES */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-[#FF8C00]" />
            <h2 className="font-orbitron text-white text-xl font-bold tracking-widest uppercase">Активные промокоды</h2>
          </div>
          <Link to="/promo" className="font-rc text-[#FF8C00] text-xs uppercase tracking-wider hover:underline flex items-center gap-1">
            Все промокоды <Icon name="ArrowRight" size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMO_CODES.map((p) => (
            <div key={p.code} className="group relative border border-[#1e1e1e] hover:border-[#FF8C00]/40 bg-[#0d0d0d] p-5 transition-all overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FF8C00]" />
              <div className="pl-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-orbitron text-[#FF8C00] text-lg font-bold tracking-widest">{p.code}</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14] pulse-green" />
                    <span className="font-rc text-[#39FF14] text-xs uppercase">Активен</span>
                  </div>
                </div>
                <div className="font-rc text-white text-sm mb-2">{p.bonus}</div>
                <div className="font-rc text-gray-600 text-xs">До: {p.expires}</div>
                <button
                  onClick={() => navigator.clipboard.writeText(p.code)}
                  className="mt-3 flex items-center gap-2 text-[#FF8C00] font-rc text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  <Icon name="Copy" size={12} />
                  Скопировать
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}