// https://github.com/msducheminjr/node_getting_started/1-getting-started/2-timers/uncanny-facebook-simulator.js
const calcInterval = function(multiplier) {
  result = Math.random() * multiplier;
  if (result < 2000) {
    result *= 10;
  }
  return result;
}

const addToChaos = function(fbMessage, frequency) {
  setInterval(
    () => console.log(fbMessage),
    calcInterval(frequency)
  );
}

console.log('Facebook be like')
setInterval(
  () => console.log('HaVe YoU ReGiStErEd To VoTe?'),
  2400
);

addToChaos(
  'Partially false information.\n' +
  '(Checked by independent fact checkers who agree with Facebook about everything',
  51000
  );

addToChaos('Copy and paste (do not share) my digital chain letter!', 48750);

addToChaos('TRUMP IS LITERALLY HITLER!', 56890);

addToChaos('TRUMP IS LITERALLY JESUS!', 79880);

addToChaos('Questionnaire phishing for password reset questions set to public', 57880);

addToChaos('Ad that knows me creepily well', 81000);

addToChaos('Ad that has no clue about me.', 44000);

addToChaos('Old person sharing missing person case that was closed years ago.', 96000);

addToChaos('(Heated political argument between friends)', 110000);

addToChaos('[[ARGUING OVER THE INTERNET INTENSIFIES]]', 140000);

addToChaos('Funny video', 160000);

addToChaos('Lame meme', 112030);

addToChaos('Actually funny meme', 221070);

addToChaos('Post about somebody\'s life. Why I joined in the first place', 139770);

addToChaos('Cat video', 221070);

addToChaos('Unsolicited friend request', 13888);

addToChaos('I can almost feel Zuckerberg breathing on me', 67002);
