module.exports = {
  buildTime: new Date(),
  baseUrl: 'https://drazevacshelter.org',
  name: 'drazevac-shelder',
  languages: [
    { label: 'serbian', code: 'rs' },
    { label: 'english', code: 'en' },
  ],

  title: 'Draževac',

  en: {
    metaTitle: 'Multilingual Eleventy',
    metaDescription: 'A multilingual eleventy website demo',
    navigation: [
      { title: 'Adopt', href: '/en/adopt' },
      { title: 'Donate', href: '/en/donate' },
      { title: 'Visit', href: '/en/see' },
    ],

    index: {
      heroTitle: 'Draževac <br/> Shelter',
      heroSubtitle:
        'Temporary house for animals <br/>  who are looking for a home',
      heroStats: [
        { label: 'dogs', count: 200 },
        { label: 'cats', count: 100 },
        { label: 'horse', count: 1 },
        { label: 'donkey', count: 1 },
        { label: 'Vesna’s', count: 2 },
      ],

      aboutTitle: 'Story about Draževac',
      aboutSummary:
        'Draževac shelter is an association for the protection of abandoned, both healthy and sick, disabled and old animals. Vesna Prokopljević, together with her granddaughter, founded a shelter in 2009, whose home became a refuge for over 300 animals from the entire territory of Serbia. Our primary goal is to give a second chance to all animals that are abandoned or not in an adequate environment, by doing our best to cure them, feed them and, with a lot of time and luck, adopt them.',
      aboutCTA: 'watch video',

      adoptTitle: 'Animals in search of a home',
      adoptCTA: 'View all animals',

      donateTitle: 'How else can I help?',
      donateSubtitle:
        'Given that the costs of a shelter of such capacity are huge, we have been surviving for years thanks to the help, support and donations of good people. Anyone who is unable to adopt an animal, support financially or donate food can help us in other ways. We always need dog houses to make it easier for them to survive the winter, occasional or permanent volunteers as well as people who would come just to pet all those animals who are eager for love and attention. Our desire is to encourage people to help in their own way and within their means because any help is welcome!',
      donateCTA: 'Donate',
      donateTypes: [
        { title: 'food' },
        { title: 'make a house' },
        { title: 'volunteer' },
      ],

      proof: ['Friends', 'Press'],
      footer: { title: 'Visit us', href: '/see' },
    },

    adopt: {
      animals: {
        headline: 'Adopt',
      },
      adoptOptions: ['Adopt a dog', 'Adopt a cat'],
      processTitle: 'Adoption procedure',
      processSteps: [
        {
          title: 'Arrival and introduction',
          description:
            'We are located in Draževac, a small place in the municipality of Obrenovac.',
        },
        {
          title: 'Signing the contract',
          description:
            'By signing the contract you undertake full responsibility for the welfare of the adopted animal',
        },
        {
          title: 'Taking the animal home',
          description: 'Lifelong friends',
        },
      ],
      thanksTitle: 'Thank you',
      faqTitle: 'Frequently Asked Questions',
      faq: [
        {
          index: 0,
          question: 'Are all the animals in the shelter socialized?',
          answer: `Absolutely. The very fact that they live in such a pack, where every other day another animal comes along that they have to get used to, says it all. We only have a couple of very old dogs that are no longer sociable but they are not for adoption.)`,
        },
        {
          index: 1,
          question:
            'If I adopt a dog that is no longer a puppy, will I be able to discipline it?',
          answer: `Of course. Every dog, with love and work, can be disciplined but you should always respect the fact that the dog also has its own desires and needs. Compromise is the key. Adult dogs often learn much faster than puppies because they are able to better recognize authority and respect it.`,
        },
        {
          index: 2,
          question: 'Are there any purebred dogs in the shelter?',
          answer: `Yes. Always.`,
        },
        {
          index: 3,
          question:
            'What if I already have a dog / cat, will it get along with the new animal?',
          answer: `Our dogs and cats are used to packs and to having a new one arrive every other day, so it will most likely be the adopted animal that will initiate contact and lead in getting to know each other. Things like this sometimes happen right away and sometimes require a lot of work, love and patience but for the most part, it pays off.)`,
        },
        {
          index: 4,
          question: 'How to get a dog used to the apartment?',
          answer: `With effort, patience and regular walks outside.`,
        },
        {
          index: 5,
          question:
            'How long does it take for a cat to adapt to a new owner?',
          answer: ` It depends on the cat and the owner, sometimes it gets hooked immediately and sometimes it goes step by step until the cat relaxes in the new environment.`,
        },
        {
          index: 6,
          question:
            'Is it okay to take a dog and to keep hip on a leash or cage?',
          answer: `No. We do not support this type of foster care. If the dog is bigger and with a thick fur, it is quite acceptable to live in the yard, but life on a chain or in a cage is a cruel deprivation of liberty, and we do not support that.)`,
        },
      ],
    },

    donate: {
      title: 'Any help is welcome',
      subtitle:
        'The monthly costs of the shelter are very high considering the number of animals we feed, treat and support. Every donation, large or small, monthly or one-time, is what maintains the shelter and our 300 animals.)',
      stats: [
        { title: '3t', subtitle: 'granula za pse' },
        { title: '240kg', subtitle: 'mekana hrana za invalide' },
        { title: '150kg', subtitle: 'granula za macke' },
      ],
      form: {
        title: 'Choose a donation type:',
        types: [
          { label: 'One Time donation', value: 'ONCE' },
          { label: 'Montly donation', value: 'MONTHLY' },
        ],
      },
    },

    see: {
      headline: 'Visit us',
      summary: `Although we do everything in our power to provide the best living conditions for the animals in the shelter, there are few of us, we work all day and thus we fail to provide them with enough attention and love. That is why we invite all good people to come and play, pet and love our animals because they need that as much as they need food.
We are located in the village of Draževac near Obrenovac. You can visit us any day, without notice, between 09-20h. If you can't find us, feel free to call us!`,
    },
  },

  sr: {
    metaTitle: 'Multilingual Eleventy',
    metaDescription: 'A multilingual eleventy website demo',
    navigation: [
      { title: 'Udomi', href: '/adopt' },
      { title: 'Doniraj', href: '/donate' },
      { title: 'Poseti', href: '/see' },
    ],

    index: {
      heroTitle: 'Draževac <br/> Shelter',
      heroSubtitle:
        'Temporary house for animals <br/>  who are looking for a home',
      heroStats: [
        { label: 'dogs', count: 200 },
        { label: 'cats', count: 100 },
        { label: 'horse', count: 1 },
        { label: 'donkey', count: 1 },
        { label: "Vesne's", count: 2 },
      ],

      aboutTitle: 'Story about Draževac',
      aboutSummary:
        'Draževac shelter is an association for the protection of abandoned, both healthy and sick, disabled and old animals. Vesna Prokopljević, together with her granddaughter, founded a shelter in 2009, whose home became a refuge for over 300 animals from the entire territory of Serbia. Our primary goal is to give a second chance to all animals that are abandoned or not in an adequate environment, by doing our best to cure them, feed them and, with a lot of time and luck, adopt them.',
      aboutCTA: 'watch video',

      adoptTitle: 'Animals in search of a home',
      adoptCTA: 'Obidji sve drugare',

      donateTitle: 'How else can I help?',
      donateSubtitle:
        'Given that the costs of a shelter of such capacity are huge, we have been surviving for years thanks to the help, support and donations of good people. Anyone who is unable to adopt an animal, support financially or donate food can help us in other ways. We always need dog houses to make it easier for them to survive the winter, occasional or permanent volunteers as well as people who would come just to pet all those animals who are eager for love and attention. Our desire is to encourage people to help in their own way and within their means because any help is welcome!',
    },

    adopt: {
      animals: {
        headline: 'Udomi',
      },
      adoptOptions: ['Udomi psa', 'Udomi mačku'],
      processTitle: 'Procedura udomljavanja',
      processSteps: [
        {
          title: 'Dolazak i upoznavanje',
          description:
            'We are located in Draževac, a small place in the municipality of Obrenovac.',
        },
        {
          title: 'Potpisivanje ugovora',
          description:
            'Potpisivanjem ugovora se obavezujete na potpunu odgovornost za dobrobit udomljene životinje',
        },
        {
          title: 'Preuzimanje njuške',
          description: 'Prijatelji za ceo život',
        },
      ],
      thanksTitle: 'Hvala vam!',

      faq: [
        {
          index: 0,
          question:
            'Da li su sve životinje u prihvatilištu socijalizovane?',
          answer: `Apsolutno. Sama činjenica da žive u tolikom čoporu, gde se svaki drugi dan pojavljuje druga životinja na koju moraju da se priviknu, govori o tome. Imamo samo par veoma starih pasa koji nisu više druželjubivi ali oni svakako nisu za udomljavanje.`,
        },
        {
          index: 1,
          question:
            'Ako udomim psa koji nije više štene, da li ću moći da ga disciplinujem?',
          answer: `Naravno. Svaki pas, uz ljubav i rad može da se disciplinuje s tim što uvek treba poštovati činjenicu da i pas ima svoje želje i potrebe. Ključan je kompromis. Odrasli psi čak često uče mnogo brže od štenića jer mnogo bolje umeju da prepoznaju autoritet i da ga poštuju.`,
        },
        {
          index: 2,
          question: 'Da li u prihvatilištu postoje i rasni psi?',
          answer: `Da. Uvek. Nažalost čak i rasni psi prečesto završavaju na ulici. `,
        },
        {
          index: 3,
          question:
            'Šta ako već imam psa/mačku, hoće li se slagati s novom životinjom?',
          answer: `Naši psi i mačke su naviknuti na čopore i na to da im svaki drugi dan pristiže neko nov tako da će najverovatnije udomljena životinja biti ta koja će da inicira kontakt i predvodi u upoznavanju. Ovakve stvari se nekad dese odmah a nekad zahtevaju puno rada, ljubavi i strpljenja ali se uglavnom, veoma isplati.`,
        },
        {
          index: 4,
          question: 'Kako naviknuti psa na stan?',
          answer: `Trudom, strpljenjem i redovnim šetnjama napolju.`,
        },
        {
          index: 5,
          question:
            'Koliko vremena treba da se mačka adaptira na novog vlasnika?',
          answer: `To zavisi od mačke i od vlasnika, nekad se odmah ukače a nekad se ide korak po korak dok se mačka ne opusti u novom okruženju.`,
        },
        {
          index: 6,
          question:
            'Da li je okej da uzmem psa i da bude na lancu ili kavezu?',
          answer: `Ne. Mi ne podržavamo ovakav vid udomljavanja. Ukoliko je pas veći i sa debelim krznom, sasvim je prihvatljivo da živi u dvorištu ali život na lancu ili u kavezu je surovo oduzimanje slobode i to ne podržavamo.`,
        },
      ],
    },

    donate: {
      title: 'Svaka pomoć je dobrodošla',
      subtitle:
        'Mesečni troškovi prihvatilišta su jako veliki s obzirom na broj životinja koje hranimo, lečimo i izdržavamo. Svaka donacija, velika ili mala, mesečna ili jednokratna je ono što održava prihvatilište i naših 300 njuški.',
      stats: [
        { title: '3t', subtitle: 'granula za pse' },
        { title: '240kg', subtitle: 'mekana hrana za invalide' },
        { title: '150kg', subtitle: 'granula za macke' },
      ],
      form: {
        title: 'Odaberite tip donacije:',
        types: [
          { label: 'Jednokratna', value: 'ONCE' },
          { label: 'Mesečna', value: 'MONTHLY' },
        ],
      },
    },

    see: {
      headline: 'Posetite nas',
      summary: `Iako sve radimo da životinjama u prihvatilištu obezbedimo najbolje uslove za život, nas je malo, radimo ceo dan kako bi stvorili zdrave i higijenske uslove za naše stanovnike i samim tim ne uspevamo da im pružimo dovoljno pažnje i ljubavi. Zato pozivamo sve dobre ljude da dodju da se igraju, druže i maze njuške kojima je to potrebno koliko i hrana. 
            Nalazimo se u selu Draževac u blizini Obrenovca. Možete nas posetiti bilo koji dan, bez najavljivanja, izmedju 09-20h. Ukoliko ne možete da nas nadjete, slobodno nas pozovite!`,
    },
  },
};
