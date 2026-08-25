/**
 * Data store for Brahma Kumaris Chiang Mai - Raja Yoga Foundation Course (7 Days Course)
 * Contains 7 detailed lessons with bilingual content (TH & EN), key insights, and daily reflections.
 */

const COURSES_DATA = [
    {
        day: 1,
        titleTH: "การตระหนักรู้ในตนเอง",
        titleEN: "Self-Realization",
        subtitleTH: "บทเรียนแรก: ค้นพบตัวตนที่แท้จริงภายใต้หน้ากากกายภาพ",
        subtitleEN: "Lesson 1: The True Self Beneath the Physical Mask",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D1.mp4",
        descTH: "คุณคือใครภายใต้หน้ากากของโลกใบนี้? ย้อนกลับคืนสู่ 'ตัวตนที่แท้จริง' ในฐานะดวงวิญญาณ จุดแสงสีทองอันเป็นนิรันดร์ ที่สถิตอยู่ ณ จุดกึ่งกลางหน้าผาก เป็นผู้ควบคุมร่างกายนี้ และดำรงอยู่เหนือกาลเวลาและบทบาทหน้าที่ทางโลก",
        descEN: "Who are you beneath the masks of the physical world? Return to your true self as an eternal point of golden light—the soul—seated at the center of the forehead, directing the physical body, and existing beyond time and physical identity.",
        highlightsTH: [
            "การแยกแยะระหว่าง 'ดวงวิญญาณ' (ผู้เล่น) และ 'ร่างกาย' (เครื่องมือ) เพื่อความหลุดพ้นจากอัตตา",
            "จิตสำนึกแห่งดวงวิญญาณ (Soul Consciousness) ปลดปล่อยพลังสร้างสรรค์และความสงบดั้งเดิม",
            "คุณสมบัติพื้นฐาน 7 ประการของดวงวิญญาณ: ความบริสุทธิ์, สันติสุข, ความรัก, ความสุข, ปัญญา, พลัง, และความสะอาดบริสุทธิ์"
        ],
        highlightsEN: [
            "Distinguishing between the 'soul' (the actor) and the 'body' (the costume/instrument) to dissolve ego.",
            "Cultivating Soul Consciousness to unlock the soul's original peace and creative power.",
            "The 7 core qualities of the soul: Purity, Peace, Love, Happiness, Wisdom, Power, and Bliss."
        ],
        reflectionTH: "สังเกตตัวคุณเองในฐานะ 'ผู้สังเกตการณ์ที่ละวาง' มองดูความคิดและการทำงานของร่างกายเสมือนคุณกำลังรับชมภาพยนตร์อยู่",
        reflectionEN: "Observe yourself as a 'detached observer', watching your thoughts and body functions as if you are watching a movie."
    },
    {
        day: 2,
        titleTH: "แหล่งพลังชีวิตสูงสุด",
        titleEN: "Supreme Connection (The Source)",
        subtitleTH: "บทเรียนที่สอง: เชื่อมโยงดวงจิตกับมหาสมุทรแห่งพลังงานสูงสุด",
        subtitleEN: "Lesson 2: Connecting with the Supreme Source",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D2.mp4",
        descTH: "ความรักที่ไร้เงื่อนไขกำลังโอบอุ้มคุณอยู่ เรียนรู้วิธีเชื่อมต่อดวงวิญญาณของคุณเข้ากับ 'ดวงจิตสูงสุด' (คุรุหรือพระบิดาสูงสุด) มหาสมุทรแห่งความสงบ ความรัก ความบริสุทธิ์ และพลังงานอันไม่มีที่สิ้นสุด เพื่อชำระจิตใจและเติมพลังชีวิต",
        descEN: "Unconditional love is always holding you. Learn how to connect your soul with the Supreme Soul—the Source of all light, peace, love, purity, and spiritual power—to cleanse the mind and restore your spiritual energy.",
        highlightsTH: [
            "ความจริงของโลกแห่งดวงวิญญาณ (Soul World/Paramdham) ดินแดนแห่งแสงสีแดงทองอันสงบเงียบ",
            "การสร้างความสัมพันธ์เชิงจิตวิญญาณกับดวงจิตสูงสุดในฐานะ พ่อ, แม่, ครู, เพื่อน, และผู้ชี้ทาง",
            "สมาธิราชาโยคะ (Rajyoga) ในฐานะสะพานจิตใจที่เชื่อมความรู้สึกบริสุทธิ์สู่สัจจะสูงสุด"
        ],
        highlightsEN: [
            "Understanding the Soul World (Paramdham), the home of eternal peace and golden-red light.",
            "Establishing a personal relationship with the Supreme Soul as Father, Mother, Teacher, Friend, and Guide.",
            "Raja Yoga meditation as a mental bridge linking the human soul directly to the Supreme Source."
        ],
        reflectionTH: "ส่งความคิดเชื่อมตรงไปยังดินแดนแห่งแสงสว่างสูงสุด สัมผัสแสงสีขาวบริสุทธิ์และกระแสพลังแห่งสันติที่อาบโอบดวงวิญญาณของคุณ",
        reflectionEN: "Direct your thoughts to the home of light and feel the warm, peaceful rays of the Supreme Source bathing your soul in pure energy."
    },
    {
        day: 3,
        titleTH: "กฎแห่งกรรม",
        titleEN: "Law of Karma",
        subtitleTH: "บทเรียนที่สาม: สัจจะแห่งเหตุและผลในละครชีวิต",
        subtitleEN: "Lesson 3: The Truth of Cause and Effect in the Drama of Life",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D3.mp4",
        descTH: "ทุกแรงสั่นสะเทือน ความคิด และการกระทำที่คุณส่งออกไป ย่อมสะท้อนกลับมาหาคุณเสมอในทางใดทางหนึ่ง เรียนรู้วิธีขจัดและหยุดสร้างกรรมที่นำความทุกข์ และหันมาเพาะเมล็ดพันธุ์แห่งกรรมอันประเสริฐ (Sukarma) เพื่อความสุขที่ยั่งยืน",
        descEN: "Every vibration, thought, and action you project into the universe will inevitably return to you. Learn how to stop creating negative karmic debts and begin sowing seeds of elevated actions (Sukarma) to ensure long-term happiness and peace.",
        highlightsTH: [
            "ความหมายของกรรม 3 ประเภท: สุกรรม (กรรมดี), วิกรรม (กรรมชั่ว), และอกรรม (กรรมที่เป็นกลางทางโยคะ)",
            "วิธีใช้สมาธิชำระล้างกรรมเก่าผ่านไฟแห่งโยคะ (Yogagni)",
            "การรับมือกับความสูญเสียและสถานการณ์ท้าทายด้วยความเข้าใจเรื่องความยุติธรรมของกฎแห่งกรรม"
        ],
        highlightsEN: [
            "Understanding the three types of karma: Sukarma (elevated), Vikarma (negative), and Akarma (neutral/yogic).",
            "Using the power of meditation (Yogagni - fire of yoga) to purify past negative karmic accounts.",
            "Navigating life's challenges and relationships with a deep understanding of karmic justice."
        ],
        reflectionTH: "ก่อนแสดงปฏิกิริยาต่อผู้อื่น ให้หยุดคิดสักนิดและถามตัวเองว่า 'การกระทำนี้จะส่งผลดีต่อทุกคนในอนาคตหรือไม่?'",
        reflectionEN: "Before reacting to others, pause and ask yourself: 'Will this response create a positive and peaceful karmic return for everyone involved?'"
    },
    {
        day: 4,
        titleTH: "ความลี้ลับของเวลา",
        titleEN: "The Mystery of Time",
        subtitleTH: "บทเรียนที่สี่: วงจรละครโลกและบทบาทเฉพาะตัว",
        subtitleEN: "Lesson 4: The World Drama and Our Unique Roles",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D4.mp4",
        descTH: "ชีวิตเปรียบเสมือนบทละครอันยิ่งใหญ่ที่ดำเนินไปในวงจรอันเป็นนิรันดร์ ทุกเหตุการณ์ที่เกิดขึ้นล้วนสมบูรณ์แบบในตัวเอง เรียนรู้ที่จะยอมรับความเป็นไปของกาลเวลา เล่นบทบาทของคุณด้วยความเข้าใจ และมองโลกอย่างปล่อยวางไร้กังวล",
        descEN: "Life is a grand drama repeating in eternal cycles. Every scene, event, and challenge is accurate and perfect in its own time. Learn to accept the unfolds of time, play your role with understanding, and observe the world as a detached observer.",
        highlightsTH: [
            "วงจรละครโลก (World Drama Cycle) 5,000 ปีที่แบ่งออกเป็น 4 ยุค: ยุคทอง, ยุคเงิน, ยุคทองแดง, และยุคเหล็ก",
            "ยุคบรรจบพบกัน (Confluence Age / Sangam Yug) ยุคแห่งการยกระดับจิตวิญญาณจากมืดสู่สว่าง",
            "ความเข้าใจว่า 'ทุกอย่างดีงาม' ช่วยขจัดความเสียใจ ความกังวล และความกลัวต่ออนาคต"
        ],
        highlightsEN: [
            "The 5,000-year World Drama Cycle divided into four main ages: Golden, Silver, Copper, and Iron.",
            "The Confluence Age (Sangam Yug)—the auspicious transition time to elevate consciousness from dark to light.",
            "The realization that 'whatever happens is beneficial,' dissolving regrets, anxieties, and fears."
        ],
        reflectionTH: "มองสถานการณ์ที่เลวร้ายในวันนี้ในฐานะ 'ฉากหนึ่งในละคร' ที่กำลังจะผ่านพ้นไป และบอกกับตัวเองว่า 'สิ่งที่ดีที่สุดกำลังรออยู่'",
        reflectionEN: "View any difficult situation today as a passing scene in a drama, reminding yourself that 'everything happens for a good purpose.'"
    },
    {
        day: 5,
        titleTH: "ต้นไม้แห่งมนุษยชาติ",
        titleEN: "Tree of Humanity",
        subtitleTH: "บทเรียนที่ห้า: รากเหง้าเดียวกันและการยอมรับในความต่าง",
        subtitleEN: "Lesson 5: Shared Roots and Celebrating Diversity",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D5.mp4",
        descTH: "มนุษยชาติทั้งผองเป็นเหมือนกิ่งก้านใบที่แตกออกจากต้นไม้ใหญ่ต้นเดียวกัน แม้จะมีความต่างทางศาสนา ภาษา และวัฒนธรรม แต่ดวงจิตของเราต่างมีจุดเริ่มต้นจากรากแก้วจิตวิญญาณอันเดียวกัน สัมผัสความรู้สึกเป็นครอบครัวโลกเดียวกัน",
        descEN: "Humanity is like a great tree branching out in various directions. Though we differ in religion, language, and culture, all souls belong to the same spiritual seed. Experience a profound sense of global family and brotherhood.",
        highlightsTH: [
            "อุปมาอุปไมยต้นกัลปพฤกษ์ (Kalpa Tree) แสดงการกำเนิดของลัทธิความเชื่อและศาสนาต่างๆ ของโลก",
            "เมล็ดพันธุ์สูงสุด (The Divine Seed) ผู้หล่อเลี้ยงและรวมใจของต้นไม้มนุษยชาติ",
            "การฟื้นฟูคุณธรรมดั้งเดิมเพื่อสร้างความสามัคคีและสลัดความขัดแย้งในสังคม"
        ],
        highlightsEN: [
            "The Kalpa Tree metaphor showing the development and branches of various world religions and cultures.",
            "The Divine Seed (Supreme Soul) who nurtures and unites the entire tree of humanity.",
            "Reviving original values to foster unity and transcend cultural and ideological divisions."
        ],
        reflectionTH: "มองผู้อื่นรอบตัวคุณ—ไม่ว่าจะแตกต่างกันเพียงใด—ให้มองเห็นเขาเป็นดวงวิญญาณที่เป็นพี่น้องร่วมโลกและร่วมรากเหง้าเดียวกัน",
        reflectionEN: "Look at everyone around you today, regardless of their background, and recognize them as sibling souls sharing the same spiritual origin."
    },
    {
        day: 6,
        titleTH: "การปฏิวัติตนเอง",
        titleEN: "Self-Transformation",
        subtitleTH: "บทเรียนที่หก: พลังแห่งจิตตานุภาพในการสร้างสรรค์ชีวิตใหม่",
        subtitleEN: "Lesson 6: The Power of Mind for Inner Change",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D6.mp4",
        descTH: "ค่ำคืนที่มืดมิดที่สุดของชีวิต... คือสัญญาณเตือนของรุ่งอรุณใหม่ที่สว่างไสว เรียนรู้วิธีเอาชนะนิสัยเดิมๆ ความคิดเชิงลบ และความอ่อนแอในอดีต ด้วยพลังแห่งจิตสมาธิที่เข้มแข็งเพื่อสถาปนาตัวคุณคนใหม่ที่เป็นอิสระ",
        descEN: "The darkest night of life is the herald of a bright new dawn. Learn how to conquer old habits (Sanskars), negative thought patterns, and past weaknesses using the power of focused meditation to establish a transformed, free version of yourself.",
        highlightsTH: [
            "ความเข้าใจเรื่อง นิสัย/สัญญา (Sanskars) และวิธีการเปลี่ยนพฤทีพรรรมในระดับลึกสุดของจิตใต้สำนึก",
            "วิธีฝึกความจดจ่อและการตระหนักรู้ในคุณค่าของตนเองเพื่อขจัดพฤติกรรมเสพติดทางอารมณ์",
            "การใช้ 'พลังแห่งความเงียบ' เอาชนะความโกรธ ความโลภ ความหลง และความยึดมั่นถือมั่น"
        ],
        highlightsEN: [
            "Understanding the patterns of Sanskars (deep habits) and how to transform them at the subconscious level.",
            "Cultivating self-respect and willpower to break free from emotional dependencies and addictions.",
            "Using the 'Power of Silence' to overcome anger, greed, attachment, and ego."
        ],
        reflectionTH: "เลือกหนึ่งจุดอ่อนที่คุณต้องการปรับปรุงในวันนี้ และใช้เวลาสมาธิส่งพลังบวกเติมความแข็งแกร่งลงในจุดนั้นอย่างใส่ใจ",
        reflectionEN: "Select one personal weakness you want to transform today, and direct quiet thoughts of strength, patience, and love to heal it."
    },
    {
        day: 7,
        titleTH: "วิถีชีวิตสว่างไสว",
        titleEN: "Light Lifestyle",
        subtitleTH: "บทเรียนที่เจ็ด: การนำความสงบสู่ทุกย่างก้าวในชีวิตจริง",
        subtitleEN: "Lesson 7: Living in Purity and Peace Daily",
        videoUrl: "../assets/videos/7 Days Course/7 Day Course-D7.mp4",
        descTH: "สมาธิไม่ใช่เรื่องของการหลีกหนีโลก แต่คือศิลปะการนำความสงบ ความสุข และความสว่างไสวจากโลกภายในมาใช้รับมือกับวิถีชีวิตทางโลกในปริมณฑลจริง บานสะพรั่งอย่างงดงามประดุจดอกบัวเหนือน้ำที่ใสสะอาดและพ้นจากความขุ่นมัว",
        descEN: "Meditation is not about escaping the world, but the art of bringing peace, joy, and light from your inner world to enrich your daily practical life. Live beautifully, untouched by negativity, like a lotus flower rising above the water.",
        highlightsTH: [
            "ปรัชญาอาหารสัตวิก (Sattvic Diet) อาหารแห่งความสงบและการชำระล้างจิตวิญญาณ",
            "การจัดสรรเวลาสำหรับ 'ชั่วโมงแห่งอำนาจ' (Amrit Vela) สมาธิช่วงเช้าตรู่ก่อนรุ่งอรุณ (04.00 - 04.45 น.)",
            "การสร้างความสมดุลระหว่างการรับผิดชอบหน้าที่ทางโลกและการรักษาสภาวะโยคีจิตสงบ"
        ],
        highlightsEN: [
            "The philosophy of Sattvic food and lifestyle—enhancing physical health and spiritual clarity.",
            "Creating a sacred routine for Amrit Vela (early morning meditation from 4:00 - 4:45 AM) to recharge.",
            "Balancing outer actions and responsibilities with an inner state of peaceful remembrance."
        ],
        reflectionTH: "เริ่มต้นเช้าวันใหม่ด้วยการฝึกสมาธิช่วง Amrit Vela สัมผัสความสงบสดชื่น และแผ่กระแสจิตแห่งความปรารถนาดีเยียวยาสังคม",
        reflectionEN: "Start your day during the quiet early morning hours (Amrit Vela). Feel the pure calm and send out waves of peace and good wishes to heal the world."
    }
];
