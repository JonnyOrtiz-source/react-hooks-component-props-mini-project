import React from 'react';

function Article({ date = 'January 1, 1970', minutes, preview, title }) {
   const emojiElement = [];

   function EmojiCount(emoji, num) {
      emojiElement.push(emoji);
      let nextNum = num - 1;
      if (nextNum > 0) {
         EmojiCount(emoji, nextNum);
      }
   }

   const minutesNum = Number(minutes);
   minutesNum < 30
      ? EmojiCount('☕️', Math.ceil(minutesNum / 5) * 5)
      : EmojiCount('🍱', Math.ceil(minutesNum / 10) * 10);

   return (
      <div>
         <article>
            <h3>{title}</h3>
            <small>
               {date} {emojiElement.join('')}
            </small>
            <p>{preview}</p>
         </article>
      </div>
   );
}

export default Article;
