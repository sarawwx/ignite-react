import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: " ", name: " ", role: " "}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://portfolio-4kwjctl8y-sarawwx.vercel.app/images/me.jpg',
      name: 'Sara',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Alô alô', },
      {type: 'paragraph', content: 'Acabei de subir um novo projeto no meu portifólio', },
      {type: 'link', content: 'https://portfolio-sarawwx.vercel.app/'},
    ],
    publishedAt: new Date('2022-10-21 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://portfolio-4kwjctl8y-sarawwx.vercel.app/images/me.jpg',
      name: 'Sara',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Alô alô', },
      {type: 'paragraph', content: 'Acabei de subir um novo projeto no meu portifólio', },
      {type: 'link', content: 'https://portfolio-sarawwx.vercel.app/' },
    ],
    publishedAt: new Date('2022-10-24 15:00:00'),
  },
];


function App() {
  return (
    <div>
      <Header /> 

        <div className={styles.wrapper}>
          <Sidebar />
            <main>
              {posts.map(post => {
                return (
                  <Post 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })}
            </main>
        </div>

    </div>
  )
}

export default App
