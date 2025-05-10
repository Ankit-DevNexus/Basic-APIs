import React from 'react';
import Navbar from '../../Navbar';

function Home() {
  return (
    <div>
        <Navbar />

      <main style={styles.main}>
        <section>
          <h2 >About Us</h2>
          <p>
            This is a simple React home page. You can customize it with your own content,
            styles, and features. It's a great starting point for a personal site,
            portfolio, or business landing page.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            We aim to deliver simple and effective solutions using modern web technologies.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
 
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.5rem',
    textAlign: 'center'
  },
  main: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  },
  footer: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem'
  }
};

export default Home;
