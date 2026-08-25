/**
 * Brahma Kumaris Chiang Mai - Daily Thoughts & Actions Data
 * Contains 31 unique daily thoughts and practical guidelines for Rajyoga meditation.
 * Displayed dynamically in the footer based on the day of the month.
 */

const DAILY_THOUGHTS = [
    {
        day: 1,
        textTH: "“ความสงบเป็นธรรมชาติที่แท้จริงของดวงวิญญาณ เมื่อเราถอยกลับมาสู่ความเงียบภายใน เราจะพบพลังในการเผชิญทุกสิ่งด้วยใจที่มั่นคง”",
        textEN: "\"Peace is the true nature of the soul. When we step back into inner silence, we find the strength to face everything with a stable mind.\"",
        actionTH: "ใช้เวลาสั้นๆ ทุกชั่วโมง หยุดความคิดและกลับเข้าสู่ความเงียบสงบภายใน เพื่อเติมพลังจิตวิญญาณ",
        actionEN: "Take a brief moment every hour to stop your thoughts and return to inner silence to recharge your soul."
    },
    {
        day: 2,
        textTH: "“ดวงจิตที่เบาสบายจะสามารถลอยตัวเหนือปัญหาทั้งปวงได้ ปลดปล่อยความกังวลแล้ววางความไว้วางใจไว้ในละครแห่งชีวิต”",
        textEN: "\"A light soul can fly above all problems. Release your worries and place your trust in the drama of life.\"",
        actionTH: "เมื่อพบเจอเรื่องท้าทายในวันนี้ ให้บอกกับตนเองว่า 'ทุกอย่างดีและจะดีที่สุด' แล้วยิ้มรับมัน",
        actionEN: "When facing challenges today, tell yourself 'Everything is good and will be for the best' and smile."
    },
    {
        day: 3,
        textTH: "“เมื่อเราเพ่งมองเฉพาะคุณธรรมความดีงามในตัวผู้อื่น ใจของเราจะสงบและไม่ตกเป็นเหยื่อของความขุ่นเคือง”",
        textEN: "\"When we look only at the virtues of others, our mind remains peaceful and free from resentment.\"",
        actionTH: "จดบันทึกคุณความดีงามของคนรอบตัวที่คุณพบเจออย่างน้อย 1 ข้อในใจวันนี้",
        actionEN: "Keep note of at least one good quality of the people you meet today in your heart."
    },
    {
        day: 4,
        textTH: "“คำพูดที่อ่อนหวานและอ่อนโยนคือน้ำทิพย์ที่ชโลมจิตใจผู้ฟัง คิดก่อนพูดเสมอเพื่อสร้างความสมานฉันท์”",
        textEN: "\"Sweet and gentle words are like nectar that heals the listener's heart. Always think before speaking to create harmony.\"",
        actionTH: "ใช้ถ้อยคำที่ไพเราะและให้กำลังใจในการสนทนากับผู้อื่นในทุกสถานการณ์ของวันนี้",
        actionEN: "Use pleasant and encouraging words in all your conversations with others today."
    },
    {
        day: 5,
        textTH: "“ความพึงพอใจเป็นสมบัติอันล้ำค่าที่สุดของผู้แสวงหาความสงบ เมื่อเราพึงพอใจในสิ่งที่มี ความขาดแคลนจะมลายหายไป”",
        textEN: "\"Contentment is the most valuable treasure for peace seekers. When we are content with what we have, scarcity disappears.\"",
        actionTH: "ขอบคุณสิ่งดีๆ ในชีวิต 3 อย่างในเช้าวันนี้เพื่อเริ่มต้นวันด้วยความอิ่มเอมใจ",
        actionEN: "Express gratitude for 3 good things in your life this morning to start your day with fulfillment."
    },
    {
        day: 6,
        textTH: "“ความอดทนไม่คือการฝืนทนอย่างขมขื่น แต่คือความเข้าใจอันลึกซึ้งว่าทุกสิ่งมีเวลาและจังหวะของตัวเอง”",
        textEN: "\"Patience is not bitter endurance, but a deep understanding that everything has its own time and rhythm.\"",
        actionTH: "หากต้องเจอความล่าช้าในวันนี้ ให้รักษาความเงียบสงบภายในและฝึกรอคอยด้วยใจที่เป็นสุข",
        actionEN: "If you encounter delays today, maintain inner silence and practice waiting with a peaceful heart."
    },
    {
        day: 7,
        textTH: "“การฝึกควบคุมการจราจรทางความคิด (Traffic Control) ช่วยให้จิตมีพลังและปลอดโปร่งในการตัดสินใจเรื่องสำคัญ”",
        textEN: "\"Practicing Traffic Control of thoughts empowers the mind and provides clarity for making important decisions.\"",
        actionTH: "หยุดคิดชั่วครู่เป็นเวลา 1 นาทีทุกๆ ชั่วโมง เพื่อดึงจิตกลับมาตระหนักรู้ความเป็นดวงวิญญาณผู้สงบ",
        actionEN: "Pause your thoughts for 1 minute every hour to bring your awareness back as a peaceful soul."
    },
    {
        day: 8,
        textTH: "“เมื่อดวงจิตเชื่อมโยงเข้ากับพลังบริสุทธิ์สูงสุด ความอบอุ่นและความรักอันไร้ขอบเขตจะช่วยขจัดความโดดเดี่ยวภายใน”",
        textEN: "\"When the soul connects to the Supreme Source of pure energy, boundless love and warmth melt away all inner loneliness.\"",
        actionTH: "ทำสมาธิราชาโยคะนิ่งๆ 10 นาที เชื่อมกระแสจิตของคุณเข้ากับมหาสมุทรแห่งความอบอุ่นและความเมตตา",
        actionEN: "Meditate silently in Raja Yoga for 10 minutes, connecting your mind to the ocean of love and mercy."
    },
    {
        day: 9,
        textTH: "“ความยืดหยุ่นและถ่อมตนช่วยให้เราเข้ากับผู้คนได้ทุกประเภท เหมือนหยดน้ำที่สามารถปรับตัวเข้ากับภาชนะทุกรูปแบบ”",
        textEN: "\"Flexibility and humility allow us to blend with everyone, just like water adapting to any container.\"",
        actionTH: "ยอมรับฟังความคิดเห็นที่แตกต่างในวันนี้ด้วยความเคารพโดยปราศจากการต่อต้านในใจ",
        actionEN: "Listen to differing opinions today with respect and without any inner resistance."
    },
    {
        day: 10,
        textTH: "“ดวงจิตที่เปี่ยมด้วยเมตตาจะแผ่คลื่นพลังงานบวกเพื่อเยียวยาจิตใจผู้อื่นที่กำลังอ่อนล้าและต้องการพลังใจ”",
        textEN: "\"A compassionate soul radiates positive energy to heal others who are weary and in need of strength.\"",
        actionTH: "ส่งกระแสความปรารถนาดีและความสงบ (Good Wishes) ให้กับทุกคนที่คุณพบเจอ รวมถึงผู้ที่สร้างความลำบากใจให้คุณด้วย",
        actionEN: "Send vibrations of peace and good wishes to everyone you meet today, including those who test your peace."
    },
    {
        day: 11,
        textTH: "“ความนอบน้อมถ่อมตนคือกุญแจสู่ใจของผู้อื่น การยอมรับข้อผิดพลาดช่วยเปิดประตูสู่การเรียนรู้และพัฒนาตนเอง”",
        textEN: "\"Humility is the key to winning the hearts of others. Acknowledging mistakes opens the door to learning and self-growth.\"",
        actionTH: "เมื่อมีความเห็นขัดแย้ง ให้เปิดใจรับฟังผู้อื่นก่อนและใช้น้ำเสียงที่สุภาพนุ่มนวล",
        actionEN: "In disagreements, open your heart to listen to others first and use a polite, gentle tone."
    },
    {
        day: 12,
        textTH: "“ความมั่นคงในจุดยืนแห่งสัจจะและความบริสุทธิ์ใจ ช่วยปกป้องดวงจิตให้พ้นจากพายุคำวิพากษ์วิจารณ์ภายนอก”",
        textEN: "\"Truthfulness and purity of intention protect the soul from the storms of external criticism.\"",
        actionTH: "ตั้งมั่นอยู่กับความตั้งใจดีของคุณ และปล่อยวางคำตัดสินหรือคำพูดแง่ลบของผู้อื่นออกไปจากใจ",
        actionEN: "Stay centered in your good intentions, and let go of others' judgments or negative remarks."
    },
    {
        day: 13,
        textTH: "“ความเคารพในตนเองที่แท้จริง (Self-Respect) เกิดจากการตระหนักรู้ว่าเราเป็นดวงวิญญาณที่มีคุณค่าและมีคุณธรรมดั้งเดิม”",
        textEN: "\"True self-respect comes from realizing that you are a valuable soul with innate virtues.\"",
        actionTH: "บอกตัวเองเมื่อตื่นนอน: 'ฉันคือดวงวิญญาณที่มีคุณค่าและเปี่ยมด้วยปัญญาความรู้'",
        actionEN: "Tell yourself upon waking: 'I am a worthy soul filled with spiritual wisdom.'"
    },
    {
        day: 14,
        textTH: "“ความเรียบง่ายนำมาซึ่งความเบาสบายในชีวิต จิตใจที่ไม่รกรุงรังด้วยความอยากครอบครองจะมีความสงบอย่างยิ่ง”",
        textEN: "\"Simplicity brings lightness to life. A mind uncluttered by desires and possessions enjoys profound peace.\"",
        actionTH: "ตัดทอนสิ่งฟุ่มเฟือยและความคิดที่ซับซ้อนในวันนี้ ดำเนินชีวิตด้วยความเรียบง่ายและเป็นธรรมชาติ",
        actionEN: "Reduce unnecessary luxuries and complex thoughts today; live simply and naturally."
    },
    {
        day: 15,
        textTH: "“ความซื่อสัตย์สุจริตต่อตนเองและผู้อื่นช่วยสร้างความโปร่งใสในใจ ทำให้เรานอนหลับสบายโดยไม่มีความกังวล”",
        textEN: "\"Honesty towards yourself and others creates inner transparency, allowing you to sleep peacefully with no worries.\"",
        actionTH: "พูดและทำสิ่งต่างๆ ด้วยความบริสุทธิ์ใจและเปิดเผย ปราศจากความตั้งใจแอบแฝงใดๆ",
        actionEN: "Speak and act with sincerity and openness, free from any hidden agendas."
    },
    {
        day: 16,
        textTH: "“การร่วมมือช่วยเหลือกัน (Co-operation) ทำให้อุปสรรคที่ยิ่งใหญ่กลายเป็นเรื่องเล็กน้อย ดุจดังการร่วมใจกันยกเขากลางป่า”",
        textEN: "\"Co-operation makes great obstacles small, like everyone lending a finger to lift a mountain together.\"",
        actionTH: "เสนอตัวช่วยเหลือเพื่อนร่วมงานหรือบุคคลในครอบครัวในการทำงานด้วยรอยยิ้มและความกระตือรือร้น",
        actionEN: "Offer assistance to your colleagues or family members in their tasks with a smile and enthusiasm."
    },
    {
        day: 17,
        textTH: "“การเป็นผู้สังเกตการณ์ที่ปล่อยวาง (Detached Observer) ช่วยให้เรามองเห็นสถานการณ์ตามจริงโดยไม่ใช้อารมณ์ตัดสิน”",
        textEN: "\"Being a detached observer helps us see situations as they truly are, without being swayed by emotions.\"",
        actionTH: "เมื่อสถานการณ์รอบข้างวุ่นวาย ให้ทำตัวเสมือนผู้ชมที่นั่งดูละครก้าวถอยหลังออกมามองหาทางออกที่ดีที่สุด",
        actionEN: "When surroundings become chaotic, act like a spectator watching a drama, stepping back to find the best solution."
    },
    {
        day: 18,
        textTH: "“ความเมตตาปรานีต่อผู้ที่ทำผิดพลาด คือหนทางเดียวที่ช่วยให้เขาฟื้นฟูตัวเองและเปลี่ยนวิถีชีวิตใหม่ได้”",
        textEN: "\"Compassion for those who make mistakes is the only way to help them restore themselves and change for the better.\"",
        actionTH: "แทนที่จะตำหนิ ให้มองเห็นเหตุผลเบื้องหลังการกระทำของเขาแล้วมอบความเข้าใจและการให้อภัย",
        actionEN: "Instead of blaming, see the underlying reasons for their actions and offer understanding and forgiveness."
    },
    {
        day: 19,
        textTH: "“ความมุ่งมั่นตั้งใจจริง (Determination) เปรียบเสมือนหินผาที่ไม่มีลมพายุใดสามารถสั่นคลอนได้ มุ่งหน้าสู่เป้าหมายโดยไม่ลดละ”",
        textEN: "\"Determination is like a rock that no storm can shake. Move towards your goals without giving up.\"",
        actionTH: "เลือกเป้าหมายการพัฒนาตนเอง 1 ข้อในวันนี้และปฏิบัติตามนั้นอย่างแน่วแน่ตลอดทั้งวัน",
        actionEN: "Choose one self-improvement goal for today and stick to it firmly throughout the day."
    },
    {
        day: 20,
        textTH: "“ปัญญาญาณที่แท้จริงคือการรู้ว่าเมื่อใดควรเงียบและเมื่อใดควรพูด คำพูดที่พูดในเวลาที่เหมาะสมมีค่าดั่งทองคำ”",
        textEN: "\"True wisdom is knowing when to keep silent and when to speak. Words spoken at the right time are precious like gold.\"",
        actionTH: "หากมีถ้อยคำที่ไม่สร้างสรรค์กำลังจะหลุดจากปาก ให้หยุดนิ่งและรักษาความเงียบไว้ 5 วินาทีก่อน",
        actionEN: "If unconstructive words are about to be spoken, pause and maintain silence for 5 seconds first."
    },
    {
        day: 21,
        textTH: "“ความคิดที่บริสุทธิ์คือเกราะคุ้มกันจิตใจ เมื่อเราคิดดีและคิดบวก พลังงานลบจากภายนอกจะไม่สามารถทำร้ายเราได้”",
        textEN: "\"Pure thoughts are the shield of the mind. When we think well and positively, external negative energy cannot touch us.\"",
        actionTH: "เมื่อมีความคิดลบเกิดขึ้น ให้แปลงมันเป็นความคิดบวกทันทีด้วยความเข้าใจและปัญญา",
        actionEN: "Whenever a negative thought arises, instantly transform it into a positive one with understanding and wisdom."
    },
    {
        day: 22,
        textTH: "“ใจที่เอื้อเฟื้อเผื่อแผ่คือผู้ให้ที่ไม่มีวันสิ้นสุด การให้สิ่งดีงามแก่ผู้อื่นเป็นการเติมเต็มความสมบูรณ์ในใจเราเอง”",
        textEN: "\"A generous heart is an endless giver. Giving good things to others fills our own hearts with abundance.\"",
        actionTH: "แบ่งปันรอยยิ้ม คำชมเชย หรือความช่วยเหลือเล็กๆ น้อยๆ ให้กับผู้ที่ต้องการในวันนี้โดยไม่หวังผลตอบแทน",
        actionEN: "Share a smile, a compliment, or a small helper's hand with someone today without expecting anything back."
    },
    {
        day: 23,
        textTH: "“การศึกษาความรู้จิตวิญญาณเป็นอาหารสมองประจำวัน การทบทวนสัจธรรมช่วยให้ดวงจิตเข้มแข็งและมั่นคง”",
        textEN: "\"Studying spiritual knowledge is daily food for the mind. Reflecting on truth keeps the soul strong and stable.\"",
        actionTH: "อ่านหรือทบทวนความรู้สัจธรรมประจำวัน (Murli) นิ่งๆ และใคร่ครวญหาวิธีนำมาใช้ในวิถีชีวิตจริง",
        actionEN: "Read or review the daily spiritual teaching (Murli) quietly and reflect on how to apply it in your life."
    },
    {
        day: 24,
        textTH: "“การส่งกระแสความคิดที่ดีและบริสุท์ (Good Wishes) ช่วยเยียวยาความแตกแยกและสร้างความสามัคคีในครอบครัวและโลก”",
        textEN: "\"Sending pure and good wishes heals division and fosters unity in our families and the world.\"",
        actionTH: "ตั้งจิตส่งกระแสสันติภาพและความสุขแผ่ขยายออกไปครอบคลุมพื้นที่รอบตัวและส่งต่อไปยังโลกกว้าง",
        actionEN: "Direct your mind to radiate peace and happiness to the environment around you and to the world at large."
    },
    {
        day: 25,
        textTH: "“การเปลี่ยนแปลงตัวเองคือจุดเริ่มต้นของการเปลี่ยนแปลงโลก เมื่อดวงจิตของเราเปลี่ยน บรรยากาศรอบตัวจะเปลี่ยนตาม”",
        textEN: "\"Self-transformation is the beginning of world transformation. When our soul changes, the atmosphere follows suit.\"",
        actionTH: "แทนที่จะคาดหวังให้คนอื่นเปลี่ยน ให้หันกลับมาปรับทัศนคติและการกระทำของตนเองเป็นหลัก",
        actionEN: "Instead of expecting others to change, focus on adjusting your own attitude and behavior."
    },
    {
        day: 26,
        textTH: "“ความอ่อนโยนละมุนละไมในความสัมพันธ์สร้างความรู้สึกปลอดภัยและเชื่อใจ ช่วยให้สายสัมพันธ์มั่นคงและยาวนาน”",
        textEN: "\"Sweetness and gentleness in relations create a sense of safety and trust, building strong and lasting bonds.\"",
        actionTH: "ปฏิบัติต่อคนในบ้านและที่ทำงานด้วยความใส่ใจและนุ่มนวล หลีกเลี่ยงความหยาบกระด้างในทุกแง่มุม",
        actionEN: "Treat your family members and colleagues with care and softness, avoiding harshness in all aspects."
    },
    {
        day: 27,
        textTH: "“การตื่นสมาธิยามเช้าตรู่ (Amrit Vela) คือการซึมซับพลังงานแห่งสันติที่บริสุทธิ์ที่สุดเพื่อเป็นพลังงานขับเคลื่อนตลอดวัน”",
        textEN: "\"Early morning meditation (Amrit Vela) is absorbing the purest energy of peace to power your entire day.\"",
        actionTH: "ตื่นเช้าขึ้นกว่าเดิมเล็กน้อย นั่งสมาธิท่ามกลางความเงียบงันเพื่อเปิดรับแสงสว่างแห่งพลังจิตวิญญาณ",
        actionEN: "Wake up slightly earlier, sitting in meditation amidst the silence to absorb spiritual light and power."
    },
    {
        day: 28,
        textTH: "“เมื่อเผชิญกับพายุแห่งการตำหนิหรือนินทา จงทำตัวเป็นดอกบัวที่ตั้งมั่นอยู่เหนือน้ำนิ่ง สง่าผ่าเผยและไร้มลทิน”",
        textEN: "\"When facing the wind of criticism or gossip, remain like a lotus rising above muddy water, dignified and pure.\"",
        actionTH: "รักษาภาพลักษณ์ดั้งเดิมอันสงบสง่างามของคุณ ไม่ยอมรับพลังงานลบหรือคำว่ากล่าวของคนอื่นเข้ามาไว้ในใจ",
        actionEN: "Hold on to your original dignified self; do not accept negative energies or words of others into your mind."
    },
    {
        day: 29,
        textTH: "“ธรรมชาติมอบบทเรียนแห่งการให้และเกื้อกูลโดยไม่หวังสิ่งตอบแทน การเคารพและประสานพลังกับธรรมชาติช่วยให้เราสงบสุข”",
        textEN: "\"Nature teaches us to give and support without expecting anything in return. Living in harmony with nature brings peace.\"",
        actionTH: "ใช้เวลาสั้นๆ สัมผัสต้นไม้ แสงแดด หรือสายลม สูดอากาศบริสุทธิ์เพื่อเติมเต็มพลังกายพลังใจ",
        actionEN: "Spend a brief moment connecting with trees, sunlight, or the breeze, breathing fresh air to refresh your energy."
    },
    {
        day: 30,
        textTH: "“การมองผู้อื่นเป็นดวงวิญญาณ (Soul-Conscious) ช่วยทำลายกรอบของเพศ วัย ชาติพันธุ์ และการแบ่งแยกภายนอกทั้งสิ้น”",
        textEN: "\"Seeing others as souls (Soul-Consciousness) breaks down the barriers of gender, age, race, and all external divisions.\"",
        actionTH: "มองลึกเข้าไปในแววตาของผู้คนรอบตัวในวันนี้ด้วยความตระหนักรู้ว่าเขาคือดวงจิตพี่น้องที่มีจุดกำเนิดเดียวกัน",
        actionEN: "Look deep into the eyes of those around you today, remembering they are brother souls from the same origin."
    },
    {
        day: 31,
        textTH: "“ความสงบขั้นสูงสุดคือการหลอมรวมจิตใจเข้าสู่ความสว่างไสวและความเงียบสงบในแดนบ้านดั้งเดิมของเรา”",
        textEN: "\"The ultimate peace is merging the mind into the pure light and absolute silence of our original home.\"",
        actionTH: "ก่อนเข้านอน ปลดเปลื้องบทบาททั้งหมด ย้ายจิตของคุณไปสถิต ณ ดินแดนแห่งแสงสีทองอันสงบนิ่งชั่วนิรันดร์",
        actionEN: "Before sleeping, shed all your daily roles and travel in thought to the eternal home of golden-red light and silence."
    }
];

// Export as global variable for web browser environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DAILY_THOUGHTS };
}
