import { V as escape_html, Y as stringify, S as pop, Q as push, Z as add_styles, _ as ensure_array_like } from "../../chunks/index.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function getDayMessage() {
  const day = (/* @__PURE__ */ new Date()).getDay();
  return {
    0: "Sunday's digital energies are especially strong today.",
    1: "Monday's digital waves are realigning your path.",
    2: "Tuesday's binary streams are particularly clear.",
    3: "Wednesday's binary streams are particularly clear.",
    4: "Thursday's electronic pulses are revealing secrets.",
    5: "Friday's digital stars are especially bright.",
    6: "Saturday's virtual forces are in perfect harmony."
  }[day] || "";
}
const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
const chapters = [
  {
    id: "intro",
    introText: `Today is ${today}.`,
    outroText: "Would you like to take a look at your digital fortune?"
  },
  {
    id: "misc",
    introText: getDayMessage(),
    outroText: "The next category is about the city you live in."
  },
  {
    id: "nyc",
    introText: "Let's see what the city has in store for you...",
    outroText: "The next category is about relationships."
  },
  {
    id: "love",
    introText: "Hmm ...",
    outroText: "That's all for now. Check back tomorrow for new reading."
  }
];
function Typewriter($$payload, $$props) {
  push();
  let {
    text,
    speed = 50,
    oncomplete = () => console.log("typewriter oncomplete ignored")
  } = $$props;
  let displayText = "";
  $$payload.out += `<div${attr("class", `text-center ${stringify([!text.includes(" ") ? "break-all" : ""].filter(Boolean).join(" "))}`)}>${escape_html(displayText)}</div>`;
  pop();
}
function Card($$payload, $$props) {
  push();
  let {
    front,
    back,
    variant = "square",
    onFlip = () => {
    }
  } = $$props;
  const variants = {
    shortsquare: { width: 256, height: 256 / 2 },
    square: { width: 256, height: 256 * 1.5 },
    icon: { width: 50, height: 50 }
  };
  let size = variants[variant];
  $$payload.out += `<div${add_styles({
    transform: `scale(${1})`
  })}${attr("class", `card-container relative overflow-visible svelte-l424vz ${stringify([""].filter(Boolean).join(" "))}`)} role="presentation"><button class="svelte-l424vz"><div${add_styles({
    transform: `rotate3d(1, 0, 0, 20deg)`,
    width: `${stringify(size.width)}px`,
    height: `${stringify(size.height)}px`
  })} class="card svelte-l424vz"><div class="face front svelte-l424vz">`;
  front($$payload);
  $$payload.out += `<!----></div> <div class="face back svelte-l424vz">`;
  back($$payload);
  $$payload.out += `<!----></div> <div class="face top svelte-l424vz"></div> <div${add_styles({ transform: "rotateX(-90deg)" })} class="face bottom svelte-l424vz"></div> <div class="face left svelte-l424vz"></div> <div${add_styles({ transform: "rotateY(90deg)" })} class="face right svelte-l424vz"></div></div></button></div>`;
  pop();
}
function FortuneCards($$payload, $$props) {
  push();
  const { cards, onAllFlipped } = $$props;
  let toggledCount = 0;
  function handleFlip() {
    toggledCount++;
    if (toggledCount === cards.length) {
      setTimeout(() => onAllFlipped(), 2500);
    }
  }
  const each_array = ensure_array_like(cards);
  $$payload.out += `<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let front = function($$payload2) {
      $$payload2.out += `<div class="flex h-full flex-col items-center justify-between">`;
      if (cover) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<img${attr("src", cover)}${attr("alt", title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <h2>${escape_html(title)}</h2></div>`;
    }, back = function($$payload2) {
      $$payload2.out += `<div class="flex h-full flex-col justify-between py-5"><h2>${escape_html(title)}</h2> <div class="flex flex-col items-center gap-2">`;
      if (src) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<img${attr("src", src)}${attr("alt", title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (label) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p>${escape_html(label)}</p>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div>`;
    };
    let { title, src, label, cover } = each_array[$$index];
    Card($$payload, { front, back, onFlip: handleFlip });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function StarryButton($$payload, $$props) {
  push();
  let { onclick, label, class: className = "" } = $$props;
  let sparkles = [];
  const each_array = ensure_array_like(sparkles);
  $$payload.out += `<div${attr("class", `${stringify(`${className} ${className.includes("fixed") ? "" : "relative"}`)} svelte-c2pd34`)}><button class="continue-button svelte-c2pd34">${escape_html(label)}</button> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let sparkle = each_array[$$index];
    $$payload.out += `<div class="pointer-events-none absolute svelte-c2pd34"${attr("style", `left: ${stringify(sparkle.x)}px; top: ${stringify(sparkle.y)}px;`)}><span class="animate-sparkle text-xl svelte-c2pd34">${escape_html(sparkle.c)}</span></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function FortuneTeller($$payload, $$props) {
  push();
  let { misc_data, nyc_data, love_data } = $$props;
  console.log("FortuneTeller mounting", { misc_data, nyc_data, love_data });
  function generateThinkingPattern(length = 60) {
    return Array.from({ length }, () => Math.random() < 0.66 ? "~" : "*").join("");
  }
  const PHASES = {
    IDLE: -1,
    THINKING: 0,
    INTRO: 1,
    CARDS: 2,
    OUTRO: 3,
    CONTINUE: 4
  };
  let chapterIndex = 0;
  let phase = PHASES.IDLE;
  let currentChapter = chapters[chapterIndex];
  console.log("Current phase:", phase, "Current chapter:", currentChapter);
  let card_data = currentChapter.id === "nyc" ? nyc_data : currentChapter.id === "love" ? love_data : misc_data;
  $$payload.out += `<div class="flex justify-center text-2xl"><div class="flex min-h-[80vh] max-w-[1024px] flex-col items-center justify-between gap-14"><div class="flex flex-col items-center justify-center gap-10">`;
  if (phase === PHASES.IDLE) {
    $$payload.out += "<!--[-->";
    setTimeout(
      () => {
        console.log("Transitioning from IDLE to THINKING");
        phase = PHASES.THINKING;
      },
      0
    );
    $$payload.out += `<div>Starting...</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (currentChapter.id === "intro") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img src="goodluckspa.png" class="swingy w-3/4 svelte-lzgs5s" alt="good luck spa !! :-)">`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (phase >= PHASES.THINKING) {
    $$payload.out += "<!--[-->";
    Typewriter($$payload, {
      text: currentChapter.id === "intro" ? "Ah ... welcome !" : generateThinkingPattern(),
      speed: 100,
      oncomplete: () => phase = PHASES.INTRO
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (phase >= PHASES.INTRO) {
    $$payload.out += "<!--[-->";
    Typewriter($$payload, {
      text: currentChapter.introText,
      oncomplete: () => phase = currentChapter.id === "intro" ? PHASES.OUTRO : PHASES.CARDS
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (phase >= PHASES.CARDS) {
    $$payload.out += "<!--[-->";
    if (currentChapter.id !== "intro") {
      $$payload.out += "<!--[-->";
      FortuneCards($$payload, {
        cards: card_data,
        onAllFlipped: () => phase = PHASES.OUTRO
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (phase >= PHASES.OUTRO) {
    $$payload.out += "<!--[-->";
    Typewriter($$payload, {
      text: currentChapter.outroText,
      oncomplete: () => phase = PHASES.CONTINUE
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (phase >= PHASES.CONTINUE && chapterIndex < chapters.length - 1) {
    $$payload.out += "<!--[-->";
    if (chapterIndex < chapters.length - 1) {
      $$payload.out += "<!--[-->";
      StarryButton($$payload, {
        label: "Continue",
        onclick: () => {
          chapterIndex++;
          phase = PHASES.IDLE;
        }
      });
    } else {
      $$payload.out += "<!--[!-->";
      Typewriter($$payload, { text: "Have a wonderful day !" });
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Blurb($$payload) {
  let isOpen = false;
  StarryButton($$payload, {
    label: "?",
    onclick: () => isOpen = true,
    class: "fixed bottom-8 right-8 items-center justify-center rounded-full"
  });
  $$payload.out += `<!----> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="dialog" class="fixed inset-0 flex items-center justify-center bg-white/90 p-4"><div class="relative w-full max-w-2xl rounded-lg p-8 [font-family:Times]"><div class="flex flex-col gap-4 text-center text-xl"><h2 class="text-4xl italic">A website that offers a daily fortune.</h2> <p>Digital fortune is meant to be consumed like a digital fortune cookie.</p> <p>It is an ode to a simpler internet. When Google encouraged users to "Feel Lucky", when the
					lovecalculator.com felt like magic, when "all your friends were on all at once".</p> <p>The flow and structure of our online experiences is increasingly the result of calculated,
					algorithmic readings on our data. We breathe in targeted advertising breathe out
					"algorithmic" feeds.</p> <p>Digital fortune is meant to make the world wide web a space with more chance occurences.
					It is a fortuitous reading of the user, with no intent of storing any data for future use,
					no AI, no tracking.</p> <p>Recommendations don't have to be perfect for them to be perfect.</p> <p>Digital fortune is an open source fortuitous recommendation tool.</p></div> <button class="fixed inset-0 z-10 h-full w-full opacity-0" aria-hidden="true"></button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload, $$props) {
  let { $$slots, $$events, ...data } = $$props;
  console.log("Page mounting with data", data);
  const { misc_data, nyc_data, love_data } = data;
  FortuneTeller($$payload, { misc_data, nyc_data, love_data });
  $$payload.out += `<!----> `;
  Blurb($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
