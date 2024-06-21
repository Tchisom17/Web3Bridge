const items = [
    'JavaScript programming',
    'HTML and CSS basics',
    'Frontend development',
    'Web design principles',
    'Dynamic content handling'
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
  
    const renderItems = (items, query) => {
      const regex = new RegExp(`(${query})`, 'g');
      itemList.innerHTML = items.map(item => {
        const highlightedText = item.replace(regex, '<span class="highlight">$1</span>');
        return `<li>${highlightedText}</li>`;
      }).join('');
    };
  
    renderItems(items, '');
 
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      const filteredItems = items.filter(item => item.includes(query));
      renderItems(filteredItems, query);
    });
  });
  
  