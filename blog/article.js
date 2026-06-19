const articles = {
    "fuck-it-method": {
        pageTitle: 'The Fuck it Method', // title tag
        title: 'The Fuck it Method', // title of the article itself
        date: "08 june 2026", // date of the article
        content: `
            <p>My friends and family know me as someone who overthinks A LOT and I mean A LOT really.</p>

            <p>Sometimes the smallest things can make me crashout and even panic... Which is not cool!!!</p>

            <p>While doomscrolling yesterday, I came to a conclusion.. What if I just say "fuck it" everytime I start overthinking?</p>

            <p>Well, for anyone wondering <em>(which is no one)</em>, for the first time in months, I spent a day without overthinking!</p>

            <p>Of course this is not a solution for every problem, some situations will still make me overthink but! This is good progress.</p>

            <p>Have a good day y'all!</p>
        `
    },

    "thoughts-after-the-exam": {
        pageTitle: 'Thoughts after the exam...', // title tag
        title: 'Thoughts after the exam...', // title of the article itself
        date: "19 june 2026", // date of the article
        content: `
            <p>I had a SUPER important exam this tuesday... I was so scared to take it!</p>

            <p>I mean, I wasn't super nervous because I studied tons but I was quite unlucky with the contents that came within the exam. x3</p>

            <p>Still, with a bit of brain power and thinking, I was able to do everything!</p>

            <p>I really hope I can pass the exam, I studied a WHOLE YEAR for this!</p>

            <p>Now... I feel really relieved, my cortisol is MEGA LOW!</p>

            <p>I still got one more exam to go but this one's a LOT easier, so I'm not too stressed for it.</p>

            <p>Since I got more free time now, I might pick up streaming again or some MMOs!</p>

            <p>Well, it's midnight for me, so I should get some sleep.</p>

            <p>Wish you all an amazing day!!!</p>
        `
    },
};

const params = new URLSearchParams(window.location.search);
const articleId = params.get("article");

if (articles[articleId]) {
    document.title = articles[articleId].pageTitle;

    document.querySelector(".post-title").innerHTML =
        articles[articleId].title;

    document.querySelector(".meta-item").innerHTML =
        articles[articleId].date;

    document.querySelector(".content-body").innerHTML =
        articles[articleId].content;
}