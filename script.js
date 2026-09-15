// Function para magpalit ng pahina
function nextPage(pageNumber) {
  // Itago ang lahat ng pahina
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Ipakita ang piniling pahina
  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Play background music kapag nag-click sa unang button
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play().catch(() => {
      // Automatic play prevention bypass
    });
  }

  // KUSA NA POPPING CONFETTI KAPAG LUMIPAT SA PAGE 4
  if (pageNumber === 4) {
    triggerFlowerConfetti();
  }
}

// Function na nagpapa-sabog ng party popper
function triggerFlowerConfetti() {
  // Sabog mula sa kaliwa
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 }
  });

  // Sabog mula sa kanan
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 }
  });
}