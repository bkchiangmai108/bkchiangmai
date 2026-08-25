/**
 * Brahma Kumaris Chiang Mai - Spiritual Songs & Meditation Music Data
 * 3 Categories x 6 YouTube Videos = 18 Curated Tracks
 */

const MUSIC_DATA = {
    morning: {
        id: "morning",
        badgeTH: "ยามเช้า",
        badgeEN: "MORNING",
        titleTH: "บทเพลงสร้างแรงบันดาลใจยามเช้า",
        titleEN: "Morning Inspiration & Meditation",
        subTH: "เติมพลังชีวิตและเปิดรับแสงสว่างแห่งสติในเช้าวันใหม่",
        subEN: "Awaken your soul with positive energy and serene morning melodies.",
        coverVideo: "../assets/videos/Meditative-Sounds&Music/01_Morning_Inspiration_Loop.mp4",
        videos: [
            {
                id: "m1",
                youtubeId: "GHO-5M5fg7U",
                titleTH: "แสงแห่งโชคและการตื่นรู้",
                titleEN: "Morning Meditation Music for Positive Energy",
                duration: "04:23",
                descTH: "เคยรู้สึกไหม... ว่าเช้าวันนี้ คุณสามารถเริ่มต้นเปลี่ยนโชคชะตาชีวิตได้ทันที?",
                descEN: "Have you ever felt like... this very morning, you could start changing your destiny right away?"
            },
            {
                id: "m2",
                youtubeId: "f4K6wP-XoD0",
                titleTH: "บทเพลงจิตวิญญาณ ต้อนรับอรุณรุ่งแห่งความสุข",
                titleEN: "Spiritual Chants for Morning Joy & Peace",
                duration: "20:30",
                descTH: "ท่วงทำนองบรรเลงสมาธิอันบริสุทธิ์ น้อมจิตเข้าสู่ความเงียบสงบในยามเช้า",
                descEN: "Pure peaceful rhythms designed for morning Rajyoga reflection."
            },
            {
                id: "m3",
                youtubeId: "1ZYbU87XA2U",
                titleTH: "เสียงเพลงสมาธิราชาโยคะ เติมพลังบริสุทธิ์",
                titleEN: "Rajyoga Awakening Chants & Peaceful Waves",
                duration: "30:00",
                descTH: "ซึมซับพลังงานบวกและจิตใจสว่างไสว พร้อมเริ่มต้นวันด้วยความเมตตา",
                descEN: "Absorb positive vibrations and cultivate kindness for the day ahead."
            },
            {
                id: "m4",
                youtubeId: "W5K3AKl5qM8",
                titleTH: "ดนตรีขลุ่ยยามเช้า ผ่อนคลายและสร้างสมาธิ",
                titleEN: "Morning Flute & Peaceful Harmony",
                duration: "25:15",
                descTH: "เสียงขลุ่ยอันนุ่มนวลผสานธรรมชาติ ช่วยสร้างสติและความสุขสงบ",
                descEN: "Soft flute melodies harmonized with nature to boost morning mindfulness."
            },
            {
                id: "m5",
                youtubeId: "sJlz_oU653M",
                titleTH: "เสียงเปียโนนุ่มนวล สร้างพลังความบวก",
                titleEN: "Gentle Piano for Morning Vitality",
                duration: "18:45",
                descTH: "เปียโนสมาธิสร้างคลื่นสมองผ่อนคลาย เปิดรับความสุขสงบเต็มเปี่ยม",
                descEN: "Calming piano strokes to cultivate deep serenity and daily balance."
            },
            {
                id: "m6",
                youtubeId: "g1r9nK911Sg",
                titleTH: "ดนตรีบรรเลงจิตวิญญาณ ปรับคลื่นพลังชีวิต",
                titleEN: "Soulful Ambient Waves for Early Focus",
                duration: "45:00",
                descTH: "เสียงดนตรีบำบัดยามเช้า ให้จิตใจแจ่มใสและตื่นรู้อย่างสมบูรณ์",
                descEN: "Ambient therapeutic sounds for mental clarity and peaceful awakening."
            }
        ]
    },
    midday: {
        id: "midday",
        badgeTH: "ระหว่างวัน",
        badgeEN: "MIDDAY",
        titleTH: "ดนตรีสร้างสมาธิ และความสงบระหว่างวัน",
        titleEN: "Midday Focus & Inner Peace",
        subTH: "ผ่อนคลายความเหนื่อยล้า ฟื้นฟูสมาธิและความสมดุลในใจ",
        subEN: "Recharge your mind and restore focus during busy working hours.",
        coverVideo: "../assets/videos/Meditative-Sounds&Music/01_Japanese_Workspace_Zen_Loop.mp4",
        videos: [
            {
                id: "d1",
                youtubeId: "6LZAUmzMqDI",
                titleTH: "เสียงสะท้อนแห่งความทรงจำ (Echoes of Memory Piano) | Music for Relax, Study",
                titleEN: "Pure Silence & Flute Meditation",
                duration: "45:00",
                descTH: "สัมผัสบทเพลงและภาพบรรยากาศอันลึกซึ้งใน เสียงสะท้อนแห่งความทรงจำ (Echoes of Memory ที่ถ่ายทอดเรื่องราวของเรือนกระจกโบราณรกร้าง ยามแสงแดดอุ่นสีทองส่องสว่างกระทบเปียโนไม้เก่าแก่",
                descEN: "Soulful flute music to relax brain waves and enter deep silence."
            },
            {
                id: "d2",
                youtubeId: "lE6RYpe9IT0",
                titleTH: "ดนตรีขลุ่ยไม้ไผ่ผ่อนคลายความเครียดจากการทำงาน",
                titleEN: "Bamboo Flute Relaxation for Work Focus",
                duration: "40:12",
                descTH: "เพิ่มสมาธิในการทำงาน ลดความวิตกกังวล สร้างบรรยากาศที่เยือกเย็น",
                descEN: "Enhance work focus, reduce anxiety, and build a tranquil environment."
            },
            {
                id: "d3",
                youtubeId: "tNkZsRW7h2c",
                titleTH: "เสียงธรรมชาติและดนตรีบำบัดสร้างความสงบ",
                titleEN: "Nature Ambience & Soft Mindfulness Beats",
                duration: "28:50",
                descTH: "ผสานเสียงสายน้ำและดนตรีบรรเลงบางเบา คลายความเหนื่อยล้าทางกายใจ",
                descEN: "Blended stream sounds and light instrumentals to release daily fatigue."
            },
            {
                id: "d4",
                youtubeId: "DWcJFNfaw9c",
                titleTH: "เสียงระฆังจิตวิญญาณและคลื่นพลังความสงบ",
                titleEN: "Peaceful Meditation Chimes & Zen Atmosphere",
                duration: "35:20",
                descTH: "คลื่นดนตรีเซนช่วยขจัดความคิดรบกวน นำจิตกลับสู่ความสงบภายใน",
                descEN: "Zen soundscapes that eliminate mental chatter and ground your spirit."
            },
            {
                id: "d5",
                youtubeId: "Cne0z4aN2qU",
                titleTH: "ดนตรีบำบัดพักสมอง 15 นาทีระหว่างวัน",
                titleEN: "15-Min Midday Reset & Mental Relief",
                duration: "15:00",
                descTH: "คลิปสั้นสำหรับหยุดพักระหว่างวัน คืนความสดชื่นและความสงบอย่างรวดเร็ว",
                descEN: "Quick mid-day break soundtrack to restore your energy and calm focus."
            },
            {
                id: "d6",
                youtubeId: "77ZozI0rw7w",
                titleTH: "กระแสแห่งสันติสุข ดนตรีราชาโยคะ",
                titleEN: "Waves of Peace Rajyoga Instrumental",
                duration: "50:00",
                descTH: "เปิดฟังคลอระหว่างการทำงานหรือทำสมาธิสั้น เพื่อรักษาความสว่างไสวในใจ",
                descEN: "Background meditation music for maintaining inner serenity all day."
            }
        ]
    },
    evening: {
        id: "evening",
        badgeTH: "ก่อนนอน",
        badgeEN: "EVENING",
        titleTH: "ดนตรีคลายเครียดก่อนนอน",
        titleEN: "Deep Evening Relaxation & Sleep",
        subTH: "ปลดปล่อยความเมื่อยล้า น้อมจิตสู่ความสงบเพื่อการนอนหลับสนิท",
        subEN: "Release all tension, soothe your spirit, and transition into peaceful rest.",
        coverVideo: "../assets/videos/Meditative-Sounds&Music/01_Serene_Moonlight_Ocean_Loop.mp4",
        videos: [
            {
                id: "e1",
                youtubeId: "2OEL4P1Rz04",
                titleTH: "ดนตรีคลายเครียดก่อนนอน หลับสนิทเยือกเย็น",
                titleEN: "Deep Relaxation & Evening Sleep Sound",
                duration: "60:00",
                descTH: "เสียงดนตรีบำบัดช่วยปลดปล่อยความเมื่อยล้าตลอดวัน นอนหลับสนิทและสงบเยือกเย็น",
                descEN: "Therapeutic ambient sounds to release stress and foster deep restful sleep."
            },
            {
                id: "e2",
                youtubeId: "1ZYbU87XA2U",
                titleTH: "บทเพลงสมาธิค่ำคืน การทบทวนคุณค่าตนเอง",
                titleEN: "Night Meditation & Self-Reflection Chants",
                duration: "35:10",
                descTH: "บทเพลงสมาธิยามค่ำคืน เพื่อคืนความสะอาดบริสุทธิ์และปล่อยวางความวิตกกังวล",
                descEN: "Evening chants for peaceful self-reflection and releasing daily burdens."
            },
            {
                id: "e3",
                youtubeId: "eKFTSSKCzWA",
                titleTH: "ดนตรีคลื่นสมองเดลตา ผ่อนคลายลึกซึ้ง",
                titleEN: "Delta Waves Evening Sleep Ambience",
                duration: "45:00",
                descTH: "คลื่นเสียงความถี่ผ่อนคลายลึกซึ้ง เหมาะสำหรับเปิดฟังก่อนเข้านอน",
                descEN: "Soft frequency soundscapes to calm the nervous system before sleep."
            },
            {
                id: "e4",
                youtubeId: "9v0B9gTz9Gk",
                titleTH: "เสียงบรรยากาศยามค่ำคืนอันสงบเงียบ",
                titleEN: "Unwind Evening Ambient Soundscape",
                duration: "40:00",
                descTH: "น้อมจิตขอบคุณวันอันทรงคุณค่า และเตรียมพร้อมสำหรับการพักผ่อนอย่างสมบูรณ์",
                descEN: "Gratitude meditation music to wrap up your day with warmth and stillness."
            },
            {
                id: "e5",
                youtubeId: "4Jz_tTj5i1Q",
                titleTH: "เปียโนสมาธิยามค่ำคืน เสียงหวานอ่อนโยน",
                titleEN: "Soft Night Piano for Soulful Rest",
                duration: "55:00",
                descTH: "เปียโนบรรเลงแผ่วเบา ช่วยให้จิตใจนุ่มนวล ละลายความตึงเครียดของสมอง",
                descEN: "Gentle piano compositions for melting away physical and mental tension."
            },
            {
                id: "e6",
                youtubeId: "UfcAVejslrU",
                titleTH: "บทเพลงความเงียบแห่งราชาโยคะก่อนนอน",
                titleEN: "Rajyoga Evening Silence & Sleep Harmonies",
                duration: "30:00",
                descTH: "ดนตรีสมาธิราชาโยคะยามค่ำคืน เชื่อมโยงจิตใจกับแหล่งพลังงานแห่งสันติสุข",
                descEN: "Night Rajyoga harmonies linking your soul to the Supreme source of peace."
            }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.MUSIC_DATA = MUSIC_DATA;
}
