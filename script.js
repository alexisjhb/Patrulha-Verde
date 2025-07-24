
document.addEventListener('DOMContentLoaded', function() {
    // Animação suave para os cards dos heróis
    const heroCards = document.querySelectorAll('.card-heroi');
    
    // Intersection Observer para animações ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Preparar cards para animação
    heroCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Efeito hover nos avatares dos heróis
    const heroAvatars = document.querySelectorAll('.heroi-avatar');
    
    heroAvatars.forEach(avatar => {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Navegação suave
    const navLinks = document.querySelectorAll('.lista-navegacao a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de destaque ao clicar nos cards dos heróis
    heroCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove destaque de outros cards
            heroCards.forEach(otherCard => {
                otherCard.classList.remove('heroi-ativo');
            });
            
            // Adiciona destaque ao card clicado
            this.classList.add('heroi-ativo');
            
            // Remove o destaque após 3 segundos
            setTimeout(() => {
                this.classList.remove('heroi-ativo');
            }, 3000);
        });
    });

    // Adicionar classe CSS para o efeito de destaque
    const style = document.createElement('style');
    style.textContent = `
        .heroi-ativo {
            transform: translateY(-10px) scale(1.05) !important;
            box-shadow: 0 15px 30px rgba(46, 139, 87, 0.3) !important;
            border: 2px solid #2e8b57 !important;
        }
        
        .heroi-ativo .heroi-avatar {
            animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(46, 139, 87, 0); }
            100% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0); }
        }
    `;
    document.head.appendChild(style);

    // Mensagem de boas-vindas
    console.log('🌱 Patrulha Verde carregada com sucesso! Os super-heróis da sustentabilidade estão prontos para ação!');
});
