<template>
  <section class="about-page">
    <div class="container">

      <!-- Heading -->
      <div class="heading">
        <h1>About Me</h1>
        <p>Learn more about me and my journey as a frontend developer.</p>
      </div>

      <!-- Profile Section -->
      <div class="profile glass-card">
        <img src="https://i.pinimg.com/736x/a6/92/d9/a692d93c6f68a3597b464a1c3d5dabd3.jpg" alt="Profile Picture" />
        <div class="bio">
          <h2>Bismillah Pathan</h2>
          <p>
            I am an IT student and frontend developer passionate about
            Vue.js, JavaScript, and building modern web applications.
            I enjoy creating responsive designs, interactive interfaces,
            and seamless user experiences.
          </p>
        </div>
      </div>

      <!-- Mission, Vision, Goals -->
      <div class="mvgs">
        <div class="mvgs-card glass-card">
          <h3>Mission</h3>
          <p>To create innovative and accessible web applications that delight users and solve real-world problems.</p>
        </div>
        <div class="mvgs-card glass-card">
          <h3>Vision</h3>
          <p>To become a leading frontend developer recognized for clean, efficient, and user-centric design.</p>
        </div>
        <div class="mvgs-card glass-card">
          <h3>Goals</h3>
          <p>Continuously improve my skills, contribute to open-source projects, and build a portfolio of impactful web applications.</p>
        </div>
      </div>

      <!-- Skills -->
      <div class="skills glass-card">
        <h3>Skills</h3>
        <ul>
          <li>HTML5 & Semantic Markup</li>
          <li>CSS3 & Responsive Design</li>
          <li>Bootstrap & Tailwind CSS</li>
          <li>JavaScript (ES6+) & TypeScript</li>
          <li>Vue 3 & Composition API</li>
          <li>React.js & React Hooks</li>
          <li>State Management (Pinia / Vuex / Redux)</li>
          <li>Vue Router & React Router</li>
          <li>Firebase (Auth, Firestore, Storage)</li>
          <li>API Integration & Axios</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="contact glass-card">
        <h3>Contact Me</h3>
        <p>Email: <a href="mailto:bkpathan861@gmail.com" class="links">bkpathan861@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/BK-Pathan" target="_blank" class="links">github.com/bismillahpathan</a></p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// No special logic needed
</script>

<style scoped>
.about-page {
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(265deg, skyblue, rgb(119, 143, 163));
  font-family: 'Segoe UI', sans-serif;
}

/* ── CONTAINER ── */
.container {
  max-width: 1000px;
  margin: auto;
}

/* ── HEADING ── */
.heading {
  text-align: center;
  margin-bottom: 50px;
}
.heading h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #fff;
}
.heading p {
  font-size: 18px;
  color: #f1f1f1;
}

/* ── GLASS CARD BASE ── */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  /* color: white; */
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.25);
}
.links{
 color: rgb(23, 105, 135) !important; 
}

/* ── PROFILE ── */
.profile {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
}
.profile img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}
.bio {
  max-width: 600px;
}
.bio h2 {
  font-size: 26px;
  margin-bottom: 12px;
  color: #fff;
}
.bio p {
  font-size: 16px;
  line-height: 1.6;
  color: #e2e8f0;
  text-align: justify;
}

/* ── MISSION, VISION, GOALS ── */
.mvgs {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin-bottom: 40px;
}
.mvgs-card {
  flex: 1 1 250px;
  text-align: center;
}
.mvgs-card h3 {
  color: #fff;
  margin-bottom: 12px;
  font-size: 20px;
}
.mvgs-card p {
  color: #e2e8f0;
  font-size: 15px;
  line-height: 1.5;
}

/* ── SKILLS ── */
.skills h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #fff;
}
.skills ul {
  list-style: none;
  padding: 0;
}
.skills li {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 8px 15px;
  border-radius: 8px;
  margin: 5px;
  color: #fff;
  font-size: 0.95rem;
}

/* ── CONTACT ── */
.contact h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #fff;
}
.contact a {
  color: #4b95bd;
  text-decoration: none;
}
.contact a:hover {
  text-decoration: underline;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .profile {
    flex-direction: column;
  }
  .bio {
    text-align: center;
  }
  .mvgs {
    flex-direction: column;
    align-items: center;
  }
}
</style>