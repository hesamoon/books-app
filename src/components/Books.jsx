import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { books as bookData } from "../constants/mockData.js";

// components
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";
import SearchBox from "./SearchBox.jsx";

import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const [open, setOpen] = useState(false);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  const favoriteClickHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.favs} onClick={favoriteClickHandler}>
          <AiFillHeart
            color={liked.length ? "red" : "#e0e0e0"}
            fontSize="2rem"
          />

          {!!liked.length && open && (
            <div className={styles.modal}>
              <h4>Favorites</h4>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>

        <SearchBox
          search={search}
          setSearch={setSearch}
          searchHandler={searchHandler}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>

        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
