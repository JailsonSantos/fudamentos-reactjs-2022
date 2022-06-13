import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // Dessa forma sempre exibe o estado mais atual nesse contexto;
    // Também usado quando necessário atualizar o próprio estado;
    setLikeCount((state) => {
      return state + 1;
    });

    // Dessa forma sempre exibe o estado anterior;
    // setLikeCount(likeCount + 1); 
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jailson Santos</strong>
              <time title="11 de maio às 08:15h" dateTime="2022-06-12 08:15:45">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}