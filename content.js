/* ============================================================
   CONTENT FOR hitisha.vercel.app
   Everything on the site comes from this one file.
   ============================================================ */

window.SITE = {

  /* ---------- ABOUT ---------- */
  about: {
    firstName: "Hitisha",
    lastName: "Jeswani",
    hello: "hi, i'm",
    headline: ["I love making things", "that ", "feel", " something."],
    tagline: "A CSE student who builds, designs and writes, and feels all of it.",
    tags: ["Developer", "Designer", "Writer", "Organiser"],
    bio: [
      "I'm a second-year B.Tech Computer Science student at Manipal University Jaipur. I build apps, design posters, write poems and essays, and somehow always end up running the events too.",
      "I've secured 6 brand sponsors, planned and run events across 10+ clubs, led teams at national hackathons, and I'm researching federated learning for privacy-preserving AI. I like work that sits right where logic meets feeling."
    ],
    motto: "all i want in life is joy in my heart and chatak in my mind 🧨",
    liveBy: [
      { text: "kal ho na ho", note: "so live fully today" },
      { text: "feel too deeply, care too deeply, always", note: "no half-feelings" },
      { text: "can never do it hungry", note: "brain loads only after snacks. please feed before use." },
      { text: "people eat food to live, i live to eat food", note: "ask me my plans and i'll tell you my next meal." }
    ],
    roles: ["Developer", "Designer", "Poet", "Writer", "Organiser", "Researcher", "Sponsorship Head", "Foodie", "Overthinker"]
  },

  /* ---------- CONTACT ---------- */
  contact: {
    instagram: "https://www.instagram.com/_hitishaa_/",
    instagramHandle: "@_hitishaa_",
    linkedin: "https://www.linkedin.com/in/hitisha-jeswani",
    github: "https://github.com/hjesw",     // TODO: GitHub profile URL
    email: "hitisha.2502051844@muj.manipal.edu",
    phone: "+91 88159 35161",
    phoneHref: "tel:+918815935161"
  },

  /* ---------- DESIGN (Visual stories) ---------- */
  design: [
    {
      slug: "saanjh",
      title: "Saanjh",
      subtitle: "Poetry in the lanes of Purani Dilli",
      style: "Vintage illustration",
      status: "Concept event",
      image: "assets/posters/saanjh.jpg",
      oneLiner: "A poetry evening in the lanes of Old Delhi, told through a Mughal arch, a dusk sky and a title in three scripts.",
      meaning: "Some evenings feel like poems before anyone writes a word. Saanjh is about that hour, when the light softens over old walls, chai goes cold mid-conversation, and the city starts speaking in a language older than all of us. It's my love letter to slowness, to words, and to places that remember.",
      concept: "Looking through a Mughal arch into a dusk-lit galli. The arch frames the scene like a doorway into another time, and the props in front (kulhad chai, an inkwell, a half-written letter, rose petals) say 'poetry evening' before you read a single line. The title appears in Hindi, English and Urdu, because poetry in Delhi has always lived in all three.",
      palette: [
        { name: "Old parchment", hex: "#EADBC0" },
        { name: "Faded ink", hex: "#3B2A1E" },
        { name: "Dusk maroon", hex: "#7A2E2A" },
        { name: "Antique brass", hex: "#B88A44" },
        { name: "Marigold", hex: "#D9822B" },
        { name: "Peeling-wall teal", hex: "#4F7A74" }
      ],
      fonts: ["Rozha One (Hindi)", "Noto Nastaliq Urdu (Urdu)", "Playfair Display (English)"]
    },
    {
      slug: "cyra",
      title: "CYRA",
      subtitle: "Know your cycle. Own your health.",
      style: "Product launch",
      status: "My own app",
      image: "assets/posters/cyra.jpg",
      oneLiner: "A launch poster for CYRA, my PCOS and hormonal health companion app: soft, calm and never clinical.",
      meaning: "So many women are taught that their bodies are a problem to be managed. CYRA comes from the opposite belief: that understanding yourself should feel gentle, not clinical. This poster is a promise I want the app to keep: you are not alone in your body, and knowing it is a kind of power.",
      concept: "One clear promise, 'Know your cycle. Own your health.', and a tilted phone showing a cycle ring. A soft wave line, like a hormone curve, flows behind everything and becomes CYRA's signature shape. Berry pink appears in only three places, so it always feels special.",
      palette: [
        { name: "Baby pink", hex: "#F9D9E3" },
        { name: "Blush white", hex: "#FFF5F8" },
        { name: "Rose pink", hex: "#F29CB7" },
        { name: "Berry pink", hex: "#D94F7C" },
        { name: "Deep berry", hex: "#4A1F3D" },
        { name: "Soft lilac", hex: "#E7DAF5" }
      ],
      fonts: ["Fraunces (headline)", "DM Sans (body)"]
    },
    {
      slug: "hap-cafe",
      title: "HAP Café",
      subtitle: "A new chapter in a cup",
      style: "Brand ad",
      status: "Concept (fictional café)",
      image: "assets/posters/hap.jpg",
      oneLiner: "A cozy library-café launches its Rich Mocha Iced Latte, told like a storybook with a capybara mascot.",
      meaning: "Some places don't just serve coffee, they hold you. HAP is the café I wish existed: a corner with soft toys, worn books and pasta good enough to fix a bad day. It's about comfort as a design choice, the belief that warmth can be built, one chapter at a time.",
      concept: "The new latte sits on a stack of books with pun titles (Once Upon a Latte, The Pasta Diaries, Hugs & Paperbacks), hugged by a capybara. A library due-date card holds the launch date: 'Borrowed by: you ♡'. The pasta gets a small handwritten shout-out, present but never stealing the show.",
      palette: [
        { name: "Latte cream", hex: "#F6EADB" },
        { name: "Cocoa", hex: "#4B2E24" },
        { name: "Mocha", hex: "#8A5A44" },
        { name: "Caramel", hex: "#D9A066" },
        { name: "Dusty blue", hex: "#A9C2D9" },
        { name: "Sage", hex: "#B7C9A8" }
      ],
      fonts: ["Baloo 2 (logo)", "DM Serif Display (headline)", "Caveat (notes)", "DM Sans (details)"]
    },
    {
      slug: "overthinking",
      title: "Overthinking",
      subtitle: "A type study at 3:07 AM",
      style: "Experimental typography",
      status: "Personal study",
      image: "assets/posters/overthinking.jpg",
      oneLiner: "One word, spiralling the way a thought does at 3 AM, in three colours with a twist ending.",
      meaning: "This one is honest. It's what my head sounds like at 3:07 AM: one thought, repeated until it stops meaning anything. I wanted people to see their own spiral in it, and then laugh at the ending, because sometimes the bravest thing you can do with a thought is let it go.",
      concept: "No images, only letters. 'OVERTHINKING' starts clean and tight, then wobbles, turns to outline, gets tangled in a scribble and finally shatters into loose letters. Tiny intrusive thoughts hide between the rows ('did i reply to that?', 'it's fine. is it fine?'), and red is used only twice, as bookends.",
      palette: [
        { name: "Off-white paper", hex: "#F2EFE8" },
        { name: "Ink black", hex: "#111111" },
        { name: "Signal red", hex: "#FF3B1F" }
      ],
      fonts: ["Anton (the word)", "Space Grotesk (meta strip)", "Space Mono (the thoughts)", "Instrument Serif Italic (the ending)"]
    },
    {
      slug: "build-24",
      title: "BUILD/24",
      subtitle: "Build something bigger.",
      style: "Swiss minimal",
      status: "Concept event",
      image: "assets/posters/build24.jpg",
      oneLiner: "A grid-based hackathon poster: one giant number, one blue clock, nothing extra.",
      meaning: "Hackathons are where tired people build impossible things: twenty-four hours, too much coffee, and a strange kind of magic when a room full of strangers starts believing in the same idea. This poster strips all of that down to one number and one circle, because sometimes the clearest way to say something big is to say almost nothing.",
      concept: "A giant '24' bleeds off the edge while a cobalt circle becomes a clock, with a thin orbit line sweeping around it like time racing past. Every other element snaps to a strict grid: flush-left text, a clean details table, and 'HACK — SHIP — SLEEP (MAYBE)' running down the side.",
      palette: [
        { name: "Off-white", hex: "#F5F2EA" },
        { name: "Swiss black", hex: "#0D0D0D" },
        { name: "Cobalt", hex: "#2433FF" }
      ],
      fonts: ["Inter Tight (one family only)", "Space Mono (footer line)"]
    },
    {
      slug: "always-and-forever",
      title: "Always and Forever",
      subtitle: "A friendship manifesto",
      style: "Personal / illustrated",
      status: "Personal",
      image: "assets/posters/always-and-forever.jpg",
      oneLiner: "Two threads, one pink and one blue, travel through fifteen promises and end in a knot that never comes undone.",
      meaning: "This is the most personal thing I've made. To me, friendship is choosing someone beyond convenience: accepting every flaw, never having to prove yourself, trusting each other no matter what. It's living separate lives without becoming strangers, not talking every day but knowing the bond still holds through busy weeks, fights and new faces. It's never competing for your place, never earning your right to belong, and both people wanting it to exist. Every stop on this map is one of those promises.",
      concept: "A pink thread and a blue thread, one for each friend, wind down the poster like a journey map. They pass through fifteen small moments: a pinky promise, an umbrella shared in the rain, a chair 'saved for you', a tin-can phone that only works if both people hold on. Then they tie into a knot. The threads never break, not even through the storm.",
      palette: [
        { name: "Cloud white", hex: "#FFF9F5" },
        { name: "Baby pink", hex: "#F8C8D8" },
        { name: "Sky blue", hex: "#A7D8F5" },
        { name: "Rose pink", hex: "#E8789E" },
        { name: "Navy ink", hex: "#2C3E66" }
      ],
      fonts: ["Gloock (title)", "Great Vibes ('and')", "Patrick Hand (notes)"]
    }
  ],

  /* ---------- WRITING (filled in below) ---------- */
  writing: [
  {
    "slug": "you-are-here-to-be-real",
    "title": "You Are Here to Be Real",
    "subtitle": "",
    "type": "Poem",
    "meaning": "For everyone who has ever been called too much. This poem is my refusal to shrink: a reminder that storms, mess and loudness aren't flaws to fix but proof of being fully alive. I wrote it as permission to feel loudly, to stay honest even when my voice shakes, and to never apologise for taking up space.",
    "body": "Be messy, they said, like chaos was a flaw,\nbut galaxies are born from dust that never learned to stay still at all,\nand oceans don’t apologize for how hard, how loud they crash,\nso why should I shrink my storms to fit polite corners they’ve carved?\n\nBe chaotic like thunder arguing with the sky at 3AM in the dark,\nlike a heart that feels first, never waiting for a knock,\nlike healing that shatters before it slowly learns to mend,\nlike every kind of rebirth that tastes of ash in the end.\n\nBe wild not pretty, not posed, not framed for display,\nbut dirt-stained, grief-throated, clawing its way,\nthe kind that cries into pillows, laughs at the wrong time,\nand survives silent nights it buries by daytime.\n\nBe curious, even when truth cuts close to the bone,\nwhen answers burn hot and you’re standing alone,\nwhen questions shake hard in the grip of your hands,\nand the dark is the only place that still understands.\n\nBe dramatic because some hearts are theatres, loud, aching, vast,\nand “I’m fine” is a lie too small for the echo to mask.\n\nBe real, even when your voice trembles near confession,\nwhen truth shifts the air and unsettles the room’s direction,\nwhen honesty costs you comfort and easy peace,\nbecause false calm is just a beautiful cage with a velvet release.\n\nBe bold staying when leaving would hurt a little less,\nloving with shaking hands and a tight, heavy chest,\nsaying “this hurt me” plain, without hiding in play,\nbelieving you still deserve softness anyway.\n\nBe loud in existence, in breath and in being,\nin refusing to fade into background or ceiling,\nin standing there, breathing, scarred but unbowed,\nafter everything in this world tried to quiet you down.\n\nAnd if they call you too much, too intense, too bright,\nremember the moon moves whole oceans at night,\nand stars burn for ages, fierce, endless, and far,\nnever once asking permission to be what they are.\n\nSo be messy, chaotic, wild, curious, dramatic,\nbe the storm, the ashes, the calm that comes after it.\nBe the truth that cracks mirrors, the hand through the tears.\n\nBecause who cares?\nYou are not here to be easy to hold.\nYou are here to be real..."
  },
  {
    "slug": "you-only-get-one",
    "title": "You Only Get One",
    "subtitle": "",
    "type": "Poem",
    "meaning": "A love letter to living out loud. It's about leaving what's comfortable, saying yes to the unplanned, and making mistakes worth remembering. Underneath it is a quiet fear I think all of us carry: that we'll spend our one life rehearsing for it instead of living it.",
    "body": "You only get one life,\nlike a flickering flame, a borrowed breath,\na fragile constellation of moments\nstitched between hello and death.\n\nSo do not fold it into habit,\ndo not silent its restless call,\nfor nothing great was ever earned\nby never leaving home at all.\n\nBecause nothing worth becoming\nis found by staying where you are.\nAnd nothing worth remembering\ncomes from playing it safe.\n\nTo gain a dream, you must depart,\nfrom familiar roads, from known skies,\nfrom the comfort of being understood\nto the courage of becoming unrecognised.\n\nMake mistakes magnificent, unpolished ones,\nthe kind no textbook can erase.\nMiss trains. Choose wrongly. Lose your way.\nGrowth has always loved disgrace.\nLet chaos tutor you in ways\ndiscipline could never do.\n\nVisit places where no one knows your story,\nwhere you are free to become\nwithout explanation.\nLet new cities teach you humility,\nlet foreign skies remind you\nWho you really are\nLose yourself in fleeting chaos,\ndance like time has lost its hold.\n\nDo the things that come your way\nnot just the ones that make sense.\nLife rewards the curious\nmore than the disciplined.\n\nClimb mountains that mock your strength,\nskydive through your doubt,\nhang your breath between the sky and earth\nuntil your fear falls out.\n\nSay yes to the unexpected—\nthe call at 2 a.m.,\nthe trip you didn’t budget for,\nthe version you weren’t meant to be yet,\n\nGet drunk on nights\nthat feel infinite.\nGet wasted on laughter,\non music that plays too loud,\non moments you’ll never be able\nto recreate exactly the same way.\n\nSo stop rehearsing safety,\nstop waiting for the sign,\nlife does not tap your shoulder,\njust for letting you know the chance.\n\nLive each day\nas if tomorrow is an unreliable promise,\nas if time is a currency\nmeant to be spent, not saved,\nMake ordinary hours historic\nby inhabiting them fully\nbecause regret of missing out\ncorrodes deeper, than any wound earned honestly"
  },
  {
    "slug": "between-the-chaos-and-the-storm",
    "title": "Between the Chaos and the Storm",
    "subtitle": "On Living Fully, Wildly, and Without Apology",
    "type": "Essay",
    "meaning": "Some feelings are too big for one form. This is where everything I believe about living (being messy, being bold, saying yes) finally got room to breathe in full sentences. It's less advice and more a promise to myself: to feel every moment, not just get through it.",
    "paragraphs": [
      "You only get one life.",
      "Not a rehearsal. Not a draft. Not something you can fold neatly and revisit later when you feel more ready, more certain, more safe. Just one—fragile, flickering, uncertain. A brief constellation of moments stitched somewhere between a beginning you don’t remember and an end you cannot control.",
      "And yet, most of us spend it waiting. Waiting for the right time. Waiting for clarity. Waiting for a version of ourselves that feels more acceptable, more understood, more complete. life does not pause for hesitation. It does not reward those who stay still out of fear.",
      "And the truth is simple, almost uncomfortable in how direct it is:\nYou only get one life.\nYou only get to live once.",
      "So do not shrink it into routines that suffocate you. Do not silence the restless part of you that wants more. Because nothing worth becoming is ever found by staying exactly where you are.",
      "It happens when you choose paths that don’t guarantee success. When you say yes to things that don’t make perfect sense. When you allow yourself to make mistakes that are messy, unpolished, and irreversible. The kind that no textbook prepares you for. The kind that leave you questioning everything.",
      "Because there is a strange, uncomfortable truth - growth has always loved disgrace.",
      "Say yes more often. Say yes to plans that weren’t scheduled.\nSay yes to 4 a.m. drives when the world is quiet and the roads feel endless.\nSay yes to trips you didn’t budget for, conversations you didn’t expect, moments that don’t make sense at all.",
      "Let yourself get a little reckless - not in a way that destroys you, but in a way that reminds you that you are alive.",
      "Get drunk on nights that feel infinite, on laughter that echoes too loudly, on music that you feel more than you hear.",
      "Let yourself exist in moments you won’t be able to recreate because those are the ones that stay with you - not the safe, predictable days, but the ones that felt like something, that made you feel alive.",
      "Make mistakes. Real ones.",
      "The kind that don’t look good in hindsight.\nThe kind that don’t fit into neat lessons.\nThe kind that leave you a little undone.",
      "Miss trains. Choose wrongly. Lose your way.",
      "Because growth has never come from perfection. It comes from the chaos of figuring things out as you go. It comes from being wrong, from falling apart, from not knowing what you’re doing and doing it anyway.",
      "Let chaos teach you what discipline never could.",
      "Be messy -  Not the kind that looks aesthetic from a distance, but the real kind - the kind that feels uncomfortable, loud, unpredictable. The kind that includes crying, laughing at the wrong moments, feeling too much, caring too deeply.",
      "Because chaos is not a flaw. It is where everything begins.",
      "Galaxies are born from dust that refused to stay still. Oceans don’t apologize for how hard they crash. Storms don’t ask for permission before they arrive. So why should you shrink yourself to fit into something quieter, smaller, easier?",
      "Be wild - Not pretty. Not polished. Not perfectly composed.",
      "Be the kind of wild that is dirt-stained and real. The kind that survives heavy nights and still shows up the next day. The kind that feels everything deeply and refuses to numb it down just to be more acceptable.",
      "Be curious - Even when the answers hurt. Even when you stand alone in the truth.",
      "Let life surprise you. Let it shake you. Let it change you in ways you never planned for.",
      "Be honest - Even when your voice trembles. Even when it shifts the room. Even when it costs you comfort. Because a false sense of peace is nothing more than a beautiful cage.",
      "Be bold - Stay when it matters. Leave when it’s needed. Love even when it’s difficult. Speak even when it’s uncomfortable. Choose experiences over explanations, moments over perfection.",
      "Because a life spent playing safe may protect you from pain, but it will cost your feeling of being alive.",
      "Living is not meant to be careful. It is meant to be felt.",
      "Fully. Deeply. Unapologetically.",
      "So stop rehearsing safety. Stop waiting for signs. Stop convincing yourself that there will always be more time, better timing, another chance.",
      "There might not be.",
      "Live each day like tomorrow is uncertain. Like time is not something to save, but something to spend. Fill your hours with things that make them feel real, not just productive, not just acceptable, but alive.",
      "Because regret does not come from doing too much.",
      "It comes from not doing enough of what made you feel something.",
      "From the plans you didn’t say yes to.\nFrom the risks you didn’t take.\nFrom the life you kept postponing.",
      "So be loud in your existence.",
      "In your choices.\nIn your presence.\nIn your refusal to fade into the background of your own life.",
      "And if they call you too much - too intense, too chaotic, too emotional, let them.",
      "The moon moves entire oceans without asking. Stars burn endlessly without apology. Storms arrive without permission.",
      "You are not here to be easy to hold.\nYou are not here to be convenient.",
      "You are here to be real.",
      "And that, in itself, is the bravest way to live.",
      "So be messy.\nBe chaotic.\nBe wild.\nSay yes.",
      "And most importantly - \nlive like this life is too short and this world is full of experiences to offer and it is compulsory to feel each one of them."
    ]
  },
  {
    "slug": "when-power-outlives-legitimacy",
    "title": "When Power Outlives Legitimacy",
    "subtitle": "The United Nations at a Crossroads",
    "type": "Article",
    "meaning": "Model UN taught me that diplomacy is a room full of people trying to be heard. This article asks an uncomfortable question about that room: what happens when the world changes but power doesn't? It comes from caring about fairness, and from believing that institutions should earn our trust, not simply inherit it.",
    "paragraphs": [
      "\"The United Nations was not created to take mankind to heaven, but to save humanity from hell.\" Those words, often attributed to former UN Secretary-General Dag Hammarskjöld, captured the organisation's original purpose. Born from the ashes of the Second World War, the United Nations promised a world where diplomacy would win over destruction and debate would replace war.",
      "Eighty years later, however, the world has changed in ways anyone could have ever imagined. Economic power has shifted, new geopolitical centres have emerged, technology and AI has transformed diplomacy, and developing nations now play a defining role in global affairs. Yet the institution tasked with representing the international community continues to operate through a power structure largely frozen in 1945.",
      "The question is no longer whether the United Nations remains important. It undoubtedly does. The more pressing question is whether UN stands for the ideals reflecting all the countries and whether its governance still reflects the world it seeks to lead.",
      "The UN Security Council remains the organisation's most powerful body. It consists of fifteen members, but only five hold permanent seats: the United States, the United Kingdom, France, Russia and China. More importantly, each of these five nations possesses the power to veto any substantive resolution, regardless of the level of international support it receives.",
      "When the Charter was drafted in 1945, this arrangement was understandable. The victors of the Second World War believed that maintaining peace required the continued participation of the world's major military powers. Granting them veto authority was seen as a political compromise, one designed to prevent another catastrophic global conflict and to ensure that the most influential states remained committed to the institution rather than acting outside it.",
      "The world evolved. The United Nations, however, largely did not.",
      "India has emerged as one of the world's largest economies and a major diplomatic actor. Germany has become Europe's economic engine. Japan continues to shape global technology, finance and development. Brazil plays an increasingly influential role across Latin America, while African nations collectively represent a rapidly growing share of the world's population, economic potential and political voice. These countries contribute significantly to peacekeeping, development initiatives, global trade and international cooperation. Yet none of them enjoys the permanent representation or institutional authority afforded to the P5.",
      "Representation matters because it builds trust and credibility. If the United Nations aims to represent the entire international community, its structure should evolve as the world evolves. As countries grow economically, politically, and diplomatically, they deserve a greater voice in global decision-making. When global influence changes but the distribution of power remains the same, it is only natural for questions about fairness and legitimacy to arise.",
      "The veto power lies at the heart of this debate. Supporters argue that the veto prevents direct confrontation among major powers and forces continued negotiation. Without it, they contend, powerful nations might ignore the UN altogether, weakening the institution even further.",
      "Yet critics see a different reality. They argue that the veto increasingly functions not as a mechanism for preserving peace but as a shield protecting national interests, even during moments of profound international crisis.",
      "Russia's actions in the Security Council following its full-scale invasion of Ukraine in 2022 illustrate why this debate has become so controversial. A draft resolution condemning the invasion and calling for the withdrawal of Russian forces received broad support within the Council. Russia vetoed the resolution.",
      "To many observers, this exposed a fundamental contradiction within the UN system. When a permanent member can block action concerning a conflict in which it is itself directly involved, accountability appears subordinate to privilege. Whether one agrees with Russia's legal and political justifications or not, the episode intensified longstanding concerns about whether the Security Council can act effectively when the interests of its permanent members are at stake.",
      "A similar debate emerged following the destruction of Malaysia Airlines Flight MH17 in 2014, which claimed the lives of 298 people. A proposal to establish an international criminal tribunal was introduced before the Security Council. Russia vetoed the resolution, arguing that the proposal was politically motivated and premature. Many other states, however, viewed the tribunal as an opportunity to pursue independent international accountability for one of the deadliest aviation tragedies in modern history.",
      "Most importantly, this concern extends beyond Russia. The United States has repeatedly exercised its veto on resolutions concerning Israel and Palestine. China has joined Russia in vetoing several resolutions relating to Syria. These examples suggest that the issue is systemic rather than individual. Every permanent member has, at various times, used the veto to protect what it considers vital national or strategic interests.",
      "This reality raises an uncomfortable but necessary question: can an institution maintain global legitimacy if its most influential decisions depend not only on international consensus but also on the political calculations of just five governments?",
      "Reforming the Security Council is neither simple nor politically convenient. Expanding permanent membership, restricting veto use during cases involving mass atrocities, or creating new mechanisms for accountability each present their own legal and diplomatic challenges but acknowledging the difficulty of reform cannot become an excuse for avoiding it altogether.",
      "The United Nations remains indispensable. Its peacekeeping missions, humanitarian agencies, development programmes and diplomatic forums continue to improve millions of lives across the globe. Its value should not be underestimated.",
      "Yet preserving the institution requires more than preserving its traditions. It requires preserving its credibility.",
      "The United Nations was built to represent a post-war world struggling to recover from destruction. Today's world is different and more interconnected, more economically diverse and increasingly multipolar. If the institution hopes to retain the confidence of future generations, it must demonstrate that legitimacy is earned not only through history but through fairness, representation and the willingness to evolve.",
      "Perhaps the greatest challenge facing the United Nations is not the absence of power. It is the growing perception that power within the institution is distributed according to yesterday's realities rather than today's world. History gave the Security Council its authority. The future will determine whether it still deserves it."
    ]
  }
],

  /* ---------- TECH & RESEARCH (Logic, applied) ---------- */
  tech: [
    {
      slug: "federated-learning",
      title: "Federated Learning for Privacy-Preserving AI",
      category: "Research",
      status: "Ongoing research",
      oneLiner: "Training AI across many devices without ever moving sensitive data to a central server.",
      overview: "I'm researching how AI models can learn across many devices without sensitive data leaving them, using disease prediction as the use case. I'm benchmarking FedAvg, logistic regression, neural networks and differential-privacy-based federated models against centralised learning on accuracy, privacy and communication cost, and studying open problems such as uneven (non-IID) client data, model poisoning and adversarial attacks.",
      why: "Health data is some of the most personal data we have. I'm drawn to the idea that models can still learn from it, and help predict disease, without anyone having to hand their data over. Progress and privacy don't have to be enemies.",
      stack: ["Federated learning", "FedAvg", "Differential privacy", "Python"],
      links: []
    },
    {
      slug: "cyra-app",
      title: "CYRA",
      category: "AI health app",
      status: "My own project",
      oneLiner: "An AI hormonal health companion for PCOS awareness.",
      overview: "CYRA has an adaptive symptom quiz with an explainable risk score, plus cycle, symptom and wellness tracking. It writes a doctor-ready report you can export as a PDF, has a myth detector, and includes a chatbot that speaks 10 Indian languages. Personal data stays on the device.",
      why: "Women navigating PCOS are too often dismissed or overwhelmed. I wanted to build something that explains instead of scaring, speaks your language (literally), and keeps your most private data with you.",
      stack: ["React", "Vite", "Tailwind CSS", "Claude API"],
      links: [{ label: "See the CYRA poster", href: "#/design/cyra" }]
    },
    {
      slug: "pragati",
      title: "Pragati",
      category: "Hackathon · SIH 2026",
      status: "Cleared the SIH internal round",
      oneLiner: "An AI business advisor for rural entrepreneurs.",
      overview: "Built for Smart India Hackathon problem SIH26091 (Ministry of Social Justice & Empowerment). Pragati suggests business ideas matched to a person's capital, skills and location, with local demand and feasibility scores. It also has a sales and expense ledger (khata) with low-stock alerts, EMI and profit calculators, a loan and government-scheme finder, a business simulator and an AI assistant in Hindi and Hinglish. I designed the location and language databases in PostgreSQL.",
      why: "So much talent in small towns never becomes a business because nobody shows the way. Pragati is our attempt to be that guide, in the language people actually speak.",
      stack: ["Web app", "PostgreSQL", "AI assistant", "Hindi / Hinglish"],
      links: [{ label: "Live demo", href: "https://sih-demo-7-main.vercel.app/" }]
    },
    {
      slug: "certaintyiq",
      title: "CertaintyIQ",
      category: "Machine learning",
      status: "",
      oneLiner: "Demand forecasting that gives honest ranges, not false certainty.",
      overview: "A forecasting platform that predicts demand as ranges using quantile regression and conformal prediction, with calibration checks and Low / Medium / High inventory-risk tiers.",
      why: "A single number pretends to know the future. I wanted a forecast that's honest about what it doesn't know, because that's what real inventory decisions need.",
      stack: ["Python", "XGBoost", "MAPIE", "FastAPI", "React"],
      links: []
    },
    {
      slug: "roadsos",
      title: "RoadSoS",
      category: "Emergency app",
      status: "Team Power Puff Girls",
      oneLiner: "A mobile-first app for road emergencies.",
      overview: "RoadSoS has an SOS button, live location sharing, a map of safe zones, road-issue reporting and email or phone sign-in.",
      why: "In an emergency, every second and every tap counts. We designed RoadSoS so that help is one button away.",
      stack: ["React", "Tailwind CSS", "Supabase", "Leaflet / OpenStreetMap"],
      links: []
    },
    {
      slug: "urban-intelligence",
      title: "Urban Intelligence",
      category: "Smart city platform",
      status: "Team leader, CodeBlocks",
      oneLiner: "An AI smart-city platform with a 3D digital twin.",
      overview: "I led the design of a smart-city platform with a 3D digital twin, traffic and air-quality prediction, water-leak detection, smart waste routing and citizen issue reporting.",
      why: "Cities are living systems. I loved imagining one that could notice its own problems, from a leaking pipe to a choking road, before its people have to.",
      stack: ["AI", "Digital twin", "Prediction"],
      links: []
    },
    {
      slug: "climate-digital-twin",
      title: "AI Digital Twin of India's Climate",
      category: "Climate AI",
      status: "Team leader, HAP",
      oneLiner: "Predicting rainfall and temperature and flagging climate risks.",
      overview: "I led a team proposing a platform that combines IMD and INSAT data to predict rainfall and temperature, flag climate risks and simulate scenarios with explainable AI.",
      why: "Climate change isn't a future problem in India; it's this year's monsoon. I wanted predictions that people can understand and act on, not just read.",
      stack: ["Explainable AI", "IMD & INSAT data", "Simulation"],
      links: []
    },
    {
      slug: "phishing-detection",
      title: "Phishing Website Detection",
      category: "Machine learning",
      status: "",
      oneLiner: "Spotting phishing URLs before anyone clicks them.",
      overview: "I extracted 40 URL features and compared six ML classifiers on precision, recall, F1-score and false-positive rate, using hostname-grouped splits to avoid data leakage. A command-line tool scores new URLs.",
      why: "One wrong click can cost someone their savings. I wanted to see how much a URL alone can give away, and to build something careful enough not to cry wolf.",
      stack: ["Python", "scikit-learn"],
      links: []
    },
    {
      slug: "intrusion-detection",
      title: "ML-Based Intrusion Detection for Smart Networks",
      category: "Cybersecurity",
      status: "",
      oneLiner: "Catching attacks hiding in network traffic.",
      overview: "A dashboard comparing Random Forest, Decision Tree and Extra Trees classifiers with Isolation Forest and One-Class SVM anomaly detectors on network-flow data, reporting detection and false-alarm rates.",
      why: "Smart networks are only smart if they're safe. This project taught me how differently 'known attack' and 'something weird' have to be caught.",
      stack: ["Python", "scikit-learn", "Streamlit"],
      links: []
    },
    {
      slug: "breathing-numbers",
      title: "Breathing Numbers",
      category: "Data analysis",
      status: "",
      oneLiner: "What India's air quality data says about the air we breathe.",
      overview: "I analysed around 29,000 city-days of CPCB data (2015–2020) to study Delhi's winter spikes, the Diwali effect and the impact of the 2020 lockdown.",
      why: "Every winter we talk about the smog. I wanted to look at what the numbers actually say, and the lockdown showed how quickly the air can change.",
      stack: ["Python", "pandas", "Matplotlib"],
      links: []
    },
    {
      slug: "stayease",
      title: "StayEase",
      category: "Database system",
      status: "",
      oneLiner: "A hotel management system built on a carefully designed database.",
      overview: "A BCNF-normalised database with triggers, stored procedures for check-in and check-out, and views for occupancy and payment reports.",
      why: "Behind every smooth check-in is a database nobody sees. StayEase is where I learned to make that invisible part reliable.",
      stack: ["PostgreSQL (Supabase)", "React", "TypeScript"],
      links: []
    },
    {
      slug: "cravecraft",
      title: "CraveCraft",
      category: "Web app",
      status: "",
      oneLiner: "A food ordering and nutrition app.",
      overview: "A menu, a cart with GST billing, calorie tracking, mood-based suggestions and a weekly meal planner, all on a Java backend.",
      why: "People eat food to live; I live to eat food. So naturally I built a food app, one that lets you order what you crave and still know what's on your plate.",
      stack: ["Java", "HTML", "CSS", "JavaScript"],
      links: []
    },
    {
      slug: "library-management",
      title: "Library Management System",
      category: "Data structures",
      status: "",
      oneLiner: "A library system built from the data structures up.",
      overview: "A binary search tree catalogue, a queue-based reservation waitlist, a stack for return history and merge-sort reports, all in C.",
      why: "One of my first real programs. It's where I learned that the right data structure makes everything else easy.",
      stack: ["C"],
      links: []
    }
  ],

  /* ---------- EXPERIENCE (Rooms I run to) ---------- */
  experience: {
    leadership: [
      { role: "Core Committee", org: "Hypnexis '26", note: "36-hour national hackathon by the Dept. of CCE, MUJ. Secured sponsors ixigo, Waffle 99 and Lotte India; drafted partnership proposals and campus-ambassador outreach." },
      { role: "Assistant Secretary-General, Conference Affairs & Finance", org: "MUJMUN 13.0", note: "Managed conference affairs and the conference budget; secured Brillare as a sponsor." },
      { role: "Sponsorships & Curations Head", org: "ACM SIGAI MUJ", note: "Leads sponsorship outreach and event curation. Earlier on the Events Junior Committee, planning technical events, event flows and task allocation." },
      { role: "Senior Working Team", org: "Litmus MUJ", note: "Events & logistics, promotions & curations, and finance & registrations; drafted the event proposal and flow for ERROR:TRUST. Junior Working Team the year before (events, logistics & writing)." },
      { role: "Senior Working Team", org: "Rotaract Club MUJ", note: "Working on the Blood Donation Camp and its Road to BDC campaign; productions team for the membership drive." },
      { role: "Sponsorship Team", org: "Daan Utsav", note: "Secured YogaBars and Max Protein and worked on the sponsorship deck." }
    ],
    events: [
      { name: "Hypnexis '26", what: "Core committee for a 36-hour national hackathon" },
      { name: "MUJMUN 13.0", what: "Conference affairs, finance and sponsorship" },
      { name: "ERROR:TRUST", what: "Drafted the event proposal and flow (Litmus)" },
      { name: "Smart India Hackathon at MUJ", what: "Coordinated it with E-Cell, including over winter break" },
      { name: "Treasure Hunt", what: "Point of contact (MarkSoc)" },
      { name: "Oneiros", what: "Point of contact for 5 events" },
      { name: "Blood Donation Camp", what: "Road to BDC campaign with Rotaract" },
      { name: "Daan Utsav", what: "Sponsorships and the sponsorship deck" }
    ],
    hackathons: [
      { name: "Smart India Hackathon 2025", what: "Cleared the MUJ internal round, Top 50 teams" },
      { name: "Smart India Hackathon 2026", what: "Built Pragati; cleared the MUJ internal round" },
      { name: "TechSprint", what: "Top 5 teams" },
      { name: "NextWave × OpenAI", what: "Qualified for Round 3" },
      { name: "IIC 3.0", what: "Qualified for Round 3" },
      { name: "HackX 2.0", what: "Qualified for Round 3" },
      { name: "Statathon 2025 (Government of India)", what: "Qualified for Round 2" },
      { name: "Troubleshoot by Microsoft", what: "Qualified for Round 2" },
      { name: "Hypnexis '26", what: "On the other side of the table, as part of the organising core committee" }
    ],
    sponsors: [
      { brand: "Brillare", event: "MUJMUN" },
      { brand: "YogaBars", event: "Daan Utsav" },
      { brand: "Max Protein", event: "Daan Utsav" },
      { brand: "ixigo", event: "Hypnexis" },
      { brand: "Waffle 99", event: "Hypnexis" },
      { brand: "Lotte India", event: "Hypnexis" }
    ],
    volunteering: [
      { name: "Rotaract Club MUJ", what: "Blood Donation Camp & community service" },
      { name: "Model UN", what: "Delegate (incl. UNHRC); position papers and an opinion piece on UN reform" }
    ],
    achievements: [
      "Full scholarship for a summer program by MIT, USA",
      "Painting published in The Times of India",
      "Poetry selected till the publishing stage (Immerse Education)",
      "Dil Maange More Dance Competition: 2nd position"
    ],
    clubsSecondYear: [
      "ACM SIGAI MUJ: Sponsorships & Curations Head",
      "Litmus MUJ: Senior Working Team",
      "Rotaract Club MUJ: Senior Working Team",
      "Hypnexis '26: Core Committee",
      "MUJMUN 13.0: Assistant Secretary-General"
    ],
    clubsFirstYear: [
      "Litmus MUJ: Junior Working Team",
      "ACM SIGAI MUJ: Events Junior Committee",
      "Rotaract Club MUJ: Member",
      "E-Cell MUJ: Operations",
      "IAESTE MUJ: Outgoing",
      "MarkSoc: Marketing; Techi technical team",
      "Oneiros",
      "Indigenous MUJ",
      "Garuda MUJ",
      "TechIdeate"
    ]
  }
};
