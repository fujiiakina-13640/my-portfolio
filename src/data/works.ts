import type { Work } from '../types/work';

export const works: Work[] = [
  {
    id: 0,
    title: "カフェサイト",
    image: "./images/sample/work0.png",
    description: "HTML/CSSを用いて作成した架空のカフェサイトです。レスポンシブ対応を行い、実務を意識した構成にしています。",
    techs: ["HTML", "CSS", "Responsive"],
    url: "https://fuji1403.com/kuzira-cafe/index.html",
    
  },

  {
    id: 1,
    title: "コーヒー豆販売ショップ",
    image: "./images/sample/work1.png",
    description: "デザインデータを基に、HTML/CSSを用いて作成したLP形式のWebサイトです。",
    techs: ["HTML", "CSS", "Responsive"],
    url: "https://fuji1403.com/cat-coffee/",
    
  },

  {
    id: 2,
    title: "美容室サイト",
    image: "./images/sample/work2.png",
    description: "WordPressで作成した美容室のWebサイトです。デザインデータを基に、テンプレート:Lightningを使用しました。",
    techs: ["WordPress" , "Responsive"],
    url: "https://fuji1403.com/samurai-beautysalon/",
    
  },

  {
    id: 3,
    title: "カフェ店舗サイト",
    image: "./images/sample/work3.png",
    description: "WordPressで作成したカフェのWebサイトです。デザインから考えテンプレート:Lightningを使用してWordPressの構築をしました。",
    techs: ["WordPress" , "Responsive"],
    url: "https://fuji1403.com/cafe-harmonie/",
    
  },

  {
    id: 4,
    title: "大学サイト",
    image: "./images/sample/work4.png",
    description: "WordPressで作成した大学のWebサイトです。デザインデータを基に、WordPressのテンプレートを作成し構築をしました。",
    techs: ["WordPress", "PHP", "HTML", "CSS", "Responsive"],
    url: "https://fuji1403.com/samurai-university/",
     
  },

  {
    id: 5,
    title: "タイピングゲーム",
    image: "./images/sample/work5.png",
    description: "JavaScriptで制作したタイピングゲームです。高校受験をする甥の学習支援を目的に、高校入試で頻出する英単語を出題しました。UIはシンプルで目に優しい配色に、ゲーム終了後に応援メッセージを表示して学習継続のモチベーション向上を図っています。",
    techs: ["HTML", "CSS", "JavaScript"],
    url: "https://fuji1403.com/typing_game/",
    
  },


];