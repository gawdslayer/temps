// Skills visualization with animated progress bars
class SkillsVisualizer {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.skills = [];
      this.isInView = false;
      this.observer = null;
  }
  
  addSkill(name, level) {
      this.skills.push({ name, level });
  }
  
  render() {
      this.skills.forEach(skill => {
          const skillElement = document.createElement('div');
          skillElement.className = 'skill-item';
          
          const nameElement = document.createElement('div');
          nameElement.className = 'skill-name';
          nameElement.textContent = skill.name;
          
          const barContainer = document.createElement('div');
          barContainer.className = 'skill-bar-container';
          
          const bar = document.createElement('div');
          bar.className = 'skill-bar';
          bar.style.width = '0%';
          bar.setAttribute('data-level', `${skill.level}%`);
          
          const levelText = document.createElement('span');
          levelText.className = 'skill-level';
          levelText.textContent = `${skill.level}%`;
          
          barContainer.appendChild(bar);
          barContainer.appendChild(levelText);
          
          skillElement.appendChild(nameElement);
          skillElement.appendChild(barContainer);
          
          this.container.appendChild(skillElement);
      });
      
      this.setupIntersectionObserver();
  }
  
  animateBars() {
      const bars = this.container.querySelectorAll('.skill-bar');
      bars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = level;
      });
  }
  
  setupIntersectionObserver() {
      this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && !this.isInView) {
                  this.isInView = true;
                  this.animateBars();
                  this.observer.disconnect();
              }
          });
      }, { threshold: 0.3 });
      
      this.observer.observe(this.container);
  }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  const skillsVisualizer = new SkillsVisualizer('skills-container');
  
  // Add your skills here
  skillsVisualizer.addSkill('JavaScript', 90);
  skillsVisualizer.addSkill('HTML/CSS', 85);
  skillsVisualizer.addSkill('React', 80);
  skillsVisualizer.addSkill('Node.js', 75);
  skillsVisualizer.addSkill('Python', 70);
  
  skillsVisualizer.render();
});