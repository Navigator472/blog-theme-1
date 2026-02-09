/**
 * Layout Manager
 * 负责动态渲染全站统一的 Header 和 Footer
 */

const Layout = {
    // 头部 HTML (基于 Elementor 结构)
    header: `
    <div class="header-wrapper">
        <div class="header-container">
            <div class="header-logo">
                <a href="/">
                    <img src="https://blog.talkme.ai/wp-content/uploads/2025/05/talkme-logo.png" alt="TalkMe Logo" class="logo-img">
                </a>
            </div>
            <nav class="header-nav" aria-label="Menu">
                <ul class="nav-menu">
                    <li class="menu-item">
                        <a href="https://talkme.ai/" class="nav-link">Home</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://almond-crocus-e2e.notion.site/TalkMe-FAQ-1341ad6e3694809c9b0dfc4b482a930e?pvs=4" class="nav-link">FAQ</a>
                    </li>
                    <li class="menu-item">
                        <a href="/" class="nav-link" data-page="blog">Blog</a>
                    </li>
                    <li class="menu-item menu-btn">
                        <a href="https://talkme.ai/" class="nav-link btn-download">Download Now</a>
                    </li>
                    <li class="menu-item language-switcher">
                        <a href="#" class="nav-link has-submenu" id="lang-switcher">
                            <i class="fas fa-globe" aria-hidden="true"></i>
                            <span class="lang-name">English</span>
                            <span class="sub-arrow">
                                <svg class="icon-caret" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </span>
                        </a>
                        <ul class="sub-menu lang-dropdown">
                            <li><a href="/zh_tw/" class="sub-item">繁體中文</a></li>
                            <li><a href="/zh_cn/" class="sub-item">简体中文</a></li>
                            <li><a href="/ja/" class="sub-item">日本語</a></li>
                            <li><a href="/ko/" class="sub-item">한국어</a></li>
                            <li><a href="/fr/" class="sub-item">Français</a></li>
                            <li><a href="/es/" class="sub-item">Español</a></li>
                            <li><a href="/pt/" class="sub-item">Português</a></li>
                            <li><a href="/de/" class="sub-item">Deutsch</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <button class="mobile-menu-toggle" aria-label="Menu Toggle" aria-expanded="false">
                <svg class="menu-icon-open" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                </svg>
                <svg class="menu-icon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
            </button>
        </div>
    </div>
    `,

    // 底部 HTML 模板 (基于 Elementor 结构)
    footerTemplate: function(categories = []) {
        return `
        <div class="footer-wrapper">
            <section class="footer-cta">
                <div class="footer-cta-content">
                    <div class="footer-logo">
                        <img src="https://blog.talkme.ai/wp-content/uploads/elementor/thumbs/talkme-logo-4-r6inesatd4pgt6kz2q0azz3c9gn5mzqjvukzzmfeio.webp" alt="TalkMe Logo" loading="lazy">
                    </div>
                    <div class="footer-title-wrapper">
                        <h2 class="footer-title">
                            <span class="talkme">Try TalkMe</span>
                            <span class="ai">AI</span>
                            <span class="blog">Tutor</span>
                        </h2>
                    </div>
                    <div class="footer-cta-button">
                        <a href="https://talkme.ai/" target="_blank" class="btn-cta">Get TalkMe Now</a>
                    </div>
                </div>
            </section>
            <footer class="footer-main">
                <div class="footer-container">
                    <div class="footer-columns">
                        <div class="footer-col">
                            <h3>Features</h3>
                            <h4>AI Avatar</h4>
                            <h4>AI Tutors</h4>
                            <h4>AI Translator</h4>
                            <h4>Voice Translator</h4>
                            <h4>Daily Conversation</h4>
                            <h4>Grammar Checking</h4>
                        </div>
                        <div class="footer-col">
                            <h3>Learn Online</h3>
                            <h4>Learn English Online</h4>
                            <h4>Learn Japanese Online</h4>
                            <h4>Learn Chinese Online</h4>
                            <h4>Learn Korean Online</h4>
                            <h4>Learn Spanish Online</h4>
                            <h4>Learn French Online</h4>
                        </div>
                        <div class="footer-col">
                            <h3>Products</h3>
                            <h4>TalkMe for iOS</h4>
                            <h4>TalkMe for Android</h4>
                            <h4>TalkMe for iPad</h4>
                            <h4>TalkMe for Android Pad</h4>
                            <h3>Policy</h3>
                            <h4><a href="https://www.talkme.ai/terms.html">Terms of use</a></h4>
                            <h4><a href="https://www.talkme.ai/privacy.html">Privacy Policy</a></h4>
                        </div>
                        <div class="footer-col">
                            <h3>About Us</h3>
                            <h4><a href="https://almond-crocus-e2e.notion.site/TalkMe-FAQ-1341ad6e3694809c9b0dfc4b482a930e?pvs=4">FAQ</a></h4>
                            <h4><a href="/">Blog</a></h4>
                            <h4>TalkMe</h4>
                            <h4>Contact Us</h4>
                            <h4>Business Collaboration</h4>
                        </div>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/talkmeai" target="_blank" class="social-icon" aria-label="Facebook">
                            <svg aria-hidden="true" class="icon-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@talkmeai" target="_blank" class="social-icon" aria-label="Youtube">
                            <svg aria-hidden="true" class="icon-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/talkme.ai/" target="_blank" class="social-icon" aria-label="Instagram">
                            <svg aria-hidden="true" class="icon-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/@talkmeai" target="_blank" class="social-icon" aria-label="TikTok">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tiktok" viewBox="0 0 1024 1024" width="256" height="256">
                                <path d="M384 853.333333a42.666667 42.666667 0 0 1 0 85.333334H341.333333a256 256 0 0 1-256-256v-42.666667a42.666667 42.666667 0 0 1 85.333334 0v42.666667a170.666667 170.666667 0 0 0 170.666666 170.666666h42.666667z m-213.333333-341.333333a42.666667 42.666667 0 0 1-85.333334 0V341.333333a256 256 0 0 1 256-256h341.333334a256 256 0 0 1 256 256v341.333334a256 256 0 0 1-256 256h-170.666667a42.666667 42.666667 0 0 1 0-85.333334h170.666667a170.666667 170.666667 0 0 0 170.666666-170.666666V341.333333a170.666667 170.666667 0 0 0-170.666666-170.666666H341.333333a170.666667 170.666667 0 0 0-170.666666 170.666666v170.666667z m426.666666-213.333333a85.333333 85.333333 0 0 0 85.333334 85.333333h25.6c9.386667 0 17.066667 7.68 17.066666 17.066667v51.2a17.066667 17.066667 0 0 1-17.066666 17.066666H682.666667a169.898667 169.898667 0 0 1-85.333334-22.826666V618.666667a149.333333 149.333333 0 1 1-149.333333-149.333334h4.266667c9.386667 0 17.066667 7.68 17.066666 17.066667v51.2a17.066667 17.066667 0 0 1-17.066666 17.066667h-4.266667a64 64 0 1 0 64 64V273.066667c0-9.386667 7.68-17.066667 17.066667-17.066667h51.2c9.386667 0 17.066667 7.68 17.066666 17.066667V298.666667z" fill="#2c2c2c"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
        `;
    },

    // 初始化
    async init() {
        this.renderHeader();
        await this.renderFooter();
        this.highlightActiveNav();
        this.initMobileMenu();
    },

    // 渲染 Header
    renderHeader: function() {
        const headerEl = document.getElementById('app-header');
        if (headerEl) {
            headerEl.className = 'header';
            headerEl.innerHTML = this.header;
        }
    },

    // 渲染 Footer
    async renderFooter() {
        const footerEl = document.getElementById('app-footer');
        if (!footerEl) return;
        
        footerEl.className = 'footer';
        footerEl.innerHTML = this.footerTemplate([]);
    },

    // 高亮当前导航
    highlightActiveNav: function() {
        const path = window.location.pathname;
        let page = 'index';

        if (path.includes('/posts/') || path.includes('/categories/') || path.includes('/tags/')) {
            page = 'blog';
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href') || '';
            if (link.dataset.page === page || 
                (page === 'blog' && linkHref.includes('/'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // 初始化移动端菜单
    initMobileMenu: function() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.header-nav');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', () => {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                menuToggle.classList.toggle('active');
                nav.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }

        this.initLanguageSwitcher();
    },

    // 初始化语言切换器
    initLanguageSwitcher: function() {
        const langSwitcher = document.getElementById('lang-switcher');
        const langDropdown = document.querySelector('.lang-dropdown');
        
        if (langSwitcher && langDropdown) {
            langSwitcher.addEventListener('click', (e) => {
                e.preventDefault();
                langSwitcher.parentElement.classList.toggle('open');
            });

            document.addEventListener('click', (e) => {
                if (!langSwitcher.contains(e.target) && !langDropdown.contains(e.target)) {
                    langSwitcher.parentElement.classList.remove('open');
                }
            });
        }
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    Layout.init();
});

