// Interface cho World Composer
export interface WorldComposer {
  id: string;
  name: string;
  era: string;
  avatar: string; // Đường dẫn đến ảnh avatar
  overview?: string; // Tổng quan về nhà soạn nhạc
  styleAndContribution?: string; // Phong cách và đóng góp
  representativeWorks?: {
    title: string;
    year: string;
    description?: string;
  }[];
  // Giữ lại các field cũ để tương thích
  bio?: string;
  famousWorks?: string[];
  awards?: string[];
}

// Dữ liệu World composers
export const worldComposers: WorldComposer[] = [
  {
    id: "stephen-sondheim",
    name: "Stephen Sondheim",
    era: "1930 - 2021",
    avatar: "/images/composers/world/stephen-sondheim.jpg",
    overview: "Stephen Sondheim is regarded as the central figure who shaped modern American musical theatre. Serving both as composer and lyricist for most of his works, he expanded the expressive boundaries of the musical form — structurally, thematically, and musically.",
    styleAndContribution: "Renowned for his lyrical sophistication, complex musical structures, and the use of motifs and counterpoint, Sondheim brought psychological and moral depth to the stage. His works often explored inner conflict, ambiguity, and ethical tension, transforming the musical into a medium for introspection and artistic analysis.",
    representativeWorks: [
      { title: "Sweeney Todd", year: "1979", description: "A dark musical thriller about a vengeful barber" },
      { title: "Into the Woods", year: "1987", description: "A sophisticated exploration of fairy tale morality" },
      { title: "Company", year: "1970", description: "A concept musical examining marriage and commitment" },
      { title: "A Little Night Music", year: "1973", description: "Features the iconic 'Send in the Clowns'" },
      { title: "Sunday in the Park with George", year: "1984", description: "A meditation on art and creative process" },
      { title: "West Side Story", year: "1957", description: "Lyricist for this groundbreaking collaboration with Leonard Bernstein" }
    ],
    awards: ["8 Tony Awards", "8 Grammy Awards", "1 Academy Award", "Pulitzer Prize for Drama (1985)", "Presidential Medal of Freedom (2015)"]
  },
  {
    id: "richard-rodgers",
    name: "Richard Rodgers",
    era: "1902 - 1979",
    avatar: "/images/composers/world/richard-rodgers.jpg",
    overview: "Richard Rodgers was one of the principal architects of Broadway's 'Golden Age.' Through his legendary collaboration with Oscar Hammerstein II, he helped transform songs into integral tools of storytelling rather than standalone numbers.",
    styleAndContribution: "Rodgers masterfully combined enduring melodies with strong narrative function, laying the foundation for the modern book musical. His compositions are notable for their seamless integration of music and character psychology, using songs as natural extensions of dialogue and emotional development.",
    representativeWorks: [
      { title: "Oklahoma!", year: "1943", description: "Revolutionary integration of story, song, and dance" },
      { title: "Carousel", year: "1945", description: "Explores darker themes with sophisticated musical storytelling" },
      { title: "South Pacific", year: "1949", description: "Pulitzer Prize-winning examination of racial prejudice" },
      { title: "The King and I", year: "1951", description: "Cultural collision told through memorable melodies" },
      { title: "The Sound of Music", year: "1959", description: "The final Rodgers & Hammerstein collaboration, became cultural phenomenon" }
    ],
    awards: ["6 Tony Awards", "2 Academy Awards", "2 Pulitzer Prizes", "Emmy Award", "Grammy Award (EGOT winner)"]
  },
  {
    id: "george-gershwin",
    name: "George Gershwin",
    era: "1898 - 1937",
    avatar: "/images/composers/world/george-gershwin.jpg",
    overview: "George Gershwin was a pivotal figure in bridging jazz, popular music, and classical tradition, expanding the musical language of the American stage. His work blurred the boundaries between concert music and musical theatre, redefining what American composition could sound like.",
    styleAndContribution: "Gershwin's hallmark was his rich harmonic palette and his ability to weave jazz and popular rhythms into larger classical forms such as opera and symphonic works. His music created a vital link between the spontaneity of jazz performance and the structural sophistication of orchestral composition.",
    representativeWorks: [
      { title: "Porgy and Bess", year: "1935", description: "American opera masterpiece, bridging classical and vernacular traditions" },
      { title: "Girl Crazy", year: "1930", description: "Broadway musical featuring 'I Got Rhythm' and 'Embraceable You'" },
      { title: "Rhapsody in Blue", year: "1924", description: "Iconic orchestral jazz composition" },
      { title: "An American in Paris", year: "1928", description: "Symphonic tone poem capturing Parisian spirit" },
      { title: "Of Thee I Sing", year: "1931", description: "First musical to win Pulitzer Prize for Drama" }
    ],
    awards: ["Pulitzer Prize for Drama (1932, Of Thee I Sing)", "Numerous posthumous honors including Grammy Hall of Fame inductions"]
  },
  {
    id: "andrew-lloyd-webber",
    name: "Andrew Lloyd Webber",
    era: "1948 - Present",
    avatar: "/images/composers/world/andrew-lloyd-webber.jpg",
    overview: "Andrew Lloyd Webber stands as the emblematic composer of the 'mega-musical' era — lavish productions distinguished by immense scale, technological spectacle, and worldwide commercial success. His works reshaped the global image of musical theatre as both grand entertainment and a cultural export.",
    styleAndContribution: "Webber's signature lies in his sweeping melodies, repetitive leitmotifs, and technically sophisticated staging. He helped redefine the modern musical as a multinational theatrical event, merging emotional immediacy with mass appeal and setting new commercial standards for the industry.",
    representativeWorks: [
      { title: "Jesus Christ Superstar", year: "1971", description: "Rock opera that revolutionized musical storytelling" },
      { title: "Evita", year: "1978", description: "Epic political drama told through song" },
      { title: "Cats", year: "1981", description: "Based on T.S. Eliot, became global phenomenon" },
      { title: "The Phantom of the Opera", year: "1986", description: "Longest-running Broadway show in history" }
    ],
    awards: ["3 Tony Awards", "7 Olivier Awards", "1 Academy Award", "Grammy Awards", "Knighthood (1992)", "Life Peerage (2021)"]
  },
  {
    id: "leonard-bernstein",
    name: "Leonard Bernstein",
    era: "1918 - 1990",
    avatar: "/images/composers/world/leonard-bernstein.jpg",
    overview: "Leonard Bernstein was both a composer and conductor who bridged the worlds of classical music and Broadway, bringing sophisticated harmonic structures and orchestral techniques to the popular stage.",
    styleAndContribution: "Bernstein's music is marked by dramatic intensity and bold contrasts, seamlessly blending jazz, symphonic, and theatrical idioms. He succeeded in translating the energy and rhythm of New York City into a distinct musical language, capturing the pulse of modern urban life on stage.",
    representativeWorks: [
      { title: "West Side Story", year: "1957", description: "Revolutionary fusion of ballet, jazz, and contemporary social issues" },
      { title: "On the Town", year: "1944", description: "Energetic celebration of wartime New York" },
      { title: "Candide", year: "1956", description: "Sophisticated comic operetta based on Voltaire" }
    ],
    awards: ["Multiple Tony, Emmy, and Grammy Awards", "Kennedy Center Honors (1980)", "National Medal of Arts (1985)"]
  },
  {
    id: "irving-berlin",
    name: "Irving Berlin",
    era: "1888 - 1989",
    avatar: "/images/composers/world/irving-berlin.jpg",
    overview: "Irving Berlin was one of the most prolific and influential popular songwriters in American history, leaving a profound cultural impact on both stage and screen. His vast body of work helped define the sound of 20th-century American entertainment.",
    styleAndContribution: "Berlin was known for his memorable, universally appealing melodies and lyrics that captured the optimism and simplicity of everyday life. Many of his songs became cultural standards, forming the backbone of American musical identity and contributing to countless stage revues and popular entertainment programs.",
    representativeWorks: [
      { title: "Annie Get Your Gun", year: "1946", description: "Broadway hit featuring 'There's No Business Like Show Business'" },
      { title: "This Is the Army", year: "1942", description: "Patriotic musical revue supporting war effort" },
      { title: "White Christmas", year: "1942", description: "Best-selling single of all time" }
    ],
    awards: ["Tony Award", "Academy Award", "Presidential Medal of Merit", "Congressional Gold Medal"]
  },
  {
    id: "stephen-schwartz",
    name: "Stephen Schwartz",
    era: "1948 - Present",
    avatar: "/images/composers/world/stephen-schwartz.jpg",
    overview: "Stephen Schwartz is a highly influential composer and lyricist whose career spans off-Broadway beginnings to Broadway blockbusters and animated film scores. He has achieved both artistic acclaim and commercial success, bridging the worlds of theatre and film with equal fluency.",
    styleAndContribution: "Schwartz is celebrated for his memorable, accessible melodies and his ability to craft emotionally direct songs that resonate with broad audiences. His versatility allows him to move seamlessly between stage musicals, animated films, and popular music, shaping the sound of modern family-friendly and inspirational storytelling.",
    representativeWorks: [
      { title: "Godspell", year: "1971", description: "Off-Broadway sensation reimagining the Gospel of Matthew" },
      { title: "Pippin", year: "1972", description: "Unconventional musical exploring life's meaning" },
      { title: "Wicked", year: "2003", description: "Broadway mega-hit reimagining The Wizard of Oz" },
      { title: "The Prince of Egypt", year: "1998", description: "Oscar-winning animated film score" }
    ],
    awards: ["3 Grammy Awards", "3 Academy Awards", "Drama Desk Awards", "Inducted into Songwriters Hall of Fame (2009)"]
  },
  {
    id: "alan-menken",
    name: "Alan Menken",
    era: "1949 - Present",
    avatar: "/images/composers/world/alan-menken.jpg",
    overview: "Alan Menken is best known for translating the musical language of Disney films onto the Broadway stage, creating a seamless bridge between animated cinema and live theatre. His works have become central to the evolution of family-friendly musicals within the modern Broadway canon.",
    styleAndContribution: "Menken's music is defined by its narrative-driven melodies, vivid orchestration, and universal emotional appeal. His compositions blend theatrical sophistication with cinematic charm, making them accessible to audiences of all ages. Through his work, he helped solidify the place of Disney-style storytelling as a cornerstone of contemporary musical theatre.",
    representativeWorks: [
      { title: "The Little Mermaid", year: "1989 (film), 2008 (stage)", description: "Launched Disney Renaissance with Academy Award-winning score" },
      { title: "Beauty and the Beast", year: "1991 (film), 1994 (stage)", description: "First animated film nominated for Best Picture Oscar" },
      { title: "Aladdin", year: "1992 (film), 2011 (stage)", description: "Features 'A Whole New World' and vibrant Middle Eastern-inspired score" },
      { title: "Little Shop of Horrors", year: "1982", description: "Off-Broadway cult classic rock musical" }
    ],
    awards: ["8 Academy Awards", "11 Grammy Awards", "7 Golden Globes", "1 Tony Award (EGOT winner)", "Disney Legend (2001)"]
  },
  {
    id: "elton-john",
    name: "Elton John",
    era: "1947 - Present",
    avatar: "/images/composers/world/elton-john.jpg",
    overview: "Building on his global success as a pop icon, Elton John made a highly successful transition into musical theatre composition. His major projects—such as The Lion King and Billy Elliot—demonstrate both commercial influence and cultural impact, bridging mainstream pop and the Broadway stage.",
    styleAndContribution: "John's work fuses pop and rock idioms with the narrative demands of musical theatre, bringing the immediacy of popular music into large-scale storytelling formats. His scores are marked by strong melodic hooks, emotional accessibility, and a distinctive rhythmic vitality that helped redefine what contemporary musicals could sound like.",
    representativeWorks: [
      { title: "The Lion King", year: "1997 (stage)", description: "Collaborated with Tim Rice; third longest-running Broadway show" },
      { title: "Billy Elliot", year: "2005", description: "Tony Award-winning score exploring class and aspiration in northern England" },
      { title: "Aida", year: "2000", description: "Pop-opera reimagining of Verdi's classic with Tim Rice" }
    ],
    awards: ["1 Tony Award", "5 Grammy Awards", "2 Academy Awards", "Golden Globe", "Knighthood (1998)", "Kennedy Center Honors (2004)"]
  },
];

// Interface cho Vietnam Composer
export interface VietnamComposer {
  id: string;
  name: string;
  era: string;
  avatar: string;
  overview?: string;
  styleAndContribution?: string;
  representativeWorks?: {
    title: string;
    year: string;
    description?: string;
  }[];
  bio?: string;
  famousWorks?: string[];
  awards?: string[];
}

// Dữ liệu Vietnam composers
export const vietnamComposers: VietnamComposer[] = [
  {
    id: "do-nhuan",
    name: "Đỗ Nhuận",
    era: "1922 - 1991",
    avatar: "/images/composers/vietnam/do-nhuan.jpg",
    overview:
      "Composer Đỗ Nhuận was a pioneer of Vietnamese opera, playing a foundational role in establishing this integrated art form in Vietnam. As the first composer to adapt the Western operatic tradition to Vietnamese cultural and musical contexts, he laid the groundwork for the nation's own operatic identity. In 1965, the premiere of his opera Cô Sao marked a historic milestone in modern Vietnamese music—melding folk melodies and Western classical structures to convey themes of patriotism and national identity.",
    representativeWorks: [
      {
        title: "Cô Sao",
        year: "1965",
        description:
          "The first Vietnamese opera, blending folk motifs with Western orchestration",
      },
      {
        title: "Người tạc tượng",
        year: "1970",
        description:
          "Composed to commemorate the 40th anniversary of the Communist Party of Vietnam and the 10th anniversary of the National Liberation Front of South Vietnam",
      },
      {
        title: "Nguyễn Trãi",
        year: "1980",
        description:
          "Written in honor of the 600th anniversary of Nguyễn Trãi's birth, celebrating the scholar's enduring legacy in Vietnamese history and culture",
      },
    ],
    awards: [
      "Ho Chi Minh Prize for Literature and Art",
      "People's Artist of Vietnam",
    ],
  },
  {
    id: "nguyen-thien-dao",
    name: "Nguyễn Thiên Đạo",
    era: "1940 - 2015",
    avatar: "/images/composers/vietnam/nguyen-thien-dao.jpg",
    overview:
      "Born in Hanoi and emigrating to France in 1953, Nguyễn Thiên Đạo studied at the Paris Conservatoire under the mentorship of Olivier Messiaen. As a Vietnamese–French composer, he became renowned for his fusion of Eastern and Western musical traditions, integrating Vietnamese folk and mythological elements into contemporary classical and operatic forms. His operas often draw inspiration from Vietnamese folklore and literature—such as The Tale of Kiều and Mỵ Châu–Trọng Thủy—and have been performed internationally at major festivals including Avignon.",
    styleAndContribution:
      "Nguyễn Thiên Đạo received several prestigious French honors, including the André Caplet Prize (1983) and the title of Chevalier des Arts et des Lettres (1984). His work played a crucial role in introducing Vietnamese opera to global audiences, especially during Vietnam's Đổi Mới era (post-1986), fostering rich Vietnam–France cultural exchange and artistic dialogue.",
    representativeWorks: [
      {
        title: "Mỵ Châu – Trọng Thủy",
        year: "1978",
        description: "Opera based on Vietnamese legend",
      },
      {
        title: "Les Enfants d'Izieu",
        year: "1994",
        description: "Holocaust memorial work",
      },
      {
        title: "Hoa Tấu",
        year: "1995",
        description:
          "Orchestral work blending Vietnamese and Western traditions",
      },
      {
        title: "Sóng hồn",
        year: "2000",
        description: "Opera exploring Vietnamese spiritual themes",
      },
      {
        title: "Sóng nhạc Trương Chi",
        year: "2003",
        description: "Based on Vietnamese folklore",
      },
      {
        title: "Quatre Lyriques de ciel et de terre",
        year: "2004",
        description: "Song cycle",
      },
      {
        title: "Truyện Kiều – Định mệnh bất chợt",
        year: "2012",
        description: "Opera-ballet based on Vietnam's national epic poem",
      },
    ],
    awards: [
      "André Caplet Prize (1983)",
      "Chevalier des Arts et des Lettres (1984)",
      "SACEM Grand Prize",
    ],
  },
  {
    id: "hoang-viet",
    name: "Hoàng Việt",
    era: "1930 - 1967",
    avatar: "/images/composers/vietnam/hoang-viet.jpg",
    overview:
      "Born Lê Chí Trực in Chợ Lớn (now Ho Chi Minh City) with family roots in Bà Rịa–Vũng Tàu and Tiền Giang, Hoàng Việt joined the revolution in 1945 and became an active member of the Southern Liberation Arts Troupes. Composing during the wartime years, his music reflected an optimistic and lyrical spirit, embodying the resilience and patriotism of the Vietnamese resistance. His opera Bông sen (The Lotus) was originally conceived as a full-length opera but later condensed into a musical scene due to the constraints of wartime performance. The work portrays the martyr Nguyễn Văn Lịch and diverges from traditional European operatic structure, expressing a distinctly Vietnamese sensibility. Beyond opera, Hoàng Việt also composed Quê hương (1964) — recognized as Vietnam's first symphonic suite — and popular revolutionary songs such as Tình ca (1957). Hoàng Việt was killed in action in 1967 in Tiền Giang, leaving behind a foundational legacy for Vietnamese symphonic and revolutionary music during the country's divided era (1954–1975).",
    representativeWorks: [
      {
        title: "Bông sen (The Lotus)",
        year: "1967",
        description:
          "Opera portraying the martyr Nguyễn Văn Lịch, condensed from full-length opera to musical scene",
      },
      {
        title: "Quê hương",
        year: "1964",
        description: "Vietnam's first symphonic suite",
      },
      {
        title: "Tình ca",
        year: "1957",
        description: "Popular revolutionary song",
      },
    ],
    awards: ["Posthumous recognition as martyr and cultural pioneer"],
  },
  {
    id: "do-hong-quan",
    name: "Đỗ Hồng Quân",
    era: "1960 - Present",
    avatar: "/images/composers/vietnam/do-hong-quan.jpg",
    overview:
      "The son of composer Đỗ Nhuận, Đỗ Hồng Quân was born in Hanoi and received his formal education at the Moscow Conservatory and later in Paris. He has taught composition at the Vietnam National Academy of Music for over 25 years and has served as Chairman of the Vietnam Musicians' Association. His operatic works are noted for their epic scope, combining Vietnamese traditional instruments (such as the đàn bầu) with Western symphonic orchestration, often addressing themes of history and revolution. A prolific and versatile artist, Đỗ Hồng Quân has composed across multiple genres—from the ballet Hồng hoang to film scores—with more than 100 works performed internationally. As a Member of the National Assembly (11th term), he has played a vital role in advancing and leading contemporary Vietnamese music in the post-Đổi Mới era of globalization and cultural exchange.",
    representativeWorks: [
      {
        title: "Lá đỏ",
        year: "2016",
        description:
          "First new Vietnamese opera in 40 years, epic historical work",
      },
      {
        title: "Vầng trăng Điện Biên",
        year: "2024",
        description: "Opera commemorating the Điện Biên Phủ victory",
      },
      { title: "Câu chuyện tình", year: "1989", description: "Ballet work" },
      { title: "Nàng Silami", year: "1991", description: "Opera" },
    ],
    awards: [
      "State Prize for Literature and Art",
      "People's Artist of Vietnam",
      "Member of National Assembly",
    ],
  },
  {
    id: "an-thuyen",
    name: "An Thuyên",
    era: "1950 - Present",
    avatar: "/images/composers/vietnam/an-thuyen.jpg",
    overview:
      "Born in Nghệ An, An Thuyên graduated from the Vietnam National Academy of Music and served in the military from 1975, later becoming Vietnam's first musician to be promoted to the rank of Major General (2008). Deeply rooted in the folk traditions of Nghệ Tĩnh, he skillfully wove their melodic and lyrical essence into his compositions. His well-known songs, such as Em chọn lối này (1971) and Neo đậu bến quê (1993), capture both regional identity and universal emotion. His opera Đất nước đứng lên (The Country Rises), based on Nguyên Ngọc's novel, stands as a landmark Vietnamese opera. Structured in six acts and infused with folk elements, it celebrates the revolutionary spirit of the Central Highlands. An Thuyên also composed music for over 60 theatrical plays and received the State Prize for Literature and Art (2007). His work represents a vital bridge between folk heritage and revolutionary music, spanning both wartime and postwar eras.",
    representativeWorks: [
      {
        title: "Đất nước đứng lên (The Country Rises)",
        year: "2005",
        description:
          "Six-act opera celebrating revolutionary spirit of Central Highlands",
      },
      {
        title: "Trương Chi",
        year: "N/A",
        description: "Opera based on Vietnamese legend",
      },
      { title: "Đôi đũa kim giao", year: "N/A", description: "Opera" },
      { title: "Biển tình cay đắng", year: "N/A", description: "Opera" },
    ],
    awards: [
      "State Prize for Literature and Art (2007)",
      "Major General rank (2008)",
      "People's Artist of Vietnam",
    ],
  },
  {
    id: "tran-manh-hung",
    name: "Trần Mạnh Hùng",
    era: "1973 - Present",
    avatar: "/images/composers/vietnam/tran-manh-hung.jpg",
    overview:
      "Born in Hanoi, Trần Mạnh Hùng graduated in composition from the Vietnam National Academy of Music in 2000 and earned his master's degree there in 2007. He is regarded as one of Vietnam's leading contemporary orchestral composers and arrangers, serving as music director for major national productions such as Hue Symphony. His opera Công nữ Anio (Princess Anio), a Vietnam–Japan historical collaboration, tells the story of Princess Ngọc Hoa and was staged at the Hanoi Opera House to wide acclaim. In 2017, he received the State Prize for Literature and Art at the age of 44—the youngest recipient among composers—recognizing his artistic innovation and contribution to Vietnamese music. His compositions, including Đất Mẹ (2025), reflect a commitment to modernizing traditional Vietnamese music, building a creative 'avenue' that connects folk heritage with contemporary expression in the era of globalized Vietnamese art.",
    representativeWorks: [
      {
        title: "Công nữ Anio (Princess Anio)",
        year: "2023",
        description: "Vietnam–Japan historical opera collaboration",
      },
      {
        title: "Rock Opera",
        year: "2008",
        description: "Contemporary fusion work",
      },
      {
        title: "Đất Mẹ",
        year: "2025",
        description: "Modernization of traditional Vietnamese music",
      },
    ],
    awards: [
      "State Prize for Literature and Art (2017, youngest composer recipient at age 44)",
    ],
  },
  {
    id: "pq-phan",
    name: "Phan Quang Phục",
    era: "1971 - Present",
    avatar: "/images/composers/vietnam/phan-quang-phuc.jpg",
    overview:
      "Also known as P.Q. Phan, he was born in Đà Nẵng, Vietnam, and later emigrated to the United States, where he became Professor of Composition at the Indiana University Jacobs School of Music. A leading figure in contemporary classical music, he is known for integrating Vietnamese folklore and aesthetics into modern Western idioms. His English-language grand opera The Tale of Lady Thị Kính—based on a traditional Vietnamese legend—was premiered in Bloomington, marking a significant milestone in Vietnamese diasporic composition.",
    styleAndContribution:
      "P.Q. Phan's works reflect a deep dialogue between Eastern and Western traditions, blending Vietnamese timbres, modal colors, and storytelling with modern orchestration and harmonic experimentation. Through works such as his Violin Concerto (2024), he continues to expand this synthesis, embodying the philosophy that 'culture is the foundation of creativity.' His music stands as a vital bridge between Vietnam's heritage and the global contemporary music scene, reflecting the cultural evolution of the Vietnamese diaspora after 1975.",
    representativeWorks: [
      {
        title: "The Tale of Lady Thị Kính",
        year: "2014",
        description: "English-language grand opera based on Vietnamese legend",
      },
      {
        title: "Trong bụng ngựa (Inside the Horse)",
        year: "2018",
        description: "Contemporary opera",
      },
      {
        title: "Violin Concerto",
        year: "2024",
        description: "Synthesis of Vietnamese and Western traditions",
      },
    ],
    awards: [
      "Multiple composition awards",
      "Guggenheim Fellowship",
      "Rome Prize",
    ],
  },
  {
    id: "nhat-lai",
    name: "Nhật Lãi",
    era: "1935 - 2019",
    avatar: "/images/composers/vietnam/nhat-lai.jpg",
    overview:
      "Born in Hải Dương, composer Nhật Lãi—real name Nguyễn Tuân—is often revered as the 'Elder of Central Highlands Music.' He dedicated his life to collecting and preserving hundreds of Central Highlands folk songs, which became the foundation of his distinctive musical voice. His opera Bên bờ K'rông Pa (By the Krông Pa River) masterfully blended Western bel canto techniques with ethnic folk traditions, portraying the life, struggles, and spirit of Vietnam's ethnic minorities.",
    styleAndContribution:
      "Active during the 1960s revolutionary music movement, Nhật Lãi contributed to both Vietnamese opera and folk preservation, weaving traditional melodies and rhythms into large-scale compositions. His lyrical works, including the beloved song Hà Tây quê lụa (Silken Homeland of Hà Tây), reflect an enduring commitment to the musical identity of Vietnam's diverse regions. Posthumously, he was awarded the Ho Chi Minh Prize for Literature and Art (1996) in recognition of his lifelong cultural legacy.",
    representativeWorks: [
      {
        title: "Bên bờ K'rông Pa (By the Krông Pa River)",
        year: "N/A",
        description:
          "Opera blending Western bel canto with Central Highlands folk traditions",
      },
      {
        title: "Hà Tây quê lụa",
        year: "N/A",
        description: "Beloved lyrical song",
      },
    ],
    awards: [
      "Ho Chi Minh Prize for Literature and Art (1996, posthumous)",
      "People's Artist of Vietnam",
    ],
  },
  {
    id: "duc-tri",
    name: "Đức Trí",
    era: "1969 - Present",
    avatar: "/images/composers/vietnam/duc-tri.jpg",
    overview:
      "Born in Saigon (Ho Chi Minh City), Võ Thiện Thanh graduated from the Ho Chi Minh City Conservatory of Music and later from the Berklee College of Music in the United States, becoming the first Vietnamese composer to earn a degree in Contemporary Music Production. He first gained recognition for his orchestration and production work on acclaimed albums such as Chợt nghe em hát (Suddenly Hearing You Sing, Hồng Nhung, 1995). His musicals Ngàn năm tình sử (A Thousand Years of Love Stories) and Tiên Nga (The Fairy Nga) exemplify his ability to blend Vietnamese traditional music with contemporary popular styles, marking a new direction for modern Vietnamese musical theatre.",
    styleAndContribution:
      "Võ Thiện Thanh's work bridges folk heritage and modern sensibility, integrating pop, cinematic, and ethnic sounds to create music that resonates across generations. His film score for Áo lụa Hà Đông (The White Silk Dress) and his founding of Music Faces Entertainment reflect his pivotal role in modernizing and globalizing Vietnamese music amid the rapid expansion of the national music industry since the 1990s.",
    representativeWorks: [
      {
        title: "Tiên Nga (The Fairy Nga)",
        year: "2021",
        description: "Musical blending traditional and contemporary styles",
      },
      {
        title: "Ngàn năm tình sử (A Thousand Years of Love Stories)",
        year: "2009",
        description: "Musical exploring Vietnamese historical romance",
      },
      { title: "Áo lụa Hà Đông", year: "2006", description: "Film score" },
    ],
    awards: [
      "Multiple film music awards",
      "Recognition for contemporary music production",
    ],
  },
];

// Helper functions cho World Composers
export function getWorldComposerById(id: string): WorldComposer | undefined {
  return worldComposers.find((composer) => composer.id === id);
}

export function getAllWorldComposers(): WorldComposer[] {
  return worldComposers;
}

// Helper functions cho Vietnam Composers
export function getVietnamComposerById(
  id: string
): VietnamComposer | undefined {
  return vietnamComposers.find((composer) => composer.id === id);
}

export function getAllVietnamComposers(): VietnamComposer[] {
  return vietnamComposers;
}

// Backward compatibility
export type Composer = WorldComposer;
export const composers = worldComposers;
export const getComposerById = getWorldComposerById;
export const getAllComposers = getAllWorldComposers;
