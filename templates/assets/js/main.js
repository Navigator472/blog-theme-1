// ===================================
// Main JavaScript
// ===================================

// Subscribe Button Handler
document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn2');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            if (typeof showSubscribeModal === 'function') {
                showSubscribeModal(function(data) {
                    console.log('订阅邮箱:', data.email);
                });
            } else {
                alert('订阅功能正在开发中...');
            }
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

console.log('TalkMe Blog Theme loaded! 🎉');

