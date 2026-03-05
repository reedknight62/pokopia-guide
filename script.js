const gameData = {
    pokemon: [
        { id: 1, name: "皮卡丘", type: "电", description: "著名的电属性宝可梦，脸颊两侧有电力袋" },
        { id: 2, name: "小火龙", type: "火", description: "尾巴上的火焰代表它的健康状况" },
        { id: 3, name: "杰尼龟", type: "水", description: "龟壳非常坚硬，可以保护身体" },
        { id: 4, name: "妙蛙种子", type: "草", description: "背上的种子会随着成长而长大" },
        { id: 5, name: "伊布", type: "一般", description: "拥有不稳定的遗传基因，可以进化成多种形态" },
        { id: 6, name: "超梦", type: "超能力", description: "通过基因工程创造的人造宝可梦" }
    ],
    items: [
        { id: 1, name: "精灵球", type: "道具", description: "用于捕捉和储存宝可梦的基本球" },
        { id: 2, name: "伤药", type: "回复道具", description: "回复宝可梦20点HP" },
        { id: 3, name: "好伤药", type: "回复道具", description: "回复宝可梦50点HP" },
        { id: 4, name: "超级伤药", type: "回复道具", description: "回复宝可梦200点HP" },
        { id: 5, name: "解毒药", type: "状态回复", description: "解除宝可梦的中毒状态" },
        { id: 6, name: "万能药", type: "状态回复", description: "解除宝可梦的所有异常状态" }
    ],
    habitats: [
        { id: 1, name: "森林栖息地", type: "栖息地", description: "适合草属性和虫属性宝可梦", output: "绿毛虫、独角虫" },
        { id: 2, name: "海洋栖息地", type: "栖息地", description: "适合水属性宝可梦", output: "鲤鱼王、角金鱼" },
        { id: 3, name: "火山栖息地", type: "栖息地", description: "适合火属性和岩石属性宝可梦", output: "小火龙、小拳石" },
        { id: 4, name: "城市栖息地", type: "栖息地", description: "适合一般属性和电属性宝可梦", output: "皮卡丘、喵喵" }
    ],
    recipes: [
        { id: 1, name: "森林栖息地配方", type: "配方", items: ["树木x5", "草地x10", "花朵x3"], output: "产出草属性和虫属性宝可梦" },
        { id: 2, name: "海洋栖息地配方", type: "配方", items: ["水池x1", "水草x5", "石头x3"], output: "产出水属性宝可梦" },
        { id: 3, name: "火山栖息地配方", type: "配方", items: ["熔岩x3", "岩石x5", "火把x2"], output: "产出火属性宝可梦" },
        { id: 4, name: "城市栖息地配方", type: "配方", items: ["建筑物x2", "路灯x4", "长椅x3"], output: "产出一般属性宝可梦" }
    ]
};

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        alert('请输入搜索关键词');
        return;
    }
    
    const results = searchAllData(query);
    displaySearchResults(results);
}

function searchAllData(query) {
    const results = [];
    
    for (const category in gameData) {
        gameData[category].forEach(item => {
            const searchableText = `${item.name} ${item.description} ${item.type} ${item.items ? item.items.join(' ') : ''} ${item.output || ''}`.toLowerCase();
            
            if (searchableText.includes(query)) {
                results.push({
                    ...item,
                    category: category
                });
            }
        });
    }
    
    return results;
}

function displaySearchResults(results) {
    let resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        document.querySelector('.main .container').appendChild(resultsContainer);
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">没有找到相关结果</div>';
        return;
    }
    
    let html = '<h3>搜索结果</h3>';
    
    results.forEach(result => {
        html += `
            <div class="search-result-item" onclick="navigateToResult('${result.category}', ${result.id})">
                <h4>${result.name} <span style="font-size: 0.8em; color: #999;">[${result.category}]</span></h4>
                <p>${result.description}</p>
                ${result.items ? `<p><strong>所需物品:</strong> ${result.items.join(', ')}</p>` : ''}
                ${result.output ? `<p><strong>产出:</strong> ${result.output}</p>` : ''}
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

function navigateToResult(category, id) {
    let page = '';
    
    switch(category) {
        case 'pokemon':
        case 'items':
            page = 'game-data.html';
            break;
        case 'habitats':
        case 'recipes':
            page = 'habitat-recipes.html';
            break;
        default:
            page = 'index.html';
    }
    
    window.location.href = `${page}#${id}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    highlightActiveNav();
});

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function filterByType(type) {
    const cards = document.querySelectorAll('.data-card');
    
    cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        
        if (type === 'all' || cardType === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function sortByName() {
    const container = document.querySelector('.data-grid');
    const cards = Array.from(container.querySelectorAll('.data-card'));
    
    cards.sort((a, b) => {
        const nameA = a.querySelector('h3').textContent;
        const nameB = b.querySelector('h3').textContent;
        return nameA.localeCompare(nameB, 'zh-CN');
    });
    
    cards.forEach(card => container.appendChild(card));
}

function sortByType() {
    const container = document.querySelector('.data-grid');
    const cards = Array.from(container.querySelectorAll('.data-card'));
    
    cards.sort((a, b) => {
        const typeA = a.getAttribute('data-type');
        const typeB = b.getAttribute('data-type');
        return typeA.localeCompare(typeB, 'zh-CN');
    });
    
    cards.forEach(card => container.appendChild(card));
}

function toggleRecipeDetails(id) {
    const details = document.getElementById(`recipe-details-${id}`);
    const button = document.getElementById(`recipe-btn-${id}`);
    
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        button.textContent = '收起详情 ▲';
    } else {
        details.style.display = 'none';
        button.textContent = '查看详情 ▼';
    }
}

function openLightbox(imageSrc, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${imageSrc}" alt="${caption}">
            <p class="lightbox-caption">${caption}</p>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}