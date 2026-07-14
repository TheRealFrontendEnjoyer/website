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

    "too-much-in-my-head": {
        pageTitle: 'Too much in my head.', // title tag
        title: 'Too much in my head.', // title of the article itself
        date: "11 july 2026", // date of the article
        content: `
            <p>Haven't been around this website for almost a month now.. Sorry about that!</p>

            <p>There's been <b>WAY TOO MANY</b> worries in my head.. And I need to get them out somehow.</p>

            <p>Last time, I spoke about the exams I did, I'm super proud of myself for it still! But something happened in the meantime..</p>

            <p>Turns out, the lady that "verified" if my exam was good for correction, didn't proprely verify it! And that's something that's making me scared...</p>

            <p>Still, I'll try not to worry about it!</p>

            <p>There's also another thing that's been bothering my mind, which is.. Never feeling enough.</p>

            <p>I've had a doctor tell me I have OCD, so I dunno if that could be related but I constantly feel like I gotta be perfect, and that's killing me.</p>

            <p>If I do something that is (in my standards) not perfect, I will be anxious, I will fear, I will become way too cautious.</p>

            <p>And this affects everyone! Random people, friends, friends of friends, best friends, family.</p>

            <p>I think the most recent situation was today, I had my best friend (I LOVE THEM SO MUCH) call me while I was asleep. I usually keep my phone with sound in case someone needs me!</p>

            <p>But for some reason, this time, I didn't wake up with the ringtone and I woke up feeling like the worst friend in the world.</p>

            <p>Even though I know that they assumed that I didn't wake up with the call.</p>

            <p>At this point, I just want to be normal. What does it mean to be normal?</p>

            <p>Why do I need to have this curse that makes me want to be perfect and do everything perfectly?</p>

            <p>Why can't I be like everyone else? Why can't I simply be happy and jolly and not worry about anything!?!?!?!?</p>

            <p>But what I wanna say is, I rarely feel.. Well, myself. And it's horrible!</p>

            <p>Body dysphoria's also been a <b>BITCH</b>!</p>

            <p>Sadly, this trans bunny, due to her bone structure, will never have the chance to achieve the body she desires. x3</p>

            <p><b>AND IT SUCKS SO MUCHHHHHH</b> because I have the perfect body to build muscle and look all buff and stoof but, I wanna do <b>THE COMPLETE OPPOSITE!!!!!!!!</b></p>
            
            <p>I wanna feel cute and pretty and super girly and feel okay with my body and representation!!!</p>

            <p>And sadly, that's gonna be <b>SOOPER</b> hard..</p>

            <p>The good news is, I should study a bit far away from home this year! So this means.. I'll have all the privacy in the world to get pretty clothes! :3</p>

            <p>I already made a couple outfits in my mind to buy.. I'm so excited!!!</p>

            <p>Well, that's it! Have a bunnytastic day!!!! &lt;3</p>
        `
    },

    "getting-into-new-not-so-new-stoof": {
        pageTitle: 'getting into new (not so new) stoof', // title tag
        title: 'getting into new (not so new) stoof', // title of the article itself
        date: "15 july 2026", // date of the article
        content: `
            <p>So, for the past few weeks, I've been doing the same stuff over and over again..</p>

            <p>And honestly, I'm tired of it! That's why I've been getting into new.. And also not new stuff!</p>

            <p>In terms of games, I've been getting more into Rainbow Six Siege, I had the game for probably 4 years at this point but never got into it!</p>

            <p>After a few hours of gaming, it's SO GOOD AAAAAAAAAAAAAAA</p>

            <p>The problem is, you take forever to unlock competitive, I have 45 hours in total and I'm still level 35.. (you need lvl 50 to get comp)</p>

            <p>I've been also making moosic again! Mainly ambience.. Mixed with lots of breaks..</p>

            <p>Honestly, I blame Sewersvlt for the way I make music! (the first time I did anything ambience like was a tutorial based on their music)</p>

            <p>And I'm super happy because.. Ambience music is fun!</p>

            <p>ALSO! I've been getting into COD BO2! And I know what you're thinking.. "Girl, that game's SUPER OLD!"</p>

            <p>And to that, I say.. True.. BUT! It's part of my childhood.</p>

            <p>Actually, the first COD I played was BO3, I barely played BO2 as a kid but I watched way too much content on BO2.</p>

            <p>And before I forget, except a blog update on either... Friday or Saturday!</p>

            <p>I'm gonna get my final exam grades and I'll share here with y'all, silly people behind the screen! :3</p>

            <p>Have a bunnytastic day!!!! &lt;3</p>
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