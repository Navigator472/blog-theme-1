// Modal Components JavaScript

// Create Modal Overlay
function createModalOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
    return overlay;
}

// Close Modal
function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Subscribe Modal
function showSubscribeModal(onSubmit) {
    const overlay = createModalOverlay();
    
    const modal = document.createElement('div');
    modal.className = 'modal modal-form';
    modal.innerHTML = `
        <div class="modal-header">
            <h3 class="modal-title">订阅学习资源</h3>
            <p class="modal-desc">获取最新的语言学习文章和听力训练技巧</p>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-label">邮箱地址</label>
                <input type="email" class="form-input" id="subscribeEmail" placeholder="输入您的邮箱">
            </div>
            <div class="form-group">
                <label class="checkbox-label">
                    <input type="checkbox" id="agreeTerms">
                    <span>我同意接收邮件通知和更新</span>
                </label>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn btn-secondary-outline modal-cancel">取消</button>
            <button class="btn btn-primary modal-submit">订阅</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Event listeners
    modal.querySelector('.modal-cancel').addEventListener('click', closeModal);
    modal.querySelector('.modal-submit').addEventListener('click', function() {
        const email = document.getElementById('subscribeEmail').value;
        const agreed = document.getElementById('agreeTerms').checked;
        
        if (!email) {
            alert('请输入邮箱地址');
            return;
        }
        
        if (!agreed) {
            alert('请同意接收邮件通知');
            return;
        }
        
        if (onSubmit) onSubmit({ email });
        closeModal();
        
        // Show success message
        setTimeout(() => {
            alert('订阅成功！感谢您的订阅，我们会定期发送最新内容到您的邮箱。');
        }, 300);
    });
}

// Keyboard ESC to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('Modals loaded! 🎭');

