import React, {useState} from "react";

const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(data.lenght / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;

const endIndex = startIndex + itemsPerPage;

const currentItems = data.slice(startIndex, endIndex);

const handlePageChange(pageNumber){
    setCurrentPage(pageNumber);
}
return (
    <div>
    <div>
        <ul>
            {currentItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    <div>
            {Array.from({length: totalPages}).map(())}
    </div>
    </div>
)