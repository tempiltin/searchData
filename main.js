const fs = require('fs').promises;

async function searchGoogle(query) {
    try {
        const response = await fetch(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
        const html = await response.text();
        await fs.writeFile('search_result.html', html); // Natijani html fayliga yozib chiqamiz
        console.log('Qidiruv natijasi HTML fayliga saqlandi: search_result.html');
    } catch (error) {
        console.error('Google qidiruvi jarayonida xatolik yuz berdi:', error);
    }
}

// Argumentlarni olish
const args = process.argv.slice(2);

// Argumentlarni tekshirish va Google'da qidirish
if (args.length > 0) {
    const query = args.join(' ');
    searchGoogle(query);
} else {
    console.log('Iltimos, qidirish uchun so\'z kiriting.');
}
