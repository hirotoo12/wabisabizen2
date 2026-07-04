// 円相（ensō）— 禅で「完全なる不完全」を表す一筆書きの円。
// このサイトの象徴。読み込み時に墨で描かれるように現れます。
export default function Enso({ className = "", draw = false }) {
  return (
    <svg
      className={`${className} ${draw ? "enso--draw" : ""}`}
      viewBox="0 0 200 200"
      role="img"
      aria-label="円相"
    >
      <path
        d="M 108 26
           A 78 78 0 1 1 84 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  );
}
