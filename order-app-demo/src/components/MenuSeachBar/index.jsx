import React, { useState } from 'react';

const MenuSearchBar = ({ placeholder = 'Search...', data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // 筛选匹配的结果并回调
    if (onSearch) {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(term)
      );
      onSearch(filteredData);
    }
  };

  return (
    <div className="search-box-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default MenuSearchBar;
