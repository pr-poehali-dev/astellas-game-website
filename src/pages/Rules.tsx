import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

type RuleCategory = "server" | "discord";

const serverRules = [
  {
    id: 1,
    category: "Общие правила",
    icon: "ScrollText",
    rules: [
      "Уважительное отношение ко всем игрокам обязательно. Оскорбления и токсичность — бан.",
      "Читерство, эксплойты и баги — перманентный бан без предупреждения.",
      "Реклама сторонних серверов в чате запрещена.",
      "Никнейм не должен содержать нецензурную лексику, политические лозунги или символику.",
    ],
  },
  {
    id: 2,
    category: "PVE и взаимодействие",
    icon: "Shield",
    rules: [
      "Намеренный kill другого игрока запрещён — это PVE сервер.",
      "Кража имущества у других игроков запрещена без их согласия.",
      "Разрушение баз других игроков без причины — нарушение правил.",
      "Помогай новичкам — это приветствуется и поощряется командой.",
    ],
  },
  {
    id: 3,
    category: "Строительство",
    icon: "Home",
    rules: [
      "Строить базу можно только в разрешённых зонах. Список зон — в Discord.",
      "Максимальный размер базы: 10x10 стен по периметру.",
      "Блокировать спавн-зоны и важные локации запрещено.",
      "Заброшенные базы (старше 14 дней без активности) будут снесены.",
    ],
  },
  {
    id: 4,
    category: "Чат и общение",
    icon: "MessageSquare",
    rules: [
      "Флуд, спам и CAPS LOCK в общем чате запрещены.",
      "Нецензурная лексика допустима умеренно, но не в адрес других игроков.",
      "Провокации и разжигание конфликтов между игроками — мут или бан.",
      "Обсуждение политики, религии и подобных тем запрещено в игровом чате.",
    ],
  },
  {
    id: 5,
    category: "Торговля",
    icon: "ShoppingBag",
    rules: [
      "Торговля осуществляется только через официальный магазин или игровую систему.",
      "Обмен реальных денег на игровые предметы вне магазина запрещён.",
      "Мошенничество при торговле карается перманентным баном.",
    ],
  },
];

const discordRules = [
  {
    id: 1,
    category: "Основные правила",
    icon: "Hash",
    rules: [
      "Уважай всех участников сервера. Дискриминация в любой форме запрещена.",
      "Флуд, спам и повторяющиеся сообщения — мут.",
      "Используй каналы по назначению. Не пиши вопросы по игре в #общение.",
      "Теги @everyone и @here без разрешения модераторов запрещены.",
    ],
  },
  {
    id: 2,
    category: "Контент",
    icon: "FileText",
    rules: [
      "NSFW-контент строго запрещён во всех каналах.",
      "Реклама, ссылки на сторонние серверы и продукты запрещены.",
      "Личные данные других участников публиковать нельзя (doxxing).",
      "Споры с администрацией выносятся в тикеты, не в публичные каналы.",
    ],
  },
  {
    id: 3,
    category: "Голосовые каналы",
    icon: "Mic",
    rules: [
      "Включение шумного звука, завывания или музыки без согласия — мут.",
      "Запись голосовых чатов без согласия участников запрещена.",
      "Нарочно занимать AFK-канал для мешания другим запрещено.",
    ],
  },
  {
    id: 4,
    category: "Обращения к администрации",
    icon: "Users",
    rules: [
      "Жалобы и апелляции подаются только через систему тикетов.",
      "Надоедать администраторам в ЛС запрещено — используй тикеты.",
      "Решение администрации является окончательным.",
      "Выдача себя за администратора карается перманентным баном.",
    ],
  },
];

export default function Rules() {
  const [activeTab, setActiveTab] = useState<RuleCategory>("server");
  const [openCategory, setOpenCategory] = useState<number | null>(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const rules = activeTab === "server" ? serverRules : discordRules;

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,140,0,0.05),transparent_50%,rgba(57,255,20,0.03))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/60 to-transparent" />

        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="font-orbitron text-[#FF8C00] text-xs tracking-[0.4em] uppercase">Astellas</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Правила проекта
          </h1>
          <p className="font-rc text-gray-400 text-lg leading-relaxed">
            Соблюдение правил — залог комфортной игры для всех. Незнание правил не освобождает от ответственности.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-1 my-3.5">
        <div className="flex border border-[#1e1e1e] p-1 bg-[#0d0d0d] w-fit">
          <button
            onClick={() => { setActiveTab("server"); setOpenCategory(1); }}
            className={`flex items-center gap-2 px-6 py-3 font-orbitron text-sm uppercase tracking-wider transition-all ${
              activeTab === "server"
                ? "bg-[#FF8C00] text-black font-bold"
                : "text-gray-500 hover:text-white"
            }`}
          >
            <Icon name="Server" size={14} />
            Правила сервера
          </button>
          <button
            onClick={() => { setActiveTab("discord"); setOpenCategory(1); }}
            className={`flex items-center gap-2 px-6 py-3 font-orbitron text-sm uppercase tracking-wider transition-all ${
              activeTab === "discord"
                ? "bg-[#5865F2] text-white font-bold"
                : "text-gray-500 hover:text-white"
            }`}
          >
            <span>💬</span>
            Правила Discord
          </button>
        </div>
      </div>

      {/* Rules accordion */}
      <div className="max-w-4xl mx-auto px-4 mb-24 space-y-3">
        {rules.map((cat) => (
          <div key={cat.id} className="border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden">
            <button
              onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#111] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 flex items-center justify-center border ${
                  activeTab === "server" ? "border-[#FF8C00]/40 text-[#FF8C00]" : "border-[#5865F2]/40 text-[#5865F2]"
                }`}>
                  <Icon name={cat.icon} size={14} fallback="Shield" />
                </div>
                <div className="text-left">
                  <div className="font-orbitron text-white text-sm font-bold tracking-wider">{cat.category}</div>
                  <div className="font-rc text-gray-500 text-xs">{cat.rules.length} правил</div>
                </div>
              </div>
              <Icon
                name="ChevronDown"
                size={18}
                className={`text-gray-500 transition-transform ${openCategory === cat.id ? "rotate-180" : ""}`}
              />
            </button>

            {openCategory === cat.id && (
              <div className="border-t border-[#1e1e1e] px-6 py-4">
                <div className="space-y-3">
                  {cat.rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`shrink-0 font-orbitron text-xs font-bold mt-0.5 w-6 ${
                        activeTab === "server" ? "text-[#FF8C00]" : "text-[#5865F2]"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-rc text-gray-300 text-sm leading-relaxed">{rule}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Warning box */}
        <div className="mt-8 border border-[#FF2020]/30 bg-[#1a0a0a] px-6 py-5 flex items-start gap-4">
          <div className="w-10 h-10 border border-[#FF2020]/40 flex items-center justify-center shrink-0">
            <Icon name="AlertTriangle" size={18} className="text-[#FF2020]" />
          </div>
          <div>
            <div className="font-orbitron text-[#FF2020] text-sm font-bold tracking-wider mb-1">Внимание</div>
            <div className="font-rc text-gray-400 text-sm leading-relaxed">
              Администрация оставляет за собой право наказать игрока за действия, не описанные в правилах, но противоречащие духу сервера. Правила могут обновляться — следите за анонсами.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}