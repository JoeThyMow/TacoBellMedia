const input = document.querySelector('#search');
const stories = [...document.querySelectorAll('#articles .story')];
const empty = document.querySelector('#empty');
if (input) input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  let visible = 0;
  for (const story of stories) {
    const matches = story.dataset.search.includes(q);
    story.hidden = !matches;
    if (matches) visible++;
  }
  empty.hidden = visible !== 0;
});
