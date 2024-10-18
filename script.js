// Array of 100 random love quotes
const loveQuotes = [
  "Love is composed of a single soul inhabiting two bodies.",
  "Where there is love, there is life.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "The best thing to hold onto in life is each other.",
  "Love all, trust a few, do wrong to none.",
  "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "To be brave is to love someone unconditionally, without expecting anything in return.",
  "You are my sun, my moon, and all my stars.",
  "Love is a friendship set to music.",
  "I am yours, don’t give myself back to me.",
  "You make me want to be a better man.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "The greatest thing you'll ever learn is just to love and be loved in return.",
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "I would rather spend one moment holding you than a lifetime knowing I never could.",
  "A true relationship is two imperfect people refusing to give up on each other.",
  "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the piece of me I didn't know I was missing.",
  "I fell in love with you because of the million things you never knew you were doing.",
  "We are most alive when we're in love.",
  "If I know what love is, it's because of you.",
  "Love is the master key that opens the gates of happiness.",
  "Love is a canvas furnished by nature and embroidered by imagination.",
  "You are the love that came without warning; you had my heart before I could say no.",
  "In your eyes, I have found my home. In your heart, I have found my love. In your soul, I have found my mate.",
  "You are my today and all of my tomorrows.",
  "I love you not only for what you are but for what I am when I am with you.",
  "Love is an irresistible desire to be irresistibly desired.",
  "To love and be loved is to feel the sun from both sides.",
  "You make my heart smile.",
  "I didn't know how to live until I saw you.",
  "Every time I see you, I fall in love all over again.",
  "Love is like the wind, you can't see it, but you can feel it.",
  "You are my heart, my life, my one and only thought.",
  "I want all of you, forever, you and me, every day.",
  "To love oneself is the beginning of a lifelong romance.",
  "You are my greatest adventure.",
  "Love is when the other person's happiness is more important than your own.",
  "I wish I could turn back the clock. I'd find you sooner and love you longer.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "I love you, not for what you are, but for what I am when I am with you.",
  "The best thing to hold onto in life is each other.",
  "Love is the only force capable of transforming an enemy into a friend.",
  "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
  "I am in you and you in me, mutual in divine love.",
  "The greatest thing you'll ever learn is just to love and be loved in return.",
  "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.",
  "Love is like the sun that comes out from the clouds and heats your soul.",
  "We are most alive when we're in love.",
  "Love is a fruit in season at all times, and within reach of every hand.",
  "You make me a better person.",
  "The best love is the kind that awakens the soul.",
  "Love is a game that two can play and both can win.",
  "You are my today and all of my tomorrows.",
  "Love is not about possession. Love is about appreciation.",
  "The greatest happiness of life is the conviction that we are loved.",
  "You have bewitched me, body and soul.",
  "Your love is all I need to feel complete.",
  "I would rather spend one moment holding you than a lifetime knowing I never could.",
  "Love is an ocean of emotions entirely surrounded by expenses.",
  "True love is eternal, infinite, and always like itself.",
  "I love you not only for what you are but for what I am when I am with you.",
  "I am yours, don’t give myself back to me.",
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "You are my sun, my moon, and all my stars.",
  "A true relationship is two imperfect people refusing to give up on each other.",
  "Love is composed of a single soul inhabiting two bodies.",
  "You are the love that came without warning; you had my heart before I could say no.",
  "If I know what love is, it's because of you.",
  "You make my heart smile.",
  "You are the piece of me I didn't know I was missing.",
  "Every time I see you, I fall in love all over again.",
  "In your eyes, I have found my home. In your heart, I have found my love.",
  "You make me want to be a better man.",
  "To love oneself is the beginning of a lifelong romance.",
  "Love is a friendship set to music.",
  "The best love is the kind that awakens the soul.",
  "I want all of you, forever, you and me, every day.",
  "You are my heart, my life, my one and only thought.",
  "I fell in love with you because of the million things you never knew you were doing.",
  "Love is when the other person's happiness is more important than your own.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "You have bewitched me, body and soul.",
  "I wish I could turn back the clock. I'd find you sooner and love you longer.",
  "You are my today and all of my tomorrows.",
  "Love is like the wind, you can't see it, but you can feel it.",
  "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
  "Love is the only force capable of transforming an enemy into a friend.",
  "The greatest happiness of life is the conviction that we are loved.",
  "To be brave is to love someone unconditionally, without expecting anything in return.",
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "Love is the greatest adventure.",
  "We are most alive when we're in love.",
  "You are my greatest adventure.",
  "You are my heart, my life, my one and only thought.",
  "The best thing to hold onto in life is each other.",
  "You make me want to be a better man.",
  "You are my sun, my moon, and all my stars.",
  "Every love story is beautiful, but ours is my favorite.",
  "Love is like the wind, you can't see it, but you can feel it.",
  "You are the piece of me I didn't know I was missing.",
  "You make my heart smile.",
  "Love is when the other person's happiness is more important than your own.",
  "The greatest thing you'll ever learn is just to love and be loved in return.",
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * loveQuotes.length);
  return loveQuotes[randomIndex];
}

// Event listener for the button
document.getElementById("loveButton").addEventListener("click", function () {
  const quote = getRandomQuote(); // Get a random quote
  const displayDiv = document.getElementById("quoteDisplay");

  // Format and display the quote
  displayDiv.innerHTML = `
        <p>Dear Somna,</p>
        <p>"${quote}"</p>
    `;
  displayDiv.style.display = "block"; // Show the quote display
});
