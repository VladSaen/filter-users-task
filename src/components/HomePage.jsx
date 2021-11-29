import { Profile } from './Profile';

export const HomePage = () => {
  return (
    <main className="main">
      <div className="main__left-bar">
        <Profile />
      </div>
      <div className="main__news-area news-area">
        <div className="news-area__search">
          <input className="news-area__search-bar" type="text" />
        </div>
        
      </div>
    </main>
  );
};
