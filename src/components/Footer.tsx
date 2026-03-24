import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#060606] relative overflow-hidden py-[19px]">
      {/* BG decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,140,0,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 border border-[#FF8C00] flex items-center justify-center pulse-orange">
                <span className="font-orbitron text-[#FF8C00] text-base font-black">A</span>
              </div>
              <div>
                <div className="font-orbitron text-white font-bold text-xl tracking-widest">ASTELLAS</div>
                <div className="font-rc text-[#FF8C00] text-xs tracking-widest uppercase">DayZ Standalone · PVE</div>
              </div>
            </div>
            <p className="font-rc text-gray-500 text-sm leading-relaxed">
              Постапокалиптический PVE-сервер с атмосферой выживания. Chernarus 2035. Только командная работа поможет выжить.
            </p>
          </div>

          {/* Server */}
          <div>
            <div className="font-orbitron text-[#FF8C00] text-xs tracking-widest uppercase mb-4 border-b border-[#1e1e1e] pb-2">
              Сервер
            </div>
            <div className="space-y-2 font-rc text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Server" size={14} className="text-[#FF8C00]" />
                <span>IP: <span className="text-white font-bold">play.astellas.ru:2302</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Map" size={14} className="text-[#FF8C00]" />
                <span>Карта: <span className="text-white">Chernarus 2035</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={14} className="text-[#39FF14]" />
                <span>Режим: <span className="text-[#39FF14]">PVE</span></span>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/how-to-play" className="text-[#FF8C00] font-rc text-xs uppercase tracking-wider hover:underline">
                → Как начать играть
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="font-orbitron text-[#FF8C00] text-xs tracking-widest uppercase mb-4 border-b border-[#1e1e1e] pb-2">
              Сообщество
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 border border-[#1e1e1e] hover:border-[#5865F2] text-gray-400 hover:text-white transition-all group"
              >
                <span className="text-[#5865F2] text-lg">💬</span>
                <span className="font-rc text-sm">Discord</span>
                <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-[#5865F2]" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 border border-[#1e1e1e] hover:border-[#0077FF] text-gray-400 hover:text-white transition-all group"
              >
                <span className="text-[#0077FF] text-lg">🔵</span>
                <span className="font-rc text-sm">ВКонтакте</span>
                <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-[#0077FF]" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 border border-[#1e1e1e] hover:border-[#26A5E4] text-gray-400 hover:text-white transition-all group"
              >
                <span className="text-[#26A5E4] text-lg">✈️</span>
                <span className="font-rc text-sm">Telegram</span>
                <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-[#26A5E4]" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 border border-[#1e1e1e] hover:border-[#FF8C00] text-gray-400 hover:text-white transition-all group"
              >
                <span className="text-[#FF8C00] text-lg">🛒</span>
                <span className="font-rc text-sm">Магазин</span>
                <Icon name="ExternalLink" size={12} className="ml-auto opacity-0 group-hover:opacity-100 text-[#FF8C00]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e1e] pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-rc text-gray-600 text-xs tracking-wider">© 2026 ASTELLAS · Все права защищены</div>
          <div className="flex items-center gap-4 font-rc text-xs text-gray-600">
            <Link to="/rules" className="hover:text-[#FF8C00] transition-colors">Правила</Link>
            <Link to="/info" className="hover:text-[#FF8C00] transition-colors">Информация</Link>
            <Link to="/promo" className="hover:text-[#FF8C00] transition-colors">Промокоды</Link>
          </div>
          <div className="flex items-center gap-1 font-rc text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] pulse-green inline-block" />
            <span>Сервер онлайн</span>
          </div>
        </div>
      </div>
    </footer>
  );
}