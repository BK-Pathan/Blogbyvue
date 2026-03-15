<template>
  <section class="hero">
    <div class="overlay">
      <div class="hero-content">
        <!-- Blog category or tag -->
        <span class="tag">Technology</span>

        <!-- Blog title -->
        <h1>How AI is Shaping the Future of Web Development</h1>

        <!-- Blog description -->
        <p>
          Explore the latest trends in AI and web development, 
          and learn how emerging technologies are transforming websites.
        </p>

        <!-- Author info -->
        <div class="author">
          <img src="https://i.pravatar.cc/40?img=5" />
          <span>By Bismillah Pathan • 5 mins read • Mar 2026</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 520px;
  background-image: url('https://i.pinimg.com/1200x/82/fa/72/82fa72222b7b984f63fabb003aed16c9.jpg');
  background-size: cover;
  background-position: center;

  /* REMOVE container behavior */
  max-width: none;
  margin: 0;
  border-radius: 0;

  overflow: hidden;
}
.overlay {
  height: 100%;

  display: flex;
  align-items: flex-end;
}

.hero-content {
  color: white;
  padding: 40px;
  max-width: 600px;
}

.tag {
  background: rgba(255,255,255,0.2);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  text-align: left;
}

.hero h1 {
  font-size: 36px;
  margin: 15px 0;
}

.hero p {
  opacity: 0.9;
  color: white;
}

.author {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color:white;
}

.author img {
  border-radius: 50%;
}
/* Responsive adjustments */

/* Tablet */
@media (max-width: 900px) {
  .hero {
    height: 450px;
  }

  .hero-content {
    padding: 30px;
    max-width: 80%;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero p {
    font-size: 14px;
  }
}

/* Mobile */
@media (max-width: 500px) {
  .hero {
    height: 380px;
  }

  .hero-content {
    padding: 20px;
    max-width: 100%;
  }

  .hero h1 {
    font-size: 22px;
  }

  .hero p {
    font-size: 13px;
  }

  .tag {
    font-size: 12px;
    padding: 4px 10px;
  }

  .author img {
    width: 30px;
    height: 30px;
  }

  .author span {
    font-size: 12px;
  }
}
</style>