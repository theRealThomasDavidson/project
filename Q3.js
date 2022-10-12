function drawTriangle() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(160, 50);
      ctx.lineTo(190, 75);
      ctx.lineTo(230, 25);
      
      ctx.fillStyle = '#0000ff';

      ctx.fill();
    }
  }

  function drawQuadrilateral() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(20, 50);
      ctx.lineTo(32, 32);
      ctx.lineTo(100, 15);
      ctx.lineTo(140, 60);
      
      ctx.fillStyle = '#ff0000';

      ctx.fill();
    }
  }

  
  function drawPentagon() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(274, 10);
      ctx.lineTo(350, 32);
      ctx.lineTo(300, 90);
      ctx.lineTo(240, 60);
      ctx.lineTo(240,32);
      
      ctx.fillStyle = '#ffff00';

      ctx.fill();
    }
  }

  function clearBox() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight)
    }
  }