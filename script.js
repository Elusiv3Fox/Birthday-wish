/*document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5; // အသည်းပုံတွေရဲ့ အကြည်ဓာတ်ကို ပြောင်းလဲပေးတယ်
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // 0.2 စက္ကန့်တိုင်း အသည်းပုံအသစ်တစ်ခု ဖန်တီးမယ်
    setInterval(createHeart, 200); 
});

*/
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5; // အသည်းပုံတွေရဲ့ အကြည်ဓာတ်ကို ပြောင်းလဲပေးတယ်
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // 0.2 စက္ကန့်တိုင်း အသည်းပုံအသစ်တစ်ခု ဖန်တီးမယ်
    setInterval(createHeart, 200); 
});

