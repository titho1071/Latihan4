// server.js
const express = require("express");
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

const articles = [
    {
        id: 1,
        title: "Rasa Puas Bojan Hodak Lihat Persib Kalahkan Bangkok United di ACL 2",
        urlimage: "https://cdn1-production-images-kly.akamaized.net/mPOMOnxs9WWCgNqbWXzasVYGRR0=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5367951/original/025098200_1759326417-jung.jpg",
        description: "Persib Bandung berhasil mencuri poin sempurna usai mengalahkan tuan rumah, Bangkok United dengan skor 2-0 dalam babak penyisihan Grup G ACL 2 2025, Rabu (1/10/2025) malam di Stadion BG Thanyaburi, Thailand. Dua gol Persib dicetak Andrew Jung dan Uilliam Barros. Bahkan Persib nyaris menang 3-0, sayang gol kedua Andrew Jung dianggap offside oleh wasit.",
        author: "Erwin Snaz"
    },
    {
        id: 2,
        title: "Jadwal Lengkap Real Madrid di Liga Champions 2025/2026",
        urlimage: "https://cdn1-production-images-kly.akamaized.net/x5rTIpD5BavgU374L4Y4TbYgdOw=/640x640/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5186164/original/078091300_1744559425-Real_Madrid_-_Jude_Bellingham__Kylian_Mbappe__Vinicius_Junior_copy.jpg",
        description: "Berikut ini jadwal lengkap dan lawan yang akan dihadapi di fase awal Liga Champions musim 2025/2026 setelah undian yang digelar di Monako. Klub asal Spanyol ini akan menjalani delapan pertandingan di fase league dengan duel kandang dan tandang melawan delapan tim berbeda yang berat dan penuh sejarah. Berikut ulasan selengkapnya dalam 10 paragraf.",
        author: "Gregah Nurikhsani"
    }
];

// Endpoint GET /api/test/getarticle
app.get("/api/test/getarticle", (req, res) => {
    res.json({
        status: "success" ,
        data: articles
    });
});
