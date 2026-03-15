<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo / Brand -->
      <div class="footer-brand">
        <a href="/"><h2>MyBlog</h2></a>
        <p>Your hub for knowledge & blogs.</p>
      </div>

      <!-- Links -->
      <div class="footer-links">
               <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
               <router-link to="/all">Posts</router-link>
        <!-- <router-link to="/contact">Contact</router-link> -->
      </div>

      <!-- Social Icons -->
      <div class="footer-social">
        <!-- <a href="#" aria-label="Facebook">
          <img src="https://i.pinimg.com/1200x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg" alt="Facebook" />
        </a> -->
        <a href="https://github.com/BK-Pathan" aria-label="Github">
          <img src="https://i.pinimg.com/1200x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/bismillah-khan-23876a2b1/" aria-label="LinkedIn">
          <img src="https://i.pinimg.com/1200x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg" alt="LinkedIn" />
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>&copy; 2026 <strong>MyBlog</strong>. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: linear-gradient(90deg, rgb(72, 119, 180), rgb(106, 166, 189));
  color: #f9fafb;
  padding: 2rem 1.5rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Footer container */
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center everything vertically */
  gap: 2rem;
  justify-content: center; /* center horizontally */
  text-align: center; /* center text inside brand */
}

/* Brand */
.footer-brand {
  text-align: center; /* center logo & description */
  flex: none; /* prevent stretching */
}

.footer-brand h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: white;
 
}
.footer-brand a{
 text-decoration: none;
}

.footer-brand p {
  font-size: 0.9rem;
  color: white;
}

/* Links */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center; /* always center links */
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.footer-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4591bc, #3b82f6);
  transition: width 0.3s ease;
}

.footer-links a:hover {
  color: #043b4a;
}

.footer-links a:hover::after {
  width: 100%;
}

/* Social Icons */
.footer-social {
  display: flex;
  gap: 1.5rem;
  justify-content: center; /* always center socials */
}

.footer-social a img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
  border-radius: 50px;
}

.footer-social a:hover img {
  transform: translateY(-4px) scale(1.1);
}

/* Copyright */
.footer-bottom {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 0.85rem;
  color: white;
  border-top: 1px solid #374151;
  padding: 0.75rem 0;
}

/* Tablet and desktop */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }

  .footer-brand {
    flex: none;
    text-align: center; /* keep logo & description centered */
  }

.footer-links {
    justify-content: center !important; /* center links horizontally */
    flex: none; /* prevent stretching */
    margin-left: 300px;
  }

  .footer-social {
    flex: 1;
    justify-content: flex-end; /* social icons right */
  }
}

/* Mobile */
@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
    align-items: center; /* center links */
  }

  .footer-social {
    justify-content: center; /* center social icons */
    gap: 1rem;
  }
}
</style>