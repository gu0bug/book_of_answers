/**
 * Author: GUO QIANG
 * Email: gu0bug@gmail.com
 */

import { Github } from 'lucide-react';
import React, { useState } from 'react';

// --- Data Layer ---
const ansData = {
  "zh": ["找个人给你意见", "算了吧", "请教你的妈妈", "当然咯", "谁说得准呢，先观望着", "千万别傻", "保持你的好奇心，去挖掘真相", "把心揣怀里", "答案在镜子里", "不", "这事儿不靠谱", "天上要掉馅饼了", "有好运", "要有耐心", "你需要知道真相", "还有另一种情况", "观望", "别让它影响到你", "是", "信任", "列个清单", "时机不对", "照你想的那样去做", "量力而行", "但行好事，莫问前程", "抛弃首选方案", "走容易走的路", "最佳方案不一定可行", "不会作就不会死", "试试卖萌", "借助他人的经验", "再多考虑", "注意细节", "说出来吧", "不要犹豫", "机会稍纵即逝", "制订了一个新计划", "GO", "谁都不能保证", "情况很快就会发生变化", "不要陷得太深", "转移你的注意力", "至关重要", "告诉自己什么是最重要的", "为什么不", "别傻等了", "不要忘记", "为什么不呢", "去解决", "寻找更多的选择", "上帝为你关一扇门，必定会为你打开一扇窗", "随波逐流未必是好事", "问天问大地，不如问自己", "你就是答案", "去争取机会", "改变不了世界，改变自己", "主动一点，人生会大不相同", "学会妥协", "掌握更多信息", "相信你最初的想法", "勿忘初心，放得始终", "扫除障碍", "把重心放在工作/学习上", "培养一项新的爱好", "对他人慷慨", "不放赌一把", "去做其他的事情", "观察形势", "休息，休息一会", "这是你最后的机会", "再考虑一下", "并不明智", "等待更好的", "很快就能解决", "重要", "是的", "采取行动", "去做", "不要过火", "事情开始变得有趣了", "保存你的实力", "这是一定的", "不确定的因素有点多", "结果不错", "你可能不得不放弃其他东西", "不要犹豫", "不需要", "去倾诉", "告诉别人这对你意味着什么", "无论你做何种选择，结果都是对的", "保持头脑清醒", "制定计划", "很麻烦", "克服困难", "实际一点", "你需要一点帮助", "协作", "需找更多的选择", "负责", "阻止", "你必须现在就行动", "遵守规则", "坚持", "你不会失望的", "需要花费点时间", "不要迫于压力而改变初衷", "显而易见", "不雅忽略身边的人", "抗拒", "不值得斗争", "玩得开心就好", "毋庸置疑", "你也许会失望", "去改变", "一个强有力的承诺会换回更好的结果", "也许有更好的解决方案", "不要害怕", "想法太多，选择太少", "是的", "一笑而过", "取决于你的选择", "随TA去", "你需要考虑其他方面", "一年后就不那么重要了", "醒醒吧，别做梦了", "意义非凡", "默数十秒再问我", "去行动", "发挥你的想象力", "对的", "为了确保最好的结果，保持冷静", "等待", "你必须弥补这个缺点", "你会后悔的", "毫无疑问", "当然", "现在比以往任何时候的情况都要好", "相信你的直觉", "这是一个机会", "去问你爸爸", "从来没有", "寻找一个指路人", "去尝试", "没有", "错的", "别不自量力", "荒谬", "不赌", "不值得冒险", "不妥协", "关注你的家庭生活", "肯定", "不可预测", "绝对不", "我确定", "尽早完成", "令人期待的事情马上要发生", "你需要适应", "表示怀疑", "它会带来好运", "要有耐心", "看看会发生什么", "记录下来", "不宜在这个时候", "决定了就去做", "别要求太多", "放弃第一个方案", "HOLD不住", "谨慎小心", "注意细节", "注意身后", "不要犹豫", "继续前进", "情况很快就会发生改变", "不要被情绪左右", "转移注意力", "着眼未来", "问自己什么是最重要的", "不要等了", "保持乐观", "没有更好的选择", "列出原因", "抓住机会", "改变自己", "你需要主动", "妥协", "有比这更重要的东西", "你需要掌握更多的信息", "删除记忆", "能让你快乐的那个决定", "你需要考虑其他方面", "你会后悔的", "毫无疑问", "当然", "相信自己的直觉", "这是一个机会", "形势不明", "先让自己休息", "重新考虑", "不明智", "抓住机会", "等待机会", "不要做得太过分", "保持现状", "不要忧虑", "有意料之外的事会发生，不妨等待", "你会失望的", "花更多的时间来决定", "你开心就好"],
  "en": ["Get someone's opinion", "Let it go", "Ask your mother", "Of course", "Who knows, wait and see", "Don't be silly", "Keep your curiosity, dig for the truth", "Keep your heart in it", "The answer is in the mirror", "No", "It's not reliable", "A pie will fall from the sky", "Good luck", "Be patient", "You need to know the truth", "There's another situation", "Wait and see", "Don't let it affect you", "Yes", "Trust", "Make a list", "The timing is wrong", "Do as you wish", "Act according to your ability", "Do good deeds, don't ask about the future", "Abandon the first plan", "Take the easy way", "The best plan may not work", "No zuo no die", "Try acting cute", "Lean on others' experience", "Consider more", "Pay attention to details", "Speak out", "Don't hesitate", "Opportunity is fleeting", "Made a new plan", "GO", "No one can guarantee", "The situation will change soon", "Don't get too deep", "Shift your attention", "Crucial", "Tell yourself what's most important", "Why not", "Don't wait foolishly", "Don't forget", "Why not?", "Go solve it", "Find more options", "When a door closes, a window opens", "Going with the flow may not be good", "Ask yourself instead of heaven and earth", "You are the answer", "Fight for the opportunity", "Change yourself, not the world", "Be proactive, life will be different", "Learn to compromise", "Gather more info", "Trust your first thought", "Don't forget why you started", "Clear the obstacles", "Focus on work/study", "Cultivate a new hobby", "Be generous to others", "Take a gamble", "Do something else", "Observe the situation", "Rest, take a break", "This is your last chance", "Reconsider", "Not wise", "Wait for a better one", "Will be resolved soon", "Important", "Yes", "Take action", "Do it", "Don't overdo it", "Things are getting interesting", "Save your strength", "This is certain", "Too many uncertainties", "Good result", "You may have to give up other things", "Don't hesitate", "No need", "Confide in someone", "Tell someone what this means to you", "Whatever you choose, the result is right", "Stay clear-headed", "Make a plan", "Very troublesome", "Overcome difficulties", "Be practical", "You need a little help", "Collaborate", "Seek more options", "Take charge", "Stop", "You must act now", "Follow the rules", "Persist", "You will not be disappointed", "Takes some time", "Don't change your mind under pressure", "Obvious", "Don't ignore the people around you", "Resist", "Not worth fighting for", "Just have fun", "Without a doubt", "You might be disappointed", "Change it", "A strong commitment yields better results", "Maybe a better solution", "Don't be afraid", "Too many ideas, too few choices", "Yes", "Laugh it off", "Depends on your choice", "Let it be", "You need to consider other aspects", "Won't matter in a year", "Wake up, stop dreaming", "Profound meaning", "Count to ten then ask me again", "Take action", "Use your imagination", "Correct", "To ensure the best result, stay calm", "Wait", "You must make up for this shortcoming", "You will regret it", "No doubt", "Of course", "The situation is better than ever", "Trust your intuition", "This is an opportunity", "Go ask your dad", "Never", "Find a guide", "Try it", "No", "Wrong", "Don't overreach", "Absurd", "Don't bet", "Not worth the risk", "Don't compromise", "Focus on your family life", "Definitely", "Unpredictable", "Absolutely not", "I am sure", "Finish it ASAP", "Something exciting is about to happen", "You need to adapt", "Doubtful", "It will bring good luck", "Be patient", "See what happens", "Write it down", "Not advisable at this time", "Do it once decided", "Don't ask too much", "Give up the first plan", "Can't handle it", "Be cautious", "Pay attention to details", "Watch your back", "Don't hesitate", "Keep moving forward", "The situation will change quickly", "Don't be swayed by emotions", "Shift attention", "Look to the future", "Ask yourself what's most important", "Don't wait", "Stay optimistic", "No better choice", "List the reasons", "Seize the opportunity", "Change yourself", "You need to be proactive", "Compromise", "There's something more important", "You need more information", "Delete the memory", "The decision that makes you happy", "Consider other aspects", "You will regret it", "Without a doubt", "Of course", "Trust your intuition", "This is an opportunity", "Unclear situation", "Rest first", "Reconsider", "Not wise", "Seize the opportunity", "Wait for the chance", "Don't overdo it", "Maintain status quo", "Don't worry", "Unexpected events will happen, better wait", "You will be disappointed", "Spend more time to decide", "As long as you are happy"]
};

// --- UI Dictionary ---
const uiDict = {
  en: {
    subtitle: "Write down your query,\nand let the answers find you.",
    placeholder: "Type your question here...",
    btnFind: "FIND THE ANSWER",
    consulting: "Consulting the Whispers...",
    yourQuestion: "Your question was:",
    btnAskAnother: "ASK ANOTHER QUESTION",
    toggleText: "中文"
  },
  zh: {
    subtitle: "写下你的困惑，\n让指引自然浮现。",
    placeholder: "在此输入你的问题...",
    btnFind: "寻 找 答 案",
    consulting: "正在聆听低语...",
    yourQuestion: "你的问题是：",
    btnAskAnother: "再问一个问题",
    toggleText: "English"
  }
};

type Language = 'en' | 'zh';

// SVG Divider Component
const OrnateDivider = () => (
  <svg className="w-48 h-6 my-4 opacity-60 mx-auto" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 L90 10 M110 10 L190 10 M100 5 L105 10 L100 15 L95 10 Z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function App() {
  const [viewState, setViewState] = useState<'ASK' | 'TRANSITION' | 'ANSWER'>('ASK');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [lang, setLang] = useState<Language>('zh');

  const dict = uiDict[lang];

  const handleSubmit = () => {
    if (!question.trim()) return;
    setViewState('TRANSITION');
    
    setTimeout(() => {
      const currentAnswers = ansData[lang];
      const randomIndex = Math.floor(Math.random() * currentAnswers.length);
      setAnswer(currentAnswers[randomIndex]);
      setViewState('ANSWER');
    }, 2000);
  };

  const handleReset = () => {
    setViewState('ASK');
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col selection:bg-[var(--color-gold-primary)] selection:text-black relative">
      
      {/* Language Toggle */}
      {viewState === 'ASK' && (
        <button 
          onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
          className="fixed top-6 right-6 z-[60] px-4 py-2 border border-[var(--color-gold-primary)] text-[var(--color-gold-primary)] rounded-full text-xs tracking-widest font-title hover:bg-[var(--color-gold-primary)] hover:text-black transition-colors duration-300"
        >
          {dict.toggleText}
        </button>
      )}

      {/* Frame Border (Ornamental Outer Box) */}
      <div className="fixed inset-2 border-[1px] border-[#d4af37]/30 pointer-events-none rounded-lg z-50"></div>
      <div className="fixed inset-4 border-[1px] border-[#d4af37]/10 pointer-events-none rounded-lg z-50"></div>
      
      <main className="w-full flex-1 z-10 p-4 py-12 md:p-8 flex justify-center items-center">
        
        {/* 1. ASK VIEW */}
        {viewState === 'ASK' && (
          <div className="flex flex-col items-center w-full max-w-md mx-auto animate-fade-up h-full py-12 px-4 justify-between">
            {/* Header */}
            <div className="text-center mb-8">
              {lang === 'en' ? (
                <h1 className="font-title text-4xl tracking-[0.2em] text-[var(--color-gold-primary)] drop-shadow-[0_0_15px_var(--color-gold-glow)] flex flex-col items-center leading-tight">
                  <span>BOOK</span>
                  <span className="text-base tracking-[0.4em] my-2 opacity-80 border-t border-b border-[var(--color-gold-primary)] px-4 py-1">OF</span>
                  <span>ANSWERS</span>
                </h1>
              ) : (
                <h1 className="font-title text-5xl tracking-[0.4em] text-[var(--color-gold-primary)] drop-shadow-[0_0_15px_var(--color-gold-glow)] my-4">
                  答案之书
                </h1>
              )}
            </div>

            {/* Parchment Scroll */}
            <div className="parchment-bg w-full p-8 relative mb-8 rounded-sm">
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#8a6b3f] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#8a6b3f] to-transparent opacity-50"></div>

              <p className="text-[var(--color-ink-dark)] text-center text-lg italic mb-6 leading-relaxed whitespace-pre-wrap">
                {dict.subtitle}
              </p>

              <div className="w-full border border-[#8a6b3f] p-1 bg-[rgba(255,255,255,0.1)]">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={dict.placeholder}
                  className="w-full bg-transparent text-[var(--color-ink-dark)] text-center text-xl p-4 outline-none resize-none hide-scrollbar font-serif"
                  rows={2}
                  maxLength={120}
                />
              </div>
              
              <div className="mt-6 flex justify-center opacity-40">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-dark)" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleSubmit}
              disabled={!question.trim()}
              className={`w-full max-w-[280px] py-4 font-title tracking-[0.2em] text-sm transition-all duration-700 flex items-center justify-center gap-4 rounded-sm
                ${question.trim() 
                  ? 'gold-btn text-[#f3e5ab] hover:scale-105 cursor-pointer' 
                  : 'border border-[#4a3f25] text-[#4a3f25] cursor-not-allowed bg-black/50'}`}
            >
              <span className="text-xl">✧</span>
              {dict.btnFind}
              <span className="text-xl">✧</span>
            </button>
          </div>
        )}

        {/* 2. TRANSITION VIEW */}
        {viewState === 'TRANSITION' && (
          <div className="flex flex-col items-center justify-center animate-fade-up h-full w-full">
            <div className="relative flex items-center justify-center w-80 h-80 mb-16">
              <div className="absolute w-full h-full border-[1px] border-dashed border-[var(--color-gold-primary)] rounded-full opacity-30 animate-magic-circle"></div>
              <div className="absolute w-[90%] h-[90%] border-[2px] border-dotted border-[var(--color-gold-primary)] rounded-full opacity-40 animate-magic-circle-reverse"></div>
              <div className="absolute w-[70%] h-[70%] border-[1px] border-[var(--color-gold-primary)] opacity-20 transform rotate-45"></div>
              <div className="absolute w-[70%] h-[70%] border-[1px] border-[var(--color-gold-primary)] opacity-20 transform rotate-0"></div>
              <div className="absolute w-24 h-24 rounded-full bg-[var(--color-gold-primary)] blur-[40px] animate-pulse"></div>
              
              <svg className="w-16 h-16 text-[var(--color-gold-primary)] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            
            <p className="font-title text-[var(--color-gold-primary)] text-xs sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.3em] whitespace-nowrap animate-pulse drop-shadow-[0_0_8px_var(--color-gold-glow)]">
              {dict.consulting}
            </p>
          </div>
        )}

        {/* 3. ANSWER VIEW */}
        {viewState === 'ANSWER' && (
          <div className="flex flex-col items-center w-full max-w-md mx-auto animate-fade-up h-full py-8 px-4">
            <div className="parchment-bg w-full h-full flex flex-col items-center justify-between p-8 rounded-sm relative">
              
              <div className="mt-4 opacity-80">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-dark)" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M12 7v6M9 10h6"/>
                </svg>
              </div>

              <div className="flex-1 w-full flex flex-col items-center justify-center">
                <div className="text-center mb-8 w-full">
                  <div className="flex items-center justify-center gap-2 mb-4 text-[#5a4833]">
                    <span className="w-8 h-[1px] bg-[#5a4833]"></span>
                    <p className="text-sm tracking-widest uppercase font-title">{dict.yourQuestion}</p>
                    <span className="w-8 h-[1px] bg-[#5a4833]"></span>
                  </div>
                  <p className="text-xl text-[var(--color-ink-dark)] italic px-4">"{question}"</p>
                </div>

                <OrnateDivider />

                <div className="text-center my-8 w-full">
                  <h2 className="font-title text-4xl md:text-5xl text-[var(--color-ink-dark)] tracking-widest leading-tight">
                    {answer}
                  </h2>
                </div>
                
                <OrnateDivider />
              </div>

              <button
                onClick={handleReset}
                className="w-full max-w-[260px] py-3 mt-4 mb-4 font-title tracking-[0.1em] text-xs transition-all duration-300 flex items-center justify-center gap-3 bg-[#1a1510] text-[var(--color-gold-primary)] border border-[var(--color-gold-primary)] rounded-sm shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:bg-black hover:scale-105"
              >
                <span>✧</span>
                {dict.btnAskAnother}
                <span>✧</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Copyright Footer */}
      <div className="w-full flex justify-center items-center gap-3 md:gap-4 z-50 opacity-40 pb-6 pt-4 relative">
        <span className="hidden sm:block font-serif text-[8px] sm:text-[10px] md:text-xs text-[var(--color-gold-primary)] tracking-[0.1em] md:tracking-[0.2em] uppercase pointer-events-none text-center">
          © 2026 ALL RIGHTS RESERVED. CREATED BY GUO QIANG
        </span>
        <div className="hidden sm:block h-3 w-[1px] bg-[var(--color-gold-primary)] pointer-events-none"></div>
        <a 
          href="mailto:gu0bug@gmail.com" 
          className="font-serif text-[10px] md:text-xs text-[var(--color-gold-primary)] tracking-[0.1em] md:tracking-[0.2em] uppercase hover:opacity-100 hover:text-white transition-all cursor-pointer"
        >
          CONTACT
        </a>
        <div className="h-3 w-[1px] bg-[var(--color-gold-primary)] pointer-events-none"></div>
        <a
          href="https://github.com/gu0bug0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-gold-primary)] hover:opacity-100 hover:text-white transition-all cursor-pointer flex-shrink-0"
          title="GitHub Profile"
        >
          <Github size={14} />
        </a>
      </div>
    </div>
  );
}


