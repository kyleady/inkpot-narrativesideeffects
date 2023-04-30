const AMAZING_SIDEEFFECT = '<strong>AMAZING!</strong>';
const TERRIBLE_SIDEEFFECT = '<strong>TERRIBLE...</strong>';
const GOOD_SIDEEFFECT = 'Good';
const BAD_SIDEEFFECT = 'Bad';
const DEFAULT_SIDEEFFECT = '<em>none</em>';
const SIDEEFFECTS = {
  20: AMAZING_SIDEEFFECT,
  19: TERRIBLE_SIDEEFFECT,
  18: GOOD_SIDEEFFECT,
  17: BAD_SIDEEFFECT,
  16: GOOD_SIDEEFFECT,
  15: BAD_SIDEEFFECT,
  // 14: DEFAULT_SIDEEFFECT,
  // ...
  // 7: DEFAULT_SIDEEFFECT,
  6: GOOD_SIDEEFFECT,
  5: BAD_SIDEEFFECT,
  4: GOOD_SIDEEFFECT,
  3: BAD_SIDEEFFECT,
  2: AMAZING_SIDEEFFECT,
  1: TERRIBLE_SIDEEFFECT
};

const SKILLS = [
  'acrobatics',
  'arcana',
  'athletics',
  'bluff',
  'diplomacy',
  'dungeoneering',
  'endurance',
  'healing',
  'history',
  'insight',
  'intimidation',
  'nature',
  'perception',
  'religion',
  'stealth',
  'streetwise',
  'thievery',
];

async function displayNarrativeSideEffect(entity, options, userId) {
  if (userId != game.userId) return;
  const skillRegex = new RegExp(' uses (' + SKILLS.join('|') + ')\.$', 'i')
  if (skillRegex.test(entity.flavor || '')) {
    const dieResult = entity.rolls[0].dice[0].total;
    const outcome = SIDEEFFECTS[dieResult] || DEFAULT_SIDEEFFECT;
    ChatMessage.create({
      user: entity.user.id,
      speaker: entity.speaker,
      flavor: `Narrative Side Effect`,
      content: "&#10070; " + outcome + " &#10070;"
    });
  }
}

Hooks.on("createChatMessage", displayNarrativeSideEffect);
