* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Press Start 2P', monospace;
}

body {
  overflow: hidden;
}

.scene {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#7ec8ff, #ffd1dc);
  position: relative;
}

.text {
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 0 #000;
  z-index: 10;
}

.text span {
  color: #ff4d6d;
}

.heart {
  position: absolute;
  width: 24px;
  height: 24px;
  background: red;
  transform: rotate(45deg);
  animation: float linear infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background: red;
  border-radius: 50%;
}

.heart::before {
  top: -12px;
  left: 0;
}

.heart::after {
  left: -12px;
  top: 0;
}

@keyframes float {
  from {
    transform: translateY(100vh) rotate(45deg);
    opacity: 1;
  }
  to {
    transform: translateY(-10vh) rotate(45deg);
    opacity: 0;
  }
}

