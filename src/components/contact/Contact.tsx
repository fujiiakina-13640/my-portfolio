import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('氏名を入力してください');
      return;
    }
    if (!email.trim()) {
      alert('メールアドレスを入力してください');
      return;
    }
    if (!message.trim()) {
      alert('メッセージを入力してください');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      await fetch('https://formspree.io/f/xvzvlbjy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      alert(
        `お問い合わせを承りました。

【氏名】${name}
【メールアドレス】${email}
【内容】
${message}

後ほどご連絡いたします。`
      );

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.formTitle}>Contact</h2>

      <p>
        お問い合わせは Eメール、または こちらのフォームからお願いいたします。
      </p>

      <p>
        Eメール：
        <a href="mailto:info@fuji1403.com">info@fuji1403.com</a>
      </p>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label htmlFor="name">氏名：</label>
            <input className={styles.contactTextbox}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="氏名を入力してください"
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="email">メールアドレス：</label>
            <input className={styles.contactTextbox}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレスを入力してください"
            />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="message">メッセージ：</label>
            <textarea className={styles.contactTextarea}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="お問い合わせ内容を入力してください"
            />
          </div>

          <button className={styles.submitButton} type="submit">
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}