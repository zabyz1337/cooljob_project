# povtor-figma (React + Vite)

## Запуск
```bash
npm i
npm run dev
```

## Где класть ассеты
`src/assets/`

## Как собрать 1-в-1 по Figma
1) В Figma: выбери фрейм -> Export (PNG/SVG) для нужных иконок/картинок  
2) Скопируй значения (цвета/шрифты/spacing) и замени токены в `src/styles/global.css`  
3) Для каждого блока создай компонент в `src/components/*` и повтори структуру/auto-layout через flex/grid.
