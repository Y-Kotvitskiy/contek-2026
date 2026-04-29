import "./scss/main.scss";

const slider = document.querySelector(".services__content");
const IS_PAUSED = "services__content--is_paused";

// Событие: палец коснулся экрана
slider.addEventListener(
  "touchstart",
  () => {
    slider.classList.add(IS_PAUSED);
  },
  { passive: true },
);

// Событие: палец оторвался от экрана
slider.addEventListener(
  "touchend",
  () => {
    slider.classList.remove(IS_PAUSED);
  },
  { passive: true },
);

// На всякий случай: если касание было прервано (например, системным уведомлением)
slider.addEventListener(
  "touchcancel",
  () => {
    slider.classList.remove(IS_PAUSED);
  },
  { passive: true },
);
