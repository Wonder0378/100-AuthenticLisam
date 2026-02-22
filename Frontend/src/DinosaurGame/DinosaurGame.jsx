import React, { useEffect, useRef, useState } from 'react';
import './DinosaurGame.css';
import { signIn } from '../Authentication';

const DinosaurGame = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('ready'); // ready, playing, gameOver
  const [score, setScore] = useState(0);
  const gameStateRef = useRef({
    dinosaur: { x: 50, y: 0, width: 40, height: 50, jump: false, velocityY: 0 },
    gravity: 0.6,
    obstacles: [],
    score: 0,
    gameSpeed: 6,
    keys: {}
  });

  const canvasWidth = 800;
  const canvasHeight = 400;
  const groundLevel = canvasHeight - 60;
  const gameStateDisplayRef = useRef('ready');
  const collisionOccurredRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const state = gameStateRef.current;
    collisionOccurredRef.current = false;

    // Handle keyboard input
    const handleKeyDown = (e) => {
      state.keys[e.code] = true;
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameStateDisplayRef.current === 'ready') {
          setGameState('playing');
        } else if (gameStateDisplayRef.current === 'playing') {
          if (!state.dinosaur.jump) {
            state.dinosaur.jump = true;
            state.dinosaur.velocityY = -15;
          }
        }
      }
    };

    const handleKeyUp = (e) => {
      state.keys[e.code] = false;
    };

    // Handle mouse/touch click
    const handleClick = () => {
      if (gameStateDisplayRef.current === 'ready') {
        setGameState('playing');
      } else if (gameStateDisplayRef.current === 'gameOver') {
        resetGame();
      } else if (gameStateDisplayRef.current === 'playing') {
        if (!state.dinosaur.jump) {
          state.dinosaur.jump = true;
          state.dinosaur.velocityY = -15;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('click', handleClick);

    // Draw functions
    const drawDinosaur = () => {
      const dino = state.dinosaur;
      ctx.fillStyle = '#333';
      
      // Body
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height - 15);
      
      // Head
      ctx.beginPath();
      ctx.arc(dino.x + dino.width - 10, dino.y + 10, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(dino.x + dino.width - 5, dino.y + 8, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Legs
      ctx.fillStyle = '#333';
      ctx.fillRect(dino.x + 5, dino.y + dino.height - 15, 8, 15);
      ctx.fillRect(dino.x + 20, dino.y + dino.height - 15, 8, 15);
    };

    const drawObstacle = (obstacle) => {
      ctx.fillStyle = '#8B4513';
      
      // Draw cactus - simple shape
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      
      // Add some detail - bumps on cactus
      ctx.fillRect(obstacle.x - 5, obstacle.y + 10, 5, 10);
      ctx.fillRect(obstacle.x + obstacle.width, obstacle.y + 20, 5, 10);
    };

    const drawGround = () => {
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundLevel);
      ctx.lineTo(canvasWidth, groundLevel);
      ctx.stroke();
    };

    const drawScore = () => {
      ctx.fillStyle = '#333';
      ctx.font = '20px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${Math.floor(state.score)}`, 15, 35);
    };

    const checkCollision = (dino, obstacle) => {
      return !(
        dino.x + dino.width < obstacle.x ||
        dino.x > obstacle.x + obstacle.width ||
        dino.y + dino.height < obstacle.y ||
        dino.y > obstacle.y + obstacle.height
      );
    };

    const resetGame = () => {
      state.dinosaur = { x: 50, y: 0, width: 40, height: 50, jump: false, velocityY: 0 };
      state.obstacles = [];
      state.score = 0;
      state.gameSpeed = 6;
      collisionOccurredRef.current = false;
      setScore(0);
      setGameState('playing');
    };

    let obstacleCounter = 0;

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      if (gameStateDisplayRef.current === 'ready') {
        ctx.fillStyle = '#333';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Dinosaur Game', canvasWidth / 2, 100);
        ctx.font = '20px Arial';
        ctx.fillText('Click or Press SPACE to Start', canvasWidth / 2, 150);
        ctx.fillText('Jump over the cacti!', canvasWidth / 2, 200);
      } else if (gameStateDisplayRef.current === 'playing') {
        // Update dinosaur
        state.dinosaur.velocityY += state.gravity;
        state.dinosaur.y += state.dinosaur.velocityY;

        // Ground collision
        if (state.dinosaur.y + state.dinosaur.height >= groundLevel) {
          state.dinosaur.y = groundLevel - state.dinosaur.height;
          state.dinosaur.jump = false;
          state.dinosaur.velocityY = 0;
        }

        // Generate obstacles
        obstacleCounter++;
        if (obstacleCounter > 100) {
          state.obstacles.push({
            x: canvasWidth,
            y: groundLevel - 40,
            width: 30,
            height: 40
          });
          obstacleCounter = 0;
          state.gameSpeed += 0.5;
        }

        // Update obstacles
        for (let i = state.obstacles.length - 1; i >= 0; i--) {
          state.obstacles[i].x -= state.gameSpeed;

          // Remove off-screen obstacles and add score
          if (state.obstacles[i].x + state.obstacles[i].width < 0) {
            state.obstacles.splice(i, 1);
            state.score += 10;
            setScore(Math.floor(state.score));
            if(state.score == 40) {
                signIn();
            }
          }

          // Check collision
          if (checkCollision(state.dinosaur, state.obstacles[i])) {
            collisionOccurredRef.current = true;
          }
        }

        // If collision occurred, transition to game over on next frame
        if (collisionOccurredRef.current) {
          setGameState('gameOver');
        } else {
          // Draw everything only if no collision
          drawGround();
          drawDinosaur();
          state.obstacles.forEach(drawObstacle);
          drawScore();
        }
      } else if (gameStateDisplayRef.current === 'gameOver') {
        // Draw static game over screen
        drawGround();
        drawDinosaur();
        state.obstacles.forEach(drawObstacle);
        drawScore();
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = '#fff';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', canvasWidth / 2, 150);
        ctx.font = '25px Arial';
        ctx.fillText(`Final Score: ${Math.floor(state.score)}`, canvasWidth / 2, 200);
        ctx.fillText('Click to Play Again', canvasWidth / 2, 250);
      }

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  // Update ref whenever gameState changes
  useEffect(() => {
    gameStateDisplayRef.current = gameState;
  }, [gameState]);

  return (
    <div className="dinosaur-game-container">
      <h1>Survive to Sign Up</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="game-canvas"
      />
      <div className="game-instructions">
        <p>Press <strong>SPACE</strong> to jump</p>
      </div>
    </div>
  );
};

export default DinosaurGame;
