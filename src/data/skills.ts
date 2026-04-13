export type Skill = {
  name: string;
  level: number; // 0〜100
  note: string;
};

export const skills: Skill[] = [
  { name: "HTML/CSS", level: 80, note: "レスポンシブ対応・Flexbox / Grid" },
  { name: "JavaScript", level: 60, note: "DOM操作・イベント処理" },
  { name: "TypeScript", level: 50, note: "型定義・Reactでの型付け" },
  { name: "React", level: 50, note: "useState / props / コンポーネント分割" },
  { name: "Next.js", level: 40, note: "App Router・構成理解" },
  { name: "PHP", level: 50, note: "基本構文・フォーム処理・WordPressカスタマイズ" },
  { name: "WordPress", level: 65, note: "テーマ作成・カスタマイズ" },
];