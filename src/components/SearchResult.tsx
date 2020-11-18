import React from "react"

type SearchResultProps = {
  items: any[]
}

export const SearchResult: React.FC<SearchResultProps> = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center"
          >
            <img style={{ width: 100 }} src={item.thumb} alt={item.title} />
            <span className="mx-3">{item.title}</span>{" "}
            <span className="font-italic font-weight-bold">{item.type}</span>
          </li>
        )
      })}
    </ul>
  )
}
