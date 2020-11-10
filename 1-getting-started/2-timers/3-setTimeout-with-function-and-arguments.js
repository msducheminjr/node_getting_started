const rocks = who => {
  console.log(who + ' rocks');
};

// Cleveland will be printed first
setTimeout(rocks, 1500, 'Pluralsight');
setTimeout(rocks, 1000, 'Cleveland');
