import "./3dBook.css";
import BookCover from "@/assets/nehigat_hayeha_cover.jpg";

export function Book3D() {
  return (
    <div className="book-wrapper relative">
      <div className="book-items">
        <div className="main-book-wrap">
          <div className="book-cover">
            <div className="book-inside"></div>
            <div className="book-image">
              <img
                className="rotate-180"
                src={BookCover}
                alt="כריכת הספר נהגת חייך"
              />
              <div className="effect"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CustomCursor3DBook.tsx (to be created in the same folder)
// This will be a simplified version of the AnimatedGallery's CustomCursor
