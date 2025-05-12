import React from "react";

function Article({ title, date, preview, minutes }) {
  const displayDate = date || "January 1, 1970";

  const renderReadTime = () => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10));
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{renderReadTime()} {displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}


export default Article;
