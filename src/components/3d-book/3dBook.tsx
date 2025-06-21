import "./3dBook.css";
import BookCover from "@/assets/nehigat_hayeha_cover.jpg";
export function Book3D() {
  return (
    <div className="book-wrapper">
      <div className="book-items">
        <div className="main-book-wrap">
          <div className="book-cover">
            <div className="book-inside"></div>
            <div className="book-image">
              <img src={BookCover} alt="כריכת הספר נהגת חייך" />
              <div className="effect"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
